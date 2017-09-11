$(function(){

  offerTable = [
    {"interpreter_lan":"汉译英","interpreter_grade":"一级","interpreter_price":"200","proof_price":"100"},
    {"interpreter_lan":"","interpreter_grade":"二级","interpreter_price":"500","proof_price":"200"},
    {"interpreter_lan":"","interpreter_grade":"三级","interpreter_price":"800","proof_price":"300"},
    {"interpreter_lan":"","interpreter_grade":"四级","interpreter_price":"1000","proof_price":"400"},
    {"interpreter_lan":"","interpreter_grade":"五级","interpreter_price":"1500","proof_price":"500"}
  ]

  var offer_tr = '<tr class="offer_tr">'+'</tr>'
  var offer_td = '<td class="offer_td">'+'</td>'

  // 循环表格
  for(var i=0;i<offerTable.length;i++){
    $(".offer_table").append(offer_tr);
    for(var j=0;j<4;j++){
      $(".offer_tr").eq(i).append(offer_td);
    }
  }
  //表格中遍历内容
  $.each(offerTable, function(inx,obj){
    $(".offer_tr").eq(inx).find(".offer_td:first-child").html(obj.interpreter_lan)
    $(".offer_tr").eq(inx).find(".offer_td:nth-child(2)").html(obj.interpreter_grade)
    $(".offer_tr").eq(inx).find(".offer_td:nth-child(3)").html(obj.interpreter_price)
    $(".offer_tr").eq(inx).find(".offer_td:nth-child(4)").html(obj.proof_price)
  })

  // 在线询价  帮助内容显示 隐藏
  //议员等级
    $(".dengjihelp").hover(function(){
      $(".help_text").show();
    },function(){
      var tdengji=setTimeout(function(){
        $(".help_text").hide();
      },1000)
    })
    //周期
    $(".zhouqihelp").hover(function(){
      $(".help_zhouqi_text").show();
    },function(){
      var tzhouqi=setTimeout(function(){
        $(".help_zhouqi_text").hide();
      },1000)
    })

})
