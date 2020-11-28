$(document).ready(function() {
    // $('.nav-icon').click(function(){
    // 	$('.header_menu_area ul').slideToggle(1000);
    // 	return false;
    // });

    $('.show-nav').click(function() {
        $('.responsive-menu').animate({
            'left': '0%',
        }, 1500);
        $(this).css({
            'display': 'none',
        });
        $('.close-nav').css({
            'display': 'block',
        });
        return false;

    });


    $('.close-nav').click(function() {
        $('.responsive-menu').animate({
            'left': '-100%',
        }, 1500);
        $(this).css({
            'display': 'none',
        });
        $('.show-nav').css({
            'display': 'block',
        });

        return false;

    });

    //slip hover 
    $(function() {

        $('.portfolio_area').sliphover({
            backgroundColor: '#FFB400',
            verticalMiddle: false,

        });
    })




});