
(function($) { "use strict";
 
 	//Parallax            
              
	function scrollBanner() {
	  $(document).on('scroll', function(){

		
		var scrollPos = $(this).scrollTop();






		$('.app').children('.detail').each(function (index) {



			$( this ).css({
		
				'opacity' : (scrollPos/($(this).offset().top - 300))

			})

		});



			// $( ".app div:nth-child(1)" ).css({
		
			// 	'opacity' : (scrollPos/$(".app div:nth-child(1)").offset().top)

			// })

			$('.parallax-fade-top').css({
			'top' : (scrollPos/2)+'px',
			'opacity' : 1-(scrollPos/700)
			});

			$('.parallax-00').css({
			'top' : (scrollPos/-3.5)+'px'
			});

			$('.parallax-01').css({
			'top' : (scrollPos/-2.8)+'px'
			});

			$('.parallax-top-shadow').css({
			'top' : `${1 - (scrollPos/-5) }px`,
			'opacity': `${1 - (scrollPos/800)}`
			});

		});    
	  }
	scrollBanner();	              


	
  
//Scroll back to top
              
$(document).ready(function() {	


		var offset = 300;
		var duration = 400;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.scroll-to-top').removeClass('active-arrow');
			} else {
				jQuery('.scroll-to-top').addClass('active-arrow');
			}
		});				
		jQuery('.scroll-to-top').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: window.innerHeight}, duration);
			return false;
		})	
  

  
  });            
              
})(jQuery); 




// var $play = $('.play'),
//     $detail  = $('.detail'),
//     $movie = $('.movie', $detail),
//     $close = $('.close');

// $('.movies .movie').click(function(){
//   $movie.html($(this).html());
//   $play.appendTo($movie);

//   $poster = $('.poster', this).addClass('active');

//   $('.poster', $detail).css({
//     top: $poster.position().top,
//     left: $poster.position().left,
//     width: $poster.width(),
//     height: $poster.height()
//   }).data({
//     top: $poster.position().top,
//     left: $poster.position().left,
//     width: $poster.width(),
//     height: $poster.height()
//   })

//   $detail.show();

//   $('.poster', $detail).delay(10).queue(function(next) {
//     $detail.addClass('ready');

//     next();
//   }).delay(100).queue(function(next){
//     $(this).css({
//       top: '10%',
//       left: '-6%',
//       width: 266,
//       height: 400
//     });
//     next();
//   })
// })


/*--------------------
Close
--------------------*/
// function close(){
//   console.log('asd');
//   $p = $('.detail .poster');
//   console.log($p)
//   $p.css({
//     top: $p.data('top'),
//     left: $p.data('left'),
//     width: $p.data('width'),
//     height: $p.data('height'),
//   })
//   $detail.removeClass('ready').delay(500).queue(function(next){
//     $(this).hide();
//     $poster.removeClass('active');
//     next();
//   });
// }

// $close.click(close);
// $('body').click(function(e){
//   $p = $(e.target).parents();
//   if ($p.is('.app')){
//     return false;
//   } else {
//     close();
//   }
// })


/*--------------------
CodePen Thumbnail
--------------------*/
// setTimeout(function(){
//   $('.movie:eq(0)').click();
// }, 300);
// setTimeout(function(){
//   close();
// },1700);