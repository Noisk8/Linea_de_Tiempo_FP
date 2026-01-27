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

```
Frontend Framework: Angular 21 (Standalone Components)
Language: TypeScript 5.9.2
UI Library: PrimeNG 21.0.2
Build Tool: Angular CLI 21.0.4
Package Manager: npm 10.9.3
Testing: Vitest 4.0.8
Deployment: Netlify
```

### Estructura del Proyecto

```
src/
├── app/
│   ├── components/          # Componentes reutilizables
│   │   ├── header/         # Navegación principal
│   │   └── footer/         # Pie de página
│   ├── pages/              # Páginas principales
│   │   ├── home/           # Página de inicio
│   │   ├── timeline/       # Timeline principal
│   │   ├── detail/         # Detalle de presidente
│   │   ├── referencias/    # Fuentes y referencias
│   │   └── notas/          # Notas editoriales
│   ├── services/           # Lógica de negocio
│   │   └── meta.service.ts # SEO y metaetiquetas
│   ├── directives/         # Directivas personalizadas
│   │   └── lazy-image.directive.ts # Lazy loading
│   ├── data/               # Datos estructurados
│   │   └── timeline-data.ts # TimelineEntry[] (1,029 líneas)
│   └── shared/             # Componentes compartidos
├── assets/                 # Imágenes y recursos
└── styles/                 # Estilos globales
```

### 📊 Estadísticas del Código

- **Archivos TypeScript/HTML/CSS**: 35 archivos
- **Líneas de código**: ~2,500+ líneas
- **TimelineEntry**: 27 presidentes con datos completos
- **Fuentes documentales**: 25+ archivos Markdown en `datos_referencias/`

## 🎨 Características Principales

### 1. Timeline Interactivo
- **Scroll parallax** con indicador de progreso
- **Búsqueda en tiempo real** con resaltado de coincidencias
- **Lazy loading** para optimizar rendimiento
- **Responsive design** para todos los dispositivos

### 2. Páginas de Detalle
- **Contenido rico** con párrafos, imágenes y galerías
- **Skeleton loading** para mejor UX
- **Metaetiquetas dinámicas** para SEO
- **Structured data** (JSON-LD) para motores de búsqueda

### 3. SEO y Optimización
- **MetaService**: Metaetiquetas OG dinámicas por presidente
- **Sitemap.xml**: Todas las páginas indexadas
- **Robots.txt**: Configuración para crawlers
- **Open Graph**: Imágenes específicas para compartir
- **Twitter Cards**: Optimización para redes sociales

### 4. Performance
- **LazyImageDirective**: Carga diferida de imágenes
- **Intersection Observer**: Optimización de scroll
- **Build optimizado**: Budgets, hashing, minificación
- **Bundle analysis**: Control de tamaño de assets

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
```yaml
# netlify.toml (implícito)
build:
  command: npm run build
  publish: dist/linea-de-tiempo-fp/browser
environment:
  NODE_VERSION: 20.19.0
```

### Pasos para Deploy
1. **Push a GitHub**: Los cambios se deployan automáticamente
2. **Build**: Netlify ejecuta `npm run build`
3. **Deploy**: Contenido servido desde `dist/linea-de-tiempo-fp/browser`
4. **URL**: https://presidentes-futbol.netlify.app

### Configuración SEO
- **Sitemap**: https://presidentes-futbol.netlify.app/sitemap.xml
- **Robots**: https://presidentes-futbol.netlify.app/robots.txt
- **OG Image**: https://presidentes-futbol.netlify.app/pwe.png

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
// angular.json
"budgets": [
  { "type": "initial", "maximumWarning": "500kB" },
  { "type": "anyComponentStyle", "maximumWarning": "4kB" }
]
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
https://developers.facebook.com/tools/debug/
```

## 📄 Licencia

Este proyecto es educativo y de investigación. Las fuentes citadas pertenecen a sus respectivos autores. Las imágenes históricas se utilizan bajo fair use para fines educativos.

## 🤝 Contribuidores

- **Principal**: Noisk8
- **Investigación**: Fuentes históricas y académicas
- **Diseño**: UI/UX optimizado para experiencia educativa

---

**🌟 Si encuentras este proyecto útil, considera darle una estrella en GitHub y compartirlo con interesados en la historia política y deportiva de Colombia.**
