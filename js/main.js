/** @format */

$(document).ready(function () {
  // efectos scroll
  $(".efect").smoove({ offset: "40%" });
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

  let inicio = $("#inicio").offset().top;
  let sobre = $("#sobre").offset().top;
  let experiencia = $("#experiencia").offset().top;
  let habilidades = $("#skills").offset().top;
  let portafolio = $("#portafolio").offset().top;

  $("#a_inicio").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: inicio - 124,
      },
      500,
    );
  });

  $("#s_inicio").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: inicio - 124,
      },
      500,
    );
    $(".sidemenu").removeClass("active");
  });

  $("#a_sobre").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: sobre - 124,
      },
      500,
    );
  });

  $("#s_sobre").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: sobre - 124,
      },
      500,
    );
    $(".sidemenu").removeClass("active");
  });

  $("#a_experiencia").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: experiencia - 124,
      },
      500,
    );
  });

  $("#s_experiencia").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: experiencia - 124,
      },
      500,
    );
    $(".sidemenu").removeClass("active");
  });

  $("#a_habilidades").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: habilidades - 124,
      },
      500,
    );
  });

  $("#s_habilidades").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: habilidades - 124,
      },
      500,
    );
    $(".sidemenu").removeClass("active");
  });

  $("#a_portafolio").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: portafolio - 124,
      },
      500,
    );
  });

  $("#s_portafolio").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: portafolio - 124,
      },
      500,
    );
    $(".sidemenu").removeClass("active");
  });

  $("#upAll").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: inicio - 200,
      },
      500,
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
  $("#portafolio-item").mixItUp();
});
