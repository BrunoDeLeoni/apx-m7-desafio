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

Versión 1.5
*Update Web*
* Update del front
* Sync a la Bases de Datos
* Creación/Modificación de User
* Creación de Mascotas Perdidas
* Info de Mascotas Perdidas para Visitantes
* Info de Mascotas Perdidas para User
* Info de Mascotas Perdidas para Creadores

Versión 1.6
*Prototipo Web Finish*
* Se puede modificar el estado de las mascotas publicadas
* Se puede añadir información de mascotas vistas
* Se puede visualizar información de usuarios sobre nuestras mascotas
* Creación de la DB Info y su respectivo controllers
* Falta MAP y PHOTO
* Falta corrección del BUG al mostrar los datos

Versión 1.7
*Cloudinary*
* Se pueden subir y almacenar fotos
* Las cards de las mascotas perdidas ahora se ven con imagen
* Se organizaron los comentarios para unificarlos
* Falta MAP
* Falta corrección del BUG al mostrar los datos

Versión 1.8
*MapBox*
* Almacena las mascotas con longitud y latitud

Versión 1.9
*MapBox*
* Ahora busca la ubicación de las mascotas y la muestra en un mapa
* BUG: No visibiliza el MAP de Reported-Info
* BUG: Al visualizar la información de una mascota perdida despues genera problemas en el subscribe
* BUG: Duplica la ultima card creada cuando traigo las mascotas perdidas o información añadida

Versión 1.9.1
*MapBox*
* Se optimizo el codigo para su lectura

Versión 1.10
*SendGrid*
* Se pauso el uso de MapBox por Bug en el 'subscribe'
* Ahora se envian notificaciones al mail del dueño de la mascota perdida con la informacion que se brindo por otro usuario.
* BUG: Duplica la ultima card creada cuando traigo las mascotas perdidas o información añadida
* BUG: problema en el 'subscribe' con referencia a MapBox

Versión 1.10.1
*SendGrid*
* Se oculto el Key de SendGrid