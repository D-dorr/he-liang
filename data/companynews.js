$.get("json/news.json",function(data){															//传出成功时运行函数
	var item=data;
	var html="";					
			for(var i=0;i<item.companynews.length;i++){
				html+='<li><a href="">'+item.companynews[i].title+'<span>'+item.companynews[i].date+'</span></a></li>';
			}												
	$('.news ul').append(html);
},"json")