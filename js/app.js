'use strict'
const hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let salmonarray = [];

function Salmon(name, mincust, maxcust, avgCookies) {
  this.name = name;
  this.mincust = mincust;
  this.maxcust = maxcust;
  this.avgCookies = avgCookies;
  this.customereachhour = [];
  this.cookieseachhour = [];
  this.totalCookiesPerDay = 0;
  salmonarray.push(this);
}

Salmon.prototype.calcCustEachHour = function () {

  for (let i = 0; i < hours.length; i++) {
    this.customereachhour.push(random(this.mincust, this.maxcust));
  }
}
Salmon.prototype.calcCookiesHour = function () {
  for (let j = 0; j < hours.length; j++) {
    this.cookieseachhour.push(Math.ceil(this.avgCookies * this.customereachhour[j]));
    // this.total += this.cookieseachhour[i];
    this.totalCookiesPerDay += this.cookieseachhour[j];
  }

}

let Seattle = new Salmon('Seattle', 23, 65, 6.3);
let Tokyo = new Salmon('Tokyo', 3, 24, 1.2);
let Dubai = new Salmon('Dubai', 11, 38, 3.7);
let Paris = new Salmon('Paris', 20, 38, 2.3);
let Lima = new Salmon('Lima', 2, 16, 4.6);

console.log(salmonarray);


let parent = document.getElementById('result');
let tableElement = document.createElement('table');
parent.appendChild(tableElement);

function makeHeader() {
  let headerRow = document.createElement('tr');
  tableElement.appendChild(headerRow);
  
  let firstTh = document.createElement('th');
  headerRow.appendChild(firstTh);
  firstTh.textContent = 'Name';

  for (let i = 0; i < hours.length; i++) {
    let thElement = document.createElement('th')
    headerRow.appendChild(thElement);
    thElement.textContent = hours[i];

  }

  let lastTh = document.createElement('th');
  headerRow.appendChild(lastTh);
  lastTh.textContent = 'Daily Location Total';

}

Salmon.prototype.render = function () {
  let dataRow = document.createElement('tr');
  tableElement.appendChild(dataRow);

  let nameData = document.createElement('td');
  dataRow.appendChild(nameData);
  nameData.textContent = this.name;

  for (let i = 0; i < hours.length; i++) {
    let tdElement = document.createElement('td');
    dataRow.appendChild(tdElement);
    tdElement.textContent = this.cookieseachhour[i];

  }
  let totaldailyforeachshop = document.createElement('td');
  dataRow.appendChild(totaldailyforeachshop);
  totaldailyforeachshop.textContent = this.totalCookiesPerDay;

}
for (let i = 0; i < salmonarray.length; i++) {
  salmonarray[i].calcCustEachHour();
  salmonarray[i].calcCookiesHour();
  // salmonarray[i].render();
}
function makeFooter() {
  let footerRaw = document.createElement("tr");
  tableElement.appendChild(footerRaw);

  let footeRth = document.createElement('th');
  footerRaw.appendChild(footeRth);
  footeRth.textContent = 'Totals';

  let megaTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    let totaleachHour = 0;
    for (let j = 0; j < salmonarray.length; j++) {
      totaleachHour += salmonarray[j].cookieseachhour[i];
      megaTotal += salmonarray[j].cookieseachhour[i];
    }
    console.log(totaleachHour);
    let footerdata = document.createElement('td');
    footerRaw.appendChild(footerdata);
    footerdata.textContent = totaleachHour;

  }
  let finaltd = document.createElement('td');
  footerRaw.appendChild(finaltd);
  finaltd.textContent = megaTotal;

}

const SalmonForm = document.getElementById('SalmonForm');
SalmonForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  console.log(event);
  const newName = event.target.namefield.value;
  console.log(newName);

  let NewMinimum = event.target.mincust.value;
  NewMinimum= parseInt(NewMinimum);
  console.log(NewMinimum);

  let NewMaximum = event.target.maxcust.value;
  NewMaximum= parseInt(NewMaximum);
  console.log(NewMaximum);

  let NewAvg = event.target.avgCookies.value;
  NewAvg= parseFloat(NewAvg);
  console.log(NewAvg);

  const newsalmon = new Salmon(newName, NewMinimum, NewMaximum, NewAvg)
  console.log(newsalmon, "salmon");



  newsalmon.calcCustEachHour();
  newsalmon.calcCookiesHour();
  let deleted= tableElement.rows.length - 1
  tableElement.deleteRow(deleted);
  
  newsalmon.render();

  makeFooter();

  
}
makeHeader();

for (let i = 0; i < salmonarray.length; i++) {
  salmonarray[i].render();
}
makeFooter();

// const hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];

// function random(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }


// let Seattle = {
//     locationName: 'Seattle',
//     mincust: 23,
//     maxcust: 65,
//     avgcookies: 6.3,
//     customereachhour: [],
//     cookieseachhour: [],
//     calcCustEachHour: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.customereachhour.push(random(this.mincust, this.maxcust));

//         }
//         console.log(this.customereachhour);
//     },
//     calcCookiesHour: function () {
//         for (let j = 0; j < hours.length; j++) {
//             this.cookieseachhour.push(Math.floor(this.avgcookies * this.customereachhour[j]));
//         }
//         console.log(this.cookieseachhour);

//     }, render:function(){
//         let parent= document.getElementById('result');
//         let shopname = document.createElement('h3');
//         parent.appendChild(shopname);
//         shopname.textContent= this.locationName;
//         let unorderedlist = document.createElement('ul');
//         parent.appendChild(unorderedlist);
//         for (let i = 0; i < hours.length ;i++) {
//             let listItem = document.createElement('li');
//             unorderedlist.appendChild(listItem);
//             listItem.textContent= `${hours[i]}: ${this.cookieseachhour[i]} cookies `

//         }

//     }
// }


// Seattle.calcCustEachHour();
// Seattle.calcCookiesHour();
// Seattle.render();

// // ===================================Tokyo=========================================

// function random(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }


// let Tokyo = {
//     locationName: 'Tokyo',
//     mincust: 3,
//     maxcust: 24,
//     avgcookies: 1.2,
//     customereachhour: [],
//     cookieseachhour: [],
//     calcCustEachHour: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.customereachhour.push(random(this.mincust, this.maxcust));

//         }
//         console.log(this.customereachhour);
//     },
//     calcCookiesHour: function () {
//         for (let j = 0; j < hours.length; j++) {
//             this.cookieseachhour.push(Math.floor(this.avgcookies * this.customereachhour[j]));
//         }
//         console.log(this.cookieseachhour);

//     }, render:function(){
//         let parent= document.getElementById('result');
//         let shopname = document.createElement('h3');
//         parent.appendChild(shopname);
//         shopname.textContent= this.locationName;
//         let unorderedlist = document.createElement('ul');
//         parent.appendChild(unorderedlist);
//         for (let i = 0; i < hours.length ;i++) {
//             let listItem = document.createElement('li');
//             unorderedlist.appendChild(listItem);
//             listItem.textContent= `${hours[i]}: ${this.cookieseachhour[i]} cookies `

//         }

//     }
// }


// Tokyo.calcCustEachHour();
// Tokyo.calcCookiesHour();
// Tokyo.render();

// // ===================================Dubai=========================================
// function random(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }


// let Dubai = {
//     locationName: 'Dubai',
//     mincust: 11,
//     maxcust: 38,
//     avgcookies: 3.7,
//     customereachhour: [],
//     cookieseachhour: [],
//     calcCustEachHour: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.customereachhour.push(random(this.mincust, this.maxcust));

//         }
//         console.log(this.customereachhour);
//     },
//     calcCookiesHour: function () {
//         for (let j = 0; j < hours.length; j++) {
//             this.cookieseachhour.push(Math.floor(this.avgcookies * this.customereachhour[j]));
//         }
//         console.log(this.cookieseachhour);

//     }, render:function(){
//         let parent= document.getElementById('result');
//         let shopname = document.createElement('h3');
//         parent.appendChild(shopname);
//         shopname.textContent= this.locationName;
//         let unorderedlist = document.createElement('ul');
//         parent.appendChild(unorderedlist);
//         for (let i = 0; i < hours.length ;i++) {
//             let listItem = document.createElement('li');
//             unorderedlist.appendChild(listItem);
//             listItem.textContent= `${hours[i]}: ${this.cookieseachhour[i]} cookies `

//         }

//     }
// }


// Dubai.calcCustEachHour();
// Dubai.calcCookiesHour();
// Dubai.render();
// // ===================================Paris=========================================
// function random(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }


// let Paris = {
//     locationName: 'Paris',
//     mincust: 20,
//     maxcust: 38,
//     avgcookies: 2.3,
//     customereachhour: [],
//     cookieseachhour: [],
//     calcCustEachHour: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.customereachhour.push(random(this.mincust, this.maxcust));

//         }
//         console.log(this.customereachhour);
//     },
//     calcCookiesHour: function () {
//         for (let j = 0; j < hours.length; j++) {
//             this.cookieseachhour.push(Math.floor(this.avgcookies * this.customereachhour[j]));
//         }
//         console.log(this.cookieseachhour);

//     }, render:function(){
//         let parent= document.getElementById('result');
//         let shopname = document.createElement('h3');
//         parent.appendChild(shopname);
//         shopname.textContent= this.locationName;
//         let unorderedlist = document.createElement('ul');
//         parent.appendChild(unorderedlist);
//         for (let i = 0; i < hours.length ;i++) {
//             let listItem = document.createElement('li');
//             unorderedlist.appendChild(listItem);
//             listItem.textContent= `${hours[i]}: ${this.cookieseachhour[i]} cookies `

//         }

//     }
// }


// Paris.calcCustEachHour();
// Paris.calcCookiesHour();
// Paris.render();
// // ===================================Lima=========================================
// function random(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }


// let Lima = {
//     locationName: 'Lima',
//     mincust: 2,
//     maxcust: 16,
//     avgcookies: 4.6,
//     customereachhour: [],
//     cookieseachhour: [],
//     calcCustEachHour: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.customereachhour.push(random(this.mincust, this.maxcust));

//         }
//         console.log(this.customereachhour);
//     },
//     calcCookiesHour: function () {
//         for (let j = 0; j < hours.length; j++) {
//             this.cookieseachhour.push(Math.floor(this.avgcookies * this.customereachhour[j]));
//         }
//         console.log(this.cookieseachhour);

//     }, render:function(){
//         let parent= document.getElementById('result');
//         let shopname = document.createElement('h3');
//         parent.appendChild(shopname);
//         shopname.textContent= this.locationName;
//         let unorderedlist = document.createElement('ul');
//         parent.appendChild(unorderedlist);
//         for (let i = 0; i < hours.length ;i++) {
//             let listItem = document.createElement('li');
//             unorderedlist.appendChild(listItem);
//             listItem.textContent= `${hours[i]}: ${this.cookieseachhour[i]} cookies `

//         }

//     }
// }


// Lima.calcCustEachHour();
// Lima.calcCookiesHour();
// Lima.render();