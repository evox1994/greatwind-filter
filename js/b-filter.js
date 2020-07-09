$(document).ready(function(){

	$(document).on('click','.b-filter-btn',function(){
		$('.b-filter-subcats-wrap').addClass('active');
		return false;
	});

	$(document).on('click','.b-filter-subcats-close,.b-filter-subcats-btn',function(){
		$('.b-filter-subcats-wrap').removeClass('active');
		return false;
	});

	$(document).on('click','.b-filter-cat ul li',function(){
		var el = $(this).attr('data-subcat');

		if ( !$(this).hasClass('active') ){
			$(this).parents('ul').find('li').removeClass('active');
			$(this).addClass('active');
			if ( el=='all' ){
				$(this).parents('.b-filter').find('.b-filter-subcats').addClass('active');
			} else {
				$(this).parents('.b-filter').find('.b-filter-subcats').removeClass('active');
				$(el).addClass('active');
			}
		}
	});

	$(document).on('click','.b-filter-subcat ul li',function(){
		if ( $(this).hasClass('all') ){
			if ( !$(this).hasClass('active') ){
				$(this).parents('ul').find('li').removeClass('active');
				$(this).addClass('active');
			}
		} else {
			if ( $(this).parents('ul').find('li.all').hasClass('active') ){
				$(this).parents('ul').find('li.all').removeClass('active');
			}
			$(this).toggleClass('active');
		}
		if ( !$(this).parents('ul').find('li.active').length ){
			$(this).parents('ul').find('li.all').addClass('active');
		}
	});

});