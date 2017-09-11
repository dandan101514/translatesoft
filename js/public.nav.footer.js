$(function(){

//nav顶部 公用内容
var navs = '<div class="public_nav">' +
           '<nav class="container" style="padding:0 20px;">' +
           '<div class="navbar-left"><a href="#" class="navbar-link">中文</a> | <a href="#" class="navbar-link">英文</a></div><a style="padding-left:50px;" href="index.html">首页</a>' +
           '<div class="navbar-right">' +
           '<ul class="list-inline nav_lists">' +
           '<li class="nav_lists_li"><a href="login.html" class="navbar-link">退出登录</a></li>' +
           '<li class="nav_lists_li"><a href="#" class="navbar-link">pzw</a></li>' +
           '<li class="nav_lists_li" style="width:90px;"><a href="#" class="navbar-link" style="width:90px;"><i class="fa fa-envelope-o" aria-hidden="true"></i>消息<span class="page"> 50</span></a></li>' +
           '<li class="nav_lists_li"><a href="#" class="navbar-link">我的订单</a></li>' +
           '<li class="nav_lists_li"><a href="user.center.customer.html" target="_blank" class="navbar-link" style="position:relative;">用户中心<span class="list_badge">1</span></a></li>' +
           '<li class="nav_lists_li"><a href="help.center.html" class="navbar-link">帮助中心</a></li>' +
           '<li class="nav_lists_li"><a href="#" class="navbar-link">导航网站</a></li>' +
           '</ul>' +
           '</div>' +
           '</nav>' +
           '</div>'


// nav 内容
  var contentNav = '<div class="navbg">'+
                      '<ul id="navul">'+
                        '<li class="navhome">'+'<a href="index.html">'+'首页'+'</a>'+'</li>'+
                        '<li>'+'<a href="#">'+'业务范围'+'</a>'+
                          '<ul>'+
                            '<li>'+'<a href="#">'+'同声口译'+'</a>'+'</li>'+
                            '<li>'+'<a href="#">'+'OA翻译'+'</a>'+'</li>'+
                            '<li>'+'<a href="#">'+'科技笔译'+'</a>'+'</li>'+
                          '</ul>'+
                        '</li>'+
                        '<li>'+'<a href="#">'+'专利翻译'+'</a>'+
                          '<ul>'+
                            '<li>'+'<a href="offer.details.html">'+'价格标准'+'</a>'+'</li>'+
                            '<li>'+'<a href="offer.details.html">'+'项目在线报价'+'</a>'+'</li>'+
                            '<li>'+'<a href="publish.need.html">'+'项目发布'+'</a>'+'</li>'+
                            '<li>'+'<a href="#">'+'抓你了软件下载'+'</a>'+'</li>'+
                          '</ul>'+
                        '</li>'+
                        '<li>'+'<a href="#">'+'专利知识'+'</a>'+
                          '<ul>'+
                            '<li>'+'<a href="patent.translation.html">'+'专利翻译'+'</a>'+'</li>'+
                            '<li>'+'<a href="patent.documents.html">'+'专利文献'+'</a>'+'</li>'+
                            '<li>'+'<a href="patent.feature.html">'+'专利特点'+'</a>'+'</li>'+
                            '<li>'+'<a href="patent.classification.html">'+'专利分类'+'</a>'+'</li>'+
                          '</ul>'+
                        '</li>'+
                        '<li>'+'<a href="#">'+'流程与质量'+'</a>'+
                          '<ul>'+
                            '<li>'+'<a href="translation.process.html">'+'操作流程'+'</a>'+'</li>'+
                            '<li>'+'<a href="quality.control.html">'+'质量控制'+'</a>'+'</li>'+
                          '</ul>'+
                        '</li>'+
                        '<li>'+'<a href="interpreter.show.html">'+'专业团队'+'</a>'+
                          '<ul>'+
                            '<li>'+'<a href="interpreter.show.html">'+'专家介绍'+'</a>'+'</li>'+
                            '<li>'+'<a href="interpreter.show.html">'+'英语精英'+'</a>'+'</li>'+
                            '<li>'+'<a href="interpreter.show.html">'+'日语精英'+'</a>'+'</li>'+
                            '<li>'+'<a href="interpreter.show.html">'+'韩语精英'+'</a>'+'</li>'+
                            '<li>'+'<a href="interpreter.show.html">'+'德语精英'+'</a>'+'</li>'+
                            '<li>'+'<a href="interpreter.show.html">'+'法语精英'+'</a>'+'</li>'+
                            '<li>'+'<a href="interpreter.show.html">'+'议员查找'+'</a>'+'</li>'+
                          '</ul>'+
                        '</li>'+
                        '<li>'+'<a href="case.lists.html">'+'案例鉴赏'+'</a>'+
                          '<ul>'+
                            '<li>'+'<a href="case.lists.html">'+'韩汉通信'+'</a>'+'</li>'+
                            '<li>'+'<a href="case.lists.html">'+'日汉汽车'+'</a>'+'</li>'+
                            '<li>'+'<a href="case.lists.html">'+'英汉通信'+'</a>'+'</li>'+
                            '<li>'+'<a href="case.lists.html">'+'汉英家用电器'+'</a>'+'</li>'+
                            '<li>'+'<a href="case.lists.html">'+'汉英半导体'+'</a>'+'</li>'+
                            '<li>'+'<a href="case.lists.html">'+'汉英图像处理'+'</a>'+'</li>'+
                            '<li>'+'<a href="case.lists.html">'+'德汉汽车'+'</a>'+'</li>'+
                          '</ul>'+
                        '</li>'+
                        '<li>'+'<a href="#">'+'社区服务'+'</a>'+
                          '<ul>'+
                            '<li>'+'<a href="patent.knowledge.html">'+'术语库'+'</a>'+'</li>'+
                            '<li>'+'<a href="#">'+'语科库'+'</a>'+'</li>'+
                            '<li>'+'<a href="software.translation.html">'+'专利翻译软件'+'</a>'+'</li>'+
                            '<li>'+'<a href="#">'+'人才招聘'+'</a>'+'</li>'+
                            '<li>'+'<a href="#">'+'译员培训'+'</a>'+'</li>'+
                          '</ul>'+
                        '</li>'+
                        '<li>'+'<a href="information.html">'+'咨询信息'+'</a>'+'</li>'+
                        '<li>'+'<a href="#">'+'关于我们'+'</a>'+
                          '<ul>'+
                            '<li>'+'<a href="team.presentation.html">'+'爱译简介'+'</a>'+'</li>'+
                            '<li>'+'<a href="#">'+'服务宗旨'+'</a>'+'</li>'+
                            '<li>'+'<a href="#">'+'联系我们'+'</a>'+'</li>'+
                          '</ul>'+
                        '</li>'+
                      '</ul>'+
                    '</div>'

    $(".contentNav").html(contentNav)

  $(document).ready(function(){
    $(".navbg").capacityFixed();
    $("#navul > li").not(".navhome").hover(function(){
      $(this).addClass("navmoon");
    },function(){
      $(this).removeClass("navmoon");
    });
  })

  $.fn.capacityFixed = function(options) {
        var opts = $.extend({},$.fn.capacityFixed.deflunt,options);
        var FixedFun = function(element) {
            var top = opts.top;
            element.css({
                "top":top
            });
            element.find(".close-ico").click(function(event){
                element.remove();
                event.preventDefault();
            })
        };
        return $(this).each(function() {
            FixedFun($(this));
        });
    };
    $.fn.capacityFixed.deflunt={
		right : 0,//相对于页面宽度的右边定位
        top:95
	};


// 搜索栏 公用内容
  var search ='<nav class="search_nav">' +
              '<div class="navbar-left">' +
              '<span class="search_logo"></span>' +
              '</div>' +
              '<form class="navbar-form index_form_search navbar-left" role="search">' +
              '<div class="input-group">' +
              '<div class="input-group-btn">' +
              '<button type="button" id="dLabel" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span>找服务 </span><i class="fa fa-caret-down fa-2x" aria-hidden="true"></i></button>' +
              '<ul class="dropdown-menu" aria-labelledby="dLabel">' +
              '<li><a href="#">文献翻译</a></li>' +
              '<li><a href="#">纯手工翻译</a></li>' +
              '<li><a href="#">英语翻译</a></li>' +
              '<li role="separator" class="divider"></li>' +
              '<li><a href="#">俄语翻译</a></li>' +
              '</ul>' +
              '</div>' +
              '<input type="text" class="form-control" aria-label="...">' +
              '<div class="input-group-btn">' +
              '<button type="button" class="btn btn-info" style="width:80px;">搜索</button>' +
              '</div>' +
              '</div>' +
              '<a href="publish.need.html" class="btn btn-info requirements">发布需求</a>' +
              '<ul class="list-inline search_more">' +
              '<li><a href="#">热门搜索：</a></li>' +
              '<li><a href="#">文献翻译</a></li>' +
              '<li><a href="#">纯手工翻译</a></li>' +
              '<li><a href="#">英语翻译</a></li>' +
              '<li><a href="#">俄语翻译</a></li>' +
              '</ul>' +
              '</form>' +
              '</nav>'

  $(".publickNav").html(navs)
  $(".publickSearch").html(search)


// 用户指南添加
  var messageMore = '<div class="message_more"><div class="row"></div></div>'

  var messageOne = '<ul class="col-sm-3 list-inline message_more_li"><li><h2>新手指南</h2></li><li><a href="#">注册须知</a></li><li><a href="#">规则中心</a></li><li><a href="#">服务商入门</a></li></ul>'
  var messageTwo = '<ul class="col-sm-3 list-inline message_more_li"><li><h2>我是雇主</h2></li><li><a href="#">发布需求</a></li><li><a href="#">等级介绍</a></li><li><a href="#">成交日期</a></li></ul>'
  var messageThree = '<ul class="col-sm-3 list-inline message_more_li"><li><h2>我是议员</h2></li><li><a href="#">等级介绍</a></li><li><a href="#">收费明细</a></li><li><a href="#">积分规定</a></li></ul>'
  var messageFour = '<ul class="col-sm-3 list-inline message_more_li"><li><h2>交易保障</h2></li><li><a href="#">诚信管理中心</a></li><li><a href="#">协议管理</a></li><li><a href="#">信用查询</a></li></ul>'

  var messageAll = messageOne+messageTwo+messageThree+messageFour

  $(".messages").html(messageMore).append(messageAll)


// address 信息
  var footers = '<ul class="list-inline"><li><a href="javascript:;">关于我们</a></li> | <li><a href="javascript:;">联系方式</a></li> | <li><a href="javascript:;">公司资源</a></li> | <li><a href="javascript:;">支付方式</a></li> | <li><a href="javascript:;">友情链接</a></li> | <li><a href="javascript:;">安全中心</a></li><ul><p class="footer_adress">Copyright 2005-2017 123.com版权所有 渝ICP备1234567-4号 渝B2-12134567 渝公安网备 1234567890号 互联网违法和不良信息举报电话：1234567 邮箱：123456.com</p>'
  $(".register_footer").html(footers);
})
