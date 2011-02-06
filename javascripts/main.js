$(document).ready(function() {
	$("div.links a img").hover(function(){
		$("#link_text p").clearQueue();
		$("#link_text p").show();
		$("#link_text").html("<p>" + $(this).attr("alt") + "</p>");
	}, function(){
		$("#link_text p").clearQueue();
		$("#link_text p").show().delay(500).fadeOut();
	});
});