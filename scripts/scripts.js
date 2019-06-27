// Hamburger Menu Scripts

$('#bar').on('click', function(e) {
	e.preventDefault();
	$(this).toggleClass('active');
});
