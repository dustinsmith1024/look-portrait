$(function(){
	if (Modernizr.inlinesvg) {
        // Swap in SVG's for better zooming and pixelness on retina displays
        $('#logo').attr('src', $('#logo').attr('src').replace('png', 'svg'));
        $('#footer-logo').attr('src', $('#footer-logo').attr('src').replace('png', 'svg'));
    }

	$(document).on("click", "#pictures-list a", function(e){
		var $this = $(this),
			$list = $("#pictures-list");
		// Swap out the picture for the link clicked
		swapPicture("#active-picture", $this.attr('href'));
		$(".active-picture").removeClass('active-picture');
		$this.addClass('active-picture');
		e.preventDefault();
	});

	$(document).on("click", "#active-picture", function(e){
		e.preventDefault();
		var $next,
			$active = $('.active-picture');
		// Find active and get the next one
		if ($active.length){
			$next = $active.parent().next().find('a');
		}
		if (!$next || !$next.length){// Initial page load or end of list
			$next = $("#pictures-list li:first a");
		}
		// Swap out the main pic for the next in the list
		swapPicture("#active-picture", $next.attr('href'));
		$(".active-picture").removeClass('active-picture');
		$next.addClass('active-picture');
	});

	function swapPicture(container, src) {
		// Just a helper to clean up duplicate code of swapping in the pictures
		// Dont use AJAX for loading in pictures just append the element
		// This could possibly fail if image doesnt exist
		var $img = $("<img />").attr('src', src).removeAttr('height').fadeIn();
		$(container).html($img);
	}
});