import { Component } from '@angular/core';
import { ScrollToTop } from '../../components/scroll-to-top/scroll-to-top';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-notas',
  standalone: true,
  imports: [ScrollToTop, TranslateModule],
  templateUrl: './notas.component.html',
  styleUrl: './notas.component.css'
})
export class NotasComponent { }
