import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TimelineEntry } from '../data/timeline-data';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  private defaultImage = 'https://presidentes-futbol.netlify.app/pwe.png';
  private siteName = 'Presidentes y Fútbol en Colombia';
  private siteUrl: string;

  constructor(
    private meta: Meta, 
    private title: Title,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    // Configurar URL dinámicamente según entorno
    if (isPlatformBrowser(this.platformId)) {
      this.siteUrl = window.location.origin;
    } else {
      this.siteUrl = 'https://presidentes-futbol.netlify.app';
    }
  }

  setDefaultMeta(): void {
    this.title.setTitle('Presidentes y Fútbol en Colombia');
    this.setMetaTags({
      title: 'Presidentes y Fútbol en Colombia',
      description: 'Línea de tiempo de presidentes colombianos y episodios clave del fútbol nacional. Un recorrido visual con contexto histórico y social.',
      image: this.defaultImage,
      url: this.siteUrl
    });
  }

  setPresidentMeta(entry: TimelineEntry): void {
    const fullTitle = `${entry.name} - Presidentes y Fútbol en Colombia`;
    const description = this.generateDescription(entry);
    const imageUrl = entry.image || this.defaultImage;
    const url = `${this.siteUrl}/presidentes/${entry.id}`;

    this.title.setTitle(fullTitle);
    this.setMetaTags({
      title: fullTitle,
      description,
      image: imageUrl,
      url,
      type: 'article',
      author: entry.name,
      publishedDate: entry.year
    });
  }

  private setMetaTags(meta: {
    title: string;
    description: string;
    image: string;
    url: string;
    type?: string;
    author?: string;
    publishedDate?: string;
  }): void {
    // Limpiar meta tags anteriores
    this.meta.removeTag('property="og:title"');
    this.meta.removeTag('property="og:description"');
    this.meta.removeTag('property="og:image"');
    this.meta.removeTag('property="og:url"');
    this.meta.removeTag('property="og:type"');
    this.meta.removeTag('property="article:author"');
    this.meta.removeTag('property="article:published_time"');
    this.meta.removeTag('name="twitter:title"');
    this.meta.removeTag('name="twitter:description"');
    this.meta.removeTag('name="twitter:image"');
    this.meta.removeTag('name="twitter:card"');

    // Open Graph tags
    this.meta.addTag({ property: 'og:title', content: meta.title });
    this.meta.addTag({ property: 'og:description', content: meta.description });
    this.meta.addTag({ property: 'og:image', content: meta.image });
    this.meta.addTag({ property: 'og:image:alt', content: meta.title });
    this.meta.addTag({ property: 'og:image:width', content: '1200' });
    this.meta.addTag({ property: 'og:image:height', content: '630' });
    this.meta.addTag({ property: 'og:url', content: meta.url });
    this.meta.addTag({ property: 'og:type', content: meta.type || 'website' });
    this.meta.addTag({ property: 'og:locale', content: 'es_CO' });
    this.meta.addTag({ property: 'og:site_name', content: this.siteName });

    // Twitter Card tags
    this.meta.addTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.addTag({ name: 'twitter:title', content: meta.title });
    this.meta.addTag({ name: 'twitter:description', content: meta.description });
    this.meta.addTag({ name: 'twitter:image', content: meta.image });

    // Article specific tags
    if (meta.type === 'article') {
      if (meta.author) {
        this.meta.addTag({ property: 'article:author', content: meta.author });
      }
      if (meta.publishedDate) {
        this.meta.addTag({ property: 'article:published_time', content: `${meta.publishedDate}-01-01` });
      }
      this.meta.addTag({ property: 'article:section', content: 'Historia' });
    }

    // Canonical URL
    this.meta.addTag({ rel: 'canonical', href: meta.url });
  }

  private generateDescription(entry: TimelineEntry): string {
    return `${entry.shortDescription}. Descubre los eventos clave del fútbol durante el gobierno de ${entry.name} (${entry.termStartYear}-${entry.termEndYear}).`;
  }

  setStructuredData(entry?: TimelineEntry): void {
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    let structuredData;

    if (entry) {
      // Article structured data for president pages
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": `${entry.name} - Presidentes y Fútbol en Colombia`,
        "description": this.generateDescription(entry),
        "image": [entry.image || this.defaultImage],
        "datePublished": `${entry.year}-01-01`,
        "author": {
          "@type": "Organization",
          "name": "Presidentes y Fútbol en Colombia"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Presidentes y Fútbol en Colombia",
          "logo": {
            "@type": "ImageObject",
            "url": `${this.siteUrl}/assets/imagenes/logo512.png`
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `${this.siteUrl}/presidentes/${entry.id}`
        }
      };
    } else {
      // Website structured data for homepage
      structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Presidentes y Fútbol en Colombia",
        "description": "Línea de tiempo de presidentes colombianos y episodios clave del fútbol nacional. Un recorrido visual con contexto histórico y social.",
        "url": this.siteUrl,
        "publisher": {
          "@type": "Organization",
          "name": "Presidentes y Fútbol en Colombia",
          "logo": {
            "@type": "ImageObject",
            "url": `${this.siteUrl}/assets/imagenes/logo512.png`
          }
        }
      };
    }

    // Add structured data to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData, null, 2);
    document.head.appendChild(script);
  }
}
