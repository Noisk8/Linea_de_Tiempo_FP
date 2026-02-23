import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  templateUrl: './scroll-to-top.html',
  styleUrl: './scroll-to-top.css',
})
export class ScrollToTop {
  showScrollButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.scrollY > 400;
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
