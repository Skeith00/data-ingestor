import { HandlerType } from "../handlerType";
import { HandlerOptions } from "./handlerOptions";

export class ExcelOptions extends HandlerOptions { 
    sheetName: string;
    ignoreFirstRows: number;
    object: Object;

    constructor(sheetName: string, ignoreFirstRows: number, object : Object) { 
        super(HandlerType.Excel);
        this.sheetName = sheetName;
        this.ignoreFirstRows = ignoreFirstRows;
        this.object = object;
    }

    getFileName(): string {
        return 'file.' + this.type;
    }
}