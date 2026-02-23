import { Component } from '@angular/core';
import { TIMELINE_ENTRIES } from '../../data/timeline-data';
import { ScrollToTop } from '../../components/scroll-to-top/scroll-to-top';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-referencias',
  standalone: true,
  imports: [ScrollToTop, TranslateModule],
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
