/*
Template Name: Apaxy - Responsive Bootstrap 4 Admin Dashboard
Author: Themesdesign
Version: 1.0.0
Website: https://themesdesign.in/
File: dashboard Init Js File
*/


var options = {
  chart: {
    height: 346,
    type: 'line',
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false,
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 3,
    curve: 'smooth',
    dashArray: [0, 8]
  },
  series: [{
      name: "2019",
      data: [45, 52, 38, 24, 33, 56, 42, 20, 6, 18, 22, 10]
    },
    {
      name: "2018",
      type: 'area',
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
    },
  ],
  colors: ['#3d8ef8', '#11c46e'],
  fill: {
    opacity: [1, 0.15],
  },
  markers: {
    size: 0,

    hover: {
      sizeOffset: 6
    }
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
      'Oct', 'Nov', 'Dec'
    ],
  },
 
  grid: {
    borderColor: '#f1f1f1',
  }
}

var chart = new ApexCharts(
  document.querySelector("#revenue-chart"),
  options
);

chart.render();


// Earning Slider

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  arrows: false,
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1680,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


// Day Earning Chart

var options = {
  chart: {
      height: 250,
      type: 'radialBar',
      offsetY: -20
  },
  plotOptions: {
      radialBar: {
          startAngle: -135,
          endAngle: 135,
          hollow: {
            size: '72%',
        },

          dataLabels: {
            name: {
              offsetY: -15
            },
            value: {
              offsetY: 12,
              fontSize: '18px',
              color: undefined,
              formatter: function (val) {
                  return val + "%";
              }
            }
          }
      }
  },

  colors: ['#3d8ef8'],
  fill: {
      type: 'gradient',
      gradient: {
          shade: 'dark',
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91]
      },
  },

  series: [67],
  labels: ['Day'],
  
}

var chart = new ApexCharts(
  document.querySelector("#earning-day-chart"),
  options
);

chart.render();


// weekly Earning Chart

var options = {
  chart: {
      height: 250,
      type: 'radialBar',
      offsetY: -20
  },
  plotOptions: {
      radialBar: {
          startAngle: -135,
          endAngle: 135,
          hollow: {
            size: '72%',
        },

          dataLabels: {
            name: {
              offsetY: -15
            },
            value: {
              offsetY: 12,
                  fontSize: '18px',
                  color: undefined,
                  formatter: function (val) {
                      return val + "%";
                  }
              }
          }
      }
  },
  colors: ['#11c46e'],
  fill: {
      type: 'gradient',
      gradient: {
          shade: 'dark',
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91]
      },
  },

  series: [72],
  labels: ['Week'],
  
}

var chart = new ApexCharts(
  document.querySelector("#earning-weekly-chart"),
  options
);

chart.render();


// Monthly Earning Chart

var options = {
  chart: {
      height: 250,
      type: 'radialBar',
      offsetY: -20
  },
  plotOptions: {
      radialBar: {
          startAngle: -135,
          endAngle: 135,
          hollow: {
            size: '72%',
        },

          dataLabels: {
            name: {
              offsetY: -15
            },
            value: {
              offsetY: 12,
                  fontSize: '18px',
                  color: undefined,
                  formatter: function (val) {
                      return val + "%";
                  }
              }
          }
      }
  },
  colors: ['#f1b44c'],
  fill: {
      type: 'gradient',
      gradient: {
          shade: 'dark',
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91]
      },
  },

  series: [83],
  labels: ['Month'],
}

var chart = new ApexCharts(
  document.querySelector("#earning-monthly-chart"),
  options
);

chart.render();


// Monthly Earning Chart

var options = {
  chart: {
      height: 250,
      type: 'radialBar',
      offsetY: -20
  },
  plotOptions: {
      radialBar: {
          startAngle: -135,
          endAngle: 135,
          hollow: {
            size: '72%',
        },

          dataLabels: {
            name: {
              offsetY: -15
            },
            value: {
              offsetY: 12,
                  fontSize: '18px',
                  color: undefined,
                  formatter: function (val) {
                      return val + "%";
                }
            }
          }
      }
  },
  colors: ['#fb4d53'],
  fill: {
      type: 'gradient',
      gradient: {
          shade: 'dark',
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91]
      },
  },

  series: [95],
  labels: ['Year'],
}

var chart = new ApexCharts(
  document.querySelector("#earning-yearly-chart"),
  options
);

chart.render();


// usa map

$('#usa').vectorMap({
  map: 'usa_en',
  enableZoom: true,
  showTooltip: true,
  selectedColor: null,
  hoverColor: '#5b9ff9',
  backgroundColor: 'transparent',
  color: '#3d8ef8',
  borderColor: '#bcbfc7',
  colors: {
    ca: '#5b9ff9',
    tx: '#5b9ff9',
    mt: '#5b9ff9',
    ny: '#5b9ff9'
  },
  onRegionClick: function (event, code, region) {
    event.preventDefault();
  }
});


// Social Source

var options = {
  chart: {
      height: 300,
      type: 'radar',
      toolbar: {
        show: false,
      }
  },
  series: [{
      name: 'Facebook',
      data: [80, 50, 45, 40, 100, 20],
    },
    {
      name: 'Twitter',
      data: [60, 65, 22, 89, 76, 75],
    },
  ],
  markers: {
    size: 0
},
  colors: ['#3d8ef8', '#11c46e'],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
}

var chart = new ApexCharts(
  document.querySelector("#social-source-chart"),
  options
);

chart.render();


