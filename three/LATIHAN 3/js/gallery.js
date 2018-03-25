(function($){

  $.fn.showImage = function(){
  	$('.container-fluid').fadeIn('slow');

  	$('.item > img').click(function(){

  		$('.imageBig').remove();
  		$('.item > img').removeClass('active');
  		$(this).addClass('active');
		
  		image 		= $(this).attr('src');
  		indexing	= $('.active').parent().index();
  		newpath		= image.replace('small/', '');

  		$('.item').parent().after('<div class="imageBig"><div class="wrapper col-md-7"><img src="img/close.png" class="closed"><img src="'+newpath+'" class="thumbnail"></div></div>');
  		$('.imageBig').fadeIn(800).css({'position':'fixed','top':'0', 'left':'0', 'width':'100%', 'height':'100%', 'background-color':'rgba(0,0,0,0.5)'});
  		$('.wrapper').css({'position':'relative', 'margin': '75px auto', 'height':'500px', 'float':'none'});
  		$('.wrapper .thumbnail').css({'width':'100%'});
  		$('.closed').css({'position':'absolute', 'right':'5px', 'top': '-8px'});

  		$('.wrapper').prepend("<img src='img/next.png' id='next'><img src='img/prev.png' id='prev'>");
  		$('#next').css({'position': 'absolute', 'right': '0', 'top': '50%'});
  		$('#prev').css({'position': 'absolute', 'left': '0', 'top': '50%'});

  		if(indexing == 0) {
  			$('#prev').css({'display': 'none'});
  		}

  		if(indexing == ($('.item').length - 1))
  		{
  			$('#next').css({'display': 'none'});
  		}

  	});

  	$(document).on('click', '#next', function(){

		next 	 	= $('.active').parent().next();
		nextImage	= $(next).children('img').attr('src');
		newpathnext	= nextImage.replace('small/', '');
		indexing	= $('.active').parent().index();

		$(next).children('img').addClass('active');
		$('.active').parent().prev().children('.thumbnail').removeClass('active');

		$('#prev').css({'display': 'block'});


		$('.wrapper .thumbnail').attr('src', newpathnext);

		if(indexing == ($('.item').length - 2)) {
			$('#next').css({'display': 'none'});
		}

		console.log(indexing)
	});

	$(document).on('click', '#prev', function(){

		prev 	 	= $('.active').parent().prev();
		prevImage	= $(prev).children('img').attr('src');
		newpathprev	= prevImage.replace('small/', '');
		indexing	= $('.active').parent().index();

		$('#next').css({'display': 'block'});
		
		$(prev).children('img').addClass('active');
		$('.active').parent('.item').next().children('.thumbnail').removeClass('active');

		$('.wrapper .thumbnail').attr('src', newpathprev);

		if(indexing == 1 ) {
			$('#prev').css({'display': 'none'});
		}
		console.log(indexing)
	});

  	$(document).on('click', '.closed', function(){
  		$('.imageBig').fadeOut(200, function(){
  			$('.active').parent().index(0);
  			$('.thumbnail').removeClass('active');
  			$('.imageBig').remove();
  		});
  	});

  };

})(jQuery);