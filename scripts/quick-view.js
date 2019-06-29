// Quick View Popup

$(".popup").click(function(){
    console.log($(this).next());
    $(this).next().fadeIn().css("display", "grid");
});

$(".close-quick-view").click(function(){
    console.log($(this).parent());
    $(this).parent().fadeOut();
})