import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { TIMELINE_ENTRIES } from '../../data/timeline-data';

@Component({
  selector: 'app-timeline',
  standalone: true,
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent implements AfterViewInit, OnDestroy {
  entries = TIMELINE_ENTRIES;
  @ViewChild('scrollTrack', { static: true }) scrollTrack?: ElementRef<HTMLDivElement>;
  private wheelHandler?: (event: WheelEvent) => void;

  ngAfterViewInit(): void {
    if (!this.scrollTrack) {
      return;
    }

    this.wheelHandler = (event: WheelEvent) => {
      event.preventDefault();
      const delta = event.deltaY !== 0 ? event.deltaY : event.deltaX;
      this.scrollTrack!.nativeElement.scrollLeft += delta;
    };

    this.scrollTrack.nativeElement.addEventListener('wheel', this.wheelHandler, {
      passive: false
    });
  }

  ngOnDestroy(): void {
    if (this.scrollTrack && this.wheelHandler) {
      this.scrollTrack.nativeElement.removeEventListener('wheel', this.wheelHandler);
    }
  }
}
