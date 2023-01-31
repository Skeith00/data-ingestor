import * as fs from 'fs';
import axios from 'axios';

export async function downloadFile(url: string, extension: string) {
    const { data } = await axios({
        method: 'get',
        url: url,
        responseType: 'stream'
    });
    // http://codewinds.com/blog/2013-08-19-nodejs-writable-streams.html
    data.pipe(fs.createWriteStream('/tmp/file.' + extension))
};
