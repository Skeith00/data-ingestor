import { downloadFile, bufferFile } from './downloader'
import { ExcelOptions } from "./ingestor/options/excelOptions";
import { HandlerOptions } from './ingestor/options/handlerOptions';

var courses = { 
    Courses: "Report generated Tuesday, 3 January 2023",
 };

let excelOptions : HandlerOptions = new ExcelOptions('Courses', 2, courses)
bufferFile('https://data.gov.au/data/dataset/e5ae7059-bfa8-4fa4-a5c0-c13cf3520193/resource/7b3d33a0-f9c6-4d32-8799-9cecd7fc121c/download/cricos-providers-courses-and-locations-as-at-2023-1-3-7-59-17.xlsx', excelOptions);