# Linea de Tiempo: Presidentes y Futbol en Colombia

Aplicacion web en Angular que presenta una linea de tiempo sobre presidentes de Colombia y su relacion con el futbol. El contenido se construye a partir de fuentes historicas y notas de referencia en `datos_referencias/`.

## Contenido

- Linea de tiempo horizontal con tarjetas por presidente.
- Pagina de detalle con texto ampliado, referencias y recortes editoriales.
- Pagina de referencias organizada por presidente.

## Estructura

- `src/app/data/timeline-data.ts`: datos finales que se renderizan en la linea de tiempo.
- `datos_referencias/`: base documental en Markdown y transcripciones.
- `src/app/pages/timeline/`: vista principal de la linea de tiempo.
- `src/app/pages/detail/`: vista de detalle por presidente.
- `src/app/pages/referencias/`: listado de fuentes agrupadas.

## Como correr en local

```bash
npm install
npm start
```

Abrir `http://localhost:4200/`.

## Build

```bash
npm run build
```

Salida: `dist/linea-de-tiempo-fp/browser`.

## Despliegue en Netlify

Este proyecto usa el plugin de Angular en Netlify y requiere:

- Node 20.19.0
- Publish directory: `dist/linea-de-tiempo-fp/browser`

La configuracion vive en `netlify.toml`.

## Actualizar contenido

1. Edita o agrega notas en `datos_referencias/`.
2. Traslada la informacion a `src/app/data/timeline-data.ts`.
3. Verifica que las fuentes queden listadas en `sources`.

## Notas

- Las imagenes se cargan desde Wikimedia/Wikipedia cuando es posible.
- Los recortes editoriales se usan para contextualizar hitos no estrictamente futbolisticos.
