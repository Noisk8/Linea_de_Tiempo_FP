import { Directive, ElementRef, Input, Renderer2, HostListener, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appLazyImage]',
  standalone: true
})
export class LazyImageDirective implements OnInit, OnDestroy {
  @Input() placeholder: string = '';

  private imageUrl = '';
  private hasLoaded = false;
  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef<HTMLImageElement>,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.imageUrl = this.el.nativeElement.getAttribute('src') || '';
    if (this.placeholder) {
      this.renderer.setAttribute(this.el.nativeElement, 'src', this.placeholder);
    }
    this.createIntersectionObserver();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
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
        rootMargin: '50px'
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  private loadImage(): void {
    const img = new Image();

    img.onload = () => {
      this.renderer.setAttribute(this.el.nativeElement, 'src', this.imageUrl);
      this.renderer.addClass(this.el.nativeElement, 'loaded');
      this.hasLoaded = true;
    };

    img.onerror = () => {
      console.error('Failed to load image:', this.imageUrl);
    };

    img.src = this.imageUrl;
  }

  @HostListener('error')
  onError(): void {
    if (this.placeholder) {
      this.renderer.setAttribute(this.el.nativeElement, 'src', this.placeholder);
    }
  }
}
