$(function(){
	$(".box").hide();
	$("#poster>div").mouseover(function(){
		var i = $(this).index(); 
		$(".box").eq(i).show();
	}).mouseout(function(){
		$(".box").hide();
	});
});