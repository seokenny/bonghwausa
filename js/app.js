$(document).ready(function(){
	// if($(document).scrollTop()>50){
	// 	$('nav').addClass('nav_bg');
	// } else {
	// 	$('nav').removeClass('nav_bg');
	// }

	$(".nav_home").click(function(){
            $('html, body').stop().animate({ scrollTop: $('.scroll_home').offset().top}, 'slow');
	});
	$(".nav_catalog").click(function(){
            $('html, body').stop().animate({ scrollTop: $('.scroll_cat').offset().top}, 'slow');
	});
	$(".nav_contact").click(function(){
            $('html, body').stop().animate({ scrollTop: $('.scroll_contact').offset().top}, 'slow');
	});
	$('#moving_nav').hide();
	$('.black_shadow').hide();
	// $(window).scroll(function(){
	// 	var scroll = $(window).scrollTop();
	// 	if(scroll>0){
	// 		$('#top_nav').addClass('hidden');
	// 		$('#moving_nav').removeClass('hidden');
	// 	}
	// 	else {
	// 		$('#top_nav').removeClass('hidden');
	// 		$('#moving_nav').addClass('hidden');
	// 	}
	// });

	$('.nav_catalog').mouseover(function(){
		$('.nav_catalog').css({
			"border-bottom-width":'5px',
			"border-color":'#333'
		}, 500);
	});

	$('.cat_view_button.winter').mouseover(function(){
		$('.black_shadow.winter').stop().fadeIn();
	});
	$('.cat_view_button.winter').mouseout(function(){
		$('.black_shadow.winter').stop().fadeOut();
	});

	$('.cat_view_button.spring').mouseover(function(){
		$('.black_shadow.spring').stop().fadeIn();
	});
	$('.cat_view_button.spring').mouseout(function(){
		$('.black_shadow.spring').stop().fadeOut();
	});

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if(scroll>0){
			$('#top_nav').fadeOut(600);
			$('#moving_nav').fadeIn(600);
		}
		else {
			$('#top_nav').fadeIn(600);
			$('#moving_nav').fadeOut(600);
		}
	});
});