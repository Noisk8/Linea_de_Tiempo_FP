import { Component, HostListener } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TIMELINE_ENTRIES, TimelineEntry } from '../../data/timeline-data';
import { MetaService } from '../../services/meta.service';
import { LazyImageDirective } from '../../directives/lazy-image.directive';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [NgIf, LazyImageDirective],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  entry?: TimelineEntry;
  selectedImage?: {
    url: string;
    caption?: string;
    credit?: string;
    alt?: string;
  };
  loadedImages: Set<string> = new Set();

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

  openImage(url: string, caption?: string, credit?: string, alt?: string) {
    this.selectedImage = {
      url,
      caption,
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
}
