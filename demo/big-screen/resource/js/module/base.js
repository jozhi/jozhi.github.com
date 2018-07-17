$(function () {

  // do something
  var policeOfficerInfo = {
    basicInfo:{
      pic:'../resource/images/man.png',
      name:'张某某',
      sex:'男',
      type:'精神病人',
      grids:'彩虹社区',
      level:'高',
      position:'2018.6.28 14:21    彩红小学大门',
    },
    relatedVehicle:{
      pic:'../resource/images/car.png',
      numberPlate:'浙A88888',
      motorcycleType:'雪佛兰科鲁兹',
      carColor:'白色',
      registrationTime:'2013-12',
    },
    abnormalEvent:{
      time:'2016.6.26',
      detail:'在东南亚社区袭击路人由社区办人员管控强制隔离',
    },
    associatedPersonnel:[{
      familyRole:'父亲',
      name:'张三丰',
      phone:'15888888888',
    }],
    peerAnalysis:[{
      'record':'../resource/images/car.png',
      'name':'张三六',
      'peerIndex':'9.0',
    }]
  }


  $('.innerCont').on('click',function (e) {
    var _ = $(this)
    // console.log( e.pageX-400)
    // console.log( e.pageY-60)

    // console.log("{left:'"+(e.pageX-400)+"px',top:'"+(e.pageY-60)+"px'},")
    // console.log( e )
  })


  /* 点击周边警力之后的事件 */
  // factory.pointDialog({
  //   type:'policeAround'
  // })

  /* 实时监控 */
  factory.pointDialog({
    type:'alertVideo'
  })

  /* 周边警力 */
  factory.v_dialog({
    type:'viewVideo'
  })


  /* 警务人员详情 */
  factory.v_dialog({
    type:'profile'
  })

  /* 多人视频通话 */
  // factory.v_dialog({
  //   type:' xx'
  // })



  /* 选择周边人力 */
  $('#PM_part')
    .on('click','.policemen',function () {
      $(this).addClass('active').siblings().removeClass('active')
      factory.emptyPint()

      factory.build_PA_pint()
    })
    .on('click','.gridMember',function () {
      $(this).addClass('active').siblings().removeClass('active')
      factory.emptyPint()

      factory.build_GM_pint()
    })
    .on('click','.thirdParty',function () {
      $(this).addClass('active').siblings().removeClass('active')
      factory.emptyPint()

      factory.build_TP_pint()
    })


  /* 周边警力点击事件 */
  factory.createProfileDialog()

  /* 监控点点击事件 */
  factory.monitoryPointListen()


  /* 绘制行走路径 */
  factory.walkingPath()


  /* eChart */
  // factory.eChart()



  /* 滚动条 */

  scroll({
    self:$('#ap_Cont')
  })

  scroll({
    self:$('#PA_cont')
  })

  scroll({
    self:$('#PA_cont2')
  })

});