import { Component, HostListener, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
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
export class DetailComponent {
  i18nService = inject(I18nService);
  entry?: TimelineEntry;
  selectedImage?: {
    url: string;
    caption?: string;
    caption_en?: string;
    credit?: string;
    alt?: string;
  };
  loadedImages: Set<string> = new Set();
  highlightedSources: number[] = [];

  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private metaService: MetaService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.entry = TIMELINE_ENTRIES.find((item) => item.id === id);

    // Establecer el título de la página con el nombre del presidente
    if (this.entry) {
      this.title.setTitle(this.entry.name);
      this.metaService.setPresidentMeta(this.entry);
      this.metaService.setStructuredData(this.entry);
    }
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

      // Scroll smoothly to the sources secton
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
