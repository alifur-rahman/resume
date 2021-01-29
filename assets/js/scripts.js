$(document).ready(function () {
    // $('.nav-icon').click(function(){
    // 	$('.header_menu_area ul').slideToggle(1000);
    // 	return false;
    // });

    $('.show-nav').click(function () {
        $('.responsive-menu').animate({
            'left': '0%',
        }, 500);
        $(this).css({
            'display': 'none',
        });
        $('.close-nav').css({
            'display': 'block',
        });
        return false;

    });


    $('.close-nav').click(function () {
        $('.responsive-menu').animate({
            'left': '-100%',
        }, 500);
        $(this).css({
            'display': 'none',
        });
        $('.show-nav').css({
            'display': 'block',
        });

        return false;

    });

    //color changer JS modification          
    $('.single_portfolio').click(function () {
        $('.color-changer-area').animate({
            'top': '30%'
        }, 1000);
    });
    $('.slideshow nav .icon.nav-close').click(function(){
        $('.color-changer-area').animate({
            'top': '50%'
        }, 1000);
    });


 
   



});