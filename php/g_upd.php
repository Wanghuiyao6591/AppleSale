<?php
$xingming=$_REQUEST['uname'];
$price=$_REQUEST['price'];
$img=$_REQUEST['img'];
$uid=$_REQUEST['uid'];
//把信息拼接为SQL语句，提交给数据库服务器执行
$sql="UPDATE goods SET name='$xingming',price='$price',img='$img' WHERE dno=$uid";
$conn=mysqli_connect('localhost','root','root','car',3306);
	mysqli_query($conn,'SET NAMES UTF8');
$result=mysqli_query($conn,$sql);
if($result){
   $eno=mysqli_insert_id($conn);
   echo "修改成功！";
 }
  else{
	echo "修改失败！";
  }
?>
