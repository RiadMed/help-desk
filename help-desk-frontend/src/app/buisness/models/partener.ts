import { Profession } from "./profession";
import { Affectation } from "./affectation";
import { ParentModel } from "./parent-model";

export class Partener extends ParentModel {
    id: number;
    label: string;
    lastName: string;
    professionId: number;
    professionLabel: string;

    public get partenerlabel(): string {
        this.label = this.lastName + "" + this.label;
        return this.label;
    }
}
