(function ($) {
    "use strict";
    /*=================================
      JS Index Here
      �������أ�Http://www.bootstrapmb.com
    ==================================*/
    /*
    01. On Load Function
    02. Preloader
    03. Mobile Menu Active
    04. Sticky fix
    05. Scroll To Top
    06. Set Background Image
    07. Global Slider
    08. Custom Animaiton For Slider
    09. Flip Slider
    10. Ajax Contact Form
    11. Search Box Popup
    12. Popup Sidemenu
    13. Magnific Popup
    14. Section Position
    15. Filter
    16. Counter Up
    17. AS Tab
    18. Shape Mockup
    19. Countdown
    20. Progress Bar Animation
    21. Price Slider
    22. One Page Nav
    23. Indicator
    00. Woocommerce Toggle
    00. Right Click Disable
  */
    /*=================================
      JS Index End
  ==================================*/
    /*
  
  /*---------- 01. On Load Function ----------*/
    $(window).on("load", function () {
        $(".preloader").fadeOut();
    });
  
    $(window).on('resize', function () {
        $(".slick-slider").slick("refresh");
    });
  
    /*---------- 02. Preloader ----------*/
    if ($(".preloader").length > 0) {
        $(".preloaderCls").each(function () {
            $(this).on("click", function (e) {
                e.preventDefault();
                $(".preloader").css("display", "none");
            });
        });
    }
    
  
    $('[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
      $('.as-carousel').slick('setPosition');
      })
    /*---------- 03. Mobile Menu Active ----------*/
    $.fn.asmobilemenu = function (options) {
        var opt = $.extend(
            {
                menuToggleBtn: ".as-menu-toggle",
                bodyToggleClass: "as-body-visible",
                subMenuClass: "as-submenu",
                subMenuParent: "as-item-has-children",
                subMenuParentToggle: "as-active",
                meanExpandClass: "as-mean-expand",
                appendElement: '<span class="as-mean-expand"></span>',
                subMenuToggleClass: "as-open",
                toggleSpeed: 400,
            },
            options
        );
  
        return this.each(function () {
            var menu = $(this); // Select menu
  
            // Menu Show & Hide
            function menuToggle() {
                menu.toggleClass(opt.bodyToggleClass);
  
                // collapse submenu on menu hide or show
                var subMenu = "." + opt.subMenuClass;
                $(subMenu).each(function () {
                    if ($(this).hasClass(opt.subMenuToggleClass)) {
                        $(this).removeClass(opt.subMenuToggleClass);
                        $(this).css("display", "none");
                        $(this).parent().removeClass(opt.subMenuParentToggle);
                    }
                });
            }
  
            // Class Set Up for every submenu
            menu.find("li").each(function () {
                var submenu = $(this).find("ul");
                submenu.addClass(opt.subMenuClass);
                submenu.css("display", "none");
                submenu.parent().addClass(opt.subMenuParent);
                submenu.prev("a").append(opt.appendElement);
                submenu.next("a").append(opt.appendElement);
            });
  
            // Toggle Submenu
            function toggleDropDown($element) {
                if ($($element).next("ul").length > 0) {
                    $($element).parent().toggleClass(opt.subMenuParentToggle);
                    $($element).next("ul").slideToggle(opt.toggleSpeed);
                    $($element).next("ul").toggleClass(opt.subMenuToggleClass);
                } else if ($($element).prev("ul").length > 0) {
                    $($element).parent().toggleClass(opt.subMenuParentToggle);
                    $($element).prev("ul").slideToggle(opt.toggleSpeed);
                    $($element).prev("ul").toggleClass(opt.subMenuToggleClass);
                }
            }
  
            // Submenu toggle Button
            var expandToggler = "." + opt.meanExpandClass;
            $(expandToggler).each(function () {
                $(this).on("click", function (e) {
                    e.preventDefault();
                    toggleDropDown($(this).parent());
                });
            });
  
            // Menu Show & Hide On Toggle Btn click
            $(opt.menuToggleBtn).each(function () {
                $(this).on("click", function () {
                    menuToggle();
                });
            });
  
            // Hide Menu On out side click
            menu.on("click", function (e) {
                e.stopPropagation();
                menuToggle();
            });
  
            // Stop Hide full menu on menu click
            menu.find("div").on("click", function (e) {
                e.stopPropagation();
            });
        });
    };
  
    $(".as-menu-wrapper").asmobilemenu();
  
  /*---------- 04. Sticky fix ----------*/
  $(window).scroll(function () {
      var topPos = $(this).scrollTop();
      if (topPos > 500) {
          $('.sticky-wrapper').addClass('sticky');
      } else {
          $('.sticky-wrapper').removeClass('sticky')
      }
  })
  
  /*---------- 05. Scroll To Top ----------*/
  // progressAvtivation
  if($('.scroll-top')) {    
      var scrollTopbtn = document.querySelector('.scroll-top');
      var progressPath = document.querySelector('.scroll-top path');
      var pathLength = progressPath.getTotalLength();
      progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
      progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
      progressPath.style.strokeDashoffset = pathLength;
      progressPath.getBoundingClientRect();
      progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
      var updateProgress = function () {
          var scroll = $(window).scrollTop();
          var height = $(document).height() - $(window).height();
          var progress = pathLength - (scroll * pathLength / height);
          progressPath.style.strokeDashoffset = progress;
      }
      updateProgress();
      $(window).scroll(updateProgress);	
      var offset = 50;
      var duration = 750;
      jQuery(window).on('scroll', function() {
          if (jQuery(this).scrollTop() > offset) {
              jQuery(scrollTopbtn).addClass('show');
          } else {
              jQuery(scrollTopbtn).removeClass('show');
          }
      });				
      jQuery(scrollTopbtn).on('click', function(event) {
          event.preventDefault();
          jQuery('html, body').animate({scrollTop: 0}, 1);
          return false;
      })
  }
  
  
  
  
  
    /*---------- 06. Set Background Image ----------*/
    if ($("[data-bg-src]").length > 0) {
        $("[data-bg-src]").each(function () {
            var src = $(this).attr("data-bg-src");
            $(this).css("background-image", "url(" + src + ")");
            $(this).removeAttr("data-bg-src").addClass("background-image");
        });
    }
  
    /*---------- 06. Set Background Image ----------*/
    if ($('[data-theme-color]').length > 0) {
          $('[data-theme-color]').each(function () {
          var $color = $(this).attr('data-theme-color');
          $(this).get(0).style.setProperty('--theme-color', $color);
          $(this).removeAttr('data-theme-color');
          });
      };
  
    /*---------- 06. Set Background Mask Image ----------*/
    if ($('[data-mask-src]').length > 0) {
      $('[data-mask-src]').each(function () {
        var mask = $(this).attr('data-mask-src');
        $(this).css({
          'mask-image': 'url(' + mask + ')',
          '-webkit-mask-image': 'url(' + mask + ')'
        });
        $(this).removeAttr('data-mask-src');
      });
  };
  
  /*******svg-image*******/
  /*---------- 14. Image to SVG Code ----------*/
  const cache = {};
  
  $.fn.inlineSvg = function fnInlineSvg() {
      this.each(imgToSvg);
  
      return this;
  };
  
  function imgToSvg() {
      const $img = $(this);
      const src = $img.attr("src");
  
      // fill cache by src with promise
      if (!cache[src]) {
          const d = $.Deferred();
          $.get(src, (data) => {
              d.resolve($(data).find("svg"));
          });
          cache[src] = d.promise();
      }
  
      // replace img with svg when cached promise resolves
      cache[src].then((svg) => {
          const $svg = $(svg).clone();
  
          if ($img.attr("id")) $svg.attr("id", $img.attr("id"));
          if ($img.attr("class")) $svg.attr("class", $img.attr("class"));
          if ($img.attr("style")) $svg.attr("style", $img.attr("style"));
  
          if ($img.attr("width")) {
              $svg.attr("width", $img.attr("width"));
              if (!$img.attr("height")) $svg.removeAttr("height");
          }
          if ($img.attr("height")) {
              $svg.attr("height", $img.attr("height"));
              if (!$img.attr("width")) $svg.removeAttr("width");
          }
  
          $svg.insertAfter($img);
          $img.trigger("svgInlined", $svg[0]);
          $img.remove();
      });
  }
  
  $(".svg-img").inlineSvg();
  
  /*----------- 07. Global Slider ----------*/
    $(".as-carousel").each(function () {
        var asSlide = $(this);
  
        // Collect Data
        function d(data) {
            return asSlide.data(data);
        }
  
        // Custom Arrow Button
        var prevButton =
                '<button type="button" class="slick-prev"><i class="' +
                d("prev-arrow") +
                '"></i></button>',
            nextButton =
                '<button type="button" class="slick-next"><i class="' +
                d("next-arrow") +
                '"></i></button>';
  
        // Function For Custom Arrow Btn
        $("[data-slick-next]").each(function () {
            $(this).on("click", function (e) {
                e.preventDefault();
                $($(this).data("slick-next")).slick("slickNext");
            });
        });
  
        $("[data-slick-prev]").each(function () {
            $(this).on("click", function (e) {
                e.preventDefault();
                $($(this).data("slick-prev")).slick("slickPrev");
            });
        });
  
        // Check for arrow wrapper
        if (d("arrows") == true) {
            if (!asSlide.closest(".arrow-wrap").length) {
                asSlide.closest(".container").parent().addClass("arrow-wrap");
            }
        }
  
        asSlide.slick({
            dots: d("dots") ? true : false,
            fade: d("fade") ? true : false,
            arrows: d("arrows") ? true : false,
            speed: d("speed") ? d("speed") : 1000,
            asNavFor: d("asnavfor") ? d("asnavfor") : false,
            autoplay: d("autoplay") == false ? false : true,
            infinite: d("infinite") == false ? false : true,
            slidesToShow: d("slide-show") ? d("slide-show") : 1,
            adaptiveHeight: d("adaptive-height") ? true : false,
            centerMode: d("center-mode") ? true : false,
            autoplaySpeed: d("autoplay-speed") ? d("autoplay-speed") : 8000,
            centerPadding: d("center-padding") ? d("center-padding") : "0",
            focusOnSelect: d("focuson-select") == false ? false : true,
            pauseOnFocus: d("pauseon-focus") ? true : false,
            pauseOnHover: d("pauseon-hover") ? true : false,
            variableWidth: d("variable-width") ? true : false,
            vertical: d("vertical") ? true : false,
            verticalSwiping: d("vertical") ? true : false,
            prevArrow: d("prev-arrow")
                ? prevButton
                : '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
            nextArrow: d("next-arrow")
                ? nextButton
                : '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
            rtl: $("html").attr("dir") == "rtl" ? true : false,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        arrows: d("xl-arrows") ? true : false,
                        dots: d("xl-dots") ? true : false,
                        slidesToShow: d("xl-slide-show")
                            ? d("xl-slide-show")
                            : d("slide-show"),
                        centerMode: d("xl-center-mode") ? true : false,
                        centerPadding: "0",
                    },
                },
                {
                    breakpoint: 1400,
                    settings: {
                        arrows: d("ml-arrows") ? true : false,
                        dots: d("ml-dots") ? true : false,
                        slidesToShow: d("ml-slide-show")
                            ? d("ml-slide-show")
                            : d("slide-show"),
                        centerMode: d("ml-center-mode") ? true : false,
                        centerPadding: 0,
                    },
                },
                {
                    breakpoint: 1200,
                    settings: {
                        arrows: d("lg-arrows") ? true : false,
                        dots: d("lg-dots") ? true : false,
                        slidesToShow: d("lg-slide-show")
                            ? d("lg-slide-show")
                            : d("slide-show"),
                        centerMode: d("lg-center-mode")
                            ? d("lg-center-mode")
                            : false,
                        centerPadding: 0,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: d("md-arrows") ? true : false,
                        dots: d("md-dots") ? true : false,
                        slidesToShow: d("md-slide-show")
                            ? d("md-slide-show")
                            : 1,
                        centerMode: d("md-center-mode")
                            ? d("md-center-mode")
                            : false,
                        centerPadding: 0,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: d("sm-arrows") ? true : false,
                        dots: d("sm-dots") ? true : false,
                        slidesToShow: d("sm-slide-show")
                            ? d("sm-slide-show")
                            : 1,
                        centerMode: d("sm-center-mode")
                            ? d("sm-center-mode")
                            : false,
                        centerPadding: 0,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        arrows: d("xs-arrows") ? true : false,
                        dots: d("xs-dots") ? true : false,
                        slidesToShow: d("xs-slide-show")
                            ? d("xs-slide-show")
                            : 1,
                        centerMode: d("xs-center-mode")
                            ? d("xs-center-mode")
                            : false,
                        centerPadding: 0,
                    },
                },
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ],
        });
  
        $('a[data-slide]').on("click", function (e) {
          e.preventDefault();
          var slideno = $(this).data('slide');
          $('.as-carousel').slick('slickGoTo', slideno - 1);
      });
    });
  
    /*-----------portfolio slider------------------  */
    $('.portfolio-slider2').slick({
      centerMode: true,
      centerPadding: '326px',
      slidesToShow: 3,
      arrows: false,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            centerPadding: '250px',
          }
        },
        {
          breakpoint: 1200,
          settings: {
            centerPadding: '180px',
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 992,
          settings: {
            centerPadding: '100px',
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            centerPadding: '150px',
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            centerPadding: '15px',
            slidesToShow: 1,
          }
        },
      ]
    });
    
    /*----------- 08. Custom Animaiton For Slider ----------*/
    $('[data-ani-duration]').each(function () {
        var durationTime = $(this).data('ani-duration');
        $(this).css('animation-duration', durationTime);
    });
    
    $('[data-ani-delay]').each(function () {
        var delayTime = $(this).data('ani-delay');
        $(this).css('animation-delay', delayTime);
    });
    
    $('[data-ani]').each(function () {
        var animaionName = $(this).data('ani');
        $(this).addClass(animaionName);
        $('.slick-current [data-ani]').addClass('as-animated');
    });
    
    $('.as-carousel').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        $(slick.$slides).find('[data-ani]').removeClass('as-animated');
        $(slick.$slides[currentSlide]).find('[data-ani]').addClass('as-animated');
    })
  
    /*----------- 10. Ajax Contact Form ----------*/
    var form = ".ajax-contact";
    var invalidCls = "is-invalid";
    var $email = '[name="email"]';
    var $validation =
        '[name="name"],[name="email"],[name="subject"],[name="number"],[name="message"]'; // Must be use (,) without any space
    var formMessages = $(".form-messages");
  
    function sendContact() {
        var formData = $(form).serialize();
        var valid;
        valid = validateContact();
        if (valid) {
            jQuery
                .ajax({
                    url: $(form).attr("action"),
                    data: formData,
                    type: "POST",
                })
                .done(function (response) {
                    // Make sure that the formMessages div has the 'success' class.
                    formMessages.removeClass("error");
                    formMessages.addClass("success");
                    // Set the message text.
                    formMessages.text(response);
                    // Clear the form.
                    $(
                        form +
                            ' input:not([type="submit"]),' +
                            form +
                            " textarea"
                    ).val("");
                })
                .fail(function (data) {
                    // Make sure that the formMessages div has the 'error' class.
                    formMessages.removeClass("success");
                    formMessages.addClass("error");
                    // Set the message text.
                    if (data.responseText !== "") {
                        formMessages.html(data.responseText);
                    } else {
                        formMessages.html(
                            "Oops! An error occured and your message could not be sent."
                        );
                    }
                });
        }
    }
  
    function validateContact() {
        var valid = true;
        var formInput;
  
        function unvalid($validation) {
            $validation = $validation.split(",");
            for (var i = 0; i < $validation.length; i++) {
                formInput = form + " " + $validation[i];
                if (!$(formInput).val()) {
                    $(formInput).addClass(invalidCls);
                    valid = false;
                } else {
                    $(formInput).removeClass(invalidCls);
                    valid = true;
                }
            }
        }
        unvalid($validation);
  
        if (
            !$($email).val() ||
            !$($email)
                .val()
                .match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)
        ) {
            $($email).addClass(invalidCls);
            valid = false;
        } else {
            $($email).removeClass(invalidCls);
            valid = true;
        }
        return valid;
    }
  
    $(form).on("submit", function (element) {
        element.preventDefault();
        sendContact();
    });
  
    /*---------- 11. Search Box Popup ----------*/
    function popupSarchBox($searchBox, $searchOpen, $searchCls, $toggleCls) {
        $($searchOpen).on("click", function (e) {
            e.preventDefault();
            $($searchBox).addClass($toggleCls);
        });
        $($searchBox).on("click", function (e) {
            e.stopPropagation();
            $($searchBox).removeClass($toggleCls);
        });
        $($searchBox)
            .find("form")
            .on("click", function (e) {
                e.stopPropagation();
                $($searchBox).addClass($toggleCls);
            });
        $($searchCls).on("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            $($searchBox).removeClass($toggleCls);
        });
    }
    popupSarchBox(
        ".popup-search-box",
        ".searchBoxToggler",
        ".searchClose",
        "show"
    );
  
    /*---------- 12. Popup Sidemenu ----------*/
    function popupSideMenu($sideMenu, $sideMunuOpen, $sideMenuCls, $toggleCls) {
        // Sidebar Popup
        $($sideMunuOpen).on('click', function (e) {
        e.preventDefault();
        $($sideMenu).addClass($toggleCls);
        });
        $($sideMenu).on('click', function (e) {
        e.stopPropagation();
        $($sideMenu).removeClass($toggleCls)
        });
        var sideMenuChild = $sideMenu + ' > div';
        $(sideMenuChild).on('click', function (e) {
        e.stopPropagation();
        $($sideMenu).addClass($toggleCls)
        });
        $($sideMenuCls).on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $($sideMenu).removeClass($toggleCls);
        });
    };
    popupSideMenu('.sidemenu-wrapper', '.sideMenuToggler', '.sideMenuCls', 'show');
  
    /*---------- 12. Popup Sidecart ----------*/
    function popupSideCart($sideCart, $sideMunuOpen, $sideCartCls, $toggleCls) {
      // Sidebar Popup
      $($sideMunuOpen).on('click', function (e) {
      e.preventDefault();
      $($sideCart).addClass($toggleCls);
      });
      $($sideCart).on('click', function (e) {
      e.stopPropagation();
      $($sideCart).removeClass($toggleCls)
      });
      $($sideCartCls).on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      $($sideCart).removeClass($toggleCls);
      });
  };
  popupSideCart('.side-cart-wrapper', '.sideCartToggler', '.sideCartCls', 'show');
  
    /*----------- 13. Magnific Popup ----------*/
    /* magnificPopup img view */
    $(".popup-image").magnificPopup({
        type: "image",
        mainClass: 'mfp-zoom-in', 
        removalDelay: 260,
        gallery: {
            enabled: true,
        },
    });
  
    /* magnificPopup video view */
    $(".popup-video").magnificPopup({
        type: "iframe",
        mainClass: 'mfp-zoom-in', 
        removalDelay: 260,
    });
  
    /* magnificPopup video view */
    $(".popup-content").magnificPopup({
        type: "inline",
        midClick: true,
    });
  
    $(".popup-content").on("click", function () {
        $(".slick-slider").slick("refresh");
    });
  
    /*---------- 14. Section Position ----------*/
    // Interger Converter
    function convertInteger(str) {
        return parseInt(str, 10);
    }
  
    $.fn.sectionPosition = function (mainAttr, posAttr) {
        $(this).each(function () {
            var section = $(this);
  
            function setPosition() {
                var sectionHeight = Math.floor(section.height() / 2), // Main Height of section
                    posData = section.attr(mainAttr), // where to position
                    posFor = section.attr(posAttr), // On Which section is for positioning
                    topMark = "top-half", // Pos top
                    bottomMark = "bottom-half", // Pos Bottom
                    parentPT = convertInteger($(posFor).css("padding-top")), // Default Padding of  parent
                    parentPB = convertInteger($(posFor).css("padding-bottom")); // Default Padding of  parent
  
                if (posData === topMark) {
                    $(posFor).css(
                        "padding-bottom",
                        parentPB + sectionHeight + "px"
                    );
                    section.css("margin-top", "-" + sectionHeight + "px");
                } else if (posData === bottomMark) {
                    $(posFor).css(
                        "padding-top",
                        parentPT + sectionHeight + "px"
                    );
                    section.css("margin-bottom", "-" + sectionHeight + "px");
                }
            }
            setPosition(); // Set Padding On Load
        });
    };
  
    var postionHandler = "[data-sec-pos]";
    if ($(postionHandler).length) {
        $(postionHandler).imagesLoaded(function () {
            $(postionHandler).sectionPosition("data-sec-pos", "data-pos-for");
        });
    }
  
    /*----------- 15. Filter ----------*/
    $(".filter-active").imagesLoaded(function () {
        var $filter = ".filter-active",
            $filterItem = ".filter-item",
            $filterMenu = ".filter-menu-active";
  
        if ($($filter).length > 0) {
            var $grid = $($filter).isotope({
                itemSelector: $filterItem,
                filter: "*",
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: 1,
                },
            });
  
            // filter items on button click
            $($filterMenu).on("click", "button", function () {
                var filterValue = $(this).attr("data-filter");
                $grid.isotope({
                    filter: filterValue,
                });
            });
  
            // Menu Active Class
            $($filterMenu).on("click", "button", function (event) {
                event.preventDefault();
                $(this).addClass("active");
                $(this).siblings(".active").removeClass("active");
            });
        }
    });
  
    $(".masonary-active").imagesLoaded(function () {
        var $filter = ".masonary-active",
            $filterItem = ".filter-item";
  
        if ($($filter).length > 0) {
            $($filter).isotope({
                itemSelector: $filterItem,
                filter: "*",
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: 1,
                },
            });
        }
    });
  
  
    /*----------- 14. Filter ----------*/
  
      // Active specifix
      $('.filter-active-cat1').imagesLoaded(function () {
          var $filter = '.filter-active-cat1',
          $filterItem = '.filter-item',
          $filterMenu = '.filter-menu-active';
  
          if ($($filter).length > 0) {
              var $grid = $($filter).isotope({
                  itemSelector: $filterItem,
                  filter: '.cat1',
                  masonry: {
                  // use outer width of grid-sizer for columnWidth
                  columnWidth: 1
                  }
              });
  
              // filter items on button click
              $($filterMenu).on('click', 'button', function () {
                  var filterValue = $(this).attr('data-filter');
                  $grid.isotope({
                  filter: filterValue
                  });
              });
  
              // Menu Active Class 
              $($filterMenu).on('click', 'button', function (event) {
                  event.preventDefault();
                  $(this).addClass('active');
                  $(this).siblings('.active').removeClass('active');
              });
          };
      });
  
    /*----------- 16. Counter Up ----------*/
    $(".counter-number").counterUp({
        delay: 10,
        time: 1000,
    });
  
    /*---------- 17. AS Tab ----------*/
    $.fn.asTab = function (options) {
        var opt = $.extend(
            {
                sliderTab: false,
                tabButton: "button",
            },
            options
        );
  
        $(this).each(function () {
            var $menu = $(this);
            var $button = $menu.find(opt.tabButton);
  
            // Append indicator
            $menu.append('<span class="indicator"></span>');
            var $line = $menu.find(".indicator");
  
            // On Click Button Class Remove and indecator postion set
            $button.on("click", function (e) {
                e.preventDefault();
                var cBtn = $(this);
                cBtn.addClass("active").siblings().removeClass("active");
                if (opt.sliderTab) {
                    $(slider).slick("slickGoTo", cBtn.data("slide-go-to"));
                } else {
                    linePos();
                }
            });
  
            // Work With slider
            if (opt.sliderTab) {
                var slider = $menu.data("asnavfor"); // select slider
  
                // Select All button and set attribute
                var i = 0;
                $button.each(function () {
                    var slideBtn = $(this);
                    slideBtn.attr("data-slide-go-to", i);
                    i++;
  
                    // Active Slide On load > Actived Button
                    if (slideBtn.hasClass("active")) {
                        $(slider).slick(
                            "slickGoTo",
                            slideBtn.data("slide-go-to")
                        );
                    }
  
                    // Change Indicator On slide Change
                    $(slider).on(
                        "beforeChange",
                        function (event, slick, currentSlide, nextSlide) {
                            $menu
                                .find(
                                    opt.tabButton +
                                        '[data-slide-go-to="' +
                                        nextSlide +
                                        '"]'
                                )
                                .addClass("active")
                                .siblings()
                                .removeClass("active");
                            linePos();
                        }
                    );
                });
            }
  
            // Indicator Position
            function linePos() {
                var $btnActive = $menu.find(opt.tabButton + ".active"),
                    $height = $btnActive.css("height"),
                    $width = $btnActive.css("width"),
                    $top = $btnActive.position().top + "px",
                    $left = $btnActive.position().left + "px";
  
                $line.get(0).style.setProperty("--height-set", $height);
                $line.get(0).style.setProperty("--width-set", $width);
                $line.get(0).style.setProperty("--pos-y", $top);
                $line.get(0).style.setProperty("--pos-x", $left);
  
                if (
                    $($button).first().position().left ==
                    $btnActive.position().left
                ) {
                    $line
                        .addClass("start")
                        .removeClass("center")
                        .removeClass("end");
                } else if (
                    $($button).last().position().left ==
                    $btnActive.position().left
                ) {
                    $line
                        .addClass("end")
                        .removeClass("center")
                        .removeClass("start");
                } else {
                    $line
                        .addClass("center")
                        .removeClass("start")
                        .removeClass("end");
                }
            }
            linePos();
        });
    };
  
    // Call On Load
    if ($(".portfolio-tab").length) {
        $(".portfolio-tab").asTab({
            sliderTab: true,
            tabButton: ".tab-btn",
        });
    }
  
    if ($(".tab-menu1").length) {
        $(".tab-menu1").asTab({
            sliderTab: true,
            tabButton: ".tab-btn",
        });
    }
  
  if ($(".hero-indicator").length) {
      $(".hero-indicator").asTab({
          sliderTab: true,
          tabButton: ".indicatior-btn",
      });
  }
  if ($(".testi-indicator").length) {
      $(".testi-indicator").asTab({
          sliderTab: true,
          tabButton: ".testi-indicator-btn",
      });
  }
  
  
    /*----------- 18. Shape Mockup ----------*/
    $.fn.shapeMockup = function () {
        var $shape = $(this);
        $shape.each(function () {
            var $currentShape = $(this),
                shapeTop = $currentShape.data("top"),
                shapeRight = $currentShape.data("right"),
                shapeBottom = $currentShape.data("bottom"),
                shapeLeft = $currentShape.data("left");
            $currentShape
                .css({
                    top: shapeTop,
                    right: shapeRight,
                    bottom: shapeBottom,
                    left: shapeLeft,
                })
                .removeAttr("data-top")
                .removeAttr("data-right")
                .removeAttr("data-bottom")
                .removeAttr("data-left")
                .parent()
                .addClass("shape-mockup-wrap");
        });
    };
  
    if ($(".shape-mockup")) {
        $(".shape-mockup").shapeMockup();
    }
  
    /*----------- 19. Countdown ----------*/
  
    $.fn.countdown = function () {
        $(this).each(function () {
            var $counter = $(this),
                countDownDate = new Date($counter.data("offer-date")).getTime(), // Set the date we're counting down toz
                exprireCls = "expired";
  
            // Finding Function
            function s$(element) {
                return $counter.find(element);
            }
  
            // Update the count down every 1 second
            var counter = setInterval(function () {
                // Get today's date and time
                var now = new Date().getTime();
  
                // Find the distance between now and the count down date
                var distance = countDownDate - now;
  
                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                var minutes = Math.floor(
                    (distance % (1000 * 60 * 60)) / (1000 * 60)
                );
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
                // Check If value is lower than ten, so add zero before number
                days < 10 ? (days = "0" + days) : null;
                hours < 10 ? (hours = "0" + hours) : null;
                minutes < 10 ? (minutes = "0" + minutes) : null;
                seconds < 10 ? (seconds = "0" + seconds) : null;
  
                // If the count down is over, write some text
                if (distance < 0) {
                    clearInterval(counter);
                    $counter.addClass(exprireCls);
                    $counter.find(".message").css("display", "block");
                } else {
                    // Output the result in elements
                    s$(".day").html(days);
                    s$(".hour").html(hours);
                    s$(".minute").html(minutes);
                    s$(".seconds").html(seconds);
                }
            }, 1000);
        });
    };
  
    if ($(".counter-list").length) {
        $(".counter-list").countdown();
    }
  
    /*----------- 20. Progress Bar Animation ----------*/
    $('.progress-bar').waypoint(function() {
        $('.progress-bar').css({
        animation: "animate-positive 1.8s",
        opacity: "1"
        });
    }, { offset: '75%' });
  
    /*----------- 21. Price Slider ----------*/
    $(".price_slider").slider({
        range: true,
        min: 10,
        max: 100,
        values: [10, 75],
        slide: function (event, ui) {
          $(".from").text("$" + ui.values[0]);
          $(".to").text("$" + ui.values[1]);
        }
      });
      $(".from").text("$" + $(".price_slider").slider("values", 0));
      $(".to").text("$" + $(".price_slider").slider("values", 1));
  
    /*----------- 22. One Page Nav ----------*/
    function onePageNav(element) {
    if ($(element).length > 0) {
        $(element).each(function () {
        var link = $(this).find('a');
        $(this).find(link).each(function () {
            $(this).on('click', function () {
            var target = $(this.getAttribute('href'));
            if (target.length) {
                event.preventDefault();
                $('html, body').stop().animate({
                scrollTop: target.offset().top - 10
                }, 1000);
            };
  
            });
        });
        })
    }
    };
    onePageNav('.onepage-nav');
  
    //one page sticky menu  
    $(window).on('scroll', function(){
        if ($('.onepage-nav').length > 0) {
        if( $(window).scrollTop()> 0){
            $('.as-header .sticky-active').addClass('sticky');
            } else {
            $('.as-header .sticky-active').removeClass('sticky');
        }
        };
    });
  
    /*----------- 23. Indicator ----------*/
    // Indicator
    $.fn.indicator = function () {
        var $menu = $(this),
            $linkBtn = $menu.find("a"),
            $btn = $menu.find("button");
        // Append indicator
        $menu.append('<span class="indicator"></span>');
        var $line = $menu.find(".indicator");
        // Check which type button is Available
        if ($linkBtn.length) {
            var $currentBtn = $linkBtn;
        } else if ($btn.length) {
            var $currentBtn = $btn;
        }
        // On Click Button Class Remove
        $currentBtn.on("click", function (e) {
            e.preventDefault();
            $(this).addClass("active");
            $(this).siblings(".active").removeClass("active");
            linePos();
        });
        
        function linePos() {
            var $btnActive = $menu.find(".active"),
                $height = $btnActive.css("height"),
                $width = $btnActive.css("width"),
                $top = $btnActive.position().top + "px",
                $left = $btnActive.position().left + "px";
  
            $(window).on('resize', function () {
                $top = $btnActive.position().top + "px",
                $left = $btnActive.position().left + "px";
            });
  
            $line.get(0).style.setProperty("--height-set", $height);
            $line.get(0).style.setProperty("--width-set", $width);
            $line.get(0).style.setProperty("--pos-y", $top);
            $line.get(0).style.setProperty("--pos-x", $left);
  
        }
        linePos();
    };
  
    // Call On Load
    if ($(".indicator-active").length) {
        $(".indicator-active").indicator();
    }
  
  
    /*----------- 00. Woocommerce Toggle ----------*/
    // Ship To Different Address
    $("#ship-to-different-address-checkbox").on("change", function () {
        if ($(this).is(":checked")) {
            $("#ship-to-different-address")
                .next(".shipping_address")
                .slideDown();
        } else {
            $("#ship-to-different-address").next(".shipping_address").slideUp();
        }
    });
  
    // Login Toggle
    $(".woocommerce-form-login-toggle a").on("click", function (e) {
        e.preventDefault();
        $(".woocommerce-form-login").slideToggle();
    });
  
    // Coupon Toggle
    $(".woocommerce-form-coupon-toggle a").on("click", function (e) {
        e.preventDefault();
        $(".woocommerce-form-coupon").slideToggle();
    });
  
    // Woocommerce Shipping Method
    $(".shipping-calculator-button").on("click", function (e) {
        e.preventDefault();
        $(this).next(".shipping-calculator-form").slideToggle();
    });
  
    // Woocommerce Payment Toggle
    $('.wc_payment_methods input[type="radio"]:checked')
        .siblings(".payment_box")
        .show();
    $('.wc_payment_methods input[type="radio"]').each(function () {
        $(this).on("change", function () {
            $(".payment_box").slideUp();
            $(this).siblings(".payment_box").slideDown();
        });
    });
  
    // Woocommerce Rating Toggle
    $(".rating-select .stars a").each(function () {
        $(this).on("click", function (e) {
            e.preventDefault();
            $(this).siblings().removeClass("active");
            $(this).parent().parent().addClass("selected");
            $(this).addClass("active");
        });
    });
  
    // Quantity Plus Minus ---------------------------
  
    $(".quantity-plus").each(function () {
        $(this).on("click", function (e) {
            e.preventDefault();
            var $qty = $(this).siblings(".qty-input");
            var currentVal = parseInt($qty.val());
            if (!isNaN(currentVal)) {
                $qty.val(currentVal + 1);
            }
        });
    });
  
    $(".quantity-minus").each(function () {
        $(this).on("click", function (e) {
            e.preventDefault();
            var $qty = $(this).siblings(".qty-input");
            var currentVal = parseInt($qty.val());
            if (!isNaN(currentVal) && currentVal > 1) {
                $qty.val(currentVal - 1);
            }
        });
    });
  
  
    /*--------------------------------------------------
        select onput
    ---------------------------------------------------*/
    if ($('.single-select').length){
        $('.single-select').niceSelect();
    }
    
  //     window.addEventListener('contextmenu', function (e) {
  //       // do something here...
  //       e.preventDefault();
  //     }, false);
  
  
  //   /*----------- 00. Inspect Element Disable ----------*/
  //     document.onkeydown = function (e) {
  //       if (event.keyCode == 123) {
  //         return false;
  //       }
  //       if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
  //         return false;
  //       }
  //       if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
  //         return false;
  //       }
  //       if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
  //         return false;
  //       }
  //       if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
  //         return false;
  //       }
  //     }
    
  })(jQuery);