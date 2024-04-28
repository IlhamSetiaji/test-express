import { Role } from "@prisma/client";

interface RoleServiceInterface {
    createRole(name: string): Promise<Role>;
}

export default RoleServiceInterface;