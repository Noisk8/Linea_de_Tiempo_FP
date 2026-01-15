import { AfterViewInit, Component, ElementRef, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { TIMELINE_ENTRIES } from '../../data/timeline-data';

@Component({
  selector: 'app-timeline',
  standalone: true,
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css',
  imports: [CommonModule, TimelineModule]
})
export class TimelineComponent implements AfterViewInit, OnDestroy {
  entries = TIMELINE_ENTRIES;
  progressPercent = 0;
  imageLoaded: Record<string, boolean> = {};
  @ViewChildren('timelineCard', { read: ElementRef }) cardRefs?: QueryList<ElementRef<HTMLElement>>;

  private observer?: IntersectionObserver;
  private scrollHandler?: () => void;
  private resizeHandler?: () => void;
  private lastActiveIndex = -1;

  ngAfterViewInit(): void {
    this.setupObserver();
    this.setupParallax();
    this.updateProgress(0);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }

    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler);
    }

    if (this.resizeHandler) {
      window.removeEventListener('resize', this.resizeHandler);
    }
  }

  private setupObserver(): void {
    if (!this.cardRefs || this.cardRefs.length === 0) {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = this.cardRefs?.toArray().findIndex((ref) => ref.nativeElement === entry.target) ?? -1;
          if (entry.isIntersecting && index >= 0) {
            entry.target.classList.add('is-visible');
            this.updateProgress(index);
          }
        });
      },
      {
        threshold: 0.35
      }
    );

    this.cardRefs.forEach((ref) => this.observer?.observe(ref.nativeElement));
  }

  private setupParallax(): void {
    const update = () => {
      const cards = this.cardRefs?.toArray() ?? [];
      const viewportHeight = window.innerHeight;

      cards.forEach((ref) => {
        const element = ref.nativeElement;
        const rect = element.getBoundingClientRect();
        const image = element.querySelector<HTMLImageElement>('img');
        if (!image) {
          return;
        }

        const progress = (rect.top + rect.height * 0.5 - viewportHeight * 0.5) / viewportHeight;
        const offset = Math.max(-12, Math.min(12, progress * -12));
        image.style.transform = `translateY(${offset}px)`;
      });
    };

    this.scrollHandler = () => window.requestAnimationFrame(update);
    this.resizeHandler = () => window.requestAnimationFrame(update);

    window.addEventListener('scroll', this.scrollHandler, { passive: true });
    window.addEventListener('resize', this.resizeHandler);

    update();
  }

  private updateProgress(activeIndex: number): void {
    if (!this.cardRefs || this.cardRefs.length === 0) {
      return;
    }

    if (activeIndex === this.lastActiveIndex) {
      return;
    }

    this.lastActiveIndex = activeIndex;
    const total = this.cardRefs.length;
    this.progressPercent = total === 1 ? 100 : (activeIndex / (total - 1)) * 100;
  }

  onImageLoad(entryId: string): void {
    this.imageLoaded[entryId] = true;
  }
}
