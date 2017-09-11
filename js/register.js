$(function(){

	$('#switch_qlogin').click(function(){
		$('#switch_login').removeClass("switch_btn_focus").addClass('switch_btn');
		$('#switch_qlogin').removeClass("switch_btn").addClass('switch_btn_focus');
		$('#switch_bottom').animate({left:'0px',width:'85px'});
		$('#qlogin').css('display','none');
		$('#web_qr_login').css('display','block');

		});

	$('#switch_login').click(function(){
		$('#switch_login').removeClass("switch_btn").addClass('switch_btn_focus');
		$('#switch_qlogin').removeClass("switch_btn_focus").addClass('switch_btn');
		$('#switch_bottom').animate({left:'118px',width:'120px'});

		$('#qlogin').css('display','block');
		$('#web_qr_login').css('display','none');
		});
	});


var	pwdmin = 6;

$(document).ready(function() {

	$("#tel_submit").click(function(){
		// 手机号验证
		if($("#tel").val() == ""){
			$('#tel').focus().css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});
			$('#userMes').html("<font color='red'><b>×手机号不能为空</b></font>");
			return false;
		}else{
			$('#tel').focus().css({
				border: "1px solid #ccc",
				boxShadow: "none"
			});
		}
		// 验证码验证
		if($("#inputPassword1").val() == ""){
			$('#inputPassword1').focus().css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});
			$('#userMes').html("<font color='red'><b>×验证码不能为空</b></font>");
			return false;
		}else{
			$('#inputPassword1').focus().css({
				border: "1px solid #ccc",
				boxShadow: "none"
			});
		}
		// 密码验证
		if($("#inputPassword2").val() == ""){
			$('#inputPassword2').focus().css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});
			$('#userMes').html("<font color='red'><b>×密码不能为空</b></font>");
			return false;
		}else{
			$('#inputPassword2').focus().css({
				border: "1px solid #ccc",
				boxShadow: "none"
			});
		}
		// 注册倾向
		if($(".login_radio:checked").length < 1){
			$('.radio-inline').css({
				color: "red"
			});
			$('#userMes').html("<font color='red'><b>×请选择注册倾向</b></font>");
			return false;
		}else{
			$('.radio-inline').css({
				color: "#222"
			});
		}
		// 环宇爱译协议是否同意
		if($("#inlineCheckbox1:checked").length == 0){
			$('.checkbox-inline').css({
				color: "red"
			});
			$('#userMes').html("<font color='red'><b>×是否同意协议</b></font>");
			return false;
		}

		$('#login_form').submit();
	})


	$(".login_radio").change(function(){
		if($(".login_radio:checked").length >= 1){
			$('.checkbox_01').css({
				color: "#222"
			});
			$('#userMes').html("快速注册请注意格式");
		}
	})

	$("#inlineCheckbox1").change(function(){
		if($("#inlineCheckbox1:checked").length > 0){
			$('.checkbox-inline').css({
				color: "#222"
			});
			$('#userMes').html("快速注册请注意格式");
		}
	})
// 手机号注册结束


// 用户名密码注册 开始
	$('#use_submit').click(function() {

		if ($('#user').val() == "") {
			$('#user').focus().css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});
			$('#userCue').html("<font color='red'><b>×用户名不能为空</b></font>");
			return false;
		}else if ($('#user').val().length < 4 || $('#user').val().length > 16) {
			$('#user').focus().css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});
			$('#userCue').html("<font color='red'><b>×用户名位4-16字符</b></font>");
			return false;
		}else{
			$('#user').focus().css({
				border: "1px solid #ccc",
				boxShadow: "none"
			});
		}
		if ($('#passwd').val().length < pwdmin) {
			$('#passwd').focus();
			$('#userCue').html("<font color='red'><b>×密码不能小于" + pwdmin + "位</b></font>");
			return false;
		}else{
			$('#passwd').focus().css({
				border: "1px solid #ccc",
				boxShadow: "none"
			});
		}
		if ($('#passwd2').val() != $('#passwd').val()) {
			$('#passwd2').focus();
			$('#userCue').html("<font color='red'><b>×两次密码不一致！</b></font>");
			return false;
		}else{
			$('#passwd2').focus().css({
				border: "1px solid #ccc",
				boxShadow: "none"
			});
		}
		// 注册倾向
		if($(".login_radio02:checked").length < 1){
			$('.radio-inline02').css({
				color: "red"
			});
			$('#userCue').html("<font color='red'><b>×请选择注册倾向</b></font>");
			return false;
		}else{
			$('.radio-inline02').css({
				color: "#222"
			});
		}
		// 环宇爱译协议是否同意
		if($("#inlineCheckbox2:checked").length == 0){
			$('.checkbox_02').css({
				color: "red"
			});
			$('#userCue').html("<font color='red'><b>×是否同意协议</b></font>");
			return false;
		}else{
			$('.checkbox_02').css({
				color: "#222"
			});
		}
		$('#regUser').submit();
	});
	$(".login_radio02").change(function(){
		if($(".login_radio02:checked").length >= 1){
			$('.radio-inline02').css({
				color: "#222"
			});
			$('#userCue').html("快速注册请注意格式");
		}
	})

	$("#inlineCheckbox2").change(function(){
		if($("#inlineCheckbox2:checked").length > 0){
			$('.checkbox_02').css({
				color: "#222"
			});
			$('#userCue').html("快速注册请注意格式");
		}
	})


});
