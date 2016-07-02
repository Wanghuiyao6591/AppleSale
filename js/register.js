$(function(){
	nav.init();
});
nav={
	status:null,
	init:function(){
		$('#header .search').click(function(){
			$("#header").hide();
			$('#search').show();
			$('[name="kw"]').focus();
		});
		$('#search .x').click(function(){
			$("#header").show();
			$('#search').hide();
			$('[name="kw"]').val("");
		});
		$('[name="kw"]').keyup(function(){
			$.get('../php/search.php',{kw:$('[name="kw"]').val()},function(data){
				$('#link').html(data);
			});
		});
		/*$('#link>ul>li').click(function(){
				$('[name="kw"]').val($(this).html());
				console.log($(this).html());
		});*/
		$("#link>ul").on("click","li", function() {
				$('[name="kw"]').val($(this).html());
				console.log($(this).html());
		});
		$('[name="btn"]').click(function(){
			var result=$('[name="form"]').serialize();
			$.post('../php/register1.php',{uname:$('[name="uname"]').val()},function(data){
				if(data==="exist"){
					$('#span1').html('该用户名已存在');
					$('#span1').css('display','block');
					$('[name="uname"]').focus();
				}else{
					if($('[name="pwd"]').val()==$('[name="cpwd"]').val()){
						$.post('../php/register.php',result,function(data){
						$('#span1').html('');
						$('#span1').css('display','none');
						$('#span2').html('');
						$('#span2').css('display','none');
						alert(data);
						location.href="dl.html";
						});
					}else{
						$('#span2').html('两次密码输入不一致，请重新输入');
						$('#span2').css('display','block');
					}
				}
			});
		});
		$('[name="uname"]').blur(function(){
			$.post('../php/register1.php',{uname:$('[name="uname"]').val()},function(data){
				if(data==="exist"){
					$('#span1').html('该用户名已存在');
					$('#span1').css('display','block');
				}else{
					$('#span1').html('');
					$('#span1').css('display','none');
				}
			});
		});
		//原生js方法
		/*$('[name="kw"]').keyup(function(){
			var xhr=new XMLHttpRequest();
			xhr.onreadystatechange=function(){
				if(xhr.readyState===4){
					if(xhr.status===200){
						$('#link').html(xhr.responseText);
					}else{
						console.log("错误");
					}
				}
			};
			xhr.open('GET','../php/search.php?kw='+$('[name="kw"]').val(),true);
			xhr.send();
		});*/
		$('#header .go>a').click(function(e){
			e.preventDefault();
			if(($('#header .go>b').css('display')=="none")&&($('#go_box').css('display')=="none")){
				$('#header .go>b').css('display','block');
				$('#go_box').css('display','block');
			}else{
				$('#header .go>b').css('display','none');
				$('#go_box').css('display','none');
			}
		});
	},
};
