"use strict";
function HolidaysPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
  this.holidays = null;
  this.loading = null;
}

HolidaysPage.prototype.generate = async function() {
  this.loading = new Loading(this.parentElement);
  this.loading.generate();

  await this.connectToAPI();

  this.elements = `
 <header class="last-page">
 <img src="./image/sunset.gif" width="60" heigth="70">
 <h2>Here you can find some japanese holidays!</h2>
 </header>
 <section>
 `;

  this.holidays.forEach(holiday => {
    console.log(holiday.name);
    this.elements += `
   <article class='holiday'>
     <h3>English name:${holiday.name}</h3>
     <p>Local name:${holiday.localName}</p>
     <p>Date:${holiday.date}</p>
     <p>Launch year:${holiday.launchYear}</p>
   </article>
   
   `;
  });
  this.elements += `
  </section>
  <img class="mouse" src="./image/okkkkkkk.gif" width="80" heigth="100">
 `;

  this.render();
};

HolidaysPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
};

HolidaysPage.prototype.connectToAPI = async function() {
  this.holidays = await japanHolidaysServiceInstance.getAllHolidays();
  //нужно async, потому что в SWS это async
};
