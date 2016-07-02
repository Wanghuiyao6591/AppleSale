<?php
	header('Content-Type:application/json');
	$output = array('status'=>0, 'msg'=>'');
	$uname=$_REQUEST['uname'];
	$pwd=$_REQUEST['pwd'];
	$sql="SELECT * FROM users WHERE name='$uname' AND pwd='$pwd'";
	$conn=mysqli_connect('localhost','root','root','user',3306);
	mysqli_query($conn,'SET NAMES UTF8');
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_assoc($result);
	if($row){
		$output['status'] = intval($row['dno']); //把字符串转化为整数
		$output['msg'] = $uname;
	}else {
		$output['status'] = -404;
		$output['msg'] = '用户名或密码错误';
	}

	echo json_encode($output);
	
?>
