$(document).ready(function(){
  $(window).bind('scroll', function() {
    var navHeight = $("#main_overlay").height();
    var windscroll = $(window).scrollTop();
     if (windscroll >= navHeight) {
        $('#sticky_nav').addClass('goToTop')
        $('section').each(function(i) {
            if ($(this).position().top <= windscroll - navHeight) {
                $('nav a.active').removeClass('active');
                $('nav a').eq(i).addClass('active');
            }
        });

    } else {
       $('#sticky_nav').removeClass('goToTop')
       $('nav a.active').removeClass('active');
       $('nav a:first').addClass('active');
    }    
  });
});