FROM postgres:alpine
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD docker
ENV POSTGRES_DATABASE av2
COPY createDatabase.sql /docker-entrypoint-initdb.d/