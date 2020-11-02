function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

jQuery(document).ready(function($) {
  var $communitySceneItem = $('.scenes-scroll__item');
  var $communityFixedItem = $('.fixed-item');
  var $enterpriseScrollItem = $('.point-item');
  var $enterpriseDotItem = $('.dot-item');
  var $sliderHomeClients = $('#slider-clients');
  var $headerSubmenuItem = $('.has-submenu');
  var $fieldErrorMsg = $('.invalid-field');
  var $submitBtn = $('.js-form-submit');
  $('.js-menu-toggler').click(function() {
    $('body').toggleClass('opened-menu');
    $(this).toggleClass('opened');
    $headerSubmenuItem.removeClass('opened-submenu');
    $('.js-header-menu').fadeToggle(400);
  });
  $('.js-open-submenu').click(function() {
    if (
      $(this)
        .parent()
        .hasClass('opened-submenu')
    ) {
      $headerSubmenuItem.removeClass('opened-submenu');
    } else {
      $headerSubmenuItem.removeClass('opened-submenu');
      $(this)
        .parent()
        .addClass('opened-submenu');
    }
  });
  $submitBtn.click(function(e) {
    e.preventDefault();
    var form = $('#monitoring-form');
    var fieldEmail = $('#user-email');
    var fieldCheckbox = $('#user-agree');
    var fieldEmailVal = fieldEmail.val();
    $fieldErrorMsg.hide();

    if (!fieldEmailVal && !fieldCheckbox.is(':checked')) {
      showFieldErrorMsg(fieldEmail);
      showFieldErrorMsg(fieldCheckbox);
      return null;
    }

    if (!fieldEmail.val()) {
      return showFieldErrorMsg(fieldEmail);
    }

    if (!fieldCheckbox.is(':checked')) {
      return showFieldErrorMsg(fieldCheckbox);
    }

    form[0].reset();
    return (window.location.href = 'https://calendly.com/victoriametrics/30min?email='.concat(
      fieldEmailVal,
    ));
  });

  function showFieldErrorMsg(el) {
    return el
      .parent()
      .find('.invalid-field')
      .text('This field is required')
      .show();
  }

  $('.b-main').waypoint(
    function() {
      $('.b-header').toggleClass('header-fixed');
    },
    {
      offset: '-50px',
    },
  );
  $('.js-point-animate').waypoint(
    function() {
      $(this.element).addClass('point-animate');
    },
    {
      offset: '80%',
    },
  );

  function initCommunityPageScroll() {
    $communitySceneItem.waypoint(
      function(direction) {
        var id = +$(this.element).attr('data-id');
        $communityFixedItem.removeClass('active');
        $('.fixed-item--'.concat(id)).addClass('active');
        $('.scene-solution').removeClass('active');
        $('.scene-solution--'.concat(id)).addClass('active');
        $('.scene-fixed-content').attr('data-position', id);

        if (direction === 'down') {
          $('html, body')
            .stop()
            .animate(
              {
                scrollTop: $('.scenes-scroll__item--'.concat(id)).offset().top,
              },
              400,
            );
        }

        if (direction === 'up') {
          $('html, body')
            .stop()
            .animate(
              {
                scrollTop:
                  $('.scenes-scroll__item--'.concat(id)).offset().top -
                  window.innerHeight,
              },
              400,
            );
        }
      },
      {
        offset: '50%',
      },
    );
  }

  function initEnterprisePageScroll() {
    $enterpriseScrollItem.waypoint(
      function(direction) {
        if (direction === 'down') {
          var id = $(this.element).attr('data-id');
          $('.point-item--'.concat(id)).removeClass('in-bottom direction-up');
          $('.point-item--'.concat(id)).addClass('direction-dowm');
          $enterpriseDotItem.removeClass('active');
          $('.dot-item--'.concat(id)).addClass('active');
        }
      },
      {
        offset: '90%',
      },
    );
    $enterpriseScrollItem.waypoint(
      function(direction) {
        if (direction === 'down') {
          var id = $(this.element).attr('data-id');
          $('.point-item--'.concat(id)).addClass('in-top');
        }
      },
      {
        offset: '-30%',
      },
    );
    $enterpriseScrollItem.waypoint(
      function(direction) {
        if (direction === 'up') {
          var id = $(this.element).attr('data-id');
          $('.point-item--'.concat(id))
            .removeClass('in-top direction-dowm')
            .addClass('direction-up');
          $enterpriseDotItem.removeClass('active');
          $('.dot-item--'.concat(id)).addClass('active');
        }
      },
      {
        offset: '-30%',
      },
    );
    $enterpriseScrollItem.waypoint(
      function(direction) {
        if (direction === 'up') {
          var id = $(this.element).attr('data-id');
          $('.point-item--'.concat(id)).addClass('in-bottom');
        }
      },
      {
        offset: '90%',
      },
    );
  }

  $enterpriseDotItem.click(function() {
    if (!$(this).hasClass('active')) {
      var id = +$(this).attr('data-id');
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop:
              $('.point-item--'.concat(id)).offset().top -
              window.innerHeight * 0.25,
          },
          400,
        );
    }
  });

  if ($communitySceneItem.length > 0) {
    initCommunityPageScroll();
  }

  if ($enterpriseScrollItem.length > 0) {
    initEnterprisePageScroll();
  }

  if ($sliderHomeClients.length) {
    var _$sliderHomeClients$s;

    $sliderHomeClients.slick(
      ((_$sliderHomeClients$s = {
        dots: false,
        arrows: false,
      }),
      _defineProperty(_$sliderHomeClients$s, 'dots', false),
      _defineProperty(_$sliderHomeClients$s, 'arrows', false),
      _defineProperty(_$sliderHomeClients$s, 'infinite', true),
      _defineProperty(_$sliderHomeClients$s, 'adaptiveHeight', true),
      _defineProperty(_$sliderHomeClients$s, 'speed', 300),
      _defineProperty(_$sliderHomeClients$s, 'slidesToShow', 6),
      _defineProperty(_$sliderHomeClients$s, 'slidesToScroll', 1),
      _defineProperty(_$sliderHomeClients$s, 'lazyLoad', 'progressive'),
      _defineProperty(_$sliderHomeClients$s, 'touchThreshold', 30),
      _defineProperty(_$sliderHomeClients$s, 'responsive', [
        {
          breakpoint: 1170,
          settings: {
            slidesToShow: 4,
            autoplay: true,
            autoplaySpeed: 2000,
          },
        },
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 2000,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            autoplay: true,
            autoplaySpeed: 2000,
          },
        },
      ]),
      _$sliderHomeClients$s),
    );
  }
});
