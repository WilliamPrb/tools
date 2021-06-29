function Main() {
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheetByName("script");
var requests = sheet.getRange("C3").getValue();
var firstRow = 6;

for (var i=0; i<requests; i++){
firstRow ++; 

//Get Link from Row
var link = sheet.getRange(firstRow, 5).getValue(); 

//Get Key from link
var str = UrlFetchApp.fetch(link).getContentText();
const mainRegex = /(?<=<div class=\"card-number\">).*?(?=<\/div>)/gi;
var results = str.match(mainRegex);

//Set Key on row
sheet.getRange(firstRow,6).setValue(results);

}


}
