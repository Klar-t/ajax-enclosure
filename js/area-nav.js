
$(function(){
	
	$('.nav-aside .category').on('mouseenter',function(){
		$(this).addClass('hover');
		
	})
	$('.nav-aside .category').on('mouseleave',function(){
		
		$(this).removeClass('hover');
	})
})