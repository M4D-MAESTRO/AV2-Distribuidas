module.exports = {
    "type": "postgres",
    "host": process.env.NODE_ENV == "prod" ? "av2-distribuidas_db_1" : "localhost",
    "port": process.env.NODE_ENV == "prod" ? 5432 : 6543,
    "username": "postgres",
    "password": "docker",
    "database": "av2",
    "entities": ["./src/models/*.ts"],
    "migrations": ["./src/database/migrations/*.ts"],
    "cli": {
        "migrationsDir": "./src/database/migrations"
    },
    "synchronize": true
}