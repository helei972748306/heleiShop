// const src = require("gulp-webserver");

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
  $('.btn').click(function(){
    $.ajax({
      url:'../interface/addwq.php',
      type:'POST',
      data:{
        id:10000,
        name:$('.product-con').children().first().text(),
        img:$('.product-con').children().eq(1).attr('src'),
        price:$('.price-info').children().first().text(),
      },
      dataType:'json',
      success:function(data){
        if(data.code==1){
          window.location.href='./cart.html'
        }
      }
    })
  })
  // console.log($('.product-con').children().eq(1))