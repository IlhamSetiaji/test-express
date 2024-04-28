import { Role } from "@prisma/client";
import RoleRepositoryInterface from "../../repositories/Role/RoleRepositoryInterface";
import RoleRepository from "../../repositories/Role/RoleRepository";

class RoleService implements RoleRepositoryInterface {

  private roleRepository: RoleRepositoryInterface;

  constructor(roleRepository: RoleRepositoryInterface) {
    this.roleRepository = roleRepository;
  }

  async createRole(name: string): Promise<Role> {
    return this.roleRepository.createRole(name);
  }
}

export default new RoleService(RoleRepository);