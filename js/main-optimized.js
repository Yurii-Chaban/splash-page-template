var preloader = $("#preloader");
//hide Preloader function
function preloaderHide() {
    preloader.hide();
    $(".site, .site-footer").fadeIn(1000);
}
//show Preloader function
function preloaderShow() {
    preloader.show();
    $(".site, .site-footer").css({
        "display": "none"
    });
}
preloaderShow();

$(document).ready(function () {

    preloaderHide();

    // code for mobile and tablet

        // change logo on scroll
        if (widh < 1023) {
            function resizeHeaderOnScroll() {
            const distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 0,
                headerEl = $('.site-header');

            if (distanceY > shrinkOn) {
                headerEl.addClass("smaller");
                lrg_logo.animate({
                    "width": "0",
                    "opacity": "0",
                    "margin": "0 auto",
                    "-webkit-transition": "width .001s ease-out, opacity .001s ease-out",
                    "-moz-transition": "width .001s ease-out, opacity .001s ease-out",
                    "transition": "width .001s ease-out, opacity .001s ease-out",
                }, 1);
                sml_logo.fadeIn("slow");
                $(".concentric_dev_group_section").css({
                    "padding-top": "60px"
                });
            } else {
                lrg_logo.animate({
                    "width": "100%",
                    "opacity": "1",
                    "margin": "0 auto 20px",
                    "-webkit-transition": "width .0001s ease-in, opacity .0001s ease-in",
                    "-moz-transition": "width .0001s ease-in, opacity .0001s ease-in",
                    "transition": "width .0001s ease-in, opacity .0001s ease-in",
                }, 0);
                sml_logo.fadeOut("fast");
                headerEl.removeClass("smaller");
                $(".concentric_dev_group_section").css({
                    "padding-top": "140px"
                });
            }
        }
        }

        $(".menu-item-has-children").on('touchstart', function () {
            setTimeout(function () {
                $(this).click();
            }, 100);
        })

        window.addEventListener('scroll', resizeHeaderOnScroll);
    //anchor link for click on logo
    $(".site-logo").on("click", "a", function (event) {
        event.preventDefault();

        var id = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1000);
    });

});