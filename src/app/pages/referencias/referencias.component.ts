import { Component } from '@angular/core';
import { TIMELINE_ENTRIES } from '../../data/timeline-data';

@Component({
  selector: 'app-referencias',
  standalone: true,
  templateUrl: './referencias.component.html',
  styleUrl: './referencias.component.css'
})
export class ReferenciasComponent {
  referencesByPresident = TIMELINE_ENTRIES.map((entry) => ({
    name: entry.name,
    year: entry.year,
    sources: entry.sources
  }));
}
