// Slide Show Scripts

// const $prev = document.getElementById('slideshow-prev');
// const $next = document.getElementById('slideshow-next');


var slideIndex=0;
var $slides = $('.slides');
var $dot = $('.dot');
// console.log($slides);

showSlides();

$('.slideshow-next').click(function(){
    // console.log(slideIndex);
    slideIndex++;
    showSlides();
});

$('.slideshow-prev').click(function(){
    // console.log(slideIndex);
    slideIndex--;

    if(slideIndex < 0){
        slideIndex = $slides.length - 1;
    }

    showSlides();

});

$('.dot').click(function(){
    console.log($(this));
    if ($(this).hasClass('dot-1')){
        //first image
        console.log("true");
        for (i=0; i<$slides.length; i++){
            $slides[i].style.display="none";
        }

        $slides[0].style.display="block";
    
    }else if($(this).hasClass('dot-2')){
        //second image
        for (i=0; i<$slides.length; i++){
            $slides[i].style.display="none";
        }

        $slides[1].style.display="block";

    }else if($(this).hasClass('dot-3')){
        //third image
        for (i=0; i<$slides.length; i++){
            $slides[i].style.display="none";
        }

        $slides[2].style.display="block";
    }else{
        //fourth image
        for (i=0; i<$slides.length; i++){
            $slides[i].style.display="none";
        }

        $slides[3].style.display="block";
    }
});
    


function showSlides(){
    // console.log("show slides: ", slideIndex);

    for (i=0; i<$slides.length; i++){
        $slides[i].style.display="none";
    }

    if(slideIndex === $slides.length){
        slideIndex = 0;
        
    }    
    $slides[slideIndex].style.display = "block";
    // setTimeout(showSlides, 3000);
};




















