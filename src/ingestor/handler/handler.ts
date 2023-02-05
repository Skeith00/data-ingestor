import { IncomingMessage } from "http";
import { HandlerOptions } from "../options/handlerOptions";

export interface Handler {

    convertFile(path : Buffer | string, options : HandlerOptions): Promise<any>;

}