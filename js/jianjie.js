$(function(){
	$('.smain .smaintop_left_nav li').mouseover(function(){
		$(this).addClass('ac').siblings().removeClass('ac')		
	})
	$('.smaintop_right .more').click(function(){
		$('.smaintop_right .tk1').css('display','block')
		$(this).css('background-color','#b90a0a')
		$('.smaintop_right .more a').css('color','#fff')
	})
	$('.smaintop_right .tk1 .delate').click(function(){
		$('.smaintop_right .tk1').css('display','none')
		$('.smaintop_right .more a').css('color','#b90a0a')
		$('.smaintop_right .more').css('background-color','#fff')
	})
	$('.smainbot_right .more').click(function(){
		$('.smainbot_right .tk2').css('display','block')
		$(this).css('background-color','#b90a0a')
		$('.smainbot_right .more a').css('color','#fff')		
	})
	$('.smainbot_right .tk2 .delate').click(function(){
		$('.smainbot_right .tk2').css('display','none')
		$('.smainbot_right .more a').css('color','#b90a0a')
		$('.smainbot_right .more').css('background-color','#fff')	
	})
	$('.smainbot_right .more2').click(function(){
		$('.smainbot_right .tk3').css('display','block')
		$(this).css('background-color','#b90a0a')
		$('.smainbot_right .more2 a').css('color','#fff')		
	})
	$('.smainbot_right .tk3 .delate').click(function(){
		$('.smainbot_right .tk3').css('display','none')
		$('.smainbot_right .more2 a').css('color','#b90a0a')
		$('.smainbot_right .more2').css('background-color','#fff')	
	})
	
})
