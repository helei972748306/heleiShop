$('.page-main a').attr('href','./detalis.html')
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 横向切换选项
    loop: true, // 循环模式选项
    effect : 'fade',//淡入淡出
    speed:800,
    autoplay: {
      delay:3000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },//自动轮播
    // 如果需要分页器
    pagination :{
      el: '.swiper-pagination',
      clickable :true,
    //   bulletClass : 'my-bullet',
    //   bulletActiveClass: 'my-bullet-active',
  },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  })  
  $('.swiper-container').hover(function(){
    mySwiper.autoplay.stop();
  },function(){
    mySwiper.autoplay.start();
  });

  $('.tab-list').children().mouseenter(function(){
    $(this).addClass('tab-active').siblings().removeClass('tab-active').parent().parent().parent().parent().next().find('.brick-list').eq($(this).index()).removeClass('hide').siblings().addClass('brick-list clearfix hide')
  })

  $(window).scroll(function(){
    if($(window).scrollTop()>700){
      $('.mlgj8').css({
        visibility:'visible'
      })
    }else{
      $('.mlgj8').css({
        visibility:'hidden'
      })
    }
  });
  $('.mlgj8').click(function(){
    $('html').animate({
      scrollTop: 0
    },0)
  })
console.log(document.cookie)