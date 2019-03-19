import { ParentModel } from "./parent-model";

export class Product extends ParentModel {
    id: number;
    label: string;
    quantity: number;
    date: Date;
    icon: string;
    isSoftware: boolean;
    marqueId: number;
    marqueLabel: string;
}
