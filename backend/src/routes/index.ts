import { Router, Response } from "express";
import UserController from "../app/controllers/UserController";
const routes = Router();

routes.get("/", (req, res: Response) => {
  return res.json({ message: "Ok" });
});

routes.post("/user", UserController.store);

export default routes;
