$(document).ready(function(){
  //Implement the showing and hiding of the sidebar when the user clicks on #sidebar-button here:
$('#sidebar-button').click(function() {
  if ($("#sidebar-button").hasClass("button-active")) {
    $('body').removeClass('no-scroll');
    $('#sidebar-button').removeClass('button-active');
    $('.sidebar-container').removeClass('sidebar-active');
    $('.page-wrapper').removeClass('wrapper-active');
  } else {
      $('#sidebar-button').addClass('button-active');
      $('.sidebar-container').addClass('sidebar-active');
      $('.page-wrapper').addClass('wrapper-active');
      $('body').addClass('no-scroll');
      setTimeout(function() {
        $('body').addClass('no-scroll');
        }, 300);
    }
});

  // QUESTION 7

  //Implement the hiding of the sidebar when the user clicks on the page wrapper here:
$('.page-wrapper').click(function(){
  if ($("#sidebar-button").hasClass("button-active")) {
    $('body').removeClass('no-scroll');
    $('#sidebar-button').removeClass('button-active');
    $('.sidebar-container').removeClass('sidebar-active');
    $('.page-wrapper').removeClass('wrapper-active');
  }
});

$(".bakery").click(function() {
    $("#overlay").show();
    $(this).addClass("bakery-pic-click");
    $(this).addClass("height-width");
    $('body').addClass('no-scroll');
  });

$("#overlay").click(function() {
    $(this).hide();
    $(".bakery").removeClass("bakery-pic-click");
    $(".bakery").removeClass("height-width");
    $('body').removeClass('no-scroll');
  });

$("#season-img").click(function() {
    $("#overlay").show();
    $(this).addClass("season-pic-click");
    $('body').addClass('no-scroll');
    $("#season-img").css("max-height", "1100px");
    $("#season-img").css("max-width", "1100px");
  });

$("#overlay").click(function() {
    $(this).hide();
    $("#season-img").removeClass("season-pic-click");
    $('body').removeClass('no-scroll');
    $("#season-img").css("max-width", "800px")
    $("#season-img").css("max-height", "750px")
  });

/* for moving to different sections and closing side nav */
$("a").click(function(){
  $('body').removeClass('no-scroll');
  $("html, body").animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 400);
  $(this).delay(5000);
  $('#sidebar-button').removeClass('button-active');
  $('.sidebar-container').removeClass('sidebar-active');
  $('.page-wrapper').removeClass('wrapper-active');
});


});