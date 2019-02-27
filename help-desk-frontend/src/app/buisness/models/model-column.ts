export class ModelColumn {
    filed: string;
    header: string;
    pipe: string;
    width: string;

    constructor(filed?: string,
        header?: string,
        pipe?: string,
        width?: string) {

        this.filed = filed;
        this.header = header;
        this.pipe = pipe || '';
        this.width = width || '';
    }
}
