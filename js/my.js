$(document).ready(function(){

    var e = function () {
        var blogs = document.getElementsByClassName("article-title");
        for (var i = 0; i < blogs.length; i++) {
            var blog = blogs[i];
            var blogId = blog.getAttribute("id");
            var blogDate = blogId.substr(0,4) + "-" + blogId.substr(4,2) + "-" + blogId.substr(6,2);
            blog.getElementsByTagName("d")[0].innerHTML = blogDate;
        }
    }

    var f = function() {
        $("#includedBlogList").load("blog/blog-list.html", g);
    }
    var g = function() {
        $(".article-title").click(function(){
            var blogId = (event.target).getAttribute("id");
            $("#includedBlogContent").load("blog/blog-" + blogId + ".html", function () {
                hljs.initHighlighting.called = false;
                hljs.initHighlighting();
            });
        });
        e();
    };

	$(function(){
		$("#includedHeader").load("html/header.html");
	});

	$(function(){
		$("#includedFooter").load("html/footer.html");
	});

	$(function(){
		$("#includedContent").load("blog/blog-wapper.html", f);
	});
});


