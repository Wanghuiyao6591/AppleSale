<?php
	header('Content-Type:text/html');
	$sql="SELECT * FROM users";
	$conn=mysqli_connect('localhost','root','root','user',3306);
	mysqli_query($conn,'SET NAMES UTF8');
	$result=mysqli_query($conn,$sql);
	$goods=array();
	while(($row=mysqli_fetch_assoc($result))!=null){
		$goods[]=$row;
	};
	for($i=0;$i<count($goods);$i++){
		$r=$goods[$i];
		echo "<tr>";
		echo "<td class='no'>$r[dno]</td>";
		echo "<td>$r[name]</td>";
		echo "<td>$r[pwd]</td>";
		echo "<td><button class='sc'>删除</button></td>";
		echo "<td><button class='xg'>修改</button></td>";
		echo "</tr>";
	}
?>
