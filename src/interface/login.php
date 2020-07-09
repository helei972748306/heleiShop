<?php
//处理中文乱码
header("content-type:text/html;charset=utf-8");

$username = $_POST['username'];
$password = $_POST['password'];

//链接数据库
$link = mysqli_connect('localhost','root','root','music');
//执行查询数据库
$res = mysqli_query($link,"SELECT*FROM`user`WHERE`username`='$username'");
//解析查询语句
$result = mysqli_fetch_all($res,MYSQL_ASSOC);

//判断
if($result){
    echo json_encode(array("code"=>0));   
}else{
    $res1 = mysqli_query($link,"INSERT INTO `user` VALUES (null,'$username','$password')");
    echo json_encode(array("code"=>1));  
}

?>