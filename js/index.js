$(function(){
	nav.init();
	slider.init();
});
imgs=[{"i":0,"img":"./img/w1_03.jpg"},
	 {"i":1,"img":"./img/w2_03.jpg"},
	 {"i":2,"img":"./img/w3_03.jpg"}];
imgs2=[{"i":0,"img":"../img/w1_03.jpg"},
	 {"i":1,"img":"../img/w2_03.jpg"},
	 {"i":2,"img":"../img/w3_03.jpg"}];
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
slider={
	LIWIDTH:1200,
	DISTANCE:0,
	STEPS:50,
	INTERVAL:0,
	TIMES:1000,
	step:0,
	timer:null,
	moved:0,
	canAuto:true,
	WAIT:2000,
	init:function(){
		this.INTERVAL=this.TIMES/this.STEPS;
		this.update();
		var me=this;
		document.querySelector("#idx").addEventListener("mouseover",function(e){
			if(e.target.nodeName=="LI"&&e.target.className!="hover"){
				var starti=document.querySelector("#idx>li.hover").dataset.i;
				var endi=e.target.dataset.i;
				me.move(endi-starti);
			}
		});
		$("#banner").mouseover(function(){
			me.canAuto=false;
			$("#banner .left").show()
			$("#banner .right").show();
		});
		$("#banner").mouseout(function(){
			me.canAuto=true;
			$("#banner .left").hide();
			$("#banner .right").hide();
		});
		$("#banner .left").click(function(){
			me.move(-1);
		});
		$("#banner .right").click(function(){
			me.move(1);
		});

	},
	update:function(){
		$('#img').css('width',imgs.length*this.LIWIDTH+"px");
		for(var i=0,str="",idx="";i<imgs.length;i++){
			str+='<li><a href="#"><img src="'+imgs[i].img+'"/></a></li>';	
			idx+='<li></li>';
		};
		$('#img').html(str);
		$('#idx').html(idx);
		document.querySelectorAll("#idx>li")[imgs[0].i].className="hover";
		var lis=document.querySelectorAll("#idx>li");
		for(var i=0;i<lis.length;i++){
			lis[i].dataset.i=i;
		}
	},
	move:function(n){
		if(this.timer!=null){
			clearTimeout(this.timer);
			this.timer=null;
			this.moved=0;
			$("#img").css('left','');
		}
		this.DISTANC=n*this.LIWIDTH;
		this.step=this.DISTANC/this.STEPS;
		if(n<0){
			var dels=imgs.splice(imgs.length+n,-n);
			Array.prototype.unshift.apply(imgs,dels);
			document.querySelector("#img").style.left=n*this.LIWIDTH+"px";
			this.update();
		}
		this.timer=setTimeout(this.moveStep.bind(this,n),this.INTERVAL);
	},
	moveStep:function(n){
		var left=parseFloat(getComputedStyle(document.querySelector("#img")).left);
		document.querySelector("#img").style.left=left-this.step+"px";
		this.moved++;
		if(this.moved<this.STEPS){
			this.timer=setTimeout(this.moveStep.bind(this,n),this.INTERVAL);
		}else{
			clearTimeout(this.timer);
			this.timer=null;
			this.moved=0;
			if(n>0){
				var del=imgs.splice(0,n);
				imgs=imgs.concat(del);
				this.update();
			}
			$("#img").css('left','');
			this.autoMove();
		}
	},
	autoMove:function(){
		var me=this;
		this.timer=setTimeout(function(){
			if(me.canAuto){
				me.move(1);
			}else{
				me.autoMove();
			}
		},this.WAIT);
	},	
};