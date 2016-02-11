$(function() {

	// function to open/close modal - called by other functions

	function openModal(id) {
		$('#' + id).fadeIn();
	}

	// closes any open modals

	function closeModals() {
		$('.modal').fadeOut();
	}

	// de-obfuscate email address on page

	var link = "<n uers=\"znvygb:ebjsbhaqngvba@irevmba.arg\" ery=\"absbyybj\">ebjsbhaqngvba@irevmba.arg</n>".replace(/[a-zA-Z]/g, 
		function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
	$('#ROWemail').html(link);

	// carousel - auto-progresses, doesn't overanimate with multiple clicks, waits after click

	var currentPic = 0;
	var timeBetween = 5000;

	function carouselProgress() {
		if(currentPic >= 4) {
			currentPic = 0;
		} else {
			currentPic++;
		}
		$('#carousel').stop();
		$('#carousel').animate( {left: ((currentPic * -100) + "%")}, 1000);
	}

	function carouselRegress() {
		if(currentPic <= 0) {
			currentPic = 4;
		} else {
			currentPic--;
		}
		$('#carousel').stop();
		$('#carousel').animate( {left: ((currentPic * -100) + "%")}, 1000);
	}	

	$('#next').on("click", function() {
		carouselProgress();
		clearInterval(interval);
		interval = setInterval(carouselProgress, timeBetween);
	});

	$('#prev').on("click", function() {
		carouselRegress();
		clearInterval(interval);
		interval = setInterval(carouselProgress, timeBetween);
	});

	var interval = setInterval(carouselProgress, timeBetween);

	// modal things

	$('.modal_link').on("click", function() {
		var modalToOpen = $(this).attr('id').substring(5);
		openModal(modalToOpen);
	});

	$('.close').on("click", function() {
		closeModals();
	});

	$(document).on("keyup", function(e) {
		if(e.keyCode == 27) {
			closeModals();
		}
	});

	// below modal close code inspired by http://stackoverflow.com/questions/1403615/use-jquery-to-hide-a-div-when-the-user-clicks-outside-of-it

	$(document).on("mouseup", function(e) {
	    var container = $(".modal");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	        closeModals();
	    }
	});

	// navbar resize and update - code inspired by http://stackoverflow.com/questions/9979827/change-active-menu-item-on-page-scroll
	
	var scrollItems = $('nav').find('a').map(function() {
		var item = $($(this).attr("href"));
		if(item.length) return item;
	});

	$(window).on("scroll", function(e) {
		var fromTop = $(this).scrollTop() + $('nav').outerHeight();
		console.log($('nav').outerHeight());
		var aboveWindow = scrollItems.map(function() {
			if($(this).offset().top <= fromTop) return this;
		});
		var current = aboveWindow[aboveWindow.length - 1];
		if(current.attr('id') === "top") {
			$("nav a[href='#top']").removeClass("inactive");
			$("nav").removeClass("inactive");
		} else {
			$("nav a[href='#top']").addClass("inactive");
			$("nav").addClass("inactive");
		}
		if(current.length) {
			$('nav li a').removeClass("active");
			$("nav li a[href='#" + current.attr('id') + "']").addClass("active");
		}
	});

	// smooth scrolling
	
	$("a[href*='#']").on("click", function(e) {
		e.preventDefault();
		var target = $($(this).attr("href"));
		if(target.length) {
			$('html, body').stop();
			$('html, body').animate({ scrollTop: target.offset().top - 60 }, 1000);
		}
	})
});