import fs from 'fs';
import axios from 'axios';

//var axiosInstance = axios.create({responseType: 'stream'});

export async function downloadFile(url: string, extension: string) {
    const { data } = await axios.get(url, {responseType: 'stream'});
    var wstream : fs.WriteStream = fs.createWriteStream('file.' + extension);
    data.pipe(wstream);
};