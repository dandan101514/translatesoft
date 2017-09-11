$(function(){
  // 优秀案例展示
    //点击下一张
  var _index5=0;
  $(".four_flash .but_next").click(function(){
  	_index5++;
  	var len=$(".flashBg ul.mobile li").length;
  	if(_index5+4>len){
  		$(".four_flash .flashBg ul.mobile").stop().append($("ul.mobile").html());
  	}
  	$(".four_flash .flashBg ul.mobile").stop().animate({left:-_index5*95},1000);
  });

    //点击上一张
  $(".four_flash .but_pre").click(function(){
  	if(_index5==0){
  		$("ul.mobile").prepend($("ul.mobile").html());
  		$("ul.mobile").css("left","-1380px");
  		_index5=5
  	}
  	_index5--;
  	$(".four_flash .flashBg ul.mobile").stop().animate({left:-_index5*95},1000);
  });
})
