var WIDTH;
var AMOUNT;
var RATE;
var INTERVAL;
$(document).ready(function() {
    $("#start").click(function() {
        reset();
        let count = parseInt($("input[name=count]").val());
        WIDTH = parseInt($("input[name=width]").val());
        AMOUNT = parseInt($("input[name=amount]").val());
        RATE = parseInt($("input[name=rate]").val());
        for(let i = 0; i < count; i++) {
            $("#container").append('<div class="circle"></div>');
        }
        $("#container div").each(function() {
            $(this).css({"width": WIDTH, "height": WIDTH});       
            $(this).click(function() {
                reset();
            });
        });
        INTERVAL = setInterval(runAnimation, RATE); 
    })
})

function reset() {
    clearInterval(INTERVAL);
    WIDTH = 100;
    AMOUNT = 10;
    RATE = 250;
    $("#container").empty();
}

function runAnimation() {
    WIDTH = WIDTH + AMOUNT;
    $("#container div").each(function() {
        $(this).css({"width": WIDTH, "height": WIDTH});       
    });
}

