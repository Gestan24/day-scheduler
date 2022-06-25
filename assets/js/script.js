var occasion = [];

var displayDate = function () {

    var currentDayEl = document.querySelector("#currentDay");

    currentDayEl.textContent = moment().format('dddd, MMMM Do ');

}






displayDate();