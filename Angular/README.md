# Proyecto de Página Web de Guardado de Libros

## Resumen del Proyecto

Este proyecto es una página web desarrollada en Angular que permite a los usuarios gestionar una colección de libros. La página es simple e intuitiva, ofreciendo funcionalidades como búsqueda de libros, filtrado por temas, gestión de usuarios, creación de libros, comentarios tipo post-it y un juego de la serpiente.

El proyecto se divide en cinco componentes principales, cada uno con su propia funcionalidad específica:

1. **LoginComponent**
2. **HomeComponent**
3. **UsuarioComponent**
4. **CreaTuLibroComponent**
5. **ForoComponent**
6. **FavoritosComponent**

Además, el proyecto incluye un servidor Node.js (`server.js`) que sirve los datos desde archivos JSON.

## Componentes

### 1. LoginComponent

La primera página que aparece si no estás logeado. Este componente permite a los usuarios logearse de tres maneras diferentes:
- **Logearse mediante correo electrónico y contraseña**
- **Logearse mediante Google**
- **Crear una cuenta nueva**

#### Funcionalidades:
- **Formulario de login**: Permite a los usuarios ingresar su correo electrónico y contraseña.
- **Botón de Google**: Permite a los usuarios logearse usando su cuenta de Google.
- **Registro**: Redirige a una página de registro para crear una nueva cuenta.

### 2. HomeComponent

Aquí es donde se pueden ver todos los libros disponibles. Incluye funcionalidades para buscar y filtrar libros.

#### Funcionalidades:
- **Barra de búsqueda**: Permite buscar libros por título.
- **Select de categorías**: Permite filtrar libros por tema.
- **Libros aleatorios**: Muestra cuatro libros aleatorios.
- **Ordenar libros**: Permite ordenar libros de manera aleatoria o alfabéticamente.

### 3. UsuarioComponent

Muestra los datos del usuario logeado. Si el usuario es nuevo y no se ha logeado con Google, los valores estarán vacíos y podrán ser editados por el usuario.

#### Funcionalidades:
- **Datos del usuario**: Muestra información como nombre, rol, correo electrónico y teléfono.
- **Edición de usuario**: Permite al usuario editar su información personal.

### 4. CreaTuLibroComponent

Permite a los usuarios crear un nuevo libro y guardarlo en formato PDF.

#### Funcionalidades:
- **Formulario de creación de libro**: Permite ingresar el título y la descripción del libro.
- **Editor de contenido**: Permite agregar el contenido del libro.
- **Guardar en PDF**: Guarda el libro creado en formato PDF.

### 5. ForoComponent

Permite a los usuarios agregar comentarios, sirviendo como un espacio para recordar o comentar cosas para el futuro, similar a un post-it.

#### Funcionalidades:
- **Agregar comentario**: Permite a los usuarios agregar nuevos comentarios.
- **Lista de comentarios**: Muestra todos los comentarios agregados.
- **Editar y eliminar comentarios**: Permite editar y eliminar comentarios existentes.

### 6. FavoritosComponent

Muestra los libros marcados como favoritos por el usuario. Incluye una descripción abierta de cada libro y un enlace directo para abrirlos. También contiene un juego simple de la serpiente.

#### Funcionalidades:
- **Lista de favoritos**: Muestra los libros marcados como favoritos.
- **Abrir libro**: Permite abrir el libro directamente desde la lista de favoritos.
- **Juego de la serpiente**: Un simple juego para entretenimiento.

## Datos y Servidor

Los datos de los libros y comentarios se gestionan mediante archivos JSON y un servidor Node.js (`server.js`). El servidor proporciona los datos necesarios para el funcionamiento de los componentes de usuario y foro.

### Archivos JSON

- `libros.json`: Contiene la información de los libros.
- `comentarios.json`: Contiene los comentarios del foro.

### server.js

Un servidor Node.js que sirve los datos desde los archivos JSON y maneja las solicitudes HTTP.

## Instalación y Ejecución

### Prerrequisitos

- Node.js
- Angular CLI

### Instalación

1. Clonar el repositorio:
   ```bash
   git clone <URL del repositorio>

Este README cubre los puntos principales del proyecto, proporcionando un resumen claro y detallado de cada componente y su funcionalidad.