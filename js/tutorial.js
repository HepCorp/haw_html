$(document).ready(function() {
    var clicked = true;
    $("#downBtn").click(function(){
        if(clicked) {
            clicked = false;
            $(".chatPopUpWrap").animate({bottom:"-170px"}, 1000, "easeOutQuint");
            $("#downBtn").text("▲");
        } else {
            clicked = true;
            $(".chatPopUpWrap").animate({bottom:0}, 1000, "easeOutQuint");
            $("#downBtn").text("▼");
        }
        return false;
    });
});

/* easing 적용 안한 코드
 $(document).ready(function() {
     var clicked = true;
     $("#downBtn").click(function(){
         if(clicked) {
             clicked = false;
             $(".chatPopUpWrap").css({"bottom" : "-170px"});
             $("#downBtn").text("▲");
         } else {
             clicked = true;
             $(".chatPopUpWrap").css({"bottom" : 0});
             $("#downBtn").text("▼");
         }
         return false;
     });
 });
*/
