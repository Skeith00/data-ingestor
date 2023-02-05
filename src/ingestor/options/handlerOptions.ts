import { HandlerType } from "../handlerType";

export abstract class HandlerOptions {

    type : HandlerType;
    constructor(type : HandlerType) {
        this.type = type;
    }

    abstract getFileName() : string;

}
