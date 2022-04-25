var _functions = {},
  winWidth;

jQuery(function ($) {
  ("use strict");

  /* function on page ready */
  var isTouchScreen =
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i);
  if (isTouchScreen) $("html").addClass("touch-screen");
  var winScr,
    winHeight,
    is_Mac = navigator.platform.toUpperCase().indexOf("MAC") >= 0,
    is_IE =
      /MSIE 9/i.test(navigator.userAgent) ||
      /rv:11.0/i.test(navigator.userAgent) ||
      /MSIE 10/i.test(navigator.userAgent) ||
      /Edge\/\d+/.test(navigator.userAgent),
    is_Chrome =
      navigator.userAgent.indexOf("Chrome") >= 0 &&
      navigator.userAgent.indexOf("Edge") < 0;

  /* check browser */
  winWidth = $(window).width();
  winHeight = $(window).height();

  if (is_Mac) {
    $("html").addClass("mac");
  }
  if (is_IE) {
    $("html").addClass("ie");
  }
  if (is_Chrome) {
    $("html").addClass("chrome");
  }

  /* sumoselect */
  if ($(".SelectBox").length) {
    $(".SelectBox").SumoSelect();
  }

  /* function on page scroll */
  var lastScrollTop = 0;
  $(window).scroll(function () {
    _functions.scrollCall();
    var st = $(this).scrollTop();
    if (st > lastScrollTop && winScr > 190) {
      $("header").addClass("hide");
    } else {
      $("header").removeClass("hide");
    }
    lastScrollTop = st;
  });

  _functions.scrollCall = function () {
    winScr = $(window).scrollTop();
  };

  //focus input
  $(".input-field-wrapp .input").on("focus", function () {
    $(this).closest(".input-field-wrapp").addClass("focus");
  });
  $(".input-field-wrapp .input").on("blur", function () {
    $(this).closest(".input-field-wrapp").removeClass("focus");
  });
  $(".input-field-wrapp .input").on("keyup", function () {
    if ($(this).val()) $(this).parent().addClass("value");
    else $(this).parent().removeClass("value");
  });
  $(".input-field-wrapp select").on("change", function () {
    $(this).parent().addClass("value");
  });

  //fail Input
  $(".input").on("keyup", function () {
    if ($(this).val()) {
      $(this).parent(".input-field-wrapp").removeClass("fail");
    } else {
      $(this).parent(".input-field-wrapp").addClass("fail");
    }
  });

  /* swiper sliders */
  _functions.getSwOptions = function (swiper) {
    var options = swiper.data("options");
    options = !options || typeof options !== "object" ? {} : options;
    var $p = swiper.closest(".swiper-entry"),
      slidesLength = swiper.find(">.swiper-wrapper>.swiper-slide").length;
    if (!options.pagination)
      options.pagination = {
        el: $p.find(".swiper-pagination")[0],
        clickable: true,
      };

    //    if (!options.autoplay) options.autoplay = {
    //          delay: 2500,
    //          disableOnInteraction: false,
    //    };
    if (!options.scrollbar)
      options.scrollbar = {
        el: $p.find(".swiper-scrollbar")[0],
        hide: false,
      };

    if (!options.navigation)
      options.navigation = {
        nextEl: $p.find(".swiper-button-next")[0],
        prevEl: $p.find(".swiper-button-prev")[0],
      };
    options.preloadImages = false;
    options.lazy = {
      loadPrevNext: true,
    };
    options.observer = true;
    options.observeParents = true;
    options.watchOverflow = true;
    if (!options.speed) options.speed = 500;
    options.roundLengths = false;
    if (!options.centerInsufficientSlides)
      options.centerInsufficientSlides = false;
    if (options.customFraction) {
      $p.addClass("custom-fraction-swiper");
      if (slidesLength > 1 && slidesLength < 10) {
        $p.find(".custom-current").text("01");
        $p.find(".custom-total").text("0" + slidesLength);
      } else if (slidesLength > 1) {
        $p.find(".custom-current").text("01");
        $p.find(".custom-total").text(slidesLength);
      }
    }
    if (isTouchScreen) options.direction = "horizontal";

    if (options.initialLast) options.initialSlide = slidesLength;

    if (options.customPagination) {
      options.pagination.renderBullet = function (index, className) {
        var slide = swiper.find(".swiper-slide").eq(index);
        if (slide.data("video")) className += " video";
        return (
          '<span class="' +
          className +
          ' custom" style="background-image: url(' +
          slide.data("preview") +
          ')"><span></span></span>'
        );
      };
    }

    if (options.progressbar) {
      options.pagination.type = "progressbar";
    }
    if (options.customFraction) {
      $p.addClass("custom-fraction-swiper");
      if (slidesLength > 1 && slidesLength < 10) {
        $p.find(".custom-current").text("01");
        $p.find(".custom-total").text("0" + slidesLength);
      } else if (slidesLength > 1) {
        $p.find(".custom-current").text("01");
        $p.find(".custom-total").text(slidesLength);
      }
    }
    return options;
  };

  _functions.initSwiper = function (el) {
    var swiper = new Swiper(el[0], _functions.getSwOptions(el));
  };

  $(".swiper-entry .swiper-container").each(function () {
    _functions.initSwiper($(this));
  });

  $(".swiper-thumbs").each(function () {
    var top = $(this).find(".swiper-container.swiper-thumbs-top")[0].swiper,
      bottom = $(this).find(".swiper-container.swiper-thumbs-bottom")[0].swiper;
    top.thumbs.swiper = bottom;
    top.thumbs.init();
    top.thumbs.update();
  });

  $(".swiper-control").each(function () {
    var top = $(this).find(".swiper-container")[0].swiper,
      bottom = $(this).find(".swiper-container")[1].swiper;
    top.controller.control = bottom;
    bottom.controller.control = top;
  });
  //custom fraction
  $(".custom-fraction-swiper").each(function () {
    var $this = $(this),
      $thisSwiper = $this.find(".swiper-container")[0].swiper;

    $thisSwiper.on("slideChange", function () {
      $this.find(".custom-current").text(function () {
        if ($thisSwiper.realIndex < 9) {
          return "0" + ($thisSwiper.realIndex + 1);
        } else {
          return $thisSwiper.realIndex + 1;
        }
      });
    });
  });

  //popup
  var popupTop = 0;
  _functions.removeScroll = function () {
    popupTop = $(window).scrollTop();
    $("html").css({
      position: "fixed",
      top: -$(window).scrollTop(),
      width: "100%",
    });
  };
  _functions.addScroll = function () {
    $("html").css({
      position: "static",
    });
    window.scroll(0, popupTop);
  };

  _functions.loadLogo = function () {
    winWidth = $(window).width();
    var logoDesc = $("[data-logo-src]").attr("data-logo-src");
    var logoMob = $("[data-logoMob-src]").attr("data-logoMob-src");
    if (winWidth <= 768) {
      $("[data-logo-src]").attr("src", logoMob);
    } else if (winWidth > 768) {
      $("[data-logo-src]").attr("src", logoDesc);
    }
  };
  _functions.loadLogo();
  /* function on page resize */
  _functions.resizeCall = function () {
    _functions.loadLogo();
  };

  if (!isTouchScreen) {
    $(window).resize(function () {
      _functions.resizeCall();
    });
  } else {
    window.addEventListener(
      "orientationchange",
      function () {
        // _functions.resizeCall();
      },
      false
    );
  }

  /* tabs */
  $("[data-tab]").click(function (e) {
    e.preventDefault();

    var current = $(this).attr("data-tab");

    $(this).closest(".tabs").find("[data-tab]").removeClass("active");
    $(this).addClass("active");

    $(this).closest(".tabs").find(".tab-item").slideUp(0);
    $(this)
      .closest(".tabs")
      .find("." + current)
      .stop()
      .slideDown(0);
  });

  //focus input
  $(".input-wrap .input").on("focus", function () {
    $(this).closest(".input-wrap").addClass("focus");
  });
  $(".input-wrap .input").on("blur", function () {
    $(this).closest(".input-wrap").removeClass("focus");
  });
  $(".input-wrap .input").on("keyup", function () {
    if ($(this).val()) $(this).parent().addClass("value");
    else $(this).parent().removeClass("value");
  });
  $(".input-wrap select").on("change", function () {
    $(this).parent().addClass("value");
  });

  //fail Input
  $(".input").on("keyup", function () {
    if ($(this).val()) {
      $(this).parent(".input-wrap").removeClass("fail");
    } else {
      $(this).parent(".input-wrap").addClass("fail");
    }
  });

  //telephone mask
  $('input[type="tel"]').on("focus", function () {
    $(this).inputmask({
      mask: "+7(999) 999 99 99",
      showMaskOnHover: false,
    });
  });

  $(".number-count-field .button").on("click", function () {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();

    if ($button.hasClass("inc")) {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      if (oldValue > 1) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }

    $button.parent().find("input").val(newVal);
  });

  $(".mobile-button").click(function (e) {
    e.preventDefault();
    $("html").toggleClass("overflow-hidden");
    $(this).toggleClass("active");
    $(".navbar").toggleClass("active");
  });
  //rellax

  $("body").addClass("site-ready");
  if (!is_IE && $(".rellax").length && $(window).width() > 1199) {
    var rellax = new Rellax(".rellax", {
      speed: -1.5,
      center: true,
    });
  }

  $(".scroll-to-form").click(function (e) {
    e.preventDefault();
    var scrollOffSet = $(".order-table").offset().top;
    console.log(scrollOffSet);
    $("html,body").animate(
      {
        scrollTop: scrollOffSet,
      },
      1500
    );
  });
  $(".scroll-to-contacts").click(function (e) {
    e.preventDefault();
    var scrollOffSet = $(".footer-contacts").offset().top;
    console.log(scrollOffSet);
    $("html,body").animate(
      {
        scrollTop: scrollOffSet,
      },
      1500
    );
  });

  $(".date-input").datepicker({
    language: "ru",
    minDate: new Date(),
  });

  $("#form").submit(function () {
    var form_data = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "send.php",
      data: form_data,
    }).done(function () {
      $("#callback").stop().fadeOut(0);
      $("#form").trigger("reset");
      // $(".overlay").stop().fadeIn();
      // $("#thank").stop().fadeIn();
      alert("Заявка отправлена");
    });
    return false;
  });
});
