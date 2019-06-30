// Quick View Popup

$(".popup").click(function(){
    console.log($(this).next());
    $(this).next().fadeIn().css("display", "grid");
});

$(".close-quick-view").click(function(){
    console.log($(this).parent());
    $(this).parent().fadeOut();
});

$('.gallery-img').click(function(){
    console.log($(this).children());
    if ($(this).children().attr('class') === $('.thumb-front').attr('class')){
        $('.guitar-front').fadeIn();
        $('.guitar-back').css('display', 'none');
    }else{
        $('.guitar-back').fadeIn();
        $('.guitar-front').css('display', 'none');
    };
});