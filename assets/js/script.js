var hoursText = [

    document.querySelector("[id='9-am-text']"),

    document.querySelector("[id='10-am-text']"),

    document.querySelector("[id='11-am-text']"),

    document.querySelector("[id='12-pm-text']"),

    document.querySelector("[id='1-pm-text']"),

    document.querySelector("[id='2-pm-text']"),

    document.querySelector("[id='3-pm-text']"),

    document.querySelector("[id='4-pm-text']"),

    document.querySelector("[id='5-pm-text']"),

]

var currentDayEl = document.querySelector("#currentDay");

currentDayEl.textContent = moment().format('dddd, MMMM Do ');

var occasions = [];



var saveOccasions = function() {

    localStorage.setItem("occasions", JSON.stringify(occasions));

};

var loadOccasions = function(i) {

    var savedOccasions = JSON.parse(localStorage.getItem("occasions"));

    console.log(savedOccasions);
    for(i = 0; i < hoursText.length; i++) {
        
        hoursText[i].value = "hello world"

    }
    
}


$(".saveBtn").click(function (event) {

    var hourText = $(this).siblings(".description").val();

    console.log("hourText", hourText);

    var time = $(this).siblings(".hour").text();

    console.log(time);

    occasions.push( {

        text: hourText,

        hour: time 

    });

    console.log(occasions);

    

    saveOccasions();

    

    

    
    
})








loadOccasions();