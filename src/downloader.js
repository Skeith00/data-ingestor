import * as fs from 'fs';
import axios from 'axios';

export async function downloadFile(url, extension) {
    const response = await axios({
        method: 'get',
        url: url,
        responseType: 'stream'
    });
    response.data.pipe(fs.createWriteStream('/tmp/file.' + extension))
    
};
