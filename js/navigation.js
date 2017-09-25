$(function(){
	$('.navigation li').hover(function(){
		$(this).addClass('active').find('ul').stop().slideDown().siblings().removeClass('active');
	},function(){
		$(this).removeClass('active').find('ul').stop().slideUp();
	})
	$('.navigation .sec_nav').hover(function(){
		$(this).parent().addClass('active')
	},function(){
		$(this).stop().slideUp();
	})
})