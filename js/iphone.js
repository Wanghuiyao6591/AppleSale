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
		$("#link>ul").on("click","li", function() {
				$('[name="kw"]').val($(this).html());
				console.log($(this).html());
		});
		
	},
};
