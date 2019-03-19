import { ParentModel } from "./parent-model";

export class ModelForm<T extends ParentModel>{
    column: string;
    label: string;
    required: boolean;
    controlType: string;
    readOnly: boolean;
    rendred: boolean;
    options: Array<T>;
    showAdd: boolean;
    message: string;

    constructor(column?: string,
        label?: string,
        required?: boolean,
        controlType?: string,
        readOnly?: boolean,
        rendred?: boolean,
        options?: Array<T>,
        showAdd?: boolean,
        message?: string) {

        this.column = column || '';
        this.label = label || '';
        this.required = required;
        this.readOnly = readOnly;
        this.rendred = rendred;
        this.controlType = controlType || '';
        this.options = options || null;
        this.showAdd = showAdd;
        this.message = message || '';

    }
}