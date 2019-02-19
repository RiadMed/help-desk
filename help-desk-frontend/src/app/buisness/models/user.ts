import { Roles } from "./roles";

export class User {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    address: string;
    ipAddress: string;
    admin: boolean;
    valid: boolean;
    phone: string;
    email: string;
    roles: Array<Roles>;
    menus: Array<String>;
}
