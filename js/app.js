// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js

$(document).ready(function(){
	function slider(){
		var main_slide = $('#main .slider .slider_wrap .main img'),
				small_slide = $('#main .slider .slider_wrap .small img'),
				small_slide_wrap = $('#main .slider .slider_wrap .small'),
				main_slide_wrap = $('#main .slider .slider_wrap .main');
				function changeSlide(){
					var copy = $(this).clone();
					$('#main .slider .slider_wrap .main img').fadeOut(300, function(){$(this).remove()});
					setTimeout(function(){main_slide_wrap.append(copy)}, 300);
					small_slide.removeClass('hidden');
					$(this).addClass('hidden');
				};
				small_slide.on('click', changeSlide);
	};
	slider();

	function checkboxChoose(){
		var checkboxes = $('#main .center .description .colors form div input'),
				span = $('#main .center .description .colors form div .box');
		$('#main .center .description .colors form div #brown').prop('checked', true);
		span.on('click', function(){
			var checkbox = $(this).siblings('input');
			if(checkbox.attr('checked') == 'checked'){return false}
				else {
					checkboxes.prop('checked', false);
					checkbox.prop('checked', true);
				};
		});
		checkboxes.on('click', function(){
			if ($(this).attr('checked') == 'checked') return false
				else {
						checkboxes.prop('checked', false);
						$(this).prop('checked', true);	
					};
		});
	};
	checkboxChoose();

	function showMenu(){
		var menu = $('header .center div');
		menu.on('click', function(){
			menu.toggleClass('active');
			if(menu.hasClass('active')){
				$('header .center nav ul').fadeIn().css({'height': '200px'}).width($(window).width());
				$('header').css({'position': 'fixed', 'top': '0', 'background-color': '#fff'});
				$('#main').css('margin-top', '120px');	
			}
			else {
				$('header .center nav ul').fadeOut();
				$('header').css('position', 'static');
				$('#main').css('margin-top', '0px');	
			};
		});
	};
	showMenu();
});
