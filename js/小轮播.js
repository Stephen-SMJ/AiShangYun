(function($){

	"use strict";

	// Featured Works
	var $gallery = $('.works-slider').flickity({
		cellAlign: 'center',
		contain: true,
		wrapAround: true,
		autoPlay: false,
		prevNextButtons: true,
		percentPosition: true,
		imagesLoaded: true,
		lazyLoad: 1,
		pageDots: true,
		selectedAttraction : 0.1,
		friction: 0.6,
		rightToLeft: false,
		arrowShape: 'M 10,50 L 55,95 L 60,90 L 20,50  L 60,10 L 55,5 Z'
	});

	// magnific popup bug fix
	var popupItems = $.map( $gallery.find('.gallery-cell a'), function( link ) {
    return {
      src: link.href,
      type: $(link).attr('data-popup-type') || 'image'
    }
  });

  $gallery.on('staticClick', function(event, pointer, cellElement, cellIndex) {
    if (!cellElement) {
      return;
    }
    $.magnificPopup.open({
      items: popupItems,
      gallery: {
        enabled: true
      },
      callbacks: {
        open: function () {
          $.magnificPopup.instance.goTo( cellIndex );
        }
      }
    });
  });

  // prevent links from opening
  $gallery.on( 'click', 'a', function(event) {
    event.preventDefault();
  });


	/* Parallax
	-------------------------------------------------------*/

	$.stellar({
		horizontalScrolling: false
	});


	// Wow Animations

	var wow = new WOW({
		offset: 50,
		mobile: false
	});

	wow.init();

	/* FitVIds
	-------------------------------------------------------*/
	$(".video-wrap").fitVids();

})(jQuery);



/* Full Height Container
-------------------------------------------------------*/
