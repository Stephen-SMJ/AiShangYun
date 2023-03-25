(function ($) {
    "use strict";

    $(window).on("scroll", function () {
        toggleBackToTopBtn();

    });

    $("body").append("<a href='#' class='back-to-top'><span class='iconfont icon-huojian' style='color: white; font-size: 20px'></span></a>");

    function toggleBackToTopBtn() {
        var amountScrolled = 1000;
        if ($(window).scrollTop() > amountScrolled) {
            $("a.back-to-top").fadeIn("slow");
        } else {
            $("a.back-to-top").fadeOut("slow");
        }
    }

    $(".back-to-top").on("click", function () {
        $("html,body").animate({
            scrollTop: 0
        }, 700);
        return false;
    })
})(window.jQuery);