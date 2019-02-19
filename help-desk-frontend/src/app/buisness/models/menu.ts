import { ParentModel } from "./parent-model";

export class Menu extends ParentModel {
    id: number;
    label: string;
    routers: string;
    urls: string;
    icon: string;
    color: string;
    parents: boolean;
    menu: Menu;
    // childs: Array<Menu>;
}
