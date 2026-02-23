# 🏛️ Presidentes y Fútbol en Colombia: Línea de Tiempo Interactiva

Una aplicación web moderna en **Angular 21** que explora la fascinante relación entre los presidentes de Colombia y el fútbol nacional, desde los inicios del deporte en el país hasta la actualidad.

## 📋 Resumen del Proyecto

Este proyecto documenta cómo el poder político y el fútbol han estado históricamente entrelazados en Colombia, mostrando desde los primeros reglamentos deportivos hasta los complejos episodios del narcotráfico y su influencia en el fútbol profesional.

### 🎯 Objetivos Principales

- **Educación histórica**: Presentar datos verificables sobre cada período presidencial
- **Análisis crítico**: Explorar las conexiones entre política y fútbol
- **Experiencia visual**: Timeline interactivo con contenido multimedia
- **Accesibilidad**: Sitio web optimizado para todos los usuarios

## 🏗️ Arquitectura Técnica

### Stack Tecnológico

```text
Frontend Framework: Angular 21 (Standalone Components)
Language: TypeScript 5.9.2
UI Library: PrimeNG 21.0.2
Build Tool: Angular CLI 21.0.4
Package Manager: npm 10.9.3
Testing: Vitest 4.0.8
Deployment: Netlify
```

### Estructura del Proyecto

```text
src/
├── app/
│   ├── components/              # Componentes reutilizables
│   │   ├── header/             # Navegación con logo SVG minimalista
│   │   ├── footer/             # Pie de página con info del creador
│   │   ├── command-palette/    # Paleta de comandos (Ctrl+K)
│   │   └── scroll-to-top/      # Botón "volver arriba"
│   ├── pages/                  # Páginas principales
│   │   ├── home/               # Hero animado con gradientes
│   │   ├── timeline/           # Timeline interactivo
│   │   ├── detail/             # Detalle de presidente
│   │   ├── referencias/        # Fuentes y referencias
│   │   └── notas/              # Notas editoriales + Agradecimientos
│   ├── services/               # Lógica de negocio
│   │   ├── meta.service.ts     # SEO y metaetiquetas
│   │   ├── theme/              # Servicio de tema claro/oscuro
│   │   └── i18n/               # Servicio de internacionalización
│   ├── directives/             # Directivas personalizadas
│   │   └── lazy-image.directive.ts
│   ├── data/                   # Datos estructurados
│   │   └── timeline-data.ts    # TimelineEntry[]
│   └── shared/                 # Componentes compartidos
├── assets/
│   └── i18n/                   # Archivos de traducción
│       ├── es.json             # Español (idioma por defecto)
│       └── en.json             # English
└── styles.css                  # Variables CSS globales y temas
```

### 📊 Estadísticas del Código

- **Archivos TypeScript/HTML/CSS**: 35 archivos
- **Líneas de código**: ~2,500+ líneas
- **TimelineEntry**: 27 presidentes con datos completos
- **Fuentes documentales**: 25+ archivos Markdown en `datos_referencias/`

## 🎨 Características Principales

### 1. Timeline Interactivo

- **Scroll parallax** con indicador de progreso
- **Búsqueda en tiempo real** con resaltado de coincidencias (`<mark>`)
- **Lazy loading** de imágenes con skeleton shimmer
- **Responsive design** con layout adaptativo

### 2. 🌙 Modo Oscuro

- **Toggle automático** con botón en el header (sol/luna animados)
- **CSS Variables** para transiciones suaves entre temas
- **Persistencia** vía `localStorage` + detección de `prefers-color-scheme`
- **Cobertura total**: Hero, timeline, cards, footer, referencias

### 3. 🌍 Internacionalización (i18n)

- **Español / English** con toggle en el header
- **@ngx-translate/core** con carga dinámica de JSON
- **Persistencia** del idioma elegido en `localStorage`
- **Cobertura**: Header, Footer, Home, Notas, Referencias, Command Palette

### 4. 🔍 Command Palette (Ctrl+K)

- **Activación**: `Ctrl+K` o clic en el trigger del header
- **Acciones rápidas**: Navegar, cambiar tema, cambiar idioma
- **Búsqueda fuzzy** con navegación por teclado (↑↓ + Enter)
- **Diseño glassmorphism** con overlay y backdrop-filter

### 5. Páginas de Detalle

- **Contenido rico** con párrafos, imágenes y galerías
- **Skeleton loading** para mejor UX
- **Metaetiquetas dinámicas** para SEO
- **Structured data** (JSON-LD) para motores de búsqueda

### 6. SEO y Optimización

- **MetaService**: Metaetiquetas OG dinámicas por presidente
- **Sitemap.xml**: Todas las páginas indexadas
- **Open Graph / Twitter Cards**: Optimización para redes sociales

### 7. UX Premium

- **Logo minimalista SVG** (ícono de cancha + acrónimo "PyFC")
- **Scroll-to-top** reutilizable con animación suave
- **Hover micro-animations** en tarjetas y botones
- **Tipografía Montserrat** (300–800 weights)
- **Border-radius consistente** en toda la interfaz
- **Página 404** personalizada con imagen de fondo

## 🚀 Comandos de Desarrollo

### Instalación y Setup

```bash
# Clonar el repositorio
git clone https://github.com/Noisk8/Linea_de_Tiempo_FP.git
cd Linea_de_Tiempo_FP

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
# Abre http://localhost:4200
```

### Scripts Disponibles

```bash
# Desarrollo
npm start              # ng serve --hmr=false
npm run watch          # ng build --watch --configuration development

# Producción
npm run build          # ng build (optimizado)
npm run test           # ng test (Vitest)

# Formateo (Prettier configurado)
npx prettier --write . # Formatear todo el código
```

### Variables de Entorno

```bash
# Desarrollo (automático)
ng serve               # http://localhost:4200

# Producción
ng build               # Output: dist/linea-de-tiempo-fp/browser
```

## 🌐 Despliegue

### Netlify (Configuración Actual)

```toml
# netlify.toml
[build]
  command = "npm ci && npm run build"
  publish = "dist/linea-de-tiempo-fp/browser"

[build.environment]
  NODE_VERSION = "22.16.0"
```

> **Nota**: Se usa `npm ci` para forzar instalación limpia desde `package-lock.json`, evitando errores de caché en el CI.

### Pasos para Deploy

1. **Push a `main`**: Los cambios se deployan automáticamente
2. **Build**: Netlify ejecuta `npm ci && npm run build`
3. **Deploy**: Contenido servido desde `dist/linea-de-tiempo-fp/browser`
4. **URL**: <https://presidentes-futbol.netlify.app>

### Configuración SEO

- **Sitemap**: <https://presidentes-futbol.netlify.app/sitemap.xml>
- **Robots**: <https://presidentes-futbol.netlify.app/robots.txt>
- **OG Image**: <https://presidentes-futbol.netlify.app/pwe.png>

## 📚 Contenido y Fuentes

### Estructura de Datos

```typescript
interface TimelineEntry {
  id: string;                    // URL slug
  year: string;                  // Año de inicio
  termStartYear: string;         // Inicio período
  termEndYear: string;           // Fin período
  name: string;                  // Nombre completo
  shortDescription: string;       // Descripción breve
  image: string;                 // URL de imagen principal
  paragraphs: string[];          // Contenido HTML
  editorialImage?: {             // Imagen editorial
    url: string;
    caption: string;
    credit?: string;
  };
  editorialGallery?: {           // Galería de imágenes
    url: string;
    caption: string;
    credit?: string;
  }[];
  sources: TimelineSource[];     // Fuentes verificadas
}
```

### Fuentes Documentales

- **25+ archivos Markdown** en `datos_referencias/`
- **Transcripciones** de documentales (Historias Secretas)
- **Fuentes académicas** y periodísticas verificadas
- **Imágenes históricas** de Wikimedia Commons

### Presidentes Cubiertos (1886-2022)

- Rafael Núñez (1886) → Gustavo Petro (2022)
- **Épocas clave**: Regeneración, Frente Nacional, narcotráfico
- **Hitos futbolísticos**: Primer partido (1896), Copa América (2001), 5-0 (1993)

## 🛠️ Guía de Contribución

### Agregar Nuevo Presidente

1. **Crear archivo Markdown** en `datos_referencias/Nuevo_Presidente.md`
2. **Investigar fuentes** confiables (Wikipedia, archivos históricos)
3. **Agregar entrada** a `timeline-data.ts`:

   ```typescript
   {
     id: 'nuevo-presidente-ano',
     year: '2025',
     termStartYear: '2025',
     termEndYear: '2030',
     name: 'Nombre Completo',
     shortDescription: 'Descripción concisa',
     image: 'https://url-imagen.jpg',
     paragraphs: ['<p>Contenido HTML...</p>'],
     sources: [
       { label: 'Fuente 1', url: 'https://...' },
       { label: 'Fuente 2', url: 'https://...' }
     ]
   }
   ```

4. **Verificar rutas** en `sitemap.xml`
5. **Testear** página de detalle y SEO

### Actualizar Contenido

1. **Editar archivos Markdown** en `datos_referencias/`
2. **Sincronizar cambios** en `timeline-data.ts`
3. **Verificar fuentes** y enlaces
4. **Testear responsive** y accesibilidad

### Estándares de Código

- **TypeScript strict**: Tipado completo
- **Prettier**: 100 caracteres de ancho, comillas simples
- **Angular Standalone**: Components sin NgModules
- **SEO**: Metaetiquetas en todas las páginas
- **Performance**: Lazy loading para imágenes

## 🧪 Testing

### Tests Unitarios

```bash
npm run test              # Ejecutar todos los tests
npm run test -- --watch   # Modo watch
```

### Tests E2E (recomendado)

```bash
npm install -g @angular/cli
ng e2e                    # Tests end-to-end
```

### Performance Testing

- **Lighthouse**: >90 en móvil y desktop
- **Bundle Analyzer**: `ng build --stats-json`
- **Image Optimization**: WebP/AVIF cuando sea posible

## 🔧 Configuración Avanzada

### MetaService (SEO)

```typescript
// Uso en componentes
constructor(private metaService: MetaService) {}

ngOnInit() {
  this.metaService.setPresidentMeta(this.entry);
  this.metaService.setStructuredData(this.entry);
}
```

### LazyImageDirective

```html
<img [src]="imageUrl" 
     appLazyImage 
     [placeholder]="'/placeholder.jpg'"
     [alt]="'Descripción accesible'">
```

### Build Optimizations

```json
{
  "budgets": [
    { "type": "initial", "maximumWarning": "500kB" },
    { "type": "anyComponentStyle", "maximumWarning": "4kB" }
  ]
}
```

## 📈 Métricas y Analytics

### Performance Targets

- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1
- **Time to Interactive**: <3.0s

### SEO Checklist

- ✅ Metaetiquetas OG dinámicas
- ✅ Structured data (JSON-LD)
- ✅ Sitemap.xml completo
- ✅ Robots.txt configurado
- ✅ Imágenes optimizadas
- ✅ URLs canónicas
- ✅ Mobile-friendly

## 🐛 Troubleshooting

### Problemas Comunes

```bash
# Error: Módulos no encontrados
npm install                # Reinstalar dependencias

# Error: Build falla
rm -rf node_modules dist   # Limpiar cache
npm install               # Reinstalar
npm run build             # Rebuild

# Error: HMR no funciona
npm start                 # HMR desactivado por defecto
```

### Debug SEO

```bash
# Verificar metaetiquetas
curl -s https://presidentes-futbol.netlify.app | grep og:

# Test con Facebook Debugger
# https://developers.facebook.com/tools/debug/
```

## 📄 Licencia

Este proyecto está licenciado bajo **[Creative Commons Atribución-CompartirIgual 4.0 Internacional (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/)**.

Eres libre de:

- **Compartir** — copiar y redistribuir el material en cualquier medio o formato
- **Adaptar** — remezclar, transformar y construir a partir del material

Bajo los siguientes términos:

- **Atribución** — Debes dar crédito apropiado a **Juan Jaramillo Silva (Noisk8)**
- **CompartirIgual** — Si remezclas o transformas el material, debes distribuirlo bajo la misma licencia

Ver el archivo [LICENSE](./LICENSE) para el texto completo.

## 👤 Autor

**Juan Jaramillo Silva** — {Noisk8}

- 🐙 GitHub: [@Noisk8](https://github.com/Noisk8)
- 📧 Email: [noisk8@proton.me](mailto:noisk8@proton.me)

---

**🌟 Si encuentras este proyecto útil, considera darle una estrella en GitHub y compartirlo con interesados en la historia política y deportiva de Colombia.**
