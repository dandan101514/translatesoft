function bsStep(i) {
	$('.step').each(function() {
		var a, $this = $(this);
		if(i > $this.find('li').length) {
			console.log('您输入数值已超过步骤最大数量' + $this.find('li').length + '！！！');
			a=$this.find('li').length;
		} else if(i == undefined && $this.data('step') == undefined) {
			a = 1
		} else if(i == undefined && $this.data('step') != undefined) {
			a = $(this).data('step');
		} else {
			a = i
		}
		$(this).find('li').removeClass('active');
		$(this).find('li:lt(' + a + ')').addClass('active');
	})
}

$(function(){

  $(".btn_more").click(function(){
    if($(".publish_contents_lists").hasClass('height_list')){
      $(".publish_contents_lists").removeClass('height_list');
    }else{
      $(".publish_contents_lists").addClass('height_list');
    }
  })

  $(".btn_more_job").click(function(){
    if($(".publish_jobs_lists").hasClass('height_list')){
      $(".publish_jobs_lists").removeClass('height_list');
    }else{
      $(".publish_jobs_lists").addClass('height_list');
    }
  })

  $(".height_list li").click(function(){
    if($(this).hasClass('check_color')){
      $(this).removeClass('check_color')
    }else{
      $(this).addClass('check_color')
    }

  })


  var hotcard = $(".hot_cards_text").text();
  hotcard.substring(0,20)
  $(".hot_cards_text").text(hotcard.substring(0,20)+'......')

})
