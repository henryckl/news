import express, { Application } from "express";
import routes from "./routes";
import "reflect-metadata";
import { databaseConnection } from "./utils/databaseConnection";

class App {
  public express: Application;

  public constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    databaseConnection();
  }

  private middleware(): void {
    this.express.use(express.json());
  }

  private routes(): void {
    this.express.use(routes);
  }
}

export default new App().express;
