
(function($) { "use strict";
 
 	//Parallax            
              
	function scrollBanner() {
	  $(document).on('scroll', function(){

		const scrollPos = $(this).scrollTop();

		if (scrollPos < 1700) {

			$('.app').children('.detail').each(function (index) {

				let distance = (scrollPos/($(this).offset().top - 300) * 10)
	
	
				if ($(this).attr("class").split(/\s+/).includes('detail-even')) {
	
	
					if (distance < 7){
						$( this ).css({
			
							'opacity' : (scrollPos/($(this).offset().top - 300)),
							'right' : `-${(scrollPos/($(this).offset().top - 100)) * 10}%` 
			
						})
					}else {
						$( this ).css({
			
							'opacity' : (scrollPos/($(this).offset().top - 300))
			
						})
					}
	
				} else {
	

					if (distance < 7){
						$( this ).css({
			
							'opacity' : (scrollPos/($(this).offset().top - 300)),
							'left' : `-${(scrollPos/($(this).offset().top - 100)) * 10}%` 
			
						})
					}else {
						$( this ).css({
			
							'opacity' : (scrollPos/($(this).offset().top - 300))
			
						})
					}
	
				}
	
			});


			$('.dummy').css({
				'opacity': ((scrollPos/1000))
			})



		}



		

			$('.header').each(function (index) {

				if (scrollPos > 300) {
					
					$(this).addClass('small');
					$(this).css({
						'background-color': 'rgba(16, 16, 16, 1)'
					})

					$('.logo-img').css({
						'opacity' : '1'
					})


				}else {
					$(this).removeClass('small');
					$(this).css({
						'background-color': 'rgba(0, 0, 0, 0)'
					})

					$('.logo-img').css({
						'opacity' : '0'
					})
				}
				

			} )
			
		



			$('.parallax-fade-top').css({
			'top' : (scrollPos/2)+'px',
			'opacity' : 1-(scrollPos/700)
			});

			$('.parallax-00').css({
			'top' : (scrollPos/-3.5)+'px',


			});

			$('.parallax-01').css({
			'top' : (scrollPos/-2.8)+'px',
			// 'opacity' : (scrollPos/($(this).offset().top - 300)),

			});

			$('.parallax-top-shadow').css({
			'top' : `${1 - (scrollPos/-5) }px`,
			'opacity': `${1 - (scrollPos/800)}`
			});




		});    
	}
	scrollBanner();	              


              
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