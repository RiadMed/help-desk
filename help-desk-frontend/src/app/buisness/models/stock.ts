import { ParentModel } from "./parent-model";

export class Stock extends ParentModel {
    id: number;
    label: string;
    dateIn: Date;
    dateOut: Date;
    quantity: string;
}