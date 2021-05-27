$(function(){
    // Header //
    $('.trigger').click(function(){
        $(this).toggleClass('active')
        $('header').toggleClass('active')
    })
    $('section').click(function(){
        $('.trigger, header').removeClass('active')
    })
    // HCJ Skill Section Iframe Modal //
    $('.hcjclick01').click(function(){
        $('.iframesub01-modal').fadeIn()
        $('body').addClass('active')
    })
    $('.hcjclick02').click(function(){
        $('.iframesub02-modal').fadeIn()
        $('body').addClass('active')
    })
    $('.hcjclick03').click(function(){
        $('.iframesub03-modal').fadeIn()
        $('body').addClass('active')
    })
    $('.hcjclick04').click(function(){
        $('.iframesub04-modal').fadeIn()
        $('body').addClass('active')
    })
    $('.hcjclick05').click(function(){
        $('.iframesub05-modal').fadeIn()
        $('body').addClass('active')
    })
    $('.hcjclick06').click(function(){
        $('.iframesub06-modal').fadeIn()
        $('body').addClass('active')
    })
    $('.close-modal').click(function(){
        $('.iframe-modal').fadeOut()
        $('body').removeClass('active')
    })
    // iframe sub03 //
    $('.stars i').click(function(){
        $(this).addClass('active')
        $(this).prevAll().addClass('active')
        $(this).nextAll().removeClass('active')

        var num = $(this).index()
        var starRate = num + 1
        if ( starRate == 1 ) {
            $('.print').html('<img src="../image/star-lv1.png">' + '별로에요')
        } 
        else if ( starRate == 2) {
            $('.print').html('<img src="../image/star-lv2.png">' + '그저그래요')
        }
        else if (starRate == 3) {
            $('.print').html('<img src="../image/star-lv3.png">' + '보통이에요')

        }
        else if (starRate == 4) {
            $('.print').html('<img src="../image/star-lv4.png">' + '만족해요')
        }
        else {
            $('.print').html('<img src="../image/star-lv5.png">' + '매우만족해요')
        }
    })
    // iframe sub04 //
    $('.iframe04-tabmenu li').click(function(){
        $(this).addClass('active')
        $(this).siblings().removeClass('active')

        var tab = $(this).attr('data-text')
        $('.iframe04-item').removeClass('active')
        $('#' + tab).addClass('active')
    })
    // iframe sub06 //
    $('.iframe06-title').click(function(){
        $(this).addClass('active')
        $(this).siblings('.iframe06-title').removeClass('active')
        $(this).siblings('.iframe06-desc').slideUp()
        $(this).next().stop().slideDown()

        var imageChange = $(this).attr('data-image')
        $('.iframe06-images img').attr('src', imageChange)
    })
})
$(function(){
    // Wow Scroll Animation //
    wow = new WOW({
        boxClass: 'wow',
        offset: 150,
        mobile: true
    })
    wow.init()
})
