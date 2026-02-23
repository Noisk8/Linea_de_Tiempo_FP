import { Component, HostListener, OnInit, inject, ElementRef, ViewChild, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ThemeService } from '../../services/theme/theme';
import { I18nService } from '../../services/i18n/i18n.service';
import { TranslateModule } from '@ngx-translate/core';

interface CommandAction {
    id: string;
    label: string;
    category: 'Actions' | 'Navigation';
    icon: string;
    shortcut: string;
    action: () => void;
}

@Component({
    selector: 'app-command-palette',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './command-palette.component.html',
    styleUrl: './command-palette.component.css'
})
export class CommandPaletteComponent implements OnInit {
    isOpen = false;
    searchQuery = '';
    selectedIndex = 0;

    themeService = inject(ThemeService);
    i18nService = inject(I18nService);
    router = inject(Router);

    @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
    @ViewChild('resultsList') resultsList!: ElementRef<HTMLUListElement>;

    get commands(): CommandAction[] {
        const isDark = this.themeService.isDarkMode();

        return [
            {
                id: 'toggle-theme',
                label: isDark ? 'Cambiar A Tema Claro' : 'Cambiar A Tema Oscuro',
                category: 'Actions',
                icon: isDark ? 'sun' : 'moon',
                shortcut: 'Alt O',
                action: () => this.themeService.toggleTheme()
            },
            {
                id: 'toggle-lang',
                label: 'Cambiar Idioma',
                category: 'Actions',
                icon: 'globe',
                shortcut: 'Alt L',
                action: () => this.i18nService.toggleLanguage()
            },
            {
                id: 'nav-home',
                label: 'Ir al Inicio',
                category: 'Navigation',
                icon: 'home',
                shortcut: 'Alt I',
                action: () => this.router.navigate(['/'])
            },
            {
                id: 'nav-timeline',
                label: 'Ir al Timeline',
                category: 'Navigation',
                icon: 'clock',
                shortcut: 'Alt T',
                action: () => this.router.navigate(['/timeline'])
            },
            {
                id: 'nav-about',
                label: 'Acerca del Proyecto',
                category: 'Navigation',
                icon: 'info',
                shortcut: 'Alt A',
                action: () => this.router.navigate(['/notas'])
            },
            {
                id: 'nav-references',
                label: 'Referencias',
                category: 'Navigation',
                icon: 'book',
                shortcut: 'Alt R',
                action: () => this.router.navigate(['/referencias'])
            }
        ];
    }

    get filteredCommands(): CommandAction[] {
        if (!this.searchQuery.trim()) {
            return this.commands;
        }
        const query = this.searchQuery.toLowerCase();
        return this.commands.filter(cmd => cmd.label.toLowerCase().includes(query) || cmd.category.toLowerCase().includes(query));
    }

    ngOnInit() { }

    @HostListener('window:keydown', ['$event'])
    handleGlobalKeydown(event: KeyboardEvent) {
        // Ctrl + K OR Cmd + K
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
            event.preventDefault();
            this.togglePalette();
        }

        // Shortcuts when closed
        if (!this.isOpen && event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
            const key = event.key.toLowerCase();
            if (key === 'o') { event.preventDefault(); this.themeService.toggleTheme(); }
            if (key === 'l') { event.preventDefault(); this.i18nService.toggleLanguage(); }
            if (key === 'i') { event.preventDefault(); this.router.navigate(['/']); }
            if (key === 't') { event.preventDefault(); this.router.navigate(['/timeline']); }
            if (key === 'a') { event.preventDefault(); this.router.navigate(['/notas']); }
            if (key === 'r') { event.preventDefault(); this.router.navigate(['/referencias']); }
        }
    }

    @HostListener('document:keydown', ['$event'])
    handlePaletteKeydown(event: KeyboardEvent) {
        if (!this.isOpen) return;

        switch (event.key) {
            case 'Escape':
                event.preventDefault();
                this.closePalette();
                break;
            case 'ArrowDown':
                event.preventDefault();
                this.selectedIndex = (this.selectedIndex + 1) % this.filteredCommands.length;
                this.scrollToSelected();
                break;
            case 'ArrowUp':
                event.preventDefault();
                this.selectedIndex = (this.selectedIndex - 1 + this.filteredCommands.length) % this.filteredCommands.length;
                this.scrollToSelected();
                break;
            case 'Enter':
                event.preventDefault();
                this.executeCommand();
                break;
        }
    }

    togglePalette() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.searchQuery = '';
            this.selectedIndex = 0;
            setTimeout(() => this.searchInput.nativeElement.focus(), 50);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    closePalette() {
        this.isOpen = false;
        document.body.style.overflow = '';
    }

    onSearchChange(event: Event) {
        const input = event.target as HTMLInputElement;
        this.searchQuery = input.value;
        this.selectedIndex = 0;
    }

    executeCommand(index: number = this.selectedIndex) {
        const cmd = this.filteredCommands[index];
        if (cmd) {
            cmd.action();
            this.closePalette();
        }
    }

    setHoverIndex(index: number) {
        this.selectedIndex = index;
    }

    scrollToSelected() {
        setTimeout(() => {
            if (!this.resultsList) return;
            const elements = this.resultsList.nativeElement.children;
            const el = elements[this.selectedIndex] as HTMLElement;
            if (el) {
                el.scrollIntoView({ block: 'nearest' });
            }
        }, 10);
    }

    // Helper template for groupings
    get groupBy(): { category: string; cmds: (CommandAction & { _index: number })[] }[] {
        const data = this.filteredCommands.map((cmd, idx) => ({ ...cmd, _index: idx }));
        const grouped = data.reduce((acc, current) => {
            if (!acc[current.category]) acc[current.category] = [];
            acc[current.category].push(current);
            return acc;
        }, {} as Record<string, typeof data>);

        return [
            { category: 'Actions', cmds: grouped['Actions'] || [] },
            { category: 'Navigation', cmds: grouped['Navigation'] || [] },
        ].filter(g => g.cmds.length > 0);
    }
}
