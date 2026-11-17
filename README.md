Summary of the project

## MySQL

Add the database settings from `.env.example` to `.env` (or copy the example if `.env` does not exist) and replace the example passwords. Start MySQL with:

```sh
docker compose up -d
```

The database is available on `localhost:3306` by default. Compose creates the `student_management` database and `student_app` user, and stores database files in a persistent Docker volume. To stop the service, run `docker compose down`; the data volume is preserved.
