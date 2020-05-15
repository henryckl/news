import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";

class UserController {
  public async store(req: Request, res: Response): Promise<Response> {
    const email = await getRepository(User).findOne({
      where: {
        email: req.body.email,
      },
    });
    if (email) {
      return res.status(409).json({ error: "E-mail already exists!" });
    }
    const user: User[] = getRepository(User).create(req.body);
    await getRepository(User).save(user);
    return res.status(201).json(user);
  }
}

export default new UserController();
