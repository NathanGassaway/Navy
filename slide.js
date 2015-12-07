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
  };
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
      $(".forward-arrow").show();
      $(".backward-arrow").show();
      $(".description").eq(10).hide();
      $(".description").eq(11).show();
      $('#shower-video').trigger("pause");
      }, 15000);
  }
  //transition audioscene
  function nextAudio(){
    counter = 15;
    $(".forward-arrow").show();
    $(".backward-arrow").show();
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
      }, 4000);
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


  function forward(){
    counter++;
    if(counter < $(".description").length) $(".description").hide();
    $('.description').eq(counter).show();
    console.log(counter);
  }

  //shower video trigger
  function showerVideo(){
    if(counter === 10){
      $('#shower-video').trigger("play");
      $(".forward-arrow").hide();
      $(".backward-arrow").hide();
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
      $(".forward-arrow").hide();
      $(".backward-arrow").hide();
      $("body").addClass("blue");
      function startTimer(duration, display){
          var timer = duration, seconds;
          myTimer = setInterval(function() {
            seconds = parseInt(timer % 60, 10);

            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.text(seconds);

            if(--timer < 0) {
              timer = 00,
              clearInterval(myTimer);
              nextAudio();
              $("body").removeClass("blue");
            }
          }, 1000);
      	}
        
        display = $('#shower-timer');
          startTimer(20, display);
         //  $("#shower-timer").mouseover(function(){
	        // }); 

    } else{
      $('#shower-audio').trigger("pause");
      clearShowerAudio()
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

  // to change background color
  function colorChange(){
    $("body").addClass("blue");
  }
//don't overcounter RENAME

  function stopOvertrace(){
    if(counter > 20){
        counter = 0;
        clearArrows();
      }
  }
//don't undercount RENAME
  function stopRetrace(){
    if(counter < 0){
        counter = 0;
      }
  }

  function preventBackwards(){
    if(counter > 10 && counter < 15){
      $(backward).hide();
    }
  }
  // --> this doesn't even need to exist really. KEYDOWN
  // $(document).keydown(function(e){
  //       //forward
  //     if (e.keyCode === 39) {

  //       counter++;
  //     if(counter < $(".description").length) $(".description").hide();
  //     $('.description').eq(counter).show();
  //     console.log(counter);
        
  //     clearintro();

  //     showerVideo();

  //     showerAudio();

  //     towelVideo();

  //     stopOvertrace();

  //     }
  //          //backwards
  //     if (e.keyCode === 37) {
  //       counter--;
  //     if(counter < $(".description").length) $(".description").hide();
  //     $('.description').eq(counter).show();

  //     showerVideo();

  //     showerAudio();

  //     towelVideo();

  //     stopRetrace();

  //     }
  // });

  //forwards

  forward.onclick = function(e){
    counter++;

    if(counter < $(".description").length) $(".description").hide();
    $('.description').eq(counter).show();

    if(counter > 10 && counter < 15){
      e.preventDefault(); //essentially prevent backwards
    }

    showerVideo();

    showerAudio();

    towelVideo();

    // preventBackwards(); for water phase

    stopOvertrace();
  };

  //backwards

  backward.onclick = function(e){
      counter--;
      console.log(counter);
    if(counter < $(".description").length) $(".description").hide();
    $('.description').eq(counter).show();

    if(counter > 10 && counter < 15){
      e.preventDefault();
    }

    showerVideo();

    showerAudio();

    towelVideo();

    stopOvertrace();

    stopRetrace();
    
  };

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
  };

  closeDoc.onclick = function(){
    window.location.href = "http://www.navpers.us";
  }



});