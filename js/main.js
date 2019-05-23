//-----Main Navigation-----

$(document).ready(function(){
  $("#nav-icon1").click(function() {
    $(this).toggleClass("open");
    $("#overlay").toggleClass("open");
  });

  $(".overlay-content a").click(function() {
    $("#nav-icon1").toggleClass("open");
    $("#overlay").toggleClass("open");
  });

  $(".toggle").slideUp();
  $(".trigger").click(function() {
    $(this)
      .next(".toggle")
      .slideToggle("slow");
  });

//-----Video Header Actions-----
  
  var vid = document.getElementById("my-movie");
  var button = document.querySelector(".pulse-button"); 
  button.addEventListener ("click", function playVid() {

    vid.play();
  })

  const strong = document.querySelector(".header-aligner");
  const btn = document.querySelector(".pulse-button");
  btn.addEventListener("click", function() {
    document.querySelector(".header-aligner").style.opacity = "0";
    document.querySelector("#my-movie").style.opacity = "1";
    document.querySelector(".bottom").style.opacity = "0";
    document.querySelector(".video").style.opacity = "1";
    document.querySelector(".header-aligner").style.transition = "1s";
  });

  var vid = document.getElementById("my-movie");
  vid.onended = function() {
    document.querySelector(".header-aligner").style.opacity = "1";
    document.querySelector("#my-movie").style.opacity = "0";
    document.querySelector(".bottom").style.opacity = "1";
    document.querySelector(".video").style.opacity = "0";
    document.querySelector(".header-aligner").style.transition = "2s";
  };

//-----Dark Mode Toggle-----
  
  var setColor = function() {
    if ($(".switch").is(":checked"))
      $("body, main, #section-2").css("background-color", "#d5dfebb6");
    else $("body, main, #section-2").css("background-color", "#101622fa");
  };
  $(document).ready(function() {
    setColor();
    $(".switch").click(setColor);
  });

// -----Contact Form------

  $(document).ready(function() {
    $('#submit').click(function (event){
      console.log('Clicked button')

      var email = $('#email').val()
      var subject = $('#subject').val()
      var message = $('#message').val()
      var statusElm = $('.status')
      statusElm.empty()

      if(email.length > 5 && email.includes('@') && email.includes('.')) {
        statusElm.append('<div></div>')
      } else {
        event.preventDefault()
        statusElm.append('<div style="width:200px; text-align: center; margin: 0 auto; color:#F02750; font-weight: 600;"> Nieprawidłowy Email Wrong Email</div>')
      }

      if(subject.length >= 2) {
        statusElm.append('<div></div>')
      } else {
        event.preventDefault()
        statusElm.append('<div style="width:200px; text-align: center; margin: 10px auto; color:#F02750; font-weight: 600;"> Temat jest za krótki Topic is too short</div>')
      }

      if(message.length >= 10) {
        statusElm.append('<div></div>')
      } else {
        event.preventDefault()
        statusElm.append('<div style="width:200px; text-align: center; margin: 10px auto; color:#F02750; font-weight: 600;"> Treść jest za krótka Content is too short </div>')
      }
    })
  })

//-----Animations on Scroll-----
  
  AOS.init({
    duration: 1000, disable: 'mobile'
  });

//-----Smoth Scrolling-----

  $(document).ready(function() {
  
    var scrollLink = $('.scroll');
    
    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000 );
    });
  
  })
})