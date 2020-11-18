$('document').ready(function(){	
	$('body').removeClass('no-js').addClass('js'); 
	const img = $('.full .img');
	const thumbs = $('.lista li a');

	img.html("<img src='imagens/fulls/01.jpg'>");

	// thumbs.each(function(){
	// 	$(this).on('click', function(e){
	// 		e.preventDefault();
	// 		$('li.active').removeAttr('class');
	// 		$(this).parent('li').addClass('active');
	// 		let _href = $(this).attr('href');
	// 		img.fadeOut(500).fadeIn(0, function(){
	// 			img.html("<img src='"+_href+"'>");
	// 		});
	// 	})	
	// })

	thumbs.on('click', function(e){
			e.preventDefault();
			$('li.active').removeAttr('class');
			$(this).parent('li').addClass('active');
			let _href = $(this).attr('href');
			img.fadeOut(500).fadeIn(0, function(){
				$(this).html("<img src='"+_href+"'>");
			});
		});

});