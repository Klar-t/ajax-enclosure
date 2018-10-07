$('.tabs>li').on('click',function(){
		var index=$(this).index();
		$(this).addClass('active').siblings().removeClass('active');
			$(this).parents('.mod-tab')
				.find('.panel')
				.animate({
		                    left: (-100 * index) + '%'
		                }, function() {
		                    console.log(1);
		                });
});
