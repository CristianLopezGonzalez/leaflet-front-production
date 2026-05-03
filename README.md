# Leaflet Front Production

Aplicación web en React + TypeScript para gestionar marcadores sobre un mapa interactivo con Leaflet. La app incluye autenticación, listado de marcadores, creación desde el mapa y eliminación de marcadores existentes.

## Tecnologías

- React 18
- TypeScript
- Vite
- Leaflet y React Leaflet
- React Router DOM
- Axios
- Tailwind CSS
- CSS modular del proyecto donde todavía aplica

## Funcionalidades

- Inicio de sesión con persistencia del token en `localStorage`.
- Mapa interactivo centrado por defecto en Madrid.
- Cambio de capa base entre OpenStreetMap y satélite de Esri.
- Creación de marcadores haciendo clic sobre el mapa.
- Listado de marcadores del usuario autenticado.
- Eliminación de marcadores desde la lista.
- Manejo básico de errores y estado de carga.

## Requisitos

- Node.js 18 o superior.
- Un backend compatible ejecutándose en `http://localhost:5000/api`.

## Instalación

```bash
npm install
```

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Ejecución

1. Inicia el backend en `http://localhost:5000/api`.
2. Levanta la aplicación con `npm run dev`.
3. Abre la URL que muestra Vite en el navegador.
4. Inicia sesión y entra al mapa para gestionar tus marcadores.

## Credenciales de ejemplo

En la pantalla de login se muestran unas credenciales de prueba:

- Email: `test@gmail.com`
- Contraseña: `test123`

## Estructura del proyecto

- `src/pages`: pantallas principales como login y mapa.
- `src/components`: componentes reutilizables de UI.
- `src/hooks`: lógica de estado y eventos del mapa.
- `src/services`: cliente HTTP y servicios de autenticación/marcadores.
- `src/utils`: estilos CSS específicos de cada vista.

## API

La app consume un backend REST en `src/services/api.ts`. Por defecto usa la base URL `http://localhost:5000/api`.

Si necesitas apuntar a otro entorno, ajusta ese archivo antes de compilar la app.

## Notas

- El token de acceso se guarda en `localStorage`.
- Si el backend responde `401`, la app limpia el token y redirige al login.
