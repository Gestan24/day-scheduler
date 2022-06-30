var currentDayEl = document.querySelector("#currentDay");

currentDayEl.textContent = moment().format('dddd, MMMM Do ');

var occasions = [];

var hourText = document.querySelector(".description").textContent;



var saveOccasions = function () {

    localStorage.setItem("occasions", JSON.stringify(occasions));

};

var loadOccasions = function (i) {

    var savedOccasions = JSON.parse(localStorage.getItem("occasions"));

    $("h3").each(function () {

        var time = $(this).text();

        var hourText = $(this).siblings(".description").val();


        for (var i = 0; i < savedOccasions.length; i++) {

            if (savedOccasions[i].hour == time) {

                hourText = savedOccasions[i].text;
                console.log(hourText);

                $(this).siblings(".description").append(hourText);
            
            }
        
        };
    
    });

};


$(".saveBtn").click(function (event) {

    var hourText = $(this).siblings(".description").val();

    console.log("hourText", hourText);

    var time = $(this).siblings(".hour").text();

    console.log(time);

    occasions.push({

        text: hourText,

        hour: time

    });

    console.log(occasions);



    saveOccasions();

})










loadOccasions();