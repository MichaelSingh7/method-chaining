$(document).ready(function() {
 

 	

	// removes class makeRed, adds class makeBorder on mouseenter
	$(".bottom_button").mouseenter(function() {
		$(this).removeClass("makeRed").addClass("makeBorder");
	});

	$(".bottom_button").mouseleave(function() {
		$(this).addClass("makeRed").removeClass("makeBorder");
	});
});	

	
	// hides/shows paragraphs when either button is clicked
	$(".bottom_button").click(function() {
		$("p").hide(3000).show(3000);
	});
