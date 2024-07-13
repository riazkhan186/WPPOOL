(function ($) {
  "use strict";

  // for sticky navbar
  $(window).scroll(function () {
    if ($(window).scrollTop() > 120) {
      $(".header-wrapper").addClass("sticky");
    } else {
      $(".header-wrapper").removeClass("sticky");
    }
  });

  // Menu popup Toggle
  $(".header-menu-btn").click(function () {
    $(".menu-popup").toggleClass("hidden");
  });
  $(".menu-popup-close-btn").click(function () {
    $(".menu-popup").toggleClass("hidden");
  });

  $(document).click(function (event) {
    if (!$(event.target).closest(".menu-popup, .header-menu-btn").length) {
      $(".menu-popup").addClass("hidden");
    }
  });

  // Counter
  $(".odometer").appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });

  // Partical JS
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 350,
        },
      },
      color: {
        value: ["#0011ff", "#000000"],
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 6,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.8,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 8,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: "#1c1c1c",
        opacity: 0.8,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
    config_demo: {
      hide_card: false,
      background_color: "#b61924",
      background_image: "",
      background_position: "50% 50%",
      background_repeat: "no-repeat",
      background_size: "cover",
    },
  });

  // chart Area Duration list
  $(".ctb__filter button").on("click", function () {
    $(".ctb__filter li").removeClass("active");
    $(this).parent().addClass("active");
  });

  // State Of USA Slider
  $(".owl-carousel").owlCarousel({
    items: 2.3,
    loop: false,
    margin: 20,
    dots: false,
    nav: true,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      768: {
        items: 2.3,
      },
    },
  });

  // Data table
  $(document).ready(function () {
    $("#myTable").DataTable({
      paging: false,
      scrollY: 400,
      searching: false,
    });
  });

  const data = [
    {
      company: "Adyen",
      ticker: "AFRM",
      vertical: "Payments",
      price: "$17.15",
      marketCap: "$50.5",
      revenueGrowth: "49.0%",
      grossMargin: "15.8%",
      evRevenue: "6.3",
      ytdPerformance: "24.3%",
    },
    {
      company: "PayPal",
      ticker: "PYPL",
      vertical: "Payments",
      price: "$23.45",
      marketCap: "$70.8",
      revenueGrowth: "38.2%",
      grossMargin: "22.1%",
      evRevenue: "5.9",
      ytdPerformance: "18.5%",
    },
    {
      company: "Square",
      ticker: "SQ",
      vertical: "Payments",
      price: "$35.75",
      marketCap: "$65.3",
      revenueGrowth: "45.6%",
      grossMargin: "18.2%",
      evRevenue: "7.1",
      ytdPerformance: "20.4%",
    },
    {
      company: "Stripe",
      ticker: "STP",
      vertical: "Payments",
      price: "$19.85",
      marketCap: "$80.2",
      revenueGrowth: "52.3%",
      grossMargin: "12.4%",
      evRevenue: "8.4",
      ytdPerformance: "25.9%",
    },
    {
      company: "Mastercard",
      ticker: "MA",
      vertical: "Finance",
      price: "$40.55",
      marketCap: "$90.1",
      revenueGrowth: "60.7%",
      grossMargin: "10.9%",
      evRevenue: "4.7",
      ytdPerformance: "22.8%",
    },
    {
      company: "Visa",
      ticker: "V",
      vertical: "Finance",
      price: "$50.25",
      marketCap: "$100.3",
      revenueGrowth: "55.4%",
      grossMargin: "14.6%",
      evRevenue: "6.2",
      ytdPerformance: "21.7%",
    },
    {
      company: "Amazon",
      ticker: "AMZN",
      vertical: "E-commerce",
      price: "$65.45",
      marketCap: "$150.2",
      revenueGrowth: "67.9%",
      grossMargin: "9.3%",
      evRevenue: "9.5",
      ytdPerformance: "29.1%",
    },
    {
      company: "Alibaba",
      ticker: "BABA",
      vertical: "E-commerce",
      price: "$55.65",
      marketCap: "$120.5",
      revenueGrowth: "63.2%",
      grossMargin: "13.8%",
      evRevenue: "7.8",
      ytdPerformance: "26.3%",
    },
    {
      company: "Apple",
      ticker: "AAPL",
      vertical: "Technology",
      price: "$75.85",
      marketCap: "$200.7",
      revenueGrowth: "72.1%",
      grossMargin: "8.6%",
      evRevenue: "10.1",
      ytdPerformance: "31.4%",
    },
    {
      company: "Google",
      ticker: "GOOGL",
      vertical: "Technology",
      price: "$85.95",
      marketCap: "$250.9",
      revenueGrowth: "70.5%",
      grossMargin: "11.3%",
      evRevenue: "9.2",
      ytdPerformance: "28.6%",
    },
    {
      company: "Microsoft",
      ticker: "MSFT",
      vertical: "Technology",
      price: "$90.05",
      marketCap: "$300.1",
      revenueGrowth: "74.8%",
      grossMargin: "7.9%",
      evRevenue: "11.0",
      ytdPerformance: "33.7%",
    },
    {
      company: "Netflix",
      ticker: "NFLX",
      vertical: "Streaming",
      price: "$70.25",
      marketCap: "$180.5",
      revenueGrowth: "66.3%",
      grossMargin: "10.5%",
      evRevenue: "8.9",
      ytdPerformance: "27.1%",
    },
    {
      company: "Facebook",
      ticker: "FB",
      vertical: "Social Media",
      price: "$60.35",
      marketCap: "$140.8",
      revenueGrowth: "64.7%",
      grossMargin: "12.2%",
      evRevenue: "7.6",
      ytdPerformance: "25.4%",
    },
    {
      company: "Twitter",
      ticker: "TWTR",
      vertical: "Social Media",
      price: "$45.45",
      marketCap: "$110.4",
      revenueGrowth: "58.9%",
      grossMargin: "15.1%",
      evRevenue: "6.8",
      ytdPerformance: "23.7%",
    },
  ];

  const $tbody = $("#myTable tbody");

  data.forEach((item) => {
    const $row = $("<tr>");
    $row.append(`<td>${item.company}</td>`);
    $row.append(`<td>${item.ticker}</td>`);
    $row.append(`<td>${item.vertical}</td>`);
    $row.append(`<td>${item.price}</td>`);
    $row.append(`<td>${item.marketCap}</td>`);
    $row.append(`<td>${item.revenueGrowth}</td>`);
    $row.append(`<td>${item.grossMargin}</td>`);
    $row.append(`<td>${item.evRevenue}</td>`);
    $row.append(`<td>${item.ytdPerformance}</td>`);
    $tbody.append($row);
  });
})(jQuery);
