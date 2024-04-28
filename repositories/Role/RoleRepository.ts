import { PrismaClient, Role } from "@prisma/client";
import RoleRepositoryInterface from "./RoleRepositoryInterface";

class RoleRepository implements RoleRepositoryInterface {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createRole(name: string): Promise<Role> {
    const role = await this.prisma.role.create({
      data: {
        name: name,
      },
    });
    return role;
  }
}

export default new RoleRepository();
