/*
Template Name: Apaxy - Responsive Bootstrap 4 Admin Dashboard
Author: Themesdesign
Website: https://themesdesign.in/
File: Chartjs Init
*/


(function ($) {
    'use strict';
    $(function () {

        Chart.defaults.global.defaultFontColor="#7b919e",
        Chart.defaults.scale.gridLines.color="rgba(123, 145, 158,0.1)";

        // Line Chart
        if ($('#lineChart').length) {
            var lineChartCanvas = $("#lineChart").get(0).getContext("2d");
            var data = {
                labels: ["2013", "2014", "2014", "2015", "2016", "2017", "2018", "2019"],
                datasets: [
                    {
                        label: 'Apple',
                        data: [120, 180, 140, 210, 160, 240, 180, 210],
                        borderColor: [
                            '#0db4d6'
                        ],
                        borderWidth: 3,
                        fill: false,
                        pointBackgroundColor: "#ffffff",
                        pointBorderColor: "#0db4d6"
                    },
                    {
                        label: 'Samsung',
                        data: [80, 140, 100, 170, 120, 200, 140, 170],
                        borderColor: [
                            '#7c8a96'
                        ],
                        borderWidth: 3,
                        fill: false,
                        pointBackgroundColor: "#ffffff",
                        pointBorderColor: "#7c8a96"
                    }
                ]
            };
            var options = {
                scales: {
                    yAxes: [{
                        gridLines: {
                            drawBorder: false,
                            borderDash: [3, 3],
                            zeroLineColor: '#7b919e'
                        },
                        ticks: {
                            min: 0,
                            color: "#7b919e"
                        },
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false,
                            drawBorder: false,
                            color: "#ffffff"
                        }
                    }]
                },
                elements: {
                    line: {
                        tension: 0.2
                    },
                    point: {
                        radius: 4
                    }
                },
                stepsize: 1
            };
            var lineChart = new Chart(lineChartCanvas, {
                type: 'line',
                data: data,
                options: options
            });
        }

        // Bar Chart
        if ($("#barChart").length) {
            var currentChartCanvas = $("#barChart").get(0).getContext("2d");
            var currentChart = new Chart(currentChartCanvas, {
                type: 'bar',
                data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
                    datasets: [{
                            label: 'Apple',
                            data: [46, 57, 59, 54, 62, 58, 64, 60, 66],
                            backgroundColor: '#eff2f7'
                        },
                        {
                            label: 'Samsung',
                            data: [74, 83, 102, 97, 86, 106, 93, 114, 94],
                            backgroundColor: '#3d8ef8'
                        },
                        {
                            label: 'Oppo',
                            data: [37, 42, 38, 26, 47, 50, 54, 55, 43],
                            backgroundColor: '#11c46e'
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,

                    scales: {
                        yAxes: [{
                            display: false,
                            gridLines: {
                                drawBorder: false,
                            },
                            ticks: {
                                fontColor: "#686868"
                            }
                        }],
                        xAxes: [{
                            barPercentage: 0.7,
                            categoryPercentage: 0.5,
                            ticks: {
                                fontColor: "#7b919e"
                            },
                            gridLines: {
                                display: false,
                                drawBorder: false
                            }
                        }]
                    },
                    elements: {
                        point: {
                            radius: 0
                        }
                    }
                }
            });
        }

        // Area Chart
        if ($("#areaChart").length) {
            var areaData = {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [{
                    data: [22, 23, 28, 20, 27, 20, 20, 24, 10, 35, 20, 25],
                    backgroundColor: [
                        '#f1b44c'
                    ],
                    borderColor: [
                        '#f1b44c'
                    ],
                    borderWidth: 2,
                    fill: 'origin',
                    label: "Upcube"
                },
                {
                    data: [50, 40, 48, 70, 50, 63, 63, 42, 42, 51, 35, 35],
                    backgroundColor: [
                        'rgba(124, 138, 150, 0.3)'
                    ],
                    borderColor: [
                        '#7c8a96'
                    ],
                    borderWidth: 1,
                    fill: 'origin',
                    label: "Zinzer"
                },
                {
                    data: [95, 75, 90, 105, 95, 95, 95, 100, 75, 95, 90, 105],
                    backgroundColor: [
                        'rgba(223, 227, 233, 0.2)'
                    ],
                    borderColor: [
                        '#dfe3e9'
                    ],
                    borderWidth: 1,
                    fill: 'origin',
                    label: "Drixo"
                }
                ]
            };
            var areaOptions = {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    filler: {
                        propagate: false
                    }
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false,
                            drawBorder: false,
                            color: 'transparent',
                            zeroLineColor: '#eeeeee'
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            drawBorder: false,
                            borderDash: [3, 3]
                        },
                    }]
                },
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: true
                },
                elements: {
                    line: {
                        tension: 0
                    },
                    point: {
                        radius: 0
                    }
                }
            }
            var salesChartCanvas = $("#areaChart").get(0).getContext("2d");
            var salesChart = new Chart(salesChartCanvas, {
                type: 'line',
                data: areaData,
                options: areaOptions
            });
        }
        areaChart

        // Pie Chart
        if ($("#pieChart").length) {
            var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
            var pieChart = new Chart(pieChartCanvas, {
                type: 'pie',
                data: {
                    datasets: [{
                        data: [21, 16, 48, 31],
                        backgroundColor: [
                            '#0db4d6',
                            '#f1b44c',
                            '#fb4d53',
                            '#343a40'
                        ],
                        borderColor: [
                            '#0db4d6',
                            '#f1b44c',
                            '#fb4d53',
                            '#343a40'
                        ],
                    }],

                    // These labels appear in the legend and in the tooltips when hovering different arcs
                    labels: [
                        'Drixo',
                        'Upcube',
                        'Vakavia',
                        'Devazo'
                    ]
                },
                options: {
                    responsive: true,
                    animation: {
                        animateScale: true,
                        animateRotate: true
                    }
                }
            });
        }

        // Donut Chart
        if ($("#donut-chart").length) {
            var pieChartCanvas = $("#donut-chart").get(0).getContext("2d");
            var pieChart = new Chart(pieChartCanvas, {
                type: 'pie',
                data: {
                    datasets: [{
                        data: [21, 16, 48, 31],
                        backgroundColor: ['#3d8ef8','#7c8a96','#11c46e','#f1b44c'],
                        borderColor: ['#3d8ef8','#7c8a96','#11c46e','#f1b44c']
                    }],

                    // These labels appear in the legend and in the tooltips when hovering different arcs
                    labels: [
                        'Drixo',
                        'Upcube',
                        'Vakavia',
                        'Devazo'
                    ]
                },
                options: {
                    responsive: true,
                    cutoutPercentage: 70,
                    animation: {
                        animateScale: true,
                        animateRotate: true
                    }
                }
            });
        }

        // Radar Chart
        if ($("#radar-chart").length) {
            var radarChartCanvas = $("#radar-chart").get(0).getContext("2d");
            var radarChart = new Chart(radarChartCanvas, {
                type: 'radar',
                data: {
                    datasets: [
                        {
                            label: "Unhealthy",
                            backgroundColor: 'rgba(223, 227, 233, 0.2)',
                            borderColor: "#dfe3e9",
                            borderWidth: 1,
                            pointBackgroundColor: "#dfe3e9",
                            pointBorderColor: "#fff",
                            pointHoverBackgroundColor: "#fff",
                            pointHoverBorderColor: "#dfe3e9",
                            data: [65, 59, 90, 81, 56, 55, 40]
                        },
                        {   
                            label: "Healthy",
                            backgroundColor: "rgba(61, 142, 248,0.2)",
                            borderColor: "#3d8ef8",
                            borderWidth: 1,
                            pointBackgroundColor: "#3d8ef8",
                            pointBorderColor: "#fff",
                            pointHoverBackgroundColor: "#fff",
                            pointHoverBorderColor: "#3d8ef8",
                            data: [28, 48, 40, 19, 96, 27, 100]
                        }
                    ],
                    // These labels appear in the legend and in the tooltips when hovering different arcs
                    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"]
                },
                options: {
                    responsive: true,
                    cutoutPercentage: 70,
                    animation: {
                        animateScale: true,
                        animateRotate: true
                    }
                }
            });
        }
    });
})(jQuery);