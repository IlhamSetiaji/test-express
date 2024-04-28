import { Request, Response } from "express";
import RoleServiceInterface from "../services/Role/RoleServiceInterface";
import RoleService from "../services/Role/RoleService";

class RoleController {
  private roleService: RoleServiceInterface;

  constructor(roleService: RoleServiceInterface) {
    this.roleService = roleService;
  }

  insertRole = async (req: Request, res: Response) => {
    try {
      const payload = req.body;
      const role = await this.roleService.createRole(payload.name)
      res.send(role);
    } catch (error) {
      res.status(500).send(error);
    }
  };
}

export default new RoleController(RoleService);
