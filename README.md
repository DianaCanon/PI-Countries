![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# Individual Project - Henry Countries

<p align="left">
  <img height="200" src="./countries.png" />
</p>

PI Countries es una aplicación en la cual se puede ver información de  distintos paises utilizando la api externa [restcountries](https://restcountries.com/) y a partir de ella se puede:
- Buscar paises
- Filtrarlos / Ordenarlos
- Crear actividades turísticas



## TECNOLOGIAS USADAS

- App que utiliza React, Redux, Node y Sequelize.

# CONFIGURANDO PARA INGRESAR
En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```env
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).


