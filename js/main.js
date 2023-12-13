jQuery(document).ready(function( $ ) {

		// Menu settings
		$('#menuToggle, .menu-close').on('click', function(){
			$('#menuToggle').toggleClass('active');
			$('body').toggleClass('body-push-toleft');
			$('#theMenu').toggleClass('menu-open');
		});
		// Smooth scroll for the menu and links with .scrollto classes
	  $('.smoothscroll').on('click', function(e) {
	    e.preventDefault();
	    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      if (target.length) {

	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1500, 'easeInOutExpo');
	      }
	    }
			$('body').toggleClass('body-push-toleft');
			$('#theMenu').toggleClass('menu-open');
	  });

    // Phone SLideshow
    var phoneSlideshow = (function() {
    	function init() {
    		[].slice.call( document.querySelectorAll( '.ms-wrapper' ) ).forEach( function( el, i ) {
    			var open = false;
    			el.querySelector( 'button' ).addEventListener( 'click', changeView, false );
    			function changeView() {
    				if( open ) {
    					classie.remove( el, 'ms-view-layers' );
    				}
    				else {
    					classie.add( el, 'ms-view-layers' );
    				}
    				open = !open;
    			}
    		} );
    	}
    	init();
    })();
  // JavaScript Chart
  var doughnutData = [{
		value: 70,
		color: "#1abc9c"
	},
	{
		value: 30,
		color: "#ecf0f1"
	}
];
var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutData);

// Bootstrap Chart
var doughnutData = [{
	value: 80,
	color: "#1abc9c"
},
{
	value: 20,
	color: "#ecf0f1"
}
];
var myDoughnut = new Chart(document.getElementById("Java").getContext("2d")).Doughnut(doughnutData);

// WordPress Chart
var doughnutData = [{
	value: 90,
	color: "#1abc9c"
},
{
	value: 10,
	color: "#ecf0f1"
}
];
var myDoughnut = new Chart(document.getElementById("C#").getContext("2d")).Doughnut(doughnutData);

// HTML Chart
var doughnutData = [{
	value: 60,
	color: "#1abc9c"
},
{
	value: 40,
	color: "#ecf0f1"
}
];
var myDoughnut = new Chart(document.getElementById("html").getContext("2d")).Doughnut(doughnutData);

// Photoshop Chart
var doughnutData = [{
	value: 50,
	color: "#1abc9c"
},
{
	value: 50,
	color: "#ecf0f1"
}
];
var myDoughnut = new Chart(document.getElementById("Python").getContext("2d")).Doughnut(doughnutData);

// Illustrator Chart
var doughnutData = [{
	value: 50,
	color: "#1abc9c"
},
{
	value: 50,
	color: "#ecf0f1"
}
];
var myDoughnut = new Chart(document.getElementById("Maya").getContext("2d")).Doughnut(doughnutData);
});
