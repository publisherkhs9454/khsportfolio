$(function(){
    // Login header //
    $('.laguage-btn').click(function(){
        $('.language-item a').stop().slideToggle()
    })
    // slick. js section-title //
    $('.section-title-slick').slick({
        dots: true,
        infinite: true,
        fade: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000
      });
    // reservation-desc //
    $('.reservation-desc a').mouseenter(function(){
        var imageChange = $(this).attr('data-image')
        $('.reservation-image img').attr('src', imageChange)
    })
})