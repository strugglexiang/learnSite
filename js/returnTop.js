(function(){
	 var box=document.createElement("div");
	 box.className="returnTop"
	 var str=`
	       <div>
				 <span class="returnTop-span1"></span>
			     <span class="returnTop-span2">返回顶部</span>
			</div>
	 `
	 box.innerHTML=str;
	$(box).appendTo($("body"));
	$(window).scroll(function(){
//		   xidingshow();
		   fanhuidbxiu();
	})
	
	
	function fanhuidbxiu(){
		 if($("body").is(":animated")){
		 	 return;
		 }
		 if($(document).scrollTop()>400){
		  	  $(box).show();
		  }
		  else{
		  	$(box).hide();
		  }
	}
	$(box).click(function(){
		 $("body").animate({
		 	 "scrollTop":"0"
		 },500);
	});
	 
})()
