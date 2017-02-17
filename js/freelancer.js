$(document).ready(function() {

    setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','#222222');
    }, 3000);
});

//in order to support the hover effects by touching action 
document.body.addEventListener('touchstart', function () { });

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });

})(jQuery); // End of use strict


//auto fit for youku iframe
window.onload = window.onresize = function () {
    resizeIframe();
};

var resizeIframe=function(){
    var bodyw=document.body.clientWidth*0.65;
    for(var ilength=0;ilength<=document.getElementsByTagName("iframe").length;ilength++) {
        if(document.getElementsByTagName("iframe")[ilength])
            document.getElementsByTagName("iframe")[ilength].height = bodyw*9/16;
    }
};

//fix the position of the close icon to the top while scrolling
$('.portfolio-modal').each(function () {
    $(this).scroll(function () {
        $(this).find('.close-modal').css('top', $(this).scrollTop() + 30);
        console.log($(this).scrollTop())
    })
});
