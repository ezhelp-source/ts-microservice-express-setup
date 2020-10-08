module.exports = {
  "environment": process.env.APP_ENV,
  "name": "default",
  "type": "postgres",
  "database": process.env.RDS_DATABASE,
  "host": process.env.RDS_HOSTNAME,
  "port": process.env.RDS_PORT,
  "username": process.env.RDS_USERNAME,
  "password": process.env.RDS_PASSWORD,

  // "entities": ["./dist/infrastructure/typeorm/**/*.entity.js"],
  // "migrations": ["./dist/infrastructure/typeorm/database/migrations/*.js"],
  // "cli": {"migrationsDir": "./dist/infrastructure/typeorm/database/migrations"}

  "entities": ["./src/infrastructure/typeorm/**/*.entity.ts"],
  "migrations": ["./src/infrastructure/typeorm/database/migrations/*.ts"],
  "cli": {"migrationsDir": "./src/infrastructure/typeorm/database/migrations"}
}
