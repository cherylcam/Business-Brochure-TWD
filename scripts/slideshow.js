// Slide Show Scripts

var slideIndex=0;
var $slides = $('.slides');
var $dot = $('.dot');
var timer = null;
var start = true;
var startPrev = true;
var startNext = false;
var fired = false;

showSlides();

$('.slideshow-next').click(function(){
    if(fired === true){
        return;
    }else{
        fired = true;
        console.log(fired);
        clearTimeout(timer);
        showSlides();
    }
    setTimeout(function(){
        fired = false;
        console.log(fired);
    }, 400)
});

$('.slideshow-prev').click(function(){
    if(fired === true){
        return;
    }else{
        fired = true;
        console.log(fired);
        clearTimeout(timer);
        prevSlide();
    }
    setTimeout(function(){
        fired = false;
        console.log(fired);
    }, 400)
});

$('.dot').click(function(){
    if($(this).index()+1 === slideIndex){
        return;
    }else{
        clearTimeout(timer);
        slideIndex = $(this).index();
        dot(slideIndex);
    }
});

function showSlides(){
    $('.dot').css('background-color', 'white');
    startPrev = true;

    if (startNext === true){
        slideIndex++;
        startNext = false;
    }

    if(slideIndex === $slides.length){
        slideIndex = 0;
    }  
    
    if (start === true){
        $slides.hide();
        $slides.eq(slideIndex).show();
        start = false;
    }else{
        $slides.eq(slideIndex-1).hide('slide', {direction: 'left'});
        $slides.eq(slideIndex).show('slide', {direction: 'right'});
    }

    $('.dot').eq(slideIndex).css('background-color', '#660000');
    slideIndex++;   
  
    timer = setTimeout(showSlides, 5000000);
};

function prevSlide(){
    $('.dot').css('background-color', 'white');
    startNext = true;

    if (startPrev === true){
        slideIndex = slideIndex - 2;
        startPrev = false;
    }else{
        slideIndex--;
    }

    if(slideIndex < 0){
        $slides.eq(0).hide('slide', {direction: 'right'});
        slideIndex = $slides.length - 1;
    }else if (slideIndex === 1){
        $slides.eq(slideIndex-1).hide('slide', {direction: 'right'});
    }

    $slides.eq(slideIndex+1).hide('slide', {direction: 'right'});
    $slides.eq(slideIndex).show('slide', {direction:'left'});
    
    $('.dot').eq(slideIndex).css('background-color', '#660000');

    timer = setTimeout(showSlides, 5000);
};

function dot(index){
    $slides.fadeOut();
    $slides.eq(index).fadeIn();
    $('.dot').css('background-color', 'white');
    $('.dot').eq(index).css('background-color', '#660000');
    showSlides();
}