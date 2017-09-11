$(function(){
  $('.dropdown-toggle').click(function(){
    $('.dropdown-toggle').dropdown()
  })

  $(".drop_need").click(function(){
    $('.drop_need').dropdown()
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





  // 公告咨询活动
  $(".news_list_right li[class=list-group-item]").hover(function(){
    $(this).find("a").css("color","#8db5e3")
  },function(){
    $(this).find("a").css("color","#222")
  })


  // 循环翻译人员卡片
  var cards_one = $(".index_linguister_card").html();
  for(var i=0;i<20;i++){
    $(".index_linguister_card").append(cards_one);
  }

  $(function(){
      var liWidths = $(".cards_one").width()+42
      var liLengths = $(".cards_one").length/2

      var widthsf = liWidths*liLengths

      $(".append_card").css({'width':widthsf})
      var timesRuns = 0;  

      function startsnow(){
        show = setInterval(function(){   
        timesRuns += 4
        if(widthsf-timesRuns < 1200){
          timesRuns =0
        }
        $(".append_card").css({'position':'relative','left':-timesRuns})
      },100)
      }
    startsnow();
    
      $(".cards_one").hover(function(){
        clearInterval(show)
      },function(){
        startsnow();
      });

    });
  


  //  选他 数字加1
  $(".append_card_btn01").click(function(){
    parseInt($(this).find(".list_badge").text(parseInt($(this).find(".list_badge").text())+1))
  })



  // 循环找需求卡片
  var needers_cards = $(".index_needers_card").html()
  for(var j=0;j<7;j++){
    $(".index_needers_card").append(needers_cards);
  }

  // 新译员 走马灯效果
    $(function(){
      var liWidth = $(".index_costumer_lits li").width()+65
      var liLength = $(".index_costumer_lits li").length+1

      var widths = liWidth*liLength

      $(".index_costumer_lits").css({'width':widths})

      var timesRun = 0;
      
      function start(){
        ints = setInterval(function(){
        
        timesRun += 5
        if(widths-timesRun < 1200){
          timesRun =0

        }
        $(".index_costumer_lits").css({'position':'relative','left':-timesRun})

      },70)
      }
    start();

      $(".index_costumer_lits").hover(function(){
        clearInterval(ints)
      },function(){
        start();
      })

    })


    // 图片循环轮播
      $(document).ready(function () {
      new ZouMa().Start();
      });
      function ZouMa() {
      this.maxLength = 6; //最低显示数   
      this.Timer = 2000;//计时器间隔时间
      this.Ul = $(".box ul");
      var handId;//计时器id
      var self = this;
      this.Start = function () {
        if (self.Ul.children().length < this.maxLength) {
        self.Ul.append(self.Ul.children().clone());
        }
        handId = setInterval(self.Play, self.Timer);
      }
      this.Play = function () {
        var img = self.Ul.children().eq(0);
        var left = img.children().eq(0).width();
        img.animate({ "marginLeft": (-1 * left) + "px" }, 500, function () {
        $(this).appendTo(self.Ul).css({"margin":"0 10px"});
        });
      }
      }

  // 优秀案例展示
    //点击下一张
  // var _index5=0;
  // $(".four_flash .but_right img").click(function(){
  // 	_index5++;
  // 	var len=$(".flashBg ul.mobile li").length;
  // 	if(_index5+5>len){
  // 		$(".four_flash .flashBg ul.mobile").stop().append($("ul.mobile").html());
  // 	}
  // 	$(".four_flash .flashBg ul.mobile").stop().animate({left:-_index5*206},1000);
  // });

    //点击上一张
  // $(".four_flash .but_left img").click(function(){
  // 	if(_index5==0){
  // 		$("ul.mobile").prepend($("ul.mobile").html());
  // 		$("ul.mobile").css("left","-1380px");
  // 		_index5=6
  // 	}
  // 	_index5--;
  // 	$(".four_flash .flashBg ul.mobile").stop().animate({left:-_index5*206},1000);
  // });



})
