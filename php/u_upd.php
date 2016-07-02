<?php
$xingming=$_REQUEST['uname'];
$pwd=$_REQUEST['pwd'];
$uid=$_REQUEST['uid'];
//把信息拼接为SQL语句，提交给数据库服务器执行
$sql="UPDATE users SET name='$xingming',pwd='$pwd' WHERE dno=$uid";
$conn=mysqli_connect('localhost','root','root','user',3306);
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
