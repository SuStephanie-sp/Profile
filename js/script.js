
//PopUp示意
$(function (){
    $(".btn[pop]").on("click",function(){
        $(".pop_details").css({opacity:1}).fadeIn();
        $("html").css("overflow", "hidden");
    });
    $(".pop_details").on("click",function(){
        $(this).animate({
            "opacity":0
        },500).fadeOut();
        $("html").css("overflow","");
    });

    $(".turnOn").hide();
});