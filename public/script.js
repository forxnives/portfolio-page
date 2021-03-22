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
		};
	
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
			id = href.split('v=')[1];
		  } else if (href.indexOf('youtu.be') > -1) {
			id = href.split('.be/')[1];
		  } else {
			document.location = href;
		  }

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

		if (scrollPos < 2150) {

				$('.projects-container').children('.parascroll').each(function (index) {

					if ($(window).innerWidth() >= 1530) {

						let distance = (scrollPos/($(this).offset().top - 300) * 10);

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
			});

			$('.parallax-top-shadow').css({
			'top' : `${1 - (scrollPos/-5) }px`,
			'opacity': `${1 - (scrollPos/800)}`
			});
		});    
	}
	
	scrollBanner();	       
	
	$( window ).resize(function() {

		if ($(window).innerWidth() <= 1530) {
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

			){
				jQuery('.letstalk p').last().css({
					opacity: .9
				})
			} else {
				jQuery('.letstalk p').last().css({
					opacity: .15
				})
			}
			if (jQuery('.aboutme').offset()['top'] < jQuery(this).scrollTop() + 600 
			){
				jQuery('.aboutme p').last().css({
					opacity: .15
				})
			} else {
				jQuery('.aboutme p').last().css({
					opacity: .9
				})
			}
		});		
		
		jQuery('.scroll-to-top').on('click', function(event) {
			event.preventDefault();
			if ($(window).innerWidth() <= 1530 && $(window).innerWidth() >= 530){
				jQuery('html, body').animate({scrollTop: window.innerHeight - 80}, duration);
			} else {
				jQuery('html, body').animate({scrollTop: window.innerHeight}, duration);
			}
			return false;
		})	

		jQuery('.projects-link').on('click', function(event) {
			event.preventDefault();

			if ($(window).innerWidth() <= 1530 && $(window).innerWidth() >= 530){
				jQuery('html, body').animate({scrollTop: window.innerHeight - 80}, duration);
			} else {
				jQuery('html, body').animate({scrollTop: window.innerHeight}, duration);
			}

			return false;
		})	

		jQuery('.about-link').on('click', function(event) {
			event.preventDefault();
			
			if (window.innerHeight < $("#aboutme").height() ){

				jQuery('html, body').animate({scrollTop: $("#aboutme").offset().top - 51
			}, duration);
			} else {
				jQuery('html, body').animate({scrollTop: $("#aboutme").offset().top - (((window.innerHeight) - ($("#aboutme").height() + .10*window.innerHeight  ))/2)
			}, duration);
			}

			return false;
		})	

		jQuery('.contact-link').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: $("#contactsection").offset().top - 51}, duration);

			return false;
		})	
  
		jQuery('.home-link').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);

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
