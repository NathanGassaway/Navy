$(document).ready(function(){

	// $(".shower-manual").click(function(){
	// 	$(".title").hide();
	// 	$(".introduction").show();
	// });

	var text = ["Prepare shower with soap, shampoo, and a towel.", "After preparing supplies, remove clothing.", "Open curtain and step into shower.",
	 "Turn on shower head. The shock of cold water is very short-lived.", "For 15 seconds, coat body with water. Use hands or a washcloth to fully douse body.",
	  "Turn off water and continue to lather skin for 30 seconds.", "Rinse off the soap and shampoo with water for 20 more seconds.", "Turn off water and remove excess soap. Step out of shower. "],
		counter = -1; 

	$('.forward-arrow').click(function(){
		$(".intro").hide();
		$(".section-1").show();
		counter = (counter + 1) % text.length;

		$(".instruction-text").text(text[counter])
	});

	$('.forward-arrow2').click(function(){
		counter = (counter + 1) % text.length;

		$(".instruction-text").text(text[counter])

	});
	$('.backward-arrow2').click(function(){
		counter = (counter - 1) % text.length;

		$(".instruction-text").text(text[counter])

	});

});

// function startTimer(duration, display){
	// 	var timer = duration, seconds;
	// 	setInterval(function() {
	// 		seconds = parseInt(timer % 60, 10);

	// 		seconds = seconds < 10 ? "0" + seconds : seconds;

	// 		display.text(seconds);

	// 		if(--timer < 0) {
	// 			timer = duration;
	// 		}
	// 	}, 1000);
	// }
	
	// display = $('#time');
	// 	startTimer(30, display)
	// });