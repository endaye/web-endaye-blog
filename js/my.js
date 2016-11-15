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
        $(".article-title").click(function(){
            var blogId = (event.target).getAttribute("id");
            $("#includedContent").load("blog/blog-" + blogId + ".html", g);
        });
        e();
    };

	var g = function() {
	    $(".back-to-blog-list").innerHTML = "<i class='fa fa-arrow-left' aria-hidden='true'></i>Back to Home";
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


