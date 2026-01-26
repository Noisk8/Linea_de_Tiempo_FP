import { Directive, ElementRef, Input, Renderer2, HostListener, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appLazyImage]',
  standalone: true
})
export class LazyImageDirective implements OnDestroy {
  @Input() src!: string;
  @Input() placeholder: string = '';
  @Input() alt: string = '';

  private hasLoaded = false;
  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    // Set placeholder initially
    if (this.placeholder) {
      this.renderer.setAttribute(this.el.nativeElement, 'src', this.placeholder);
    }

    // Create intersection observer
    this.createIntersectionObserver();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private createIntersectionObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.hasLoaded) {
            this.loadImage();
            this.observer?.unobserve(this.el.nativeElement);
          }
        });
      },
      {
        rootMargin: '50px' // Start loading 50px before image comes into view
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  private loadImage(): void {
    const img = new Image();
    
    img.onload = () => {
      this.renderer.setAttribute(this.el.nativeElement, 'src', this.src);
      this.renderer.addClass(this.el.nativeElement, 'loaded');
      this.hasLoaded = true;
    };

    img.onerror = () => {
      // Handle error - could show error placeholder
      console.error('Failed to load image:', this.src);
    };

    img.src = this.src;
  }

  @HostListener('error')
  onError(): void {
    // Handle error case
    if (this.placeholder) {
      this.renderer.setAttribute(this.el.nativeElement, 'src', this.placeholder);
    }
  }
}
