import { Role } from "@prisma/client";


interface RoleRepositoryInterface {
    createRole(name: string): Promise<Role>;
}

export default RoleRepositoryInterface;