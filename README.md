# CRUD con ReactJS Biblioteca Simple

Ejercicio ejemplo para 2º DAW 2021/2022 de creación de una SPA que ofrece un CRUD sobre una API de libros (título 
y autor). 

## Instalación previa

Para la gestión de rutas:
### `npm install --save react-router-dom`

Para el uso de bootstrap:
### `npm install bootstrap --save`

Para ofrecer la API falsa:
### `npm install json-server`

## Scripts disponibles

Para cargar el servicio de la API. Ver línea en package.json ("api": "json-server ./src/assets/libros.json --port 3333",)

### `npm run api`
Correrá en http://localhost:3333/libros. Y su uso es el siguiente:

- GET /libros         Devuelve todos los libros
- GET /libros/id      Devuelve un libro determinado por el id
- POST /libros        Inserta un nuevo libro (envía título y autor)
- PUT /libros/id      Modifica un libro existente (envía id, título y autor)
- DELETE /libros/id   Borra un registro determinado por el id 

El intercambio de datos con el servidor se realiza completo en formato JSON. Modificar para adaptarlo a vuestra propia API.

Para instalar los módulos de React:
### `npm install`

Para correr la aplicación en desarrollo:
### `npm run start`

Para establecer para producción:
### `npm run build`


Y listo :-)

Mejoras: Paginación, validación íntegra de formularios, registro de libros más completo (con checkbox, textareas, botones de radio, etc), búsqueda en los datos, estilos propios, reorganización de componentes, etc ... En vuestra manos está !! 
