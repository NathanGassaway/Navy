$(document).ready(function(){
  var forward = document.getElementById("forward");
  var backward = document.getElementById("backward");
  var openDoc = document.getElementById("cover");
  var closeDoc = document.getElementById("backcover");
  var openIntro = document.getElementById("intro-paragraph");
  var countdown = document.getElementById("seventh-image");
  var hideVideo;
  var myTimer;
  var hideAudioVideo;
  var counter = 0;

  $("cover", "#first-image", "#second-step").hide();

  function clearArrows(){
    $(".forward-arrow").hide();
    $(".backward-arrow").hide();
  }
  function showArrows(){
   $(".forward-arrow").show();
    $(".backward-arrow").show(); 
  }
//clear document img
  function clearcoverPage(){
    $("#cover").hide();
    $(".introduction-paragraph").show();
  }
//clear introduction paragraph
  function clearintro(){
    $(".introduction-paragraph").hide();
    $("#introduction").hide();
    $(".section-1").show();
  }
//transition video scene
  function nextVideo(){
    hideVideo = window.setInterval(function(){
      counter = 11;
      showArrows();
      $(".description").eq(10).hide();
      $(".description").eq(11).show();
      $('#shower-video').trigger("pause");
      }, 15000);
  }
  //transition audioscene
  function nextAudio(){
    counter = 15;
    showArrows();
    $(".description").eq(14).hide();
    $(".description").eq(15).show();
    $('#shower-audio').trigger("pause");
  }
//transition towel scene
  function nextVideoAudio(){
    hideAudioVideo = window.setInterval(function(){
      counter = 19;
      $(".description").eq(18).hide();
      $(".description").eq(19).show();
      $('#towel-video').trigger("pause");
      }, 10000);
  }

  //interval clearing!

function clearShowerVideo(){
    clearInterval(hideVideo);
  }

  function clearShowerAudio(){
    clearInterval(myTimer);
  }

  function clearTowelVideo(){
    clearInterval(hideAudioVideo);
  }

  //shower video trigger
  function showerVideo(){
    if(counter === 10){
      $('#shower-video').trigger("play");
      clearArrows();
      nextVideo();
    } else {
        $('#shower-video').trigger("pause");
        clearShowerVideo();
      }
  }

  //audio clip and timer trigger
  function showerAudio(){
    if (counter === 14) {
      $('#shower-audio').trigger("play");
      $("body").addClass("blue");
      clearArrows();

      function startTimer(duration, display){
          var timer = duration, seconds;
          myTimer = setInterval(function() {
            seconds = parseInt(timer % 60, 10);

            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.text(seconds);

            if(timer < 10) {
              $("body").addClass("grey");
            }
            if(--timer < 0) {
              timer = 0;
              clearInterval(myTimer);
              nextAudio();
              $("body").removeClass("blue");
              $("body").removeClass("white");
              $("body").removeClass("grey");
            }
          }, 1000);
      	}
        
        display = $('#shower-timer');
          startTimer(20, display);
          $("#shower-timer").mouseover(function(){
            $("body").toggleClass("white");
	        }); 

    } else{
      $('#shower-audio').trigger("pause");
      clearShowerAudio();
      $("body").removeClass("blue");
    };
  };
// towel video function
  function towelVideo(){
    if(counter === 18){
      counter = 19
      $("#towel-video").trigger("play");
      nextVideoAudio();
    }
    else{
      $("#towel-video").trigger("pause");
      clearTowelVideo();
    }
  };

//don't overcounter RENAME

  function stopOvertrace(){
    if(counter > 20){
        counter = 0;
        clearArrows();
      }
  }
//don't undercount RENAME
  function stopRetrace(){
    if(counter < 1){
        counter = 2;
        $(".description").eq(1).show();
      }
  }

  function preventBackwards(){
      if(counter > 9 && counter < 15){
      backward.onclick = function(e){
        e.preventDefault();
        // $(".backward-arrow").toggleClass("forward-arrow");
        }
      }
    }

  //forwards

  forward.onclick = function(e){
    counter++;
    console.log(counter);
    if(counter < $(".description").length) $(".description").hide();
    $('.description').eq(counter).show();

    showerVideo();

    showerAudio();

    towelVideo();

    preventBackwards(); 

    stopOvertrace();
  };

  //backwards

    backward.onclick = function(e){
        counter--;
        console.log(counter);
      if(counter < $(".description").length) $(".description").hide();
      $('.description').eq(counter).show();

      showerVideo();

      showerAudio();

      towelVideo();

      preventBackwards();

      stopOvertrace();

      stopRetrace();
      
    }
  //mobile events should go here

  //remove intro

  openDoc.onclick = function(){
    clearcoverPage();
  };

  openIntro.onclick = function(){
    counter++;
    if(counter < $(".description").length) $(".description").hide();
    $('.description').eq(counter).show();
    clearintro();
    console.log(counter)
  };

  closeDoc.onclick = function(){
    window.location.href = "http://www.navpers.us";
  }

});