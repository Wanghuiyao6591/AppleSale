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
		$output['status'] = intval($row['dno']); //���ַ���ת��Ϊ����
		$output['msg'] = $uname;
	}else {
		$output['status'] = -404;
		$output['msg'] = '�û������������';
	}

	echo json_encode($output);
	
?>
