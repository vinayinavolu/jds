/** CrimsonLogic UX Practice R2-S2 Foundation JS Components **/

/** Start of Scroll to Top Script **/

$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
    $('#scroll-to-top').addClass("show");    // Move in the arrow
  } else {
    $('#scroll-to-top').removeClass("show");   // Move out out the arrow
  }
});
$('#scroll-to-top').click(function() {      // When arrow is clicked
  $('body,html').animate({
    scrollTop : 0                       // Scroll to top of body
  }, 500);
});

/** End of Scroll to Top Script **/


/** Start of Smooth Scrolling to Anchor Scripts **/

// Scroll to Anchor if it is specified in the URL //
if (window.location.hash) {  
  $('html, body').animate({
    scrollTop: $(window.location.hash).offset().top
  }, 1000, 'swing');
}

// Scroll to Anchor //
$('a[href^="#section"]:not([href$=\\#])').click(function () {
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top - 50
  }, 1000, 'swing'); 
});

/** End of Smooth Scrolling to Anchor Scripts **/
// Scroll to Anchor //
$('a.dropdown-item').click(function () {
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top - 80
  }, 1000, 'swing'); 
});

/** End of Smooth Scrolling to Anchor Scripts **/


/** Start of Loader Script **/

// For demo purpose to add 2 seconds delay before page is displayed.
// Uncomment the following segment and replace showPage with delayPage for body's onload.

function testLoader() {
  document.getElementById("loader").style.display = "block";
  setTimeout('$("#loader").fadeOut("fast")', 5000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
}

/** End of Loader Script **/


/** Start of Notification Bar Script **/

$("#notification-close").click(function(){
  $("#notification").hide("slow");
});

/** End of Notification Bar Script **/


/** Start of Animated Menu Icon Script **/

function menuMove(x) {
  x.classList.toggle("change");
}

/** End of Animated Menu Icon Script **/