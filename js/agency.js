(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // stop playing after modal closed

  $("#portfolioModal4").on('hidden.bs.modal', function (e) {
  $("#portfolioModal4 iframe").attr("src", $("#portfolioModal4 iframe").attr("src"));
  });
  $("#portfolioModal5").on('hidden.bs.modal', function (e) {
  $("#portfolioModal5 iframe").attr("src", $("#portfolioModal5 iframe").attr("src"));
  });
    $("#portfolioModal3").on('hidden.bs.modal', function (e) {
  $("#portfolioModal3 iframe").attr("src", $("#portfolioModal3 iframe").attr("src"));
  });
      $("#portfolioModal2").on('hidden.bs.modal', function (e) {
  $("#portfolioModal2 iframe").attr("src", $("#portfolioModal2 iframe").attr("src"));
  });
        $("#portfolioModal1").on('hidden.bs.modal', function (e) {
  $("#portfolioModal1 iframe").attr("src", $("#portfolioModal1 iframe").attr("src"));
  });
          $("#portfolioModal6").on('hidden.bs.modal', function (e) {
  $("#portfolioModal6 iframe").attr("src", $("#portfolioModal6 iframe").attr("src"));
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if (window.location.pathname == '/') {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  })

})(jQuery); // End of use strict
