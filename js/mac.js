$(function(){
	nav.init();
});
nav={
	init:function(){
		$('#header .search').click(function(e){
			e.preventDefault();
			$("#header").hide();
			$('#search').show();
			$('input:text').focus();
		});
		$('#search .x').click(function(e){
			e.preventDefault();
			$("#header").show();
			$('#search').hide();
		});
		$('input:text').blur(function(){
			$(this).val("");
		});
		$('[name="kw"]').keyup(function(){
			$.get('../php/search.php',{kw:$('[name="kw"]').val()},function(data){
				$('#link').html(data);
			});
		});
		$('#app>.title>ul>li').click(function(){
			var now=$('#app>.title>ul>li.com').attr('data-app');
			var tag=$(this).attr("data-app");
			$(now).css('display','none');
			$('#app>.title>ul>li.com').removeClass('com');
			$(tag).css('display','block');
			$(this).addClass('com');
		});
		/*$('#link>ul>li').click(function(){
				$('[name="kw"]').val($(this).html());
				console.log($(this).html());
		});*/
		$("#link>ul").on("click","li", function() {
				$('[name="kw"]').val($(this).html());
				console.log($(this).html());
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
	},
};
