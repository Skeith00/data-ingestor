import xlsx from 'xlsx';

// Reading our test file
const file = xlsx.readFile('file.xlsx')
  
file.SheetNames.forEach(sheetName => {
    const sheetJson = xlsx.utils.sheet_to_json(file.Sheets[sheetName])
    // TODO: Process sheet
});