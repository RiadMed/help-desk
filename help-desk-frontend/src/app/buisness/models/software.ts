import { ParentModel } from "./parent-model";

export class Software extends ParentModel {
    id: number;
    label: string;
    amount: number;
    acquisitionDate: Date;
    validateDate: Date;
    icon: string;
    marqueId: number;
    marqueLabel: string;
    //affectations: Array<Affectation>;
}
