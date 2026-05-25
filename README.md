# GitFlow Practice Lab

Repositorio de practica para aprender flujos avanzados de GitHub con Pull Requests, reviews, merges, releases y trabajo paralelo.

## Objetivo

Este repo simula una app sencilla dividida en partes para practicar:

- ramas `main`, `develop`, `feature/*`, `release/*` y `hotfix/*`
- Pull Requests con review
- comentarios de review y ajustes
- merges sin pisar trabajo ajeno
- conflictos controlados
- tags y GitHub Releases

## Flujo recomendado

1. Trabajar features desde `develop`.
2. Abrir Pull Requests hacia `develop`.
3. Revisar cambios antes de mergear.
4. Integrar varias features.
5. Crear `release/vX.Y.Z` desde `develop`.
6. Mergear release a `main`.
7. Crear tag y GitHub Release.

## App de practica

La app es una pagina simple con modulos separados para que varias personas puedan tocar archivos distintos sin pisarse.

- `src/sections/header.js`
- `src/sections/dashboard.js`
- `src/sections/footer.js`
- `src/styles.css`

## Comandos

```bash
npm test
```

No requiere instalar dependencias externas.
