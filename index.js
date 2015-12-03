$(document).ready(function(){

	// var text = ["Prepare shower with soap, shampoo, and a towel.", "", "After preparing supplies, remove clothing.", "", "Open curtain and step into shower.", "",
	//  "Turn on shower head. The shock of cold water is very short-lived.", "", "For 15 seconds, coat body with water. Use hands or a washcloth to fully douse body.", "",
	//   "Turn off water and continue to lather skin for 30 seconds.", "", "Rinse off the soap and shampoo with water for 20 more seconds.", "", "Turn off water and remove excess soap. Step out of shower.", ""],
		
		$("cover", "#first-image", "#second-step").hide();
			$(document).keydown(function(e){
				//forward
    if (e.keyCode === 39) {
    	$("#introduction").hide();
		$(".section-1").show();


	counter++;
	if(counter < $(".description").length) $(".description").hide();
	$('.description').eq(counter).show();
	console.log(counter);
	if(counter === 10){
		document.getElementById('showervideo').play();
		$(".forward-arrow2").hide();
		$(".backward-arrow2").hide();
		setInterval(function(){
			$(".forward-arrow2").show();
			$(".backward-arrow2").show();
		}, 10000);
	} else {
		document.getElementById('showervideo').pause();
	}

    	// counter = (counter + 1) % text.length;

		// if(counter === 3){
		// 	var x = document.createElement("img");
		// 	x.setAttribute("src", "../duck.png");
		// 	document.body.appendChild(x);
		// } else{
		// 	$("img").remove();
		// }

             // $(".instruction-text").text(text[counter])
    }
         //backwards
    if (e.keyCode === 37) {
    		counter--;
	if(counter < $(".description").length) $(".description").hide();
	$('.description').eq(counter).show();
	if(counter === 10){
		document.getElementById('showervideo').play();
	} else {
		document.getElementById('showervideo').pause();
	}

  //   	if(counter === 3){
		// 	var x = document.createElement("img");
		// 	x.setAttribute("src", "../duck.png");
		// 	document.body.appendChild(x);
		// } else{
		// 	$("img").remove();
		// }
  //            $(".instruction-text").text(text[counter])
         }
	});
	var counter = -1
	$('.forward-arrow').click(function(){
		$("#introduction").hide();
		$(".section-1").show();

	counter++;
	if(counter < $(".description").length) $(".description").hide();
	$('.description').eq(counter).show();

		// counter = (counter + 1) % text.length;

		// $(".instruction-text").text(text[counter])
	});
	$('.forward-arrow2').click(function(){
	
	counter++;
	if(counter < $(".description").length) $(".description").hide();
	$('.description').eq(counter).show();

	});
	$('.backward-arrow2').click(function(){
		counter--;
	if(counter < $(".description").length) $(".description").hide();
	$('.description').eq(counter).show();
		if(counter < 0){
			return; //also need to stop counter
		}

		$(".title-1").text(counter)
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