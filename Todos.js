$("ul").on("click","li",function(){
	$(this).toggleClass("done");
});

$("ul").on("click","span",function(event){
	
	$(this).parent().fadeOut(1000,function(){
		$(this).remove();	
	});
	event.stopPropogation();
});

$("input").keypress(function(event){
	console.log("Key Pressed");
	if(event.which==13)
	{
		var list=$("ul").html();
		var updatedList=list+ "<li><span><i class='fas fa-trash'></i></span>" + $(this).val() + "</li>";
		$(this).val("");
		$("ul").html(updatedList);	
	}
});

$(".fa-plus").on("click", function(){
	$("input").fadeToggle(1000);
	$(this).fadeOut(100);
	$(this).fadeIn(100);
});

