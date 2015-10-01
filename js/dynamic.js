function slider() {
	$('.slider .temp > div').each(function() {
		var path = $(this).children('img').attr('src');
		$(this).css({
			'background': 'url("'+path+'") no-repeat center center'
		});
	})
	$('.slider .container').empty();
	$('.slider .prev, .slider .next, .slider .pagination').remove();
	$('.slider .container').html($('.slider .temp').html());
	$('.slider, .slider .container, .slider .container > div').width($('.wrapper').width());
	$('.slider').slides({
		generatePagination: false,
		generateNextPrev: true,
		container: 'container',
		effect: 'slide',
		slideSpeed: 500,
		slideEasing: 'easeInOutQuad',
		play: 10000,
		pause: 2500,
	});
}
function aboutCoreH4() {
	var d = ($('.wrapper').width()-$('.about-i .core').width())/2;
	$('.about-i .step1 h4 em, .about-i .step3 h4 em').css({
		'left': -d+'px',
		'width': d+'px'
	});
	$('.about-i .step2 h4 em').css({
		'right': -d+'px',
		'width': d+'px'
	});
}
$(document).ready(function() {
	if ( $('.slide').length > 0 ) {
		$('.slide').slides({
			generatePagination: true,
			generateNextPrev: false,
			container: 'container',
			effect: 'fade',
			crossfade: true,
			play: 10000,
			pause: 2500,
		});
	}
	if ( $('.slider').length > 0 ) {
		slider();
		$('.slider').bind('swipeleft', function() {
			$('.slider .next').trigger('click');
		});
		$('.slider').bind('swiperight', function() {
			$('.slider .prev').trigger('click');
		});
	}
	if ( $('.card').length > 0 ) {
		$('.card .photos').slides({
			generatePagination: true,
			generateNextPrev: true,
			container: 'container',
			effect: 'slide',
			slideSpeed: 500,
			slideEasing: 'easeInOutQuad',
			play: 10000,
			pause: 2500,
		});
		$('.card .photos').bind('swipeleft', function() {
			$('.card .photos .next').trigger('click');
		});
		$('.card .photos').bind('swiperight', function() {
			$('.card .photos .prev').trigger('click');
		});
	}
	if ( $('.similar').length > 0 ) {
		$('.similar ul').jcarousel({
			scroll: 1,
			animation: 500,
			easing: 'easeInOutQuad',
			wrap: 'circular'
		});
		$('.similar .jcarousel-container').bind('swipeleft', function() {
			$('.similar .jcarousel-container .jcarousel-next').trigger('click');
		});
		$('.similar .jcarousel-container').bind('swiperight', function() {
			$('.similar .jcarousel-container .jcarousel-prev').trigger('click');
		});
	}
	if ( $('.same').length > 0 ) {
		$('.same > div > ul').jcarousel({
			scroll: 1,
			animation: 500,
			easing: 'easeInOutQuad',
			wrap: 'circular'
		});
		$('.same .jcarousel-container').bind('swipeleft', function() {
			$('.same .jcarousel-container .jcarousel-next').trigger('click');
		});
		$('.same .jcarousel-container').bind('swiperight', function() {
			$('.same .jcarousel-container .jcarousel-prev').trigger('click');
		});
		$('.same .jcarousel-container .jcarousel-item').hover(
			function() {
				if ( $(this).offset().left-$(this).parents('.jcarousel-container').offset().left > 500 ) {
					$(this).addClass('right');
				}
			},
			function() {
				$(this).removeClass('right');
			}
		);
	}
	if ( $('.about-b .list > div').length > 0 ) {
		$('.about-b .list > div ul').jcarousel({
			scroll: 1,
			animation: 500,
			easing: 'easeInOutQuad',
			wrap: 'circular'
		});
		$('.similar .jcarousel-container').bind('swipeleft', function() {
			$('.similar .jcarousel-container .jcarousel-next').trigger('click');
		});
		$('.similar .jcarousel-container').bind('swiperight', function() {
			$('.similar .jcarousel-container .jcarousel-prev').trigger('click');
		});
	}
	$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.attr('data',count);
		if ( $(this).parents('.list-p').length > 0 ) {
			$input.val($input.attr('data')+' шт.');
		}
		else {
			$input.val($input.attr('data'));
		}
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.attr('data',parseInt($input.val()) + 1);
		if ( $(this).parents('.list-p').length > 0 ) {
			$input.val($input.attr('data')+' шт.');
		}
		else {
			$input.val($input.attr('data'));
		}
		$input.change();
		return false;
	});
	$('.list-p > li').hover(
		function() {
			if ( $(this).offset().left > $(this).parents('section').width()-473 ) {
				$(this).addClass('right');
			}
		},
		function() {
			$(this).removeClass('right');
		}
	);
	$('input, textarea').each(function() {
		$(this).data('holder', $(this).attr('placeholder'));
		$(this).focusin(function() {
			$(this).attr('placeholder', '');
		});
		$(this).focusout(function() {
			$(this).attr('placeholder', $(this).data('holder'));
		});
	});
	$(window).bind('scroll', function() {
		if ( $(document).scrollTop() > $('.panel').height()+$('header').height()+$('nav').height()+$('.search-m').height() ) {
			$('.fixedmenu').fadeIn(0);
		}
		else {
			$('.fixedmenu').fadeOut(0);
		}
		if ( $('.search-r').is(':visible') ) {
			if ( $(document).scrollTop() < $('.panel').height()+$('header').height()+$('nav').height()+$('.search-m').height() ) {
				$('.search-r').css({
					'position': 'absolute',
					'top': $('.search-m').offset().top+$('.search-m').outerHeight()+'px'
				});
			}
			else {
				$('.search-r').css({
					'position': 'fixed',
					'top': $('.fixedmenu .search').outerHeight()+1+'px'
				});
			}
		}
		if ( $('.basket-p').is(':visible') ) {
			if ( $(document).scrollTop() < $('.panel').height()+$('header').height()+$('nav').height()+$('.search-m').height() ) {
				$('.basket-p').css({
					'position': 'absolute',
					'top': $('header').offset().top+'px'
				});
			}
			else {
				$('.basket-p').css({
					'position': 'fixed',
					'top': $('.fixedmenu').outerHeight()-1+'px'
				});
			}
		}
	});
	$('.listing .nav li a').bind('click', function(event) {
		$(this).parents('.listing').find('.tab[data-page='+$(this).attr('href')+']').show().siblings('.tab').hide();
		$(this).parent().addClass('active').siblings().removeClass('active');
		event.preventDefault();
	});
	$('.listing .nav li.active a').trigger('click');
	var scrollAPI;
	$('.search-m input, .fixedmenu .search input').bind('click', function(event) {
		if ( $('.fixedmenu').is(':hidden') ) {
			$('.search-r').css({
				'position': 'absolute',
				'top': $('.search-m').offset().top+$('.search-m').outerHeight()+'px'
			}).stop().fadeIn(250);
		}
		else {
			$('.search-r').css({
				'position': 'fixed',
				'top': $('.fixedmenu .search').outerHeight()+1+'px'
			}).stop().fadeIn(250);
		}
		$('.search-r > div').jScrollPane({
			showArrows: true
		});
		scrollAPI = $('.search-r > div').data('jsp');
		scrollAPI.reinitialise();
		$('.search-r ul li p').each(function() {
			if ( $(this).outerHeight() < 48 ) {
				$(this).css({
					'margin-top': (48-$(this).outerHeight())/2+'px'
				});
			}
		});
		event.preventDefault();
	});
	$('html').click(function() {
		$('.search-r, .basket-p').stop().fadeOut(250);
		$('header .user-l ul').fadeOut(0);
		$('header .user-l h4').removeClass('active');
	});
	$('.search-m input, .fixedmenu .search input, .search-r, .basket-p, header .basket a, .fixedmenu .basket h5 a, header .user-l ul, header .user-l h4 span').click(function(event) {
		event.stopPropagation();
	});
	$('.search-r ul li').click(function(event) {
		window.location = $(this).attr('data-href');
		event.preventDefault();
	});
	if ( $('nav > ul > li > div .core ul > li').length > 0 ) {
		$('nav > ul > li > div .core > ul > li').each(function() {
			var p = $(this);
			if ( p.children('ul').size() > 1 ) {
				p.append('<span class="span-v num1"></span>');
			}
			if ( p.children('ul').size() > 2 ) {
				p.append('<span class="span-v num2"></span>');
			}
			if ( p.children('ul').size() > 3 ) {
				var v = Math.floor((p.children('ul').size()-1)/3);
				for ( var i = 1; i <= v; i++ ) {
					p.append('<span class="span-h num'+i+'"></span>');
				}
			}
		});
		var firstSubOpen = true;
		$('nav > ul > li > div').parent('li').hover(
			function() {
				$(this).children('div').stop(true,true).delay(300).slideDown(300, function() {
					$('.search-r').hide();
					if ( firstSubOpen ) {
						$('nav .sub ul li:first-child').trigger('mouseover');
						firstSubOpen = false;
					}
				});
				$(this).addClass('active');
			},
			function() {
				$(this).children('div').stop(true,true).delay(300).slideUp(300);
				$(this).removeClass('active');
			}
		);
		$('nav .sub ul li').bind('mouseover', function() {
			var p = $('nav .core > ul:nth-child('+eval($(this).index()+1)+')');
			$(this).addClass('active').siblings().removeClass();
			p.show().siblings().hide();
			if ( p.children('li').children('ul').size() > 1 ) {
				p.find('.span-v.num1').css({
					'left': p.children('li').children('ul:nth-child(2)').position().left-21+'px',
					'height': p.outerHeight()-34+'px'
				});
			}
			if ( p.children('li').children('ul').size() > 2 ) {
				p.find('.span-v.num2').css({
					'left': p.children('li').children('ul:nth-child(3)').position().left-21+'px',
					'height': p.outerHeight()-34+'px'
				});
			}
			if ( p.children('li').children('ul').size() > 3 ) {
				var v = Math.floor((p.children('li').children('ul').size()-1)/3);
				for ( var i = 1; i <= v; i++ ) {
					p.find('.span-h.num'+i+'').css({
						'top': p.children('li').children('ul:nth-child('+eval(i*3+1)+')').position().top-15+'px'
					});
				}
			}
		});
	}
	$('.modal input, .modal textarea, .order-b .form input, .order-b .form textarea, .order-b .userform input, .order-b .userform textarea, .contacts-b .form input, .contacts-b .form textarea').each(function() {
		$(this).focusin(function() {
			$(this).parent().addClass('focus');
		});
		$(this).focusout(function() {
			if ( $(this).val().length > 0 ) {
				$(this).parent().addClass('complete').removeClass('focus');
			}
			else {
				$(this).parent().removeClass('focus complete');
			}
		});
	});
	$('.modal p span, .order-b .form p span, .order-b .userform p span, .contacts-b .form p span').bind('click', function(event) {
		$(this).parent().find('input, textarea').focus();
		event.preventDefault();
	});
	if ( $('input[type="checkbox"]').length > 0 ) {
		$('input[type="checkbox"]').uniform();
	}
	if ( $('input[type="radio"]').length > 0 ) {
		$('input[type="radio"]').uniform();
	}
	if ( $('.modal').length > 0 ) {
		$('.modal').append('<span class="close"></span>');
	}
	$('[data-open]').bind('click', function() {
		var t = $('.modal[data-target="'+$(this).attr('data-open')+'"]');
		t.css({
			'margin-top': -t.outerHeight()/2+'px'
		}).stop().fadeIn(250);
		$('.fade').stop().fadeIn(250);
		event.preventDefault();
	});
	$('.modal .close, .fade').bind('click', function() {
		$('.modal, .fade').stop().fadeOut(250);
		event.preventDefault();
	});
	$('header .basket a, .fixedmenu .basket h5 a').bind('click', function(event) {
		if ( $('.fixedmenu').is(':hidden') ) {
			$('.basket-p').css({
				'position': 'absolute',
				'top': $('header').offset().top+'px'
			}).stop().fadeIn(250);
			$('.basket-p h5').show();
		}
		else {
			$('.basket-p').css({
				'position': 'fixed',
				'top': $('.fixedmenu .search').outerHeight()+1+'px'
			}).stop().fadeIn(250);
			$('.basket-p h5').hide();
		}
		$('.basket-p .core').jScrollPane({
			showArrows: true
		});
		$('.basket-p ul li p').each(function() {
			if ( $(this).outerHeight() < 48 ) {
				$(this).css({
					'margin-top': (48-$(this).outerHeight())/2+'px'
				});
			}
		});
		event.preventDefault();
	});
	$('header .user-l h4 span').bind('click', function(event) {
		var t = $(this).parents('.user-l').find('ul');
		if ( t.is(':hidden') ) {
			t.stop().slideDown(0);
			$(this).parent().addClass('active');
		}
		else {
			t.stop().slideUp(0);
			$(this).parent().removeClass('active');
		}
		event.preventDefault();
	});
	if ( $('.about-i .core').length > 0 ) {
		$('.about-i .core h4').append('<em></em>');
		aboutCoreH4();
	}
	$('.modal .city ul li p a').bind('click', function(event) {
		$('.fade, .modal').stop().fadeOut(250);
		$('.order-b .delivery .lb h4 span').text($(this).text());
		event.preventDefault();
	});
	$('.order-b .nav li a').bind('click', function(event) {
		$(this).parents('.order-b').find('.tab[data-tab="'+$(this).attr('href')+'"]').show().siblings('.tab').hide();
		$(this).parent().addClass('active').siblings().removeClass();
		event.preventDefault();
	}).filter(':first').click();
	$('.wholesale-b .nav li a').bind('click', function(event) {
		$(this).parents('.wholesale-b').find('.tab[data-tab="'+$(this).attr('href')+'"]').show().siblings('.tab').hide();
		$(this).parent().addClass('active').siblings().removeClass();
		event.preventDefault();
	}).filter(':first').click();
	$('.personal-b .nav li a').bind('click', function(event) {
		$(this).parents('.personal-b').find('.tab[data-tab="'+$(this).attr('href')+'"]').show().siblings('.tab').hide();
		$(this).parent().addClass('active').siblings().removeClass();
		event.preventDefault();
	}).filter(':first').click();
	$('.new-l .core').masonry({
		columnWidth: 241,
		itemSelector: 'li'
	});
});
$(window).resize(function() {
	if ( $('.slider').length > 0 ) {
		slider();
	}
	if ( $('.about-i .core').length > 0 ) {
		aboutCoreH4();
	}
});
$(window).load(function() {
	if ( $('.payment-b .other').length > 0 ) {
		var maxPayOther = -1;
		$('.payment-b .other li > div').each(function() {
			var h = $(this).height(); 
			maxPayOther = h > maxPayOther ? h : maxPayOther;
		});
		$('.payment-b .other li > div').css({
			'height': maxPayOther+'px'
		});
	}
});