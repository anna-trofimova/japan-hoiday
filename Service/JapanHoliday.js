'use strict'

function JapanHolidaysService(){
  this.baseUrl = 'https://date.nager.at/api/v2/publicholidays/2017/JP/'
}

JapanHolidaysService.prototype.getAllHolidays = async function(){
  var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  var response = await fetch (`${proxyUrl + this.baseUrl}`);
  var data = await response.json();
  console.log(data);
  
  return data;
}


var japanHolidaysServiceInstance = new JapanHolidaysService();
