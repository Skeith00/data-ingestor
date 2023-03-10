import fs from 'fs';
import axios from 'axios';
import { getHandler } from './ingestor/factoryReader';
import { HandlerOptions } from './ingestor/options/handlerOptions';
import { Handler } from './ingestor/handler/handler';

export async function bufferFile(url: string, options: HandlerOptions) : Promise<any[]> {
    let reader: Handler = getHandler(options.type)
    const { data }  = await axios.get(url, {responseType: 'arraybuffer'});
    return await reader.convertFile(data, options);
};

export async function downloadFile(url: string, options: HandlerOptions) : Promise<any[]> {
    let reader: Handler = getHandler(options.type)
    const { data } = await axios.get(url, {responseType: 'stream'});
    var wstream : fs.WriteStream = fs.createWriteStream(options.getFileName());
    var path : Buffer | string = wstream.path;

    var stream = await data.pipe(wstream);
    stream.on('finish', async () => {
        wstream.close();
    });
    return await reader.convertFile(path, options);
};