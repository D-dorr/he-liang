$(function(){
	function ac(){
		var oAc=$('.list').find('li')
		var ospan=$('.list').find('span')
		var index;
		//console.log(oAc)
		oAc.mouseenter(function(){
			index=$(this).index()
			$(this).addClass('ac').siblings().removeClass('ac').find('span').hide()
			ospan.eq(index).show()
			
		})
		oAc.mouseleave(function(){
			index=$(this).index()
			oAc.first('li').addClass('ac').siblings().removeClass('ac')
			oAc.first('li').find('span').show()
			ospan.eq(index).hide()
		})
	};ac()
	//点击购买 ————————————————————————————————————
	function but(){
		var index
		var ofour=$('.four')
		//console.log(ofour)
		$('.mad .dian').click(function(){
			index=$(this).parents('li').index()
			console.log(index)
			$('.three').hide();
			ofour.eq(index).show()
			
		})
		$('.shan').click(function(){
			index=$(this).parent('.four').index()
			$('.three').show();
			ofour.eq(index).hide()
		})
	};but()
})
