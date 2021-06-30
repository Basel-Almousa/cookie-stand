'use strict'
const hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let Seattle = {
    locationName: 'Seattle',
    mincust: 23,
    maxcust: 65,
    avgcookies: 6.3,
    customereachhour: [],
    cookieseachhour: [],
    total: 0,
    calcCustEachHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customereachhour.push(random(this.mincust, this.maxcust));

        }
        console.log(this.customereachhour);
    },
    calcCookiesHour: function () {
        for (let j = 0; j < hours.length; j++) {
            this.cookieseachhour.push(Math.floor(this.avgcookies * this.customereachhour[j]));
            this.total += this.cookieseachhour[j];
        }
        console.log(this.cookieseachhour);

    }, render: function () {
        let parent = document.getElementById('result');
        let shopname = document.createElement('h3');
        parent.appendChild(shopname);
        shopname.textContent = this.locationName;
        let unorderedlist = document.createElement('ul');
        parent.appendChild(unorderedlist);
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            unorderedlist.appendChild(listItem);
            listItem.textContent = `${hours[i]}: ${this.cookieseachhour[i]} cookies `

        }
        let totalItem = document.createElement('li');
        unorderedlist.appendChild(totalItem);
        totalItem.textContent = `Total: ${this.total} cookies`;


    }
}


Seattle.calcCustEachHour();
Seattle.calcCookiesHour();
Seattle.render();

// ===================================Tokyo=========================================

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let Tokyo = {
    locationName: 'Tokyo',
    mincust: 3,
    maxcust: 24,
    avgcookies: 1.2,
    customereachhour: [],
    cookieseachhour: [],
    total: 0,

    calcCustEachHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customereachhour.push(random(this.mincust, this.maxcust));

        }
        console.log(this.customereachhour);
    },
    calcCookiesHour: function () {
        for (let j = 0; j < hours.length; j++) {
            this.cookieseachhour.push(Math.floor(this.avgcookies * this.customereachhour[j]));
            this.total += this.cookieseachhour[j];

        }
        console.log(this.cookieseachhour);

    }, render: function () {
        let parent = document.getElementById('result');
        let shopname = document.createElement('h3');
        parent.appendChild(shopname);
        shopname.textContent = this.locationName;
        let unorderedlist = document.createElement('ul');
        parent.appendChild(unorderedlist);
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            unorderedlist.appendChild(listItem);
            listItem.textContent = `${hours[i]}: ${this.cookieseachhour[i]} cookies `
            
        }
        let totalItem = document.createElement('li');
            unorderedlist.appendChild(totalItem);
            totalItem.textContent = `Total: ${this.total} cookies`;


    }
}


Tokyo.calcCustEachHour();
Tokyo.calcCookiesHour();
Tokyo.render();

// ===================================Dubai=========================================
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let Dubai = {
    locationName: 'Dubai',
    mincust: 11,
    maxcust: 38,
    avgcookies: 3.7,
    customereachhour: [],
    cookieseachhour: [],
    total: 0,

    calcCustEachHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customereachhour.push(random(this.mincust, this.maxcust));

        }
        console.log(this.customereachhour);
    },
    calcCookiesHour: function () {
        for (let j = 0; j < hours.length; j++) {
            this.cookieseachhour.push(Math.floor(this.avgcookies * this.customereachhour[j]));
            this.total += this.cookieseachhour[j];

        }
        console.log(this.cookieseachhour);

    }, render: function () {
        let parent = document.getElementById('result');
        let shopname = document.createElement('h3');
        parent.appendChild(shopname);
        shopname.textContent = this.locationName;
        let unorderedlist = document.createElement('ul');
        parent.appendChild(unorderedlist);
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            unorderedlist.appendChild(listItem);
            listItem.textContent = `${hours[i]}: ${this.cookieseachhour[i]} cookies `

        }
        let totalItem = document.createElement('li');
            unorderedlist.appendChild(totalItem);
            totalItem.textContent = `Total: ${this.total} cookies`;

    }
}


Dubai.calcCustEachHour();
Dubai.calcCookiesHour();
Dubai.render();
// ===================================Paris=========================================
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let Paris = {
    locationName: 'Paris',
    mincust: 20,
    maxcust: 38,
    avgcookies: 2.3,
    customereachhour: [],
    cookieseachhour: [],
    total: 0,

    calcCustEachHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customereachhour.push(random(this.mincust, this.maxcust));

        }
        console.log(this.customereachhour);
    },
    calcCookiesHour: function () {
        for (let j = 0; j < hours.length; j++) {
            this.cookieseachhour.push(Math.floor(this.avgcookies * this.customereachhour[j]));
            this.total += this.cookieseachhour[j];

        }
        console.log(this.cookieseachhour);

    }, render: function () {
        let parent = document.getElementById('result');
        let shopname = document.createElement('h3');
        parent.appendChild(shopname);
        shopname.textContent = this.locationName;
        let unorderedlist = document.createElement('ul');
        parent.appendChild(unorderedlist);
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            unorderedlist.appendChild(listItem);
            listItem.textContent = `${hours[i]}: ${this.cookieseachhour[i]} cookies `

        }
        let totalItem = document.createElement('li');
            unorderedlist.appendChild(totalItem);
            totalItem.textContent = `Total: ${this.total} cookies`;

    }
}


Paris.calcCustEachHour();
Paris.calcCookiesHour();
Paris.render();
// ===================================Lima=========================================
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let Lima = {
    locationName: 'Lima',
    mincust: 2,
    maxcust: 16,
    avgcookies: 4.6,
    customereachhour: [],
    cookieseachhour: [],
    total: 0,

    calcCustEachHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customereachhour.push(random(this.mincust, this.maxcust));

        }
        console.log(this.customereachhour);
    },
    calcCookiesHour: function () {
        for (let j = 0; j < hours.length; j++) {
            this.cookieseachhour.push(Math.floor(this.avgcookies * this.customereachhour[j]));
            this.total += this.cookieseachhour[j];

        }
        console.log(this.cookieseachhour);

    }, render: function () {
        let parent = document.getElementById('result');
        let shopname = document.createElement('h3');
        parent.appendChild(shopname);
        shopname.textContent = this.locationName;
        let unorderedlist = document.createElement('ul');
        parent.appendChild(unorderedlist);
        for (let i = 0; i < hours.length; i++) {
            let listItem = document.createElement('li');
            unorderedlist.appendChild(listItem);
            listItem.textContent = `${hours[i]}: ${this.cookieseachhour[i]} cookies `

        }
        let totalItem = document.createElement('li');
            unorderedlist.appendChild(totalItem);
            totalItem.textContent = `Total: ${this.total} cookies`;

    }
}


Lima.calcCustEachHour();
Lima.calcCookiesHour();
Lima.render();