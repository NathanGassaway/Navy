$(document).ready(function(){

	$(".shower-manual").click(function(){
		$(".title").hide();
		$(".introduction").show();
	});
	$(".forward-arrow").click(function(){
		$(".introduction").hide()
		$(".section-1").show();

	});

	// var array = {
	// 	1: fucked up beyond reason,
	// 	2: hell yah,
	// 	3: whoa,
	// }
	
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