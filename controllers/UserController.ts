import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

class UserController {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  insertUser = async (req: Request, res: Response) => {
    const payload = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(payload.password, salt);
    try {
      const user = await this.prisma.user.create({
        data: {
          name: payload.name,
          email: payload.email,
          password: hashedPassword,
          role_id: payload.role_id,
        },
      });
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  readUsers = async (req: Request, res: Response) => {
    const users = await this.prisma.user.findMany();
    res.send(users);
  };

  findUserById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    if (!user) {
      res.status(404).send("User not found");
    }
    res.send(user);
  };

  updateUserByEmail = async (req: Request, res: Response) => {
    const payload = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(payload.password, salt);
    try {
      const user = await this.prisma.user.update({
        where: {
          email: payload.email,
        },
        data: {
          name: payload.name,
          password: hashedPassword,
        },
      });
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  deleteUserByEmail = async (req: Request, res: Response) => {
    const payload = req.body;
    const findUser = await this.prisma.user.findUnique({
      where: {
        email: payload.email,
      },
    });
    if (!findUser) {
      res.status(404).send("User not found");
    }
    try {
      const deletedUser = await this.prisma.user.delete({
        where: {
          email: payload.email,
        },
      });
      res.send(deletedUser);
    } catch (error) {
      res.status(500).send(error);
    }
  };
}

export default new UserController();
