      $(document).ready(function(){
  
  var forward = document.getElementById("forward"),
  backward = document.getElementById("backward"),
  openDoc = document.getElementById("cover"),
  openIntro = document.getElementById("intro-paragraph"),
  countdown = document.getElementById("seventh-image"),
  hideVideo, 
  myTimer,
  counter = 0;

  $("cover", "#first-image", "#second-step").hide();

  function clearcoverPage(){
    $("#cover").hide();
    $(".introduction-paragraph").show();
  }

  function clearintro(){
    $(".introduction-paragraph").hide();
    $("#introduction").hide();
    $(".section-1").show();
  }

  function nextVideo(){
    hideVideo = window.setInterval(function(){
      counter = 11;
      $(".forward-arrow").show();
      $(".backward-arrow").show();
      $(".description").eq(10).hide();
      $(".description").eq(11).show();
      $('#shower-video').trigger("pause");
      }, 1000);
  }

  function nextAudio(){
    counter = 15;
    $(".forward-arrow").show();
    $(".backward-arrow").show();
    $(".description").eq(14).hide();
    $(".description").eq(15).show();
    $('#shower-audio').trigger("pause");
  }

  // function startTimer(duration, display){
  //      var timer = duration, seconds;
  //      myTimer = setInterval(function() {
  //        seconds = parseInt(timer % 60, 10);

  //        seconds = seconds < 10 ? "0" + seconds : seconds;

  //        display.text(seconds);

  //        if(--timer < 0) {
  //          timer = 00;
  //          nextAudio();
  //        }
  //      }, 1000); 
  //      display = $('#shower-timer');
  //      startTimer(20, display);
  //    }

function clearNextSlide(){
    clearInterval(hideVideo);
  }

  function clearotherSlide(){
    clearInterval(myTimer);
  }

  function forward(){
    counter++;
    if(counter < $(".description").length) $(".description").hide();
    $('.description').eq(counter).show();
    console.log(counter);
  }

  function showerVideo(){
    if(counter === 10){
      $('#shower-video').trigger("play");
      $(".forward-arrow").hide();
      $(".backward-arrow").hide();
      nextVideo();
    } else {
        $('#shower-video').trigger("pause");
        clearNextSlide();
      }
  }
  function showerAudio(){
    if (counter === 14) {
      $('#shower-audio').trigger("play");
      $(".forward-arrow").hide();
      $(".backward-arrow").hide();
      function startTimer(duration, display){
          var timer = duration, seconds;
          setInterval(function() {
            seconds = parseInt(timer % 60, 10);

            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.text(seconds);

            if(--timer < 0) {
              timer = 00,
              nextAudio();
            }
          }, 1000);
      	}
        
        display = $('#shower-timer');
          startTimer(20, display);

          $("body").mouseover(function(){
  		setInterval(function(){
    if($("body").hasClass("gray")){
      $("body").addClass("blue").removeClass("gray");
      
    } else {
      $("body").addClass("gray").removeClass("blue");
      
    	}
	  }, 1000);
	}); 
    } else{
      $('#shower-audio').trigger("pause");
      clearotherSlide()
      
    };
  }
  function colorChange(){
    setInterval(function(){
      if($("body").has("gray")){
        $("body").addClass("blue").removeClass("gray");
      } else{
        $("body").addClass("gray").removeClass("blue");
      }
    }, 1000);
  }

  function stopOvertrace(){
    if(counter > 19){
        counter = 0;
      }
  }

  function stopRetrace(){
    if(counter < 0){
        counter = 0;
      }
  }
  // --> this doesn't even need to exist really.  
  $(document).keydown(function(e){
        //forward
      if (e.keyCode === 39) {

        counter++;
      if(counter < $(".description").length) $(".description").hide();
      $('.description').eq(counter).show();
      console.log(counter);
        
      clearintro();

      showerVideo();

      showerAudio();

      stopOvertrace();

      }
           //backwards
      if (e.keyCode === 37) {
        counter--;
      if(counter < $(".description").length) $(".description").hide();
      $('.description').eq(counter).show();

      showerVideo();

      showerAudio();

      stopRetrace();
      }
  });
  forward.onclick = function(){
    counter++;

    if(counter < $(".description").length) $(".description").hide();
    $('.description').eq(counter).show();

    showerVideo();

    showerAudio();

    stopOvertrace();
  };
  backward.onclick = function(){
      counter--;
      console.log(counter);
    if(counter < $(".description").length) $(".description").hide();
    $('.description').eq(counter).show();

    stopRetrace();
  };
//show add a "for loop" during the  water phases if someone tries to go backwards.
  openDoc.onclick = function(){
    clearcoverPage();
  };

  openIntro.onclick = function(){
    counter++;
    if(counter < $(".description").length) $(".description").hide();
    $('.description').eq(counter).show();
    clearintro();
  };


});