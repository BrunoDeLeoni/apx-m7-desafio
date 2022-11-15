# WebApp 
## APX-M7-DES

### Consignas
* Entregar un repositorio con todo el código tanto del front como del back formateado correctamente para agilizar la lectura
* Aplicar la arquitectura MVC y apuntar a la mayor prolijidad posible en cada archivo y cada línea de código.
* Dentro del Readme.md debés incluir:
* La URL de la webapp (Render) donde está funcionando
* La URL de la collection (Postman) donde está documentada toda tu API

### Consejos
* Backend > Frontend:
Si bien es necesario que construyas este frontend, no es el foco de este módulo, por lo cual podés construirlo como te parezca más cómodo y rápido, solo asegurate de que todo funcione.
* Email:
Para recibir la notificación vamos a usar sendgrid. Un servicio que nos permite enviar emails sin muchas complicaciones.
* Algolia:
Recordá que la propiedad aroundLatLng de Algolia solo establece el punto central de la búsqueda, usá aroundRadius adicionalmente para setear un límite (en metros) y que las búsquedas tengan sentido.
* Variables Entorno:
Si vas a usar API Keys de servicios (Algolia, Sendgrid) guardá estos valores en variables de entorno de Heroku ya que si expones estas Keys probablemente te suspendan la cuenta del servicio. Estas empresas tienen bots que miran los repositorios de github para encontrar fallas de seguridad como estas.

## API Documentación:
*Postman*
Link:

## WebApp:
*Render*
Link:

## Versión:

Versión 1.0
*Estructurado*
* Creación del Repositorio en GitHub y sincronización
* Creación de la estructura base 'Folders/Files'
* Creación del 'package.json'
* Instalación de las dependencias
* Creación, Conexión y Sync a la base de datos en Render
* Conexión a Algolia y Cloudinary

Versión 1.1
*Estructurado Web*
* Estructurado del Front 
* Creación de Pages
* Creación de 'router' y 'state'
* Creación de 'welcome.ts' y '/assets'

Versión 1.2
*Estructurado Web*
* Creación de 'home.ts', 'register.ts' y 'login.ts'

Versión 1.3
*Estructurado Web*
* Creación de 'my-data' y 'my-data-update'

Versión 1.4
*Prototipo Web*
* Actulización de 'my-data' y 'my-data-update'
* Creación de paginas restantes
* Prototipo de Front-End finalizado
