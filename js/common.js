function sideNav() {
    var sideRight = $(".header-top").width() / 2 + 20;
    $(".side-nav").css("right", "calc(50% - "+ sideRight+"px");
}

$(document).ready(function(){
    sideNav();
    
    $(".btn-menu").on("click", function(){
        $(".side-nav").fadeIn();
    });
    $(".btn-side-closed").on("click", function(){
        $(".side-nav").fadeOut();
    });
});

$(window).resize(function(){
    sideNav();
});