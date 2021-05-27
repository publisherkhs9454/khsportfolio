$(function(){
    $('.trigger').click(function(){
        $(this).toggleClass('active')
        $('.gnb').toggleClass('active')
    })
    $('section').click(function(){
        $('.gnb').removeClass('active')
        $('.trigger').removeClass('active')
    })
    $(window).scroll(function(){
        if ($(window).scrollTop() > 50) {
            $('header').addClass('active')
            $('.gototop').addClass('active')
        }
        else {
            $('header').removeClass('active')
            $('.gototop').removeClass('active')
        }
    })
    /* smooth scroll */
    $('.menu a').click(function(e){
      $.scrollTo(this.hash || 0, 900)
    })

    /* History Slider */
    $('.historyslider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    })
    /* Faq Accordion */
    $('.accordion-box').click(function(){
        $(this).children('.accordion-text').stop().slideToggle()
    })
    /* Artist Slider */
    $('.artist-image').slick({
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
    })
})