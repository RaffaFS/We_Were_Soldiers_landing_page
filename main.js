$(document).ready(function(){

    //animações para o scroll da page

    $(document).on('click', 'a[href^="#story"]', function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    $(document).on('click', 'a[href^="#castCrew"]', function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    const tabs = $('.tabButton');
    const slides = $('.slides__group');

    tabs.each(function(index, tab){
        $(tab).on('click', function(){
            tabs.removeClass('active');
            $(this).addClass('active');

            slides.each(function(){
                $(this).removeClass('active');
            });
            slides.eq(index).addClass('active');
        });
    });

    $('.slides__group').slick({
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        autoplay: true,
        centerPadding: '0',
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        autoplaySpeed: 5000,
        responsive:[
            {
                breakpoint:768,
                settings:{
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings:{
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});