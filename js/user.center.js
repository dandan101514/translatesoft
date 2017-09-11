$(function(){

// 我是议员  左侧导航
  var interpreter_nav_num = '<li class="cus_iter_navlists">'+'<a href="user.center.interpreter.show.html">'+'个人信息'+'</a>'+'</li>'+
                            '<li class="cus_iter_navlists">'+'<a href="user.interpreter.mytasks.html">'+'我的任务'+'<span class="list_badge">'+'1'+'</span>'+'</a>'+'</li>'+
                            '<li class="cus_iter_navlists">'+'<a href="user.interpreter.exchange.html">'+'积分兑换'+'<span class="list_badge">'+'1'+'</span>'+'</a>'+'</li>'+
                            '<li class="cus_iter_navlists">'+'<a href="user.interpreter.reputation.html">'+'我的信誉'+'<span class="list_badge">'+'1'+'</span>'+'</a>'+'</li>'+
                            '<li class="cus_iter_navlists">'+'<a href="user.interpreter.order.html">'+'我的订单'+'<span class="list_badge">'+'1'+'</span>'+'</a>'+'</li>'+
                            '<li class="cus_iter_navlists">'+'<a href="user.interpreter.ranking.html">'+'我的排名'+'<span class="list_badge">'+'1'+'</span>'+'</a>'+'</li>'+
                            '<li class="cus_iter_navlists">'+'<a href="user.interpreter.myeValuate.html">'+'我的评价'+'<span class="list_badge">'+'1'+'</span>'+'</a>'+'</li>'+
                            '<li class="cus_iter_navlists">'+'<a href="javascript:;">'+'我的账本'+'<span class="list_badge">'+'2'+'</span>'+'</a>'+'</li>'+
                            '<li class="cus_iter_navlists">'+'<a href="user.interpreter.password.protection.html">'+'密码保护'+'<span class="list_badge">'+'1'+'</span>'+'</a>'+'</li>'+
                            '<li class="cus_iter_navlists">'+'<a href="user.interpreter.grade.html">'+'我的等级'+'<span class="list_badge">'+'1'+'</span>'+'</a>'+'</li>'+
                            '<li class="cus_iter_navlists">'+'<a href="user.interpreter.modify.password.html">'+'修改密码'+'<span class="list_badge">'+'1'+'</span>'+'</a>'+'</li>'+
                            '<li class="cus_iter_navlists">'+'<a href="javascript:;">'+'我的管理'+'<span class="list_badge">'+'1'+'</span>'+'</a>'+'</li>'+
                            '<li class="cus_iter_navlists">'+'<a href="javascript:;">'+'签订协议'+'<span class="list_badge">'+'1'+'</span>'+'</a>'+'</li>'

  $(".my_interpreter_ul").append(interpreter_nav_num);



// 我是客户  左侧导航
  var customer_nav_num = '<li class="cus_iter_navlists">'+'<a href="user.center.customer.show.html">'+'个人信息'+'</a>'+'</li>'+
                         '<li class="cus_iter_navlists">'+'<a href="user.customer.myneeds.html">'+'我的需求'+'</a>'+'</li>'+
                         '<li class="cus_iter_navlists">'+'<a href="user.customer.order.html">'+'我的订单'+'</a>'+'</li>'+
                         '<li class="cus_iter_navlists">'+'<a href="user.customer.exchange.html">'+'积分兑换'+'</a>'+'</li>'+
                         '<li class="cus_iter_navlists">'+'<a href="user.customer.reputation.html">'+'我的信誉'+'</a>'+'</li>'+
                         '<li class="cus_iter_navlists">'+'<a href="user.customer.ranking.html">'+'我的排名'+'</a>'+'</li>'+
                         '<li class="cus_iter_navlists">'+'<a href="user.customer.myeValuate.html">'+'我的评价'+'</a>'+'</li>'+
                         '<li class="cus_iter_navlists">'+'<a href="javascript:;">'+'我的账本'+'</a>'+'</li>'+
                         '<li class="cus_iter_navlists">'+'<a href="user.customer.password.protection.html">'+'密码保护'+'</a>'+'</li>'+
                         '<li class="cus_iter_navlists">'+'<a href="user.customer.modify.password.html">'+'修改密码'+'</a>'+'</li>'+
                         '<li class="cus_iter_navlists">'+'<a href="user.customer.grade.html">'+'我的等级'+'</a>'+'</li>'+
                         '<li class="cus_iter_navlists">'+'<a href="user.customer.agreement.html">'+'签订协议'+'</a>'+'</li>'+
                         '<li class="cus_iter_navlists">'+'<a href="JavaScript:;">'+'我的管理'+'</a>'+'</li>'

  $(".my_customer_ul").append(customer_nav_num);

  $(".cus_iter_navlists a").eq(0).addClass("useractive");
  $(".cus_iter_navlists a").each(function(){  
    $this = $(this);  
    if($this[0].href==window.location.href){ 
      $(".cus_iter_navlists a").removeClass("useractive");
      $this.addClass("useractive");  
    };
  }); 



});
