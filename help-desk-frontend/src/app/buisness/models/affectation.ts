import { ParentModel } from "./parent-model";

export class Affectation extends ParentModel {
	id: number;
	date: Date;
	label: string;
	partenerId: number;
	partenerLabel: string;
	partenerLastName: string;
}
