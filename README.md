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

## Funcionalidades

- Inicio de sesión con persistencia del token en `localStorage`.
- Mapa interactivo centrado por defecto en Madrid.

<img width="642" height="515" alt="image" src="https://github.com/user-attachments/assets/2f5108f4-893f-4411-b02d-4dec0a1ff2c8" />

- Cambio de capa base entre OpenStreetMap y satélite de Esri.
  
  <img width="642" height="515" alt="image" src="https://github.com/user-attachments/assets/21c88e0c-83d3-44ae-bdc4-52663e9dfd8b" />
  
  <img width="642" height="515" alt="image" src="https://github.com/user-attachments/assets/e02b4ca5-2286-4a89-be43-b045535b6af7" />



- Creación de marcadores haciendo clic sobre el mapa.
  
<img width="496" height="339" alt="image" src="https://github.com/user-attachments/assets/c6b9358d-9eb3-4bac-98db-2d4bddab8d6b" />

- Listado de marcadores del usuario autenticado.

<img width="366" height="240" alt="image" src="https://github.com/user-attachments/assets/bd6d239c-ee76-427b-8b28-c1e5d1320b78" />


- Eliminación de marcadores desde la lista.

<img width="369" height="210" alt="image" src="https://github.com/user-attachments/assets/520ac214-137b-4fa3-8d08-70b572308c7e" />

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
