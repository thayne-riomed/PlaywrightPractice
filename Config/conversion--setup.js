const { chromium, expect } = require('@playwright/test')
const fs = require('fs');
const { config } = require('process');

const XLSX = require('xlsx');
const path = 'C:/Riomed/Cellma4Automation'
var flag=false;

// module.exports = async config => {
// //  const browser=await chromium.launch({headless:false})
// //  const page=await browser.newPage()
// //Excel to JSON Convertor for patient
//   const workbook = XLSX.readFile('./ExcelFiles/PatientDomain.xlsx');
//   const jsonData = {};
//   workbook.SheetNames.forEach(sheetName => {
//     const worksheet = workbook.Sheets[sheetName];
//     jsonData[sheetName] = XLSX.utils.sheet_to_json(worksheet);
//     fs.writeFileSync(path + '/TestDataWithJSON/PatientDomain/PatientDetails.json', JSON.stringify(jsonData, null, 2));
//   });
//   console.log('Excel data has been converted and saved to excel_data.json');
//   await browser.close()
//   }


async function convertExcelToJson(excelFilePath, jsonFilePath) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

//Excel to JSON Convertor for patient
  if(excelFilePath){
    const workbook = XLSX.readFile(excelFilePath);
    const jsonData = {};
    workbook.SheetNames.forEach(sheetName => {
      const worksheet = workbook.Sheets[sheetName];
      jsonData[sheetName] = XLSX.utils.sheet_to_json(worksheet);
      fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));
    });
    console.log('Excel data has been converted and saved to excel_data.json');
    flag=true
  }
  await browser.close()
  return flag
}

module.exports = convertExcelToJson;