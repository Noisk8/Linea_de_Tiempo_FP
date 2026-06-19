import { Component, HostListener, OnDestroy, inject, ElementRef, ViewChild } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { TIMELINE_ENTRIES, TimelineEntry } from '../../data/timeline-data';
import { MetaService } from '../../services/meta.service';
import { LazyImageDirective } from '../../directives/lazy-image.directive';
import { TranslateModule } from '@ngx-translate/core';
import { I18nService } from '../../services/i18n/i18n.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [NgIf, LazyImageDirective, TranslateModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnDestroy {
  i18nService = inject(I18nService);
  private router = inject(Router);
  entry?: TimelineEntry;
  allEntries = TIMELINE_ENTRIES;
  selectedImage?: {
    url: string;
    caption?: string;
    caption_en?: string;
    credit?: string;
    alt?: string;
  };
  loadedImages: Set<string> = new Set();
  highlightedSources: number[] = [];
  private paramSub?: Subscription;

  @ViewChild('trackRef') trackRef?: ElementRef<HTMLElement>;

  get currentIndex(): number {
    if (!this.entry) return -1;
    return this.allEntries.findIndex(e => e.id === this.entry?.id);
  }

  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private metaService: MetaService
  ) {
    this.paramSub = this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.entry = TIMELINE_ENTRIES.find((item) => item.id === id);
      this.selectedImage = undefined;

      if (this.entry) {
        this.title.setTitle(this.entry.name);
        this.metaService.setPresidentMeta(this.entry);
        this.metaService.setStructuredData(this.entry);
      }
    });
  }

  goToPresident(id: string): void {
    if (id === this.entry?.id) return;
    this.router.navigate(['/presidentes', id]);
  }

  previousPresident(): void {
    const idx = this.currentIndex;
    if (idx > 0) this.goToPresident(this.allEntries[idx - 1].id);
  }

  nextPresident(): void {
    const idx = this.currentIndex;
    if (idx < this.allEntries.length - 1) this.goToPresident(this.allEntries[idx + 1].id);
  }

  scrollTrack(dir: number): void {
    if (!this.trackRef) return;
    this.trackRef.nativeElement.scrollBy({ left: dir * 200, behavior: 'smooth' });
  }

  ngOnDestroy(): void {
    this.paramSub?.unsubscribe();
  }

  openImage(url: string, caption?: string, caption_en?: string, credit?: string, alt?: string) {
    this.selectedImage = {
      url,
      caption,
      caption_en,
      credit,
      alt: alt || caption || 'Imagen ampliada'
    };
  }

  closeImage() {
    this.selectedImage = undefined;
  }

  @HostListener('document:keydown.escape')
  onEscapeKeydown() {
    if (this.selectedImage) {
      this.closeImage();
    }
  }

  onImageLoad(url: string): void {
    this.loadedImages.add(url);
  }

  isImageLoaded(url: string): boolean {
    return this.loadedImages.has(url);
  }

  onTextClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (target.tagName.toLowerCase() === 'sup') {
      const text = target.textContent;
      if (text) {
        // Parse numbers from comma-separated string (e.g., "1", "3,4")
        const sourceIndexes = text.split(',').map(n => parseInt(n.trim(), 10) - 1).filter(n => !isNaN(n) && n >= 0);
        this.highlightedSources = sourceIndexes;

        // Remove highlight after a few seconds
        setTimeout(() => {
          this.highlightedSources = [];
        }, 3000);
      }

        // Scroll smoothly to the sources section
      const sourcesElement = document.getElementById('sources');
      if (sourcesElement) {
        sourcesElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }

  isHighlighted(index: number): boolean {
    return this.highlightedSources.includes(index);
  }
}
