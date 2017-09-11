$(function(){

  // 全部需求   (全部需求样式在 public.css)
  var need_button = '<a id="needdrop" class="drop_need" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+
                      '<span>'+'全部需求'+'</span>'+
                      '<i class="fa fa-caret-down fa-2x" aria-hidden="true">'+'</i>'+
                      '<span class="list_badge" style="right:10px;top:6px;">'+'1'+'</span>'+
                    '</a>'
  var need_content = '<ul class="dropdown-menu drop_need_menu" aria-labelledby="needdrop">'+
                        '<li>'+'<a href="#">'+'热门搜索：'+'</a>'+'</li>'+
                        '<li>'+'<a href="#">'+'文献翻译'+'</a>'+'</li>'+
                        '<li>'+'<a href="#">'+'纯手工翻译'+'</a>'+'</li>'+
                        '<li>'+'<a href="#">'+'英语翻译'+'</a>'+'</li>'+
                        '<li>'+'<a href="#">'+'俄语翻译'+'</a>'+'</li>'+
                      '</ul>'

  $(".index_all_need").append(need_button+need_content);

})
