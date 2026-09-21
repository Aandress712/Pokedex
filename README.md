# Pokémon

Aplicación web de catálogo de Pokémon construida con React, TypeScript y Vite. La interfaz permite visualizar tarjetas con información de cada Pokémon, buscar por nombre y explorar estadísticas básicas como HP, ataque, defensa y velocidad.

## Descripción

Este proyecto consume datos de una API pública de Pokémon y los muestra en una interfaz amigable con diseño responsivo usando Bootstrap. La vista principal presenta una lista de tarjetas con:

- nombre del Pokémon
- tipo
- imagen normal y versión shiny
- número del pokémon
- estadísticas principales
- búsqueda en tiempo real

## Tecnologías

- React 18
- TypeScript
- Vite
- Bootstrap 5
- React Bootstrap
- React Router DOM

## Estructura del proyecto

```text
Pokedex/
├── src/
│   ├── controller/
│   │   └── getpokemon.tsx
│   ├── models/
│   │   └── pokemon.m.ts
│   ├── pages/
│   │   ├── Listado.tsx
│   │   └── Css/
│   │       └── cssProyectos.css
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── eslint.config.js
└── README.md
```

## Requisitos

- Node.js 18 o superior
- npm o yarn

## Instalación

1. Clona el repositorio.
2. Accede a la carpeta del proyecto:

```bash
cd Pokedex
```

3. Instala las dependencias:

```bash
npm install
```

## Scripts disponibles

```bash
npm run dev
```

Inicia el servidor de desarrollo de Vite.

```bash
npm run build
```

Compila la aplicación para producción.

```bash
npm run preview
```

Previsualiza la versión construida.

```bash
npm run lint
```

Ejecuta ESLint para revisar el código.

## Uso

Al iniciar la aplicación, se cargan los Pokémon desde la fuente de datos y se muestran como tarjetas. Puedes usar la barra de búsqueda para filtrar por nombre en tiempo real.

## Nota

La aplicación obtiene la información desde un archivo JSON publicado en `unpkg.com`, por lo que no requiere backend propio para listar los Pokémon.

## Autor

Proyecto desarrollado por Andres Giraldo.
