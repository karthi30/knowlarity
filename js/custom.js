 $("document").ready(function(e) {   
function goToByScroll(id){
        id = id.replace("link", "");
        $('html,body').animate({
            scrollTop: $("#"+id).offset().top-80},
            'slow');
    }

    $(".menu ul li a").click(function(e) { 
          // Prevent a page reload when a link is pressed
        e.preventDefault(); 
          // Call the scroll function
        goToByScroll($(this).attr("id"));           
    });
    $(".scroll").click(function(){
    $("html,body").animate({scrollTop:0},"slow");
        return false;
    });
     $(".slider").bxSlider({
         mode:'fade',
         auto:true,
         speed:500
     });
});