import { Partener } from "./partener";
import { Software } from "./software";
import { Hardware } from "./hardware";
import { ParentModel } from "./parent-model";

export class Affectation extends ParentModel {
	id: number;
	date: Date;
	active: boolean;
	validationDate: Date;
	label: string;
	serialNumber: string;
	key: String;
	partenerId: number;
	partenerLabel: string;
	partenerLastName: string;
	softwareId: number;
	softwareLabel: string;
	softwareAmount:number;
	hardwareId: number;
	hardwareLabel: string;
	hardwareAmount:number;
}
