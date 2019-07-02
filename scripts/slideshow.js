// Slide Show Scripts

var slideIndex=0;
var $slides = $('.slides');
var $dot = $('.dot');
var timer = null;
var start = true;
var startPrev = true;
var startNext = false;

showSlides();

$('.slideshow-next').click(function(){
    clearTimeout(timer);
    showSlides();
});

$('.slideshow-prev').click(function(){
    clearTimeout(timer);
    prevSlide();
});

$('.dot').click(function(){
    if ($(this).hasClass('dot-1')){
        // First Image
        clearTimeout(timer);
        slideIndex = 0;
        showSlides();
    
    }else if($(this).hasClass('dot-2')){
        // Second Image
        clearTimeout(timer);
        slideIndex = 1;
        showSlides()

    }else if($(this).hasClass('dot-3')){
        // Third Image
        clearTimeout(timer);
        slideIndex = 2;
        showSlides()

    }else{
        // Fourth Image
        clearTimeout(timer);
        slideIndex = 3;
        showSlides();
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
  
    timer = setTimeout(showSlides, 5000);
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