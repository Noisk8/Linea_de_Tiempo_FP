import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeService } from '../../services/theme/theme';
import { I18nService } from '../../services/i18n/i18n.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLinkActive, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  themeService = inject(ThemeService);
  i18nService = inject(I18nService);

  openCommandPalette() {
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }));
  }
}
