// Hamburger Menu Scripts

const $body = document.body;
const $bar = document.getElementById('bar');

$('#menu').click(function(){
    $body.classList.toggle('show');
    $bar.classList.toggle('active');
});
