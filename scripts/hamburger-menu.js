// Hamburger Menu Scripts

const $body = document.body;
const $bar = document.getElementById('bar');

$('#menu').click(function(e){
    e.preventDefault();
    $body.classList.toggle('show');
    $bar.classList.toggle('active');
});

