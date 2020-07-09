$(document).ready(function(){
   // console.log(1111)
    $.ajax({
        url:'../interface/showlist.php',
        dataType:'json',
        success:function(res){
            if(res.code==0){
                $('#go-shopping').css({display:'block'})
            }else{    
                var str = ''
                //   console.log(res)
               var total = res.data[0].product_num*res.data[0].product_price
               var nums = res.data[0].product_num
                   str += `<div class="item-box">
                               <div class="item-table">
                                   <div class="goods-img" >
                                       <img src=${res.data[0].product_img} alt="">
                                   </div>
                                   <div class="goods-name">
                                       <h3>${res.data[0].product_name}</h3>
                                   </div>
                                   <div class="goods-price">
                                   ${res.data[0].product_price}元
                                   </div>
                                   <div class="goods-num">
                                       <div class="change-goods-num">
                                           <p>-</p>
                                           <span>${res.data[0].product_num}</span>
                                           <p>+</p>
                                       </div>
                                   </div>
                                   <div class="goods-total">
                                       ${total}元
                                   </div>
                                   <div class="goods-action">
                                       <span>X</span>
                                   </div>
                               </div>
                           </div>`
               $('.list-item').html(str)
               $('.cart-total i').text(nums)
               $('.total-price em').text(total+'元')
              
               var changs = $('.change-goods-num > span').text()
               var price = $('.item-box .goods-price').text()
               $('.change-goods-num p').eq(0).click(function(){
                   if(changs <= 1){
                       alert('不能小于1')
                   }else{
                       changs--
                       total = parseInt(price)*changs
                       $('.change-goods-num > span').text(changs)
                       $('.cart-total i').text(changs)
                       $('.item-table .goods-total').text(total+'元')
                       $('.total-price em').text(total+'元')
                       $.ajax({
                           url:'../interface/updatewq.php',
                           data:{
                               id:10000,
                               type:'cut'
                           },
                           dataType:'json',
                       })
                   }
               })
               $('.change-goods-num p').eq(1).click(function(){
                       changs++
                       total = parseInt(price)*changs
                       $('.change-goods-num > span').text(changs)
                       $('.cart-total i').text(changs)
                       $('.item-table .goods-total').text(total+'元')
                       $('.total-price em').text(total+'元')       
                         $.ajax({
                             url:'../interface/updatewq.php',
                             data:{
                                 id:10000,
                                 type:'add'
                             },
                             dataType:'json',
                         })
                     
               })
               $('.item-box .goods-action').children().click(function(){
                   $('.list-item').html('')
                   $('.cart-total i').text(0)
                   $('.total-price em').text(0+'元')
                   $('#go-shopping').css({display:'block'})
                   $.get('../interface/delwq.php',{id:10000})
               })
            }
        }
    })
})

