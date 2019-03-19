import { ParentModel } from "./parent-model";

export class AppSettings extends ParentModel {
    id: number;
    label: string;
    title: string;
    footer: string;
    version: string;
    favicon: string;
    logo: string;
    loginImg: string;
    defaultLang: string;
    copyright: string;
    maxUser: string;
    description: string;
}
