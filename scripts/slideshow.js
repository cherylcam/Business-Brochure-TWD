// Slide Show Scripts

const $prev = document.getElementById('slideshow-prev');
const $next = document.getElementById('slideshow-next');

$('#slideshow').click(function(){
    $prev.classList.click
});

var slideIndex=0;
var $slides = $('.slides');
showSlides();

function showSlides(){
    console.log(slideIndex);
    for (i=0; i<$slides.length; i++){
        $slides[i].style.display="none";
    }

    if(slideIndex == $slides.length){
        slideIndex = 0;
        $slides[slideIndex].style.display = "block";
        slideIndex++;
        setTimeout(showSlides,1000);
    }else{
        $slides[slideIndex].style.display = "block";
        slideIndex++;
        setTimeout(showSlides, 3000);
    }
}