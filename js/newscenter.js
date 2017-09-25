$(function(){
	$('.show3 span').click(function(){
		$('.jieshao').show();
	})
	$('.jieshao span').click(function(){
		$('.jieshao').hide();
	})
	$('.main .txt li').hover(function(){
		$(this).addClass('xian').siblings().removeClass('xian');
	},function(){
		$('.main .txt li').removeClass('xian');
	})
})