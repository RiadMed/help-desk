import { ParentModel } from "./parent-model";
import { Affectation } from "./affectation";

export class AffectationDetails extends ParentModel {
    id: number;
    label: string;
    date: Date;
    active: boolean;
    key: string;
    serialNumber: string;
    validationDate: Date;
    productId: number;
    productLabel: string;
    productQuantity: string;
    affectation: Affectation;

}
