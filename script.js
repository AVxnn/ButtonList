let b = 0;

$('.ripple').on('click', function(event){
    $(this).append('<span class="ripple-effect">');
    $(this).find('.ripple-effect').css({
        left:event.pageX - $(this).position().left,
        top:event.pageY - $(this).position().top
    }).animate({
        opacity: 0,
    }, 1500, function(){
        $(this).remove();
    });
});

$('.dark-theme').on('click', function(){

    if (i == 1){
        $('body').toggleClass('night');
        $('.dark-theme').text('Dark Theme');
        i--;

    } else  {
        $('body').toggleClass('night');
        $('.dark-theme').text('White Theme');
        i++;
    }
})

$('.btn').on('mouseenter', function(){
    $('.cursor').addClass('cursor-active');
    $('.btn').on('mouseleave', function(){
        $('.cursor').removeClass('cursor-active');
    })
})
$('.btn-11').on('mouseenter', function(){
    $('.cursor').addClass('cursor-active');
    $('.btn-11').on('mouseleave', function(){
        $('.cursor').removeClass('cursor-active');
    })
})
$('.btn-7').on('mouseenter', function(){
    $('.cursor').addClass('cursor-active');
    $('.btn-7').on('mouseleave', function(){
        $('.cursor').removeClass('cursor-active');
    })
})