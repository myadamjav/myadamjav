$(document).ready(function() {
    var win = true;
    var end = false;
    var instruction = "Click the \"S\" to begin.";
    $(".boundary").each(function () {
        $(this).mouseenter(function(){
            if(end == false) {
                $(this).addClass("youlose");
                win = false;
            }    
        });
    });    
        
    $("#start").click(function(){
        $(".boundary").each(function () {
            $(this).removeClass("youlose");
            win = true;
            end = false;
            $("#status").text(instruction);
        }); 
    });
    
    $("#end").mouseenter(function() {
        end = true;
        if(win === true) $("#status").text("You win! :]. " + instruction);
        else $("#status").text("You lose! " + instruction);
    });
    
    $("#maze").mouseleave(function() {
        $(".boundary").each(function() {
            if(end == false) {
                $(this).addClass("youlose");
                win = false;
            }    
        })
    });
}); 