$(document).ready(function () {
  //menu resonsive
  $(".sidemenu-toggler").click(function () {
    $(".sidemenu").addClass("active");
  });

  $(".close").click(function () {
    $(".sidemenu").removeClass("active");
  });

  $(window).scroll(function () {
    var sc = $(window).scrollTop();
    if (sc > 150) {
      $(".header").addClass("sticky");
    } else {
      $(".header").removeClass("sticky");
    }
  });

  //click a enlace de menu y dirige hacia ahi

  var inicio = $("#inicio").offset().top,
    sobre = $("#sobre").offset().top,
    experiencia = $("#experiencia").offset().top,
    habilidades = $("#mh-skills").offset().top,
    portafolio = $("#mh-portafolio").offset().top;

  $("#b-inicio").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: inicio - 124,
      },
      500
    );
  });

  $("#s-inicio").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: inicio - 124,
      },
      500
    );

    $(".sidemenu").removeClass("active");
  });

  $("#b-sobre").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: sobre - 124,
      },
      500
    );
  });

  $("#s-sobre").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: sobre - 124,
      },
      500
    );
  });

  $("#b-experiencia").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: experiencia - 124,
      },
      500
    );
  });

  $("#s-experiencia").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: experiencia - 124,
      },
      500
    );
  });

  $("#b-habilidades").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: habilidades - 124,
      },
      500
    );
  });

  $("#s-habilidades").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: habilidades - 124,
      },
      500
    );
  });

  $("#b-portafolio").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: portafolio - 124,
      },
      500
    );
  });

  $("#s-portafolio").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: portafolio - 124,
      },
      500
    );
  });

  //efecto al menu del portafolio
  $(window).on("load", function () {
    var $container = $(".portafolioContainer");
    $container.isotope({
      filter: "*",
      animationOptions: {
        queue: true,
      },
    });

    $(".portafolio-nav li").click(function () {
      $(".portafolio-nav .current").removeClass("current");
      $(this).addClass("current");
      var selector = $(this).attr("data-filter");
      $container.isotope({
        filter: selector,
        animationOptions: {
          queue: true,
        },
      });
      return false;
    });
  });
  $("#portafolio-item").mixItup();
});
