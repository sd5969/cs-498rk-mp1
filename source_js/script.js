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

	// carousel - doesn't overanimate with multiple clicks

	var currentPic = 0;

	$('#next').on("click", function() {
		if(currentPic >= 4) {
			currentPic = 0;
		} else {
			currentPic++;
		}
		$('#carousel').stop();
		$('#carousel').animate( {left: ((currentPic * -100) + "%")}, 1000);
	});

	$('#prev').on("click", function() {
		if(currentPic <= 0) {
			currentPic = 4;
		} else {
			currentPic--;
		}
		$('#carousel').stop();
		$('#carousel').animate( {left: ((currentPic * -100) + "%")}, 1000);
	});

	// 

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

	// below code taken from http://stackoverflow.com/questions/1403615/use-jquery-to-hide-a-div-when-the-user-clicks-outside-of-it

	$(document).on("mouseup", function (e) {
	    var container = $(".modal");
	    if (!container.is(e.target) // if the target of the click isn't the container...
	        && container.has(e.target).length === 0) // ... nor a descendant of the container
	    {
	        closeModals();
	    }
	});
});