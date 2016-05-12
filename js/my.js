$(document).ready(function(){
	var f = function() {
		$(".article-title").click(function(){
			$("#includedContent").load("/blog/blog-20150611.html", g);
		});
	};

	var g = function() {
		$(".back-to-blog-list").click(function(){
			$("#includedContent").load("/blog/blog-list.html", f);
		});
	};

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


