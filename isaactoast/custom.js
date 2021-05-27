$(function(){
    // Main image Slick js //
    $('.slider-inner').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 6000,
    })
    // ISSAC MENU Custom js & Slick js //
    $('.issac-list span').click(function(){
        $(this).addClass('active')
        $(this).siblings().removeClass('active')

        var result = $(this).attr('data-alt')
        $('.issac-slider').removeClass('active')
        $('#' + result).addClass('active')

        $('.issac-slider').slick('setPosition');
    })
    $('.issac-slider').slick({
        infinite: true,
        setPosition: 0,
        speed: 500,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768,
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
    // Header Js //
    $('.trigger').click(function(){
      $(this).toggleClass('active')
      $('.nav-menu').toggleClass('active')
    })
    $('.menu-items').click(function(){
      $('.sub-menu').stop().slideUp()
      $(this).children('.sub-menu').stop().slideToggle()
    })
    // gototop Js //
    $(window).scroll(function(){
      if ($(window).scrollTop() > 50) {
        $('.gototop').addClass('active')
      }
      else {
        $('.gototop').removeClass('active')
      }
    })
})
