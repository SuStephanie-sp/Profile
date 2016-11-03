
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

    $(".navbar_toggle_line").addClass("turnOn"); $(".turnOn").hide();
});

$(function(){
    $(window).scroll(function(){
        var $bodyTop=$("body").scrollTop();
        var nav = $(".nav_wrapper");
        if($bodyTop>85) {
            nav.addClass("fixed");
        }
        else {
            nav.removeClass("fixed");
        }
    });
});


$(function(){

    var $body=$("body");

    $(".stephanie").css("cursor","pointer").on("click",function(){
        $body.animate({
            scrollTop:0
        },500);
    });
    $(".pageTo").each(function(){
        $(this).on("click",function(){
            var className = $(this).attr("class").split(' ')[1];
            var targetTop = $("section."+className).offset().top;
            $body.animate({
                scrollTop: targetTop
            },1000);
        });
    });
    

});


