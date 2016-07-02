$(function(){
	$('[name="btn"]').click(function(){
		var result=$('[name="form"]').serialize();
		$.post('../php/u_add.php',result,function(data){
			if(data=="exit"){
				alert("添加用户成功");
			}
		});
	});
});