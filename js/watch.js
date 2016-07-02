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
		/**商品*/
		var imgs=$("#product>.left>img");
		imgs[0].addEventListener("mouseover",function(){this.src="../img/e2_1.png"});
		imgs[0].addEventListener("mouseout",function(){this.src="../img/e_07.png"});

		imgs[1].addEventListener("mouseover",function(){this.src="../img/e2_2.png"});
		imgs[1].addEventListener("mouseout",function(){this.src="../img/e_09.png"});

		imgs[2].addEventListener("mouseover",function(){this.src="../img/e2_3.png"});
		imgs[2].addEventListener("mouseout",function(){this.src="../img/e_11.png"});

		/**iphone配件*/

		var imgs=$("#pj>img");

		imgs[0].addEventListener("mouseover",function(){this.src="../img/r2_11_03.jpg"});
		imgs[0].addEventListener("mouseout",function(){this.src="../img/r1_07.jpg"});

		imgs[1].addEventListener("mouseover",function(){this.src="../img/r2_11_06.jpg"});
		imgs[1].addEventListener("mouseout",function(){this.src="../img/r1_10.jpg"});

		imgs[2].addEventListener("mouseover",function(){this.src="../img/r2_11.jpg"});
		imgs[2].addEventListener("mouseout",function(){this.src="../img//r1_11.jpg"});
		
		$("#link>ul").on("click","li", function() {
				$('[name="kw"]').val($(this).html());
				console.log($(this).html());
		});
		
	},
};
