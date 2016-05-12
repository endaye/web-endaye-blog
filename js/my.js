$(document).ready(function(){
	var f = function() {
		$("p").click(function(){
			$(this).hide();
		});
	}

	$(function(){
		$("#includedHeader").load("/html/header.html"); 
	});

	$(function(){
		$("#includedFooter").load("/html/footer.html"); 
	});

	$(function(){
		$("#includedContent").load("/blog/blog-list.html", f);
	});
});


