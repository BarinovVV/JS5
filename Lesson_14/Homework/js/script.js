$(window).ready(function () {
    $('.modal').css('top', '-200px');
    $('[class *= main_btn], .main_nav li:eq(1)').on('click', function () {
        $('.overlay').animate({
            opacity: 'toggle'
        }, 1000);
        $('.modal').animate( {
            opacity: 'toggle',
            height: 'show',
            top: '0px'
        }, 1500);
    })

    $('.close').on('click', function () {
        $('.overlay').animate({
            opacity: 'toggle'
        }, 1500);
        $('.modal').animate( {
            opacity: 'toggle',
            top: '-200px',
            height: 'hide'
        }, 1000);
    })

});