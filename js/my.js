$(document).ready(function(){

    var e = function () {
        var blogs = document.getElementsByClassName("article-title");
        for (var i = 0; i < blogs.length; i++) {
            var blog = blogs[i];
            blog.getElementsByTagName("d")[0].innerHTML = blog.getAttribute("id");
        }
    }

    var f = function() {
        $(".article-title").click(function(){
            var blogId = (event.target).getAttribute("id");
            $("#includedContent").load("blog/blog-" + blogId + ".html", g);
        });
        e();
    };

	var g = function() {
		$(".back-to-blog-list").click(function(){
			$("#includedContent").load("blog/blog-list.html", f);
		});
	};

	$(function(){
		$("#includedHeader").load("html/header.html");
	});

	$(function(){
		$("#includedFooter").load("html/footer.html");
	});

	$(function(){
		$("#includedContent").load("blog/blog-list.html", f);
	});
});


