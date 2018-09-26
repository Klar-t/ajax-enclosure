$('.mod-tab .tabs li').on('click',function(){
	var $this=$(this);
	var index=$this.index();
	$this.addClass('active').siblings().removeClass('active');
	
	$this.parents('.mod-tab').find('.panel').eq(index).addClass('active').siblings().removeClass('active');
	
	$('.mod-tab .prod').on('mouseenter',function(e){
		$(this).addClass('hover')
	});
	$('.mod-tab .prod').on('mouseleave',function(e){
		$(this).removeClass('hover')
	});
	
})