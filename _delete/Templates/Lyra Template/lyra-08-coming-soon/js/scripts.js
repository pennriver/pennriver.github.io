/* Template: Lyra SaaS App Landing Page Template
   Author: Inovatik
   Version: 1.0.0
   Created: February 2017
   Description: Custom JS file
*/


/* Preloader */
//<![CDATA[
$(window).on('load', function() { // makes sure the whole site is loaded 
	"use strict";
	$('#status').delay(50).fadeOut(); // will first fade out the loading animation 
	$('#preloader').delay(550).fadeOut('slow'); // will fade out the white DIV that covers the website. 
	$('body').delay(550).css({'overflow':'visible'});
});
//]]>


(function($) {
    "use strict"; 
	
	/* Newsletter Form */
    $("#NewsletterForm").validator().on("submit", function(event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formNError();
            submitNMSG(false, "Check if all fields are filled in!");
        } else {
            // everything looks good!
            event.preventDefault();
            submitNForm();
        }
    });

    function submitNForm() {
        // initiate variables with form content
        var nemail = $("#nemail").val();
		
        $.ajax({
            type: "POST",
            url: "php/newsletterform-process.php",
            data: "&email=" + nemail, 
            success: function(text) {
                if (text == "success") {
                    formNSuccess();
                } else {
                    formNError();
                    submitNMSG(false, text);
                }
            }
        });
    }

    function formNSuccess() {
        $("#NewsletterForm")[0].reset();
        submitNMSG(true, "Message Submitted!")
    }

    function formNError() {
        $("#NewsletterForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass();
        });
    }

    function submitNMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center tada animated text-success";
        } else {
            var msgClasses = "h3 text-center text-danger";
        }
        $("#nmsgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
	
	
	/* Contact Form */
    $("#ContactForm").validator().on("submit", function(event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formCError();
            submitCMSG(false, "Check if all fields are filled in!");
        } else {
            // everything looks good!
            event.preventDefault();
            submitCForm();
        }
    });

    function submitCForm() {
        // initiate variables with form content
        var cfirstname = $("#cfirstname").val();
        var clastname = $("#clastname").val();
        var cemail = $("#cemail").val();
		var cmessage = $("#cmessage").val();

        $.ajax({
            type: "POST",
            url: "php/contactform-process.php",
            data: "firstname=" + cfirstname + "&lastname=" + clastname + "&email=" + cemail + "&message=" + cmessage, 
            success: function(text) {
                if (text == "success") {
                    formCSuccess();
                } else {
                    formCError();
                    submitCMSG(false, text);
                }
            }
        });
    }

    function formCSuccess() {
        $("#ContactForm")[0].reset();
        submitCMSG(true, "Message Submitted!")
    }

    function formCError() {
        $("#ContactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass();
        });
    }

    function submitCMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center tada animated text-success";
        } else {
            var msgClasses = "h3 text-center text-danger";
        }
        $("#cmsgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
	
	
	/* jQuery Page Scrolling Feature */
	// requires jQuery easing plugin
		$('a.scrolling').on('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: ($($anchor.attr('href')).offset().top - 50)
			}, 1250, 'easeInOutExpo');
			event.preventDefault();
		});
	// highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });
    // closes the responsive menu on menu item click
    $('.navbar-collapse ul li a').on('click', function(){ 
            $('.navbar-toggle:visible').click();
	});
    // offset for main navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })
	
	
	/* Initialize Morphtext for rotating text in header */
	$("#js-rotating").Morphext({
		// The [in] animation type. Refer to Animate.css for a list of available animations.
		animation: "fadeIn",
		// An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
		separator: ",",
		// The delay between the changing of each phrase in milliseconds.
		speed: 2000,
		complete: function () {
			// Called after the entrance animation is executed.
		}
	});
	
	
	/* Initialize Testimonials Swiper */
	var mySwiper = new Swiper ('.swiper-container', {
		// Optional parameters
		autoplay: 5000,
		
		// If we need pagination
		pagination: '.swiper-pagination',
		
		// Navigation arrows
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
    });        
    
	
	/* Initialize Magnific PopUp */
	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',
		
		fixedContentPos: false, /* keep it false to avoid html tag shift with margin-right: 17px */
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

	
	/* Remove Button Too Long Focus */
	$(".button, a").mouseup(function(){
		$(this).blur();
	});
	
})(jQuery);