# Biblio React

Proyecto frontend creado con React y Vite como base para una aplicación relacionada con biblioteca o catálogo de libros.

Actualmente el repositorio incluye una estructura inicial lista para desarrollo, con soporte para recarga en caliente, linting y consumo de APIs mediante Axios.

## Tecnologías

- React 19
- Vite 8
- ESLint 10
- Axios

## Requisitos

- Node.js 20 o superior recomendado
- npm

## Instalación

Clona el repositorio e instala las dependencias:

```bash
npm install
```

## Scripts disponibles

### Desarrollo

Inicia el servidor local con recarga en caliente:

```bash
npm run dev
```

### Build

Genera la versión de producción:

```bash
npm run build
```

### Vista previa

Sirve localmente el build generado:

```bash
npm run preview
```

### Lint

Ejecuta las reglas de ESLint sobre el proyecto:

```bash
npm run lint
```

## Estructura del proyecto

```text
biblio-react/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ App.jsx
│  ├─ App.css
│  ├─ index.css
│  └─ main.jsx
├─ index.html
├─ package.json
├─ vite.config.js
└─ eslint.config.js
```

## Estado actual

La aplicación todavía parte de una interfaz inicial de ejemplo sobre la que se puede construir la funcionalidad real del proyecto. Axios ya está instalado, por lo que el proyecto está preparado para integrar datos desde una API cuando lo necesites.

## Próximos pasos sugeridos

1. Definir la funcionalidad principal de la biblioteca o catálogo.
2. Crear componentes reutilizables para listado, búsqueda y detalle.
3. Conectar una API o una fuente local de datos.
4. Añadir rutas, estados de carga y manejo de errores.

## Autor

Proyecto desarrollado en React como base de trabajo para Biblio React.
