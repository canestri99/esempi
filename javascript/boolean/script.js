// dom elemenet

const daysElm = document.querySelector('#days');
const hoursElm = document.querySelector('#hours');
const minutesElm = document.querySelector('#minutes');
const secondsElm = document.querySelector('#seconds');
const panelElem = document.querySelector('.panel');


// data di natale
const endDate = new Date("december 25 2022");
const endDateInMs = endDate.getTime();

// oggi in ms
const nowInMs = new Date().getTime();

const diff = endDateInMs - nowInMs;


// tabella in ms
const secondInMs = 1000;
const minutesInMs = 60 * secondInMs;
const hoursInMs = 60 * minutesInMs;
const daysInMs = 24 * hoursInMs;

// timer
const counterTimer =setInterval(timer, 1000);

function timer() {
    const nowInMs = new Date().getTime();
     
    const diff = endDateInMs - nowInMs;
if(diff > 0) {
daysElm.innerHTML = Math.floor(diff / daysInMs);
hoursElm.innerHTML = Math.floor((diff % daysInMs ) / hoursInMs);
minutesElm.innerHTML = Math.floor((diff % hoursInMs ) / minutesInMs);
secondsElm.innerHTML = Math.floor((diff % minutesInMs ) / secondInMs);
} else {
    clearInterval(timer);
    panelElem.innerHTML = "<h1>Buon Natale!!</h1>";
   }
} 