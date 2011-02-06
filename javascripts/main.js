$(document).ready(function() {
	$("div.links a img").hover(function(){
		$("#link_text").clearQueue();
		$("#link_text").show();
		$("#link_text").html("<p>"+ $(this).attr("alt") +"</p>");
	}, function(){
		$("#link_text").show().delay(1000).fadeOut();
	});
});