import { ExcelHandler } from "./handler/excelHandler";
import { Handler } from "./handler/handler";
import { HandlerType } from "./handlerType";

export function getHandler(type: HandlerType) : Handler {
   switch(type) { 
      case HandlerType.Excel: { 
         return new ExcelHandler();
      }
      default: { 
         throw new Error(`Reader for type ${type} not found`);
      } 
   } 
};