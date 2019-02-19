import { Marque } from "./Marque";
import { Affectation } from "./affectation";
import { ParentModel } from "./parent-model";

export class Hardware extends ParentModel {
    id: number;
    label: string;
    amount: number;
    acquisitionDate: Date;
    icon: string;
    marqueId: number;
    marqueLabel: string;
    //affectations: Affectation[];
}
