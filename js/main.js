/// <reference types="../@types/jquery" />


$(".openNav").click(function () {
    $('#leftMenu').animate({ width: '250px' }, 50);
    $("#home-content").animate({ marginLeft: '250px' }, 50)
});



$(".closebtn").click(function () {
    $("#leftMenu").animate({ width: '0px' }, 50)
    $("#home-content").animate({ marginLeft: '0px' }, 50)

});


/*scrollmenu*/
$("#leftMenu a").click(function () {

    var sectionId = $(this).attr("href");

    var positionOfSection = $(sectionId).offset().top;

    $("html , body").animate({ scrollTop: positionOfSection }, 2000);

})



/*Accordion*/



$("#sliderDown .toggle").click(function () {
    $(this).next(".inner").slideToggle(500);
});


/*counter*/

$(document).ready(function () {
    // Define the event date
    const eventDate = new Date("2025-10-25T00:00:00").getTime();

    // Update the countdown every second
    const countdownInterval = setInterval(function () {
        const now = new Date().getTime();
        const timeRemaining = eventDate - now;

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        $(".days").text(`${days} Days`);
        $(".hours").text(`${hours} Hours`);
        $(".minutes").text(`${minutes} Minutes`);
        $(".seconds").text(`${seconds} Seconds`);

    }, 1000);
});


/*textarea*/

var maxLength = 100;
$('textarea').keyup(function () {
    var length = $(this).val().length;
    var AmountLeft = maxLength - length;
    if (AmountLeft <= 0) {
        $("#chars").text("your available character finished");

    }
    else {

        $("#chars").text(AmountLeft);
    }
});



