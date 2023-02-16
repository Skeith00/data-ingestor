import { ExcelOptions } from '../options/excelOptions';
import { Handler } from './handler';
import Exceljs from 'exceljs';

export class ExcelHandler implements Handler {
    constructor() {}

    async convertFile(data : Buffer | string, options : ExcelOptions): Promise<any[]> {
        // read from a file
        var workbook : Exceljs.Workbook = new Exceljs.Workbook();

        if (data instanceof Buffer) {
            await workbook.xlsx.load(data);
        } else {
            await workbook.xlsx.readFile(data);
        }

        const sheet : Exceljs.Worksheet = workbook.getWorksheet(options.sheetName)

        if (sheet == null) {
            console.error(`Sheet ${options.sheetName} not found`);
            throw new Error(`Sheet ${options.sheetName} not found`);
        }

        return this.excelToJson(sheet, options);
        //let object : Object = Object.setPrototypeOf(array, options.object)
    }

    excelToJson(worksheet : Exceljs.Worksheet,  options : ExcelOptions) : any[] {
        var objresult : any[] = [];
        var objheaders : any[] = [];
        let firstRowPosition : number = 1 + options.ignoreFirstRows;

        worksheet.eachRow(function (row, rowNumber) {
            var currentobj : any = {};

            if (firstRowPosition > rowNumber) {
                return;
            };
            
            row.eachCell({includeEmpty: true}, (cell, colNumber) => {
                if (rowNumber == firstRowPosition) {
                    objheaders.push(cell.value);
                } else {
                    currentobj[objheaders[colNumber - 1]] = cell.value == null ? '' : cell.value;
                }
            });
            if (rowNumber > firstRowPosition) {
                objresult.push(currentobj);
            }
        });

        return objresult;
    }

}