$(function(){

  $('#switch_qlogin').click(function(){
		$('#switch_login').removeClass("switch_btn_focus").addClass('switch_btn');
		$('#switch_qlogin').removeClass("switch_btn").addClass('switch_btn_focus');
		$('#switch_bottom').animate({left:'0px',width:'65px'});
		$('#qlogin').css('display','none');
		$('#web_qr_login').css('display','block');

		});

	$('#switch_login').click(function(){
		$('#switch_login').removeClass("switch_btn").addClass('switch_btn_focus');
		$('#switch_qlogin').removeClass("switch_btn_focus").addClass('switch_btn');
		$('#switch_bottom').animate({left:'100px',width:'90px'});

		$('#qlogin').css('display','block');
		$('#web_qr_login').css('display','none');
		});
	

  $("#loginIn_submit").click(function(){

    if($("#loginIn_user").val() == ""){
      $(".login_prompt").html("<p>账号不能为空</p>");
      return false;
    }
    if($("#loginIn_pass").val() == ""){
      $(".login_prompt").html("<p>密码不能为空</p>");
      return false;
    }
    $(".form_sub").submit();
  })

});
