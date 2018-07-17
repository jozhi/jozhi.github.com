/**
 * Created by jozhi-pc on 2018/7/13.
 */

//列表滚动
function scroll(option){
  var $self=option.self;
  var hei=$self.find(".ul").height();
  var list=$self.find(".ul").html();

  if($self.find(".ul").height()>$self.height()){
    $self.find(".ul").append(list);
    var tp=0;
    var acti=setInterval(slid,50);
    function slid(){
      tp--;
      $self.find(".ul").css("top",tp + "px");
      if(parseInt($self.find(".ul").css("top"))<=-hei){
        tp=0;
      }
    }
    $self.hover(function(){
      clearInterval(acti);
    },function(){
      acti=setInterval(slid,50);
    })
  }
}

var factory = {
  /* 缓存周边警力当前选中标记 */
  currentPAPoint : null,
  currenMPPoint : null,
  /* 弹框绑定默认事件 */

  pointDialog:function (op) {

    /* 实时监控 */
    if(op.type === 'alertVideo'){
      var $alertVideo = $('#alertVideo')
      $alertVideo
        .on('click','.viewVideoButton',function () {
          $('#viewVideo').show()
        })
        .on('click','.close',function () {
          $alertVideo.hide()
          factory.currenMPPoint.removeClass('active')
          factory.currenMPPoint = null

          $('#sidebar2').hide()
        })
    }

  },
  v_dialog:function (op) {

    /* 实时监控视频播放 */
    if(op.type === 'viewVideo'){
      var $viewVideo = $('#viewVideo')

      $viewVideo
        .on('click','.close',function () {
          $viewVideo.hide()
        })
    }

    /* 周边警力人员详情 */
    if(op.type === 'profile'){
      var $profile = $('#profile')

      $profile
        .on('click','.videoCallBtn',function () {
          $(this).find('ul').slideDown(200)
        })
        .on('click','.videoCallBtn li',function (e) {

          $(this).addClass('active').siblings().removeClass('active').end()
            .parent().slideUp(200)
            .siblings('a').text(this.innerText)
          e.preventDefault()
          return false;
        })

        .on('click','.close',function () {
          $profile.hide()
          if(factory.currentPAPoint){
            factory.currentPAPoint.removeClass('active')
            factory.currentPAPoint = null
          }
        })
        .on('click','.sendMessage',function () {

          var txt = $profile.find('.videoCallBtn li.active').text()

          /* 视频通话 */
          if(txt === '视频通话'){
            factory.videoCallDialog()
          }else if(txt === '多人视频通话'){

            factory.MUD_dialog()
          }
        })
    }

  },

  MUD_dialog:function () {

  },

  /* 周边警力、人员对话框 */
  videoCallDialog:function () {
    var $dialog = $('#videoDialogue')

    $dialog.on('click','.close',function () {
      $dialog.hide()
    })
    $dialog.find('.submit button').on('click',function () {
      var $right = $dialog.find('.right').clone()

      var $textarea = $dialog.find('.submit textarea')
      if( $textarea.val() ){
        $right.find('.conversation').text( $textarea.val() )
        $textarea.val('')
        $dialog.find('.dialogueList').append($right)
      }
    })

    $dialog.slideDown(200)
  },

  /* 行走路劲动画 */
  walkingPath:function () {

    var $walkingPath = $('#walkingPath')

    var path_PL = [
      {top:'75px',left:'940px'},
      {top:'132px',left:'860px'},
      {top:'210px',left:'620px'},
      {top:'400px',left:'598px'},
      {top:'380px',left:'770px'},
      {top:'615px',left:'779px'}
    ]

    var curNumber = 0

    function animate(){
      if((curNumber+1)>path_PL.length){
        $walkingPath
          .find('.theTrajectory').show()
          .animate({width:200,height:200},800)
        return false;
      }

      var str = '<span class="monitoryPoint mp_'+(curNumber+1)+'"' +
        'data-top="'+path_PL[curNumber].top+'" data-left="'+path_PL[curNumber].left+'" ' +
        'style="top:'+path_PL[curNumber].top+';left:'+path_PL[curNumber].left+';"></span>'

      $walkingPath.find('.line').eq(curNumber).animate({height:'100%'},600,function () {
        $walkingPath.append(str).find('.mp_'+(curNumber+1)).slideDown(200,function () {
          curNumber += 1
          animate()
        })
      })
    }
    animate()
  },


  emptyPint:function () {
    $('#innerContent')
      .find('.policeAround').slideUp(200).remove().end()
      .find('.gridMemberPoint').slideUp(200).remove().end()
      .find('.thirdPartyPoint').slideUp(200).remove()
  },

  /* 周边警力标点 */
  build_PA_pint:function () {

    var PAPoint = [
      {left:'783px',top:'725px'},
      {left:'926px',top:'508px'},
      {left:'606px',top:'552px'},
      {left:'589px',top:'761px'},
      {left:'1033px',top:'652px'},
      {left:'794px',top:'851px'}
    ];

    var $dom = ''

    $.each(PAPoint,function (i, item) {
      $dom += '<span class="policeAround pa_'+(i+1)+'"' +
        'data-top="'+item.top+'" data-left="'+item.left+'"' +
        'style="top:'+item.top+';left:'+item.left+';"' +
      '></span>'
    })

    $('#innerContent').append($dom)
      .find('.policeAround').slideDown(200)

  },

  /* 周边网格员标点 */
  build_GM_pint:function () {

    var GM_Point = [
      {left:'457px',top:'474px'},
      {left:'727px',top:'864px'},
      {left:'1098px',top:'826px'},
      {left:'752px',top:'841px'},
      {left:'962px',top:'460px'},
      {left:'856px',top:'343px'}
    ];

    var $dom = ''
    $.each(GM_Point,function (i, item) {
      $dom += '<span class="gridMemberPoint pa_'+(i+1)+'"' +
        'data-top="'+item.top+'" data-left="'+item.left+'"' +
        'style="top:'+item.top+';left:'+item.left+';"' +
        '></span>'
    })

    $('#innerContent').append($dom)
      .find('.gridMemberPoint').slideDown(200)

  },

  /* 周边其他社会力量标点 */
  build_TP_pint:function () {

    var GM_Point = [
      {left:'1064px',top:'443px'},
      {left:'455px',top:'900px'},
      {left:'775px',top:'959px'},
      {left:'757px',top:'510px'},
      {left:'1231px',top:'509px'},
      {left:'1066px',top:'794px'},
      {left:'1055px',top:'905px'},
      {left:'807px',top:'972px'},
    ];

    var $dom = ''
    $.each(GM_Point,function (i, item) {
      $dom += '<span class="thirdPartyPoint pa_'+(i+1)+'"' +
        'data-top="'+item.top+'" data-left="'+item.left+'"' +
        'style="top:'+item.top+';left:'+item.left+';"' +
        '></span>'
    })

    $('#innerContent').append($dom)
      .find('.thirdPartyPoint').slideDown(200)

  },

  /* 周边警力点击事件 */
  createProfileDialog:function (option) {

    $('#innerContent')
      .on('click','.policeAround',function () {
        var $self = $(this)

        factory.currentPAPoint = $self

        $self.addClass('active').siblings('.policeAround').removeClass('active')

        $('#profile').hide().css({top:$self.data().top,left:$self.data().left}).slideDown(200)
      })

      /* 网格员 */
      .on('click','.gridMemberPoint',function () {
        var $self = $(this)

        $self.addClass('active').siblings('.gridMemberPoint').removeClass('active')

        $('#profile').hide().css({top:$self.data().top,left:$self.data().left}).slideDown(200)
      })

      /* 第三方力量 */
      .on('click','.thirdPartyPoint',function () {
        var $self = $(this)

        $self.addClass('active').siblings('.thirdPartyPoint').removeClass('active')

        $('#profile').hide().css({top:$self.data().top,left:$self.data().left}).slideDown(200)
      })

  },

  /* 监控点 */
  monitoryPointListen:function () {
    var $innerContent = $('#innerContent')
    var once = true;

    $innerContent.on('click','.monitoryPoint',function () {
      var $self = $(this)

      factory.currenMPPoint = $self

      $self.addClass('active').siblings('.monitoryPoint').removeClass('active')

      $('#alertVideo').hide().css({top:$self.data().top,left:$self.data().left}).slideDown(200)

      $('#sidebar2').show()
      if(once){
        factory.eChart()
        scroll({ self: $('#PA_cont2')})
        once = false;
      }
    })
  },

  eChart:function () {

    var myChart = echarts.init( document.getElementById("trendAnalysisChart") );
    var xAxisData = [
      '13:00', '13:05', '13:10', '13:15', '13:20',
      '13:25', '13:30', '13:35', '13:40', '13:45',
      '13:50', '13:55'
    ]
    var seriesData = [
      110, 148, 154, 141, 149,
      171, 177, 145, 151, 189,
      141, 115
    ]


    var option = {
      backgroundColor: '#1b2c42',
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          lineStyle: {
            color: '#57617B'
          }
        }
      },
      grid: {
        left: '1%',
        right: '1%',
        bottom: '5%',
        top: '5%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#0E2A43'
            }
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              fontSize: 14,
              color: '#D5CBE8'
            }
          },
          axisTick: {
            show: false
          },
          data:xAxisData
        }, {
          axisPointer: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#0E2A43'
            }
          },
          axisTick: {
            show: false
          },
          position: 'bottom',
          offset: 20
        }],
      yAxis: [{
        type: 'value',
        name: '单位（%）',
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#0E2A43'
          }
        },
        axisLabel: {
          margin: 10,
          textStyle: {
            fontSize: 14,
            color: '#D5CBE8'
          }
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: '#57617B'
          }
        }
      }],
      series: {
        name: '移动',
        type: 'line',
        smooth: true,
        stack: '总量',
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        animationDelay: 200,
        animationDuration: 1000,
        lineStyle: {
          normal: {
            width: 1,
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [{
                offset: 0, color: '#2693d8' // 0% 处的颜色
              }, {
                offset: 1, color: '#2693d8' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
            },
            opacity: 0.9
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(38, 146, 214, 1)'
            }, {
              offset: 0.8,
              color: 'rgba(38, 146, 214, 0)'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          }
        },
        itemStyle: {
          normal: {
            color: 'rgb(38,146,214)',
            borderColor: 'rgba(137,189,2,0.27)',
            borderWidth: 12

          }
        },
        data:seriesData
      }
    };


    myChart.setOption(option, true);

    function interval(){
      seriesData.shift()
      seriesData.push(100+Math.round(Math.random() * 100));
      setTimeout(function () {
        myChart.setOption(option, true);
        interval()
      },2000)
    }

    setTimeout(function () {
      interval()
    },1200)

  }
}