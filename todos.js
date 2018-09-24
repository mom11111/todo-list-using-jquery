
$("ul").on("mouseenter","li",function(){
	$(this).toggleClass("completed");
});
/*$("ul").on("mouseout","li",function(){
	$(this).addClass("completed1");
});*/
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todotext=$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + todotext + "</li>");
	}
});