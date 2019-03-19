export class ModelColumn {
    filed: string;
    header: string;
    type: string;
    format: boolean;
    pipe: string;
    width: string;

    constructor(filed?: string,
        header?: string,
        type?: string,
        format?: boolean,
        pipe?: string,
        width?: string) {

        this.filed = filed;
        this.header = header;
        this.type = type;
        this.format = format;
        this.pipe = pipe || '';
        this.width = width || '';
    }
}
