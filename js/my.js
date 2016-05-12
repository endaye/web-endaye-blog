$(document).ready(function(){
	$(function(){
		$("#includedHeader").load("/html/header.html"); 
	});

	$(function(){
		$("#includedFooter").load("/html/footer.html"); 
	});

	$(function(){
		$("#includedContent").load("/blog/blog-list.html");
	});
});

$("button").click(function(){
	$.ajax({url: "/index.html", success: function(result){
		$("#includedContent").html(result);
	}});
});

