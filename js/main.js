
$('.benefits-column').matchHeight({
    byRow: false,
    property: 'height',
    target: null,
    remove: false
});


var header = $('.header'),
scrollPrev = 0;

$(window).scroll(function() {
  var scrolled = $(window).scrollTop();
 
  if ( scrolled > 100 && scrolled > scrollPrev ) {
	header.addClass('header-out')
			.removeClass('header-in');
  } else {
	header.removeClass('header-out')
			.addClass('header-in');

	}
  scrollPrev = scrolled;
});



$('.header__burger').click(function(event){
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
});

$('.div1').hover(function(){
		$(this).addClass('hovered');
	  }, function() {
		$(this).removeClass('hovered');
});


	//   $('p:first-of-type').css({'border':'2px solid red'});

	// $('[class]:first').css({'border':'2px solid red'});



