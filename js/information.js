$(function(){

  var data = table_content

// 循环列表内容
  $.each(data,function(i,v){
    $(".case_uls").append(
      '<li class="case_lists btncas list-group-item clearfix" onclick="infoshow()" style="margin-bottom:10px;">'+
        '<div class="casecont col-sm-9">'+'</div>'+
        '<span class="info_time col-sm-3 fr">'+v.day+'</span>'+
      '</li>'
    );
    if(v.button1 != null){
      $(".casecont").eq(i).append(
        '<span class="btn_01 btn_Style">'+v.button1+'</span>'
      )
    };
    if(v.button2 != null){
      $(".casecont").eq(i).append(
        '<span class="btn_02 btn_Style">'+v.button2+'</span>'
      )
    };
    if(v.text != null){
      $(".casecont").eq(i).append(
        '<span class="info_text">'+v.text+'</span>'
      )
    };

  });

  function infoshow(){
    window.location.href="information.details.html"
  };
  
    


});

  // 后台获取到的表格内容的json数据信息
 var table_content = [
     {"button1":"热","button2":null,"text":'做翻译界的“淘宝”，打造共享语言经济',"day":"2017-02-03"},
     {"button1":"热","button2":null,"text":'翻译市场存在服务质量难以保证、服务资源难以匹配的痛点',"day":"2017-02-03"},
     {"button1":"热","button2":"精","text":'全语种互联网+翻译交易平台，连接海内外语言人才',"day":"2017-02-08"},
     {"button1":"热","button2":null,"text":'全语种互联网+翻译交易平台，连接海内外语言人才',"day":"2017-02-03"},
     {"button1":"热","button2":null,"text":'翻译市场存在服务质量难以保证、服务资源难以匹配的痛点',"day":"2017-02-03"},
     {"button1":"热","button2":null,"text":'做翻译界的“淘宝”，打造共享语言经济',"day":"2017-02-03"}
   ]



