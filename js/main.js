$(document).ready(function () {
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
    promociones = $("#promociones").offset().top,
    ubicacion = $("#ubicacion").offset().top;
    subir = $("#menunav").offset().top;

  $("#b-inicio").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: inicio - 200,
      },
      500
    );
  });

  $("#s-inicio").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: inicio - 200,
      },
      500
    );
  });

  $("#b-sobre").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: sobre + 200,
      },
      500
    );
  });

  $("#s-sobre").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: sobre + 200,
      },
      500
    );
  });

  $("#b-experiencia").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: experiencia + 200,
      },
      500
    );
  });

  $("#s-experiencia").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: experiencia + 200,
      },
      500
    );
  });

  $("#b-promociones").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: promociones + 200,
      },
      500
    );
  });

  $("#b-ubicacion").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: ubicacion + 800,
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
