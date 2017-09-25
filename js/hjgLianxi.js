$(function(){	
	$('.ziliao').on('click','li',function(i){ //html 113行 点击滚动到对应标题上
		switch($(this).index()){
			case 0:break;
			case 1:$('body,html').stop().animate({"scrollTop":$('.dianshang').offset().top+'px'},1000);break;
			case 2:$('body,html').stop().animate({"scrollTop":$('.dianshang').offset().top+'px'},1000);break;
			case 3:$('body,html').stop().animate({"scrollTop":$('.dianshang').offset().top+'px'},1000);break;
			case 4:$('body,html').stop().animate({"scrollTop":$('.rexian').offset().top+'px'},1000);break;
		}
	})		

//html 248行 
	$('.message input').focusout(function(){
		var username = /^[\u4E00-\u9FA5]{2,4}$/;//判断是否为中文
		var email = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/; //邮箱
		var hpone = /^0\d{2,3}-?\d{7,8}$/; //固定电话028-1234567
		var hpone1 = /^1\d{10}$/; //s手机
		
		
		var rename = username.test($(this).val())
		var remail = email.test($(this).val())
		var repohe = hpone.test($(this).val())
		var repohe1 = hpone1.test($(this).val())
		switch($(this).index()){
			case 0:
					if(!rename){$('.names').css({'top':-10,'opacity':1});break;}else{$('.names').css('opacity',0);break};
			case 2:
			    	if(!remail){$('.emails').css({'top':30,'opacity':1});break;}else{$('.emails').css('opacity',0);break};
			case 4:
					if(!(repohe || repohe1)){$('.phones').css({'top':70,'opacity':1});break;}else{$('.phones').css('opacity',0);break};
		}
		console.log($(this).index())
	})
	

	
	
})
	

