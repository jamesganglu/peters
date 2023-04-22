$(function(){
	$('.navbar-toggler').on('click',function(e){
		e.preventDefault();
		$('body').toggleClass('show-menu');
	})

	$('.nav-link').on('click', function(e){
		e.preventDefault();
		var link = $(this).attr('href')
		if(/^#/.test(link)){
			$('html, body').animate({
	            scrollTop: $(link).offset().top
	        }, 500);

		}else{
			window.open(link);
		}
		$('body').removeClass('show-menu');
	})

	$('.slide-show').slick({
	  centerMode: true,
	  //centerPadding: '60px',
	  slidesToShow: 3,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        slidesToShow: 1
	      }
	    }
	  ]
	});
})

AOS.init();