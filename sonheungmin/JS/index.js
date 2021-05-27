$('.nav-box .two').mouseenter(function(){
    $(this).children('.career-box').stop().slideDown()
})
 $('.nav-box .two').mouseleave(function(){
     $(this).children('.career-box').stop().slideUp()
 })
 $('#header label[for="hicon"]').click(function(){
     $(this).siblings('#nav-bar').stop().slideToggle();
 })
