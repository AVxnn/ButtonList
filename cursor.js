let i = 0;
var YCursor = 0;
var cursor = document.getElementById('cursor');
document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    YCursor = e.clientY;
    cursor.style.left = x + 'px';
    cursor.style.top = y + window.scrollY + 'px';
})

$(window).on('scroll', function(r){
    cursor.style.top = YCursor + window.scrollY + 'px';
});

$('.remove-cursor').on('click', function(){
    if (i == 1){
        $('#cursor').css('display', 'block');
        $('body').css('cursor', 'none');
        $('a').css('cursor', 'none');

        $('.remove-cursor').text('Remove Cursor');
        console.log(i);
        i--;

    } else  {
        $('#cursor').css('display', 'none');
        $('body').css('cursor', 'default');
        $('a').css('cursor', 'default');
        $('.remove-cursor').text('Add Cursor');
        console.log(i);
        i++;
    }


})