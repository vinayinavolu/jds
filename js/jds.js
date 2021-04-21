/** CrimsonLogic UX Practice R2-S2 Foundation **/
/** Project Specific Custom Scripts **/

/** Things to do when document is loaded **/
$(document).ready(function() {

  // Overlay the Loader and hides it when page is done loading **/
  showPage();

  // Show the Notification after 2 seconds
  setTimeout('$("#notification").show("slow")', 2000);

  // Hide the navbar when user scrolls down, show the navbar when the user scrolls up */
  /*var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
	  document.getElementById("navbar-autohide").style.top = "0";
	} else {
      document.getElementById("navbar-autohide").style.top = "-30px";
	}
	prevScrollpos = currentScrollPos;
  }
*/
	
	
	
	$('[data-toggle="tooltip"]').tooltip();
	
	$(".popover-link").click(function(){
		$(".popover-content").hide();
		$(this).parent().children(".popover-content").show();
	});
	
	$(".popover-close").click(function(){
		$(".popover-content").hide();
	})
	
	
	
	$(".dropdown-toggle-cust").click(function(){
	$(this).parent(".dropdown-cust").toggleClass("active");

	if($(this).parent(".dropdown-cust").hasClass("active")){
	$(".dropdown-cust").removeClass("active");
	$(this).parent(".dropdown-cust").addClass("active");

	}


	});



	$(".side-nav ul li .dropdown-toggle-cust").click(function(e){
	e.stopPropagation();
	});

	$(document).click(function(){
	$(".side-nav.collapsed .dropdown-cust").removeClass("active");
	});

	$(".side-nav-collapse").click(function(){
	$(this).toggleClass('collapsed');
	$(".side-nav").toggleClass('collapsed');
	$(".content").toggleClass('collapsed');



	});
	
	
	if($(window).width() <= 767)
	{  
	$(".side-nav ul li .dropdown-toggle-cust").click(function(e){
	e.stopPropagation();
	});

	$(document).click(function(){
	$(".side-nav .dropdown-cust").removeClass("active");
	});
	}
	
	
  // Toggle and Slide In or Out the Mobile Menu
  $('.navbar-toggler').click(function(){
    $(".navbar-container").toggleClass("nav-open");
    $("body").toggleClass("nav-open");
    $(this).toggleClass("active");
    $(".navbar-collapse").toggleClass("nav-open");
  });
    // Change data table previous next text to icon (chevron)
$.extend(true, $.fn.dataTable.defaults.oLanguage.oPaginate, {
    sNext: '<i class="fal fa-chevron-right" ></i>',
    sPrevious: '<i class="fal fa-chevron-left" ></i>'
});
  // Render DataTables  
  $("#datatables-example").DataTable({
    responsive: true,
    colReorder: true,
	retrieve: true,

  });
  
// Change data table previous next text to icon (chevron)


	// Initiate AOS: Animate On Scroll
	AOS.init();
	

});

$(window).scroll(function() {
	if ($(this).scrollTop() >= 30) {        // If page is scrolled more than 30px
	$('header').addClass("movetotop");    // Move header to top of the page
	} else {
	$('header').removeClass("movetotop");   // Move header back to original position
	}
});

		if($(window).width() <= 767)
	{   
		$(".popover-link").click(function(){
		$(".popover-content").hide();
		$(".pop-overlay").show();
		$(this).parent().children(".popover-content").show();
	});
	
	$(".popover-close, .pop-overlay").click(function(){
		$(".popover-content").hide();
		$(".pop-overlay").hide();
	})

	}



