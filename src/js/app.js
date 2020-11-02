jQuery(document).ready(function ($) {
  const $communitySceneItem = $(".scenes-scroll__item");
  const $communityFixedItem = $(".fixed-item");
  const $enterpriseScrollItem = $(".point-item");
  const $enterpriseDotItem = $(".dot-item");
  const $sliderHomeClients = $("#slider-clients");
  const $headerSubmenuItem = $(".has-submenu");
  const $fieldErrorMsg = $(".invalid-field");
  const $submitBtn = $(".js-form-submit");
  $(".js-menu-toggler").click(function () {
    $("body").toggleClass("opened-menu");
    $(this).toggleClass("opened");
    $headerSubmenuItem.removeClass('opened-submenu');
    $(".js-header-menu").fadeToggle(400);
  });

  $(".js-open-submenu").click(function () {
   if ($(this).parent().hasClass('opened-submenu')) {
     $headerSubmenuItem.removeClass('opened-submenu');
   } else {
     $headerSubmenuItem.removeClass('opened-submenu');
     $(this).parent().addClass('opened-submenu');
   }
  });

  
  $submitBtn.click(function (e) {
    e.preventDefault();
    const form = $("#monitoring-form");
    const fieldEmail = $("#user-email");
    const fieldCheckbox = $("#user-agree");
    const fieldEmailVal = fieldEmail.val();
    $fieldErrorMsg.hide();
    if (!fieldEmailVal && !fieldCheckbox.is(":checked")) {
      showFieldErrorMsg(fieldEmail);
      showFieldErrorMsg(fieldCheckbox);
      return null;
    }
    if (!fieldEmail.val()) {
      return showFieldErrorMsg(fieldEmail);
    }
    if (!fieldCheckbox.is(":checked")) {
      return showFieldErrorMsg(fieldCheckbox);
    }
    form[0].reset();
    return (window.location.href = `https://calendly.com/victoriametrics/30min?email=${fieldEmailVal}`);
  });

  function showFieldErrorMsg(el) {
    return el
      .parent()
      .find(".invalid-field")
      .text("This field is required")
      .show();
  }

  $(".b-main").waypoint(
    function () {
      $(".b-header").toggleClass("header-fixed");
    },
    {
      offset: "-50px",
    }
  );
  $(".js-point-animate").waypoint(
    function () {
      $(this.element).addClass("point-animate");
    },
    {
      offset: "80%",
    }
  );

  function initCommunityPageScroll() {
    $communitySceneItem.waypoint(
      function (direction) {
          const id = +$(this.element).attr("data-id");
          $communityFixedItem.removeClass("active");
          $(`.fixed-item--${id}`).addClass("active");
          $('.scene-solution').removeClass("active");
          $(`.scene-solution--${id}`).addClass("active");
          $('.scene-fixed-content').attr('data-position', id);

        if (direction === "down") {
         $("html, body")
        .stop()
        .animate(
          {
            scrollTop:
              $(`.scenes-scroll__item--${id}`).offset().top,
          },
          400
        );
        }
        if (direction === "up") {
         $("html, body")
        .stop()
        .animate(
          {
            scrollTop:
              $(`.scenes-scroll__item--${id}`).offset().top - window.innerHeight,
          },
          400
        );
        }
      },
      {
        offset: "50%",
      }
    );
  }

  function initEnterprisePageScroll() {
    $enterpriseScrollItem.waypoint(
      function (direction) {
        if (direction === "down") {
          const id = $(this.element).attr("data-id");
          $(`.point-item--${id}`).removeClass("in-bottom direction-up");
          $(`.point-item--${id}`).addClass("direction-dowm");
          $enterpriseDotItem.removeClass("active");
          $(`.dot-item--${id}`).addClass("active");
        }
      },
      {
        offset: "90%",
      }
    );

    $enterpriseScrollItem.waypoint(
      function (direction) {
        if (direction === "down") {
          const id = $(this.element).attr("data-id");
          $(`.point-item--${id}`).addClass("in-top");
        }
      },
      {
        offset: "-30%",
      }
    );

    $enterpriseScrollItem.waypoint(
      function (direction) {
        if (direction === "up") {
          const id = $(this.element).attr("data-id");
          $(`.point-item--${id}`)
            .removeClass("in-top direction-dowm")
            .addClass("direction-up");
          $enterpriseDotItem.removeClass("active");
          $(`.dot-item--${id}`).addClass("active");
        }
      },
      {
        offset: "-30%",
      }
    );

    $enterpriseScrollItem.waypoint(
      function (direction) {
        if (direction === "up") {
          const id = $(this.element).attr("data-id");
          $(`.point-item--${id}`).addClass("in-bottom");
        }
      },
      {
        offset: "90%",
      }
    );
  }

  $enterpriseDotItem.click(function () {
    if (!$(this).hasClass("active")) {
      const id = +$(this).attr("data-id");

      $("html, body")
        .stop()
        .animate(
          {
            scrollTop:
              $(`.point-item--${id}`).offset().top - window.innerHeight * 0.25,
          },
          400
        );
    }
  });

  if ($communitySceneItem.length > 0) {
    initCommunityPageScroll();
  }
  if ($enterpriseScrollItem.length > 0) {
    initEnterprisePageScroll();
  }
  if($sliderHomeClients.length) {
    $sliderHomeClients.slick({
      dots: false,
      arrows: false,
      dots: false,
      arrows: false,
      infinite: true,
      adaptiveHeight: true,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 1,
      lazyLoad: 'progressive',
      touchThreshold: 30,
      responsive: [
    {
      breakpoint: 1170,
      settings: {
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    }
  ]
    });
  }
});
