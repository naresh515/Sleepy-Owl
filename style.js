$(document).ready(function () {
    //Header Slider on both
    $('.slider_container').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
    });

    //Middle slider on mobile only
    $(".my:not(.slick-initialized)").slick({
        infinite: true,
        autoplay: true,
        speed: 500,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 1024,
                settings: "unslick"
            },
            {
                breakpoint: 1400,
                settings: "unslick",
            },
        ]
    });

    // Tab Img slider on mobile only
    $(".img:not(.slick-initialized)").slick({
        infinite: true,
        autoplay: false,
        speed: 500,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 1024,
                settings: "unslick"
            },
            {
                breakpoint: 1400,
                settings: "unslick",
            },
        ]
    });

    //Nav bar 
    $("#btn").click(function () {
        $(this).parent(".six").find("#btn1").slideToggle();
        $(this).parent(".six").find("#cart").slideToggle();
    });
    $("#btn1").click(function () {
        $(this).parent(".six").find("#btn1").slideToggle();
        $(this).parent(".six").find("#cart").slideToggle();
    });

    //Tabs
    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })

    $(".button11").click(function () {
        $("#btn1").slideToggle();
        $("#cart").slideToggle();
    });

    //accordin 
    $(".accordin-item").click(function () {
        $(this).parent(".accoridan").find(".main").slideToggle();
        $(this).parent(".accoridan").find(".accordin-item").slideUp();
    });
    $(".main").click(function () {
        $(this).parent(".accoridan").find(".main").slideToggle();
        $(this).parent(".accoridan").find(".accordin-item").slideDown();
    });
})