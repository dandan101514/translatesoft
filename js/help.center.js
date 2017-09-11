$(function(){

  // 常见问题问答
  var problemList ='<li class="problemLists">'+'<span class="nums">'+'</span>'+'<h5>'+'问：'+'<span class="problems">'+'</span>'+'</h5>'+'<p class="problemLists_p">'+'答：'+'<span class="answers">'+'</span>'+'</p>'+'<span class="promble_span_more">'+'展开'+'</span>'+'</li>'

  // 常见问题内容
  var problems = [
    { "problem": "环宇爱译是什么？", "answer":'“环宇爱译-专利翻译（网络）平台”旨在基于公司的翻译软件产品（爱译智能-PAT）构建融合在线专利翻译平台、议员工作平台、客户人力资源平台于一体的专利翻译平台。并逐步形成中外只是产权综合服务门户网站。并逐步形成中外只是产权综合服务门户网站并逐步形成中外只是产权综合服务门户网站并逐步形成中外只是产权综合服务门户网站并逐步形成中外只是产权综合服务门户网站并逐步形成中外只是产权综合服务门户网站并逐步形成中外只是产权综合服务门户网站并逐步形成中外只是产权综合服务门户网站并逐步形成中外只是产权综合服务门户网站并逐步形成中外只是产权综合服务门户网站并逐步形成中外只是产权综合服务门户网站并逐步形成中外只是产权综合服务门户网站并逐步形成中外只是产权综合服务门户网站并逐步形成中外只是产权综合服务门户网站并逐步形成中外只是产权综合服务门户网站并逐步形成中外只是产权综合服务门户网站并逐步形成中外只是产权综合服务门户网站并逐步形成中外只是产权综合服务门户网站并逐步形成中外只是产权综合服务门户网站并逐步形成中外只是产权综合服务门户网站并逐步形成中外只是产权综合服务门户网站over' },
    { "problem": "有何便利？", "answer":'改变目前专利代理行业（翻译）中存在的议员分散、合格议员少、缺少好工具、周期长、价格不合理等问题。'},
    { "problem": "有何好处？", "answer":'为只是产权代理商和专利申请人提供优质的专业翻译服务。为广大专业代理（翻译）工作者提供更多业务机会。包括兼职赚外快机会。' }
  ];


  // 循环常见问题
  for(var i=0;i<3;i++){
    $(".problems_ul").append(problemList);


    for(var j=0;j<=i;j++){
      $(".nums").eq(i).text(j+1)
      $(".problems").eq(j).html(problems[j].problem);
      $(".answers").eq(j).html(problems[j].answer.substring(0,120)).append('......');


    }

  }


  // 常见问题 展开显示更多
  $(".promble_span_more").on('click',function(k){

    k = $(this).index(".promble_span_more");
    if($(".answers").eq(k).text().length <= 126){
      $(this).text('收起')

      if($(".answers").eq(k).text().length == problems[k].answer.length+6){
        $(this).text('收起')
        $(".answers").eq(k).html(problems[k].answer)
      }else if($(".answers").eq(k).text().length != problems[k].answer.length+6 && problems[k].answer.length<=126){
        $(this).text('展开')
        $(".answers").eq(k).html(problems[k].answer).append('......');
      }else{
        $(".answers").eq(k).html(problems[k].answer);
      }


    }else{
      $(this).text('展开')
      $(".answers").eq(k).html($(".answers").eq(k).text().substring(0,120)).append('......');
    }
  })



})
