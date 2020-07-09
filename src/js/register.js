$('.btn').click(function(){
    $.ajax({
        url:'../interface/register.php',
        // dataType:'json',
        type:'post',
        data:{
            username:$('#text').val(),
            password:$('#password').val()
        },
        success:function(data){
            var a = JSON.parse(data)
            if(a.code==1){
                window.location.href='./index.html'
            }else{
                alert('登录失败,重新登录')
            }
        }
    })
})

