$(function(){
    // Home Slick JS //
    $('.slide-show').slick({
        infinite: true, 
        dots: false, 
        autoplay: true, 
        autoplaySpeed: 3000, 
        fade: true, 
        speed: 1000, 
        pauseOnHover: false 
    });
        // Event Slick JS //
        $('.mockupslidebox').slick({
            infinite: true, 
            dots: true, 
            autoplay: true, 
            autoplaySpeed: 2000, 
            speed: 1000, 
        });
    // Home Typing JS //
    $('#typing').typeIt({
        strings: ["CUSTOMER", "CHALLENGE", "COLLABORATION", "PEOPLE", "GLOBALITY", "HYUNDAI MOTORS", ], 
        speed: 100, 
        autoStart: true, 
        breakLines: false, 
    });
    // Wow Scroll Animation //
    wow = new WOW({
        boxClass: 'wow',
        offset: 150,
        mobile: true
    })
    wow.init()
})
$(function(){
    // HEADER //
    $('.trigger').click(function(){
        $(this).toggleClass('active')
        $('.gnb').toggleClass('active')
    })
    $('.gnb a').click(function(){
        $('.gnb, .trigger').removeClass('active')
    })
    $('section').click(function(){
        $('.gnb, .trigger').removeClass('active')
    })
    // FAQ //
    $('.faq-desc').eq(0).show()
    $('.faq-box').click(function(){
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
        $(this).children('.faq-title').addClass('active')
        $(this).children('.faq-desc').stop().slideDown()
        $(this).siblings().children('.faq-desc').stop().slideUp()
        $(this).siblings().children('.faq-title').removeClass('active')
    })
    // LINE UP //
    $('.accordian-tap').click(function(){
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
        var lineup = $(this).attr('data-alt')
        $('.accordian-desc').removeClass('active')
        $('#' + lineup).addClass('active')
    })
    // Event //
    $('.video-frame').click(function(){
        $('.iframe-box').fadeIn()
        $('body').addClass('active')
    })
    $('.close-modal').click(function(){
        $('.iframe-box').fadeOut()
        $('body').removeClass('active')
    })
    // GO TO TOP //
    $(window).scroll(function(){
        if($(window).scrollTop() > 100) {
            $('.gototop').addClass('active')
        }
        else {
            $('.gototop').removeClass('active')
        }
    })
})