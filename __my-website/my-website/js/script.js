$(document).ready(function() {

    $("#proj-one-extend").click(function() {
        $(".proj-one .proj-minified").css("display", "none");
        $(".proj-one .proj-extended").css("display", "block");
        $("#proj-one-extend").css("display", "none");
        $("#proj-one-collapse").css("display", "block");
    });

    $("#proj-one-collapse").click(function() {
        $(".proj-one .proj-minified").css("display", "block");
        $(".proj-one .proj-extended").css("display", "none");
        $("#proj-one-extend").css("display", "block");
        $("#proj-one-collapse").css("display", "none");
    });

    $("#proj-two-extend").click(function() {
        $(".proj-two .proj-minified").css("display", "none");
        $(".proj-two .proj-extended").css("display", "block");
        $("#proj-two-extend").css("display", "none");
        $("#proj-two-collapse").css("display", "block");
    });

    $("#proj-two-collapse").click(function() {
        $(".proj-two .proj-minified").css("display", "block");
        $(".proj-two .proj-extended").css("display", "none");
        $("#proj-two-extend").css("display", "block");
        $("#proj-two-collapse").css("display", "none");
    });

    // Show Navbar on Scroll Up but hide on Scroll Down.
    var previousScroll = 0;
    console.log("yeppo");

    $("body").scroll(function() {

        var currentScroll = $(this).scrollTop();

        if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()){

            if (currentScroll > previousScroll){
                window.setTimeout(hideNav, 50);
            } else {
                window.setTimeout(showNav, 50);
            }
            previousScroll = currentScroll;
        }

    });

    function hideNav() {
        $("#navbar").css("opacity", "0");
    }
    function showNav() {
        $("#navbar").css("opacity", "1");
    }


});