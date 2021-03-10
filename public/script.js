
(function($) { "use strict";
 
 	//Parallax            
              






	 var Modal = function() {

		var prefix = 'Modal-';
	
		this.Class = {
		  stopOverflow: prefix + 'cancel-overflow',
		  overlay: prefix + 'overlay',
		  box: prefix + 'box',
		  close: prefix + 'close'
		};
	
		this.Selector = {
		  overlay: '.' + this.Class.overlay,
		  box: '.' + this.Class.box,
		  button: '[data-modal=button]'
		};
	
		this.Markup = {
		  close: '<div class=" ' + this.Class.close + ' ">Close X</div>',
		  overlay: '<div class=" ' + this.Class.overlay + ' "></div>',
		  box: '<div class=" ' + this.Class.box + ' "></div>'
		}
	
		this.youtubeID = false;
	
	  };
	
	  Modal.prototype = {
	
		toggleOverflow: function() {
		  $('body').toggleClass(this.Class.stopOverflow);
		},
	
		videoContainer: function() {
		  return '<div class="video-container"><iframe id="player" src="https://www.youtube.com/embed/' + this.youtubeID + '?autoplay=1&rel=0" frameborder="0"></iframe></div>';
		},
	
		addOverlay: function() {
	
		  var self = this;
	
		  $(this.Markup.overlay).appendTo('body').fadeIn('slow', function() {
			self.toggleOverflow();
		  });
	
		  $(this.Selector.overlay).on('click touchstart', function() {
			self.closeModal();
		  })
	
		},
	
		addModalBox: function() {
		  $(this.Markup.box).appendTo(this.Selector.overlay);
		},
	
		buildModal: function(youtubeID) {
	
		  this.addOverlay();
		  this.addModalBox();
	
		  $(this.Markup.close).appendTo(this.Selector.overlay);
		  $(this.videoContainer(youtubeID)).appendTo(this.Selector.box);
	
		},
	
		closeModal: function() {
	
		  this.toggleOverflow();
	
		  $(this.Selector.overlay).fadeOut().detach();
		  $(this.Selector.box).empty();
	
		},
	
		getYoutubeID: function() {
		  return this.youtubeID;
		},
	
		setYoutubeID: function(href) {
	
		  var id = '';
	
		  if (href.indexOf('youtube.com') > -1) {
			// full Youtube link
			id = href.split('v=')[1];
		  } else if (href.indexOf('youtu.be') > -1) {
			// shortened Youtube link
			id = href.split('.be/')[1];
		  } else {
			// in case it's not a Youtube link, send them on their merry way
			document.location = href;
		  }
	
		  // If there's an ampersand, remove it and return what's left, otherwise return the ID
		  this.youtubeID = (id.indexOf('&') != -1) ? id.substring(0, amp) : id;
	
		},
	
		startup: function(href) {
	
		  this.setYoutubeID(href);
	
		  if (this.youtubeID) {
			this.buildModal();
		  }
	
		}
	
	  };
	
	  $(document).ready(function() {
	
		var modal = new Modal();
	
		$(modal.Selector.button).on('click touchstart', function(e) {
		  e.preventDefault();
		  modal.startup(this.href);
		});
	
	  });


















	 
	function scrollBanner() {
	  $(document).on('scroll', function(){

		const scrollPos = $(this).scrollTop();







		if (scrollPos < 1700) {



				$('.projects-container').children('.parascroll').each(function (index) {




					if ($(window).innerWidth() >= 1350) {


						let distance = (scrollPos/($(this).offset().top - 300) * 10)



			
			
						if (!!$(this).children('.project-even')[0]) {
			
			
							if (distance < 7){
								$( this ).css({
					
									'opacity' : (scrollPos/($(this).offset().top - 300)),
									'margin-right' : `-${(scrollPos/($(this).offset().top - 15)) * 10}%` 
					
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
									'margin-left' : `-${(scrollPos/($(this).offset().top - 15)) * 10}%` 
					
								})
							}else {
								$( this ).css({
					
									'opacity' : (scrollPos/($(this).offset().top - 300))
					
								})
							}
			
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
						'background-color': '#0A0A0A'
					})

					$('.logo-img').css({
						'opacity' : '.5'
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
	
	


	$( window ).resize(function() {

		if ($(window).innerWidth() <= 1350) {
			$('.projects-container').children('.parascroll').each(function (index) {
				$(this).css({
					'margin-right': '3vw',
					'margin-left': '3vw',
					'opacity': '1'
				})
			})
		}

	});



              
$(document).ready(function() {	





		var offset = 100;
		var duration = 1000;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.scroll-to-top').removeClass('active-arrow');
			} else {
				jQuery('.scroll-to-top').addClass('active-arrow');
			}


			if (jQuery('.letstalk').offset()['top'] < jQuery(this).scrollTop() + 600 

			// jQuery('.letstalk').offset()['top'] + 300 < jQuery(this).scrollTop()
			// jQuery(this).scrollTop() <
			){
				

				
				jQuery('.project-link-wrap p').last().css({
					opacity: .9
				})



			} else {
				jQuery('.project-link-wrap p').last().css({
					opacity: .15
				})
			}



			
		});		
		
		
		jQuery('.scroll-to-top').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: window.innerHeight + 60}, duration);
			return false;
		})	
  



		$('.nav-checkbox').on('click', function () {
			if (this.checked){
				

				$('#menu').css({
					'transform': 'none'
				})




			}else if (!this.checked) {
				


				$('#menu').css({
					'transform': 'translate(0, -100%)'
				})


			}
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