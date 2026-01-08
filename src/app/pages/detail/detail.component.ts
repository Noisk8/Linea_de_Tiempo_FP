import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TIMELINE_ENTRIES, TimelineEntry } from '../../data/timeline-data';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  entry?: TimelineEntry;

  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    this.entry = TIMELINE_ENTRIES.find((item) => item.id === id);
  }
}
