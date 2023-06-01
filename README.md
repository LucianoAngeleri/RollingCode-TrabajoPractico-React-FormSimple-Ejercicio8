# Trabajo Práctico de React
## Ejercicio 8 - Formulario Simple

Este proyecto es una aplicación web desarrollada en **React** que muestra un formulario con los campos Nombre, Apellido, DNI y correo electrónico. Permite enviar el formulario y validar que todos los campos estén completos.

## Autor

El proyecto fue creado por [César Luciano Angeleri](https://www.linkedin.com/in/cesar-luciano-angeleri/) como parte de un trabajo práctico de React para RollingCode School.

## Tecnologías utilizadas

El proyecto utiliza las siguientes tecnologías y herramientas:

- React
- JavaScript
- HTML
- CSS
- Node.js
- npm
- react-bootstrap
- sweetalert2

## Instalación

Sigue los siguientes pasos para configurar el proyecto en tu máquina local:

1. Clona este repositorio en tu máquina local o descarga el archivo ZIP.
2. Abre una terminal y navega hasta la carpeta raíz del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias del proyecto:

    ```
    npm install
    ```

## Ejecución

Después de haber instalado las dependencias, sigue los siguientes pasos para ejecutar el proyecto:

1. En la misma terminal, ejecuta el siguiente comando para iniciar la aplicación:

    ```
    npm run dev
    ```

2. Abre tu navegador web y ve a la dirección que aparece en la terminal, debe ser algo como esto:

    ```
    http://localhost:5173/
    ```
## Funcionamiento del formulario

El formulario consta de los siguientes campos:

- Nombre: Permite ingresar el nombre del usuario.
- Apellido: Permite ingresar el apellido del usuario.
- DNI: Permite ingresar el número de DNI del usuario.
- Correo electrónico: Permite ingresar la dirección de correo electrónico del usuario.

Al presionar el botón "Enviar", se validará que todos los campos estén completos. Si todos los campos están completos, se mostrará un mensaje de alerta con el texto "Datos enviados". En caso contrario, se mostrará un mensaje de alerta con el texto "Debe completar todos los campos".

***Nota:** los datos del formulario se guardan en el Local Storage.*

***Nota:** el formulario se valida por HTML pero no contiene el atributo `required`, esto es asi para probar la funcionalidad de las ventanas.*