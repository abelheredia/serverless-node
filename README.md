### deploy en aws

```bash
serverless deploy
```

### script para modelo en base de datos

```bash
create table alumno(
    idalumno int auto_increment
    primary key,
    nombre varchar(100) null,
    fecha_nacimiento date null,
    email varchar(20) null,
    telefono varchar(20) null
);
```

### ejemplo de archivo .env

```bash
DB_HOST = host
DB_USER = user
DB_PASS = pass
DB_NAME = dbname
```
