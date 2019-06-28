// Quick View Popup

var quickview = $('.guitar button');
quickview.click(function(){
    console.log($(this));
    $(this).next().css('display', 'block');
});