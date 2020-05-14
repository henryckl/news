import { ConnectionOptions } from "typeorm";
const connectionOptions: ConnectionOptions[] = [
  {
    name: "default",
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "test",
    database: "news-db",
    synchronize: true,
    logging: false,
    entities: ["src/app/entity/**/*.ts"],
    migrations: ["src/app/migration/**/*.ts"],
    subscribers: ["src/app/subscriber/**/*.ts"],
    cli: {
      entitiesDir: "src/app/entity/",
      migrationsDir: "src/app/migration/",
      subscribersDir: "src/app/subscriber/",
    },
  },
  {
    name: "test",
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "test",
    database: "news-db-test",
    synchronize: true,
    logging: false,
    entities: ["src/app/entity/**/*.ts"],
    migrations: ["src/app/migration/**/*.ts"],
    subscribers: ["src/app/subscriber/**/*.ts"],
  },
];

export = connectionOptions;
