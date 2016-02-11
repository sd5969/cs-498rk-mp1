$(function() {
	var link = "<n uers=\"znvygb:ebjsbhaqngvba@irevmba.arg\" ery=\"absbyybj\">ebjsbhaqngvba@irevmba.arg</n>".replace(/[a-zA-Z]/g, 
		function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
	$('#ROWemail').html(link);

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
});