$("#zine" ).click(function() {
      $(".zinecontainer").removeClass("hide");
      $("#zine").addClass("active");
  
      $("#about").removeClass("active");
      $("#shop").removeClass("active");
      $("#submit").removeClass("active");
      $("#art").removeClass("active");
  
      $(".aboutcontainer").addClass("hide");
      $(".shopcontainer").addClass("hide");
      $(".submitcontainer").addClass("hide");  
      $(".artcontainer").addClass("hide");
    });

$("#about" ).click(function(e) {
      $(".aboutcontainer").toggleClass("hide", 1000);
      $("#about").addClass("active");
  
      $("#zine").removeClass("active");
      $("#shop").removeClass("active");
      $("#submit").removeClass("active");
      $("#art").removeClass("active");
  
      $(".zinecontainer").addClass("hide");
      $(".shopcontainer").addClass("hide");
      $(".submitcontainer").addClass("hide"); 
      $(".artcontainer").addClass("hide");
    });

$("#shop" ).click(function() {
      $(".shopcontainer").removeClass("hide");
      $("#shop").addClass("active");
  
      $("#about").removeClass("active");
      $("#zine").removeClass("active");
      $("#submit").removeClass("active");
      $("#art").removeClass("active");
  
      $(".aboutcontainer").addClass("hide");
      $(".zinecontainer").addClass("hide");
      $(".submitcontainer").addClass("hide"); 
      $(".artcontainer").addClass("hide");
    });

$("#submit" ).click(function() {
      $(".submitcontainer").removeClass("hide");
      $("#submit").addClass("active");
  
      $("#about").removeClass("active");
      $("#zine").removeClass("active");
      $("#shop").removeClass("active");
      $("#art").removeClass("active");
  
      $(".aboutcontainer").addClass("hide");
      $(".zinecontainer").addClass("hide");
      $(".shopcontainer").addClass("hide");
      $(".artcontainer").addClass("hide");
    });

$("#art" ).click(function() {
      $(".artcontainer").removeClass("hide");
      $("#art").addClass("active");
  
      $("#about").removeClass("active");
      $("#zine").removeClass("active");
      $("#shop").removeClass("active");
      $("#submit").removeClass("active");
  
      $(".aboutcontainer").addClass("hide");
      $(".zinecontainer").addClass("hide");
      $(".shopcontainer").addClass("hide");
      $(".submitcontainer").addClass("hide");
    });


$("#contactus" ).click(function() {
      $(".submitcontainer").removeClass("hide");
      $("#submit").addClass("active");
  
      $("#about").removeClass("active");
      $("#zine").removeClass("active");
      $("#shop").removeClass("active");
      $("#art").removeClass("active");
  
      $(".aboutcontainer").addClass("hide");
      $(".zinecontainer").addClass("hide");
      $(".shopcontainer").addClass("hide");
      $(".artcontainer").addClass("hide");
    });