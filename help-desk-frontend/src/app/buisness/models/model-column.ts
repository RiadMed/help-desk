export class ModelColumn {
    field: string;
    header: string;
    type: string;
    width: string;

    constructor(field?: string,
        header?: string,
        type?: string,
        width?: string) {

        this.field = field;
        this.header = header;
        this.type = type;
        this.width = width || '';
    }
}
