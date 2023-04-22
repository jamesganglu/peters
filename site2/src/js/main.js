$(function(){
	$('.carousel').slick({
		slidesToShow: 1,
		/*dots:true,
		autoplay: true,*/
		fade: true,
		infinite: true,
	});

	$('.navbar-toggler').on('click', function(e){
		e.preventDefault();
		$('body').toggleClass('show-menu');
	})
	$('.search-toggle').on('click', function(e){
		e.preventDefault();
		$('body').toggleClass('show-search-bar');
	})
})