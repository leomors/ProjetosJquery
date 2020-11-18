(function(){
	 var contetnWayPoint = function(){

	 	$('.paroller').paroller();
	 	
	 	$('.element-animate').waypoint(function(direction){
	 		// console.log(this);
	 		// console.log(direction);
	 		// console.log(this.element);

	 		const $element = $(this.element);
	 		let effect = $element.data('animate-effect') || 'fadeInUp';
	 		console.log(effect);


	 		if(direction === 'down' && !$element.hasClass('element')){
	 			$element.removeClass('element-animate').addClass('element-animated '+effect);
	 		}
	 	}, {
	 		offset:'90%'
	 	})
	 }

	 contetnWayPoint();
})();