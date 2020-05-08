import { Router, Response } from "express";

const routes = Router();

routes.get("/", (req, res: Response) => {
  return res.json({ message: "Ok" });
});

export default routes;
