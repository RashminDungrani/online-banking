/*
Template Name: Apaxy - Responsive Bootstrap 4 Admin Dashboard
Author: Themesdesign
Website: https://themesdesign.in/
File: Flot Chart
*/

$(function () {
    'use strict';

    // Bar Chart
    if ($('#flot-bar-1').length) {
        $.plot("#flot-bar-1", [{
            data: [[0, 3], [2, 8], [4, 5], [6, 13], [8, 5], [10, 7], [12, 4], [14, 6]]}], 
            {
                series: {
                    bars: {
                        show: true,
                        lineWidth: 0,
                        barWidth: 0.3,
                        fillColor: '#0db4d6'
                    }
                },
                grid: {
                    borderWidth: 1,
                    borderColor: 'rgba(123, 145, 158,0.1)',
                    labelMargin : 15,
                },
                yaxis: {
                    tickColor: 'rgba(123, 145, 158,0.1)',
                    font: {
                        color: '#7b919e',
                        size: 10
                    }
                },
                xaxis: {
                    tickColor: 'rgba(123, 145, 158,0.1)',
                    font: {
                        color: '#7b919e',
                        size: 10
                    }
                },
                tooltip: true, //activate tooltip
                tooltipOpts: {
                    content: "%s : %y.0",
                    shifts: {
                        x: -30,
                        y: -50
                    }
                },
            }
        );
    }

    // Multi Bar Chart
    if ($('#flot-bar-2').length) {
        $.plot("#flot-bar-2", [{
            data: [[0, 3], [2, 8], [4, 5], [6, 13], [8, 5], [10, 7], [12, 8], [14, 10]],
            bars: {
                show: true,
                lineWidth: 0,
                barWidth: 0.3,
                fillColor: '#11c46e'
            },
            label: 'New Customer',
        }, {
            data: [[1, 5], [3, 7], [5, 10], [7, 7], [9, 9], [11, 5], [13, 4], [15, 6]],
            bars: {
                show: true,
                lineWidth: 0,
                barWidth: 0.3,
                fillColor: '#7c8a96'
            },
            label: 'Returning Customer',
        }], {
            grid: {
                show: true,
				aboveData: false,
				labelMargin: 5,
				axisMargin: 0,
				borderWidth: 1,
				minBorderMargin: 5,
				clickable: true,
				hoverable: true,
				autoHighlight: false,
				mouseActiveRadius: 20,
				borderColor: 'rgba(123, 145, 158,0.1)'
            },
            series: {
				stack: 0
            },
            legend: {
				show: false,
			},
            yaxis: {
                tickColor: 'rgba(123, 145, 158,0.1)',
                font: {
                    color: '#7b919e',
                    size: 10
                }
            },
            xaxis: {
                tickColor: 'rgba(123, 145, 158,0.1)',
                font: {
                    color: '#7b919e',
                    size: 10
                }
            },
            tooltip: true, //activate tooltip
            tooltipOpts: {
                content: "%s : %y.0",
                shifts: {
                    x: -30,
                    y: -50
                }
            }
        });
    }

    // Line Chart
    if ($('#flot-line-1').length) {
        var newCust = [[0, 2], [1, 3], [2, 6], [3, 5], [4, 7], [5, 8], [6, 10]];
        var retCust = [[0, 1], [1, 2], [2, 5], [3, 3], [4, 5], [5, 6], [6, 9]];

        var plot = $.plot($('#flot-line-1'), [
        {
            data: newCust,
            label: 'New Customer',
            color: '#3d8ef8'
        },
        {
            data: retCust,
            label: 'Returning Customer',
            color: '#f1b44c'
        }],
        {
            series: {
                lines: {
                    show: true,
                    lineWidth: 1
                },
                shadowSize: 0
            },
            points: {
                show: false,
            },
            legend: {
                position: "ne",
				margin : [0, -32],
				noColumns : 0,
				labelBoxBorderColor : null,
				labelFormatter : function(label, series) {
					// just add some space to labes
					return '' + label + '&nbsp;&nbsp;';
				},
				width : 30,
				height : 2
            },
            grid: {
                hoverable: true,
                clickable: true,
                borderColor: 'rgba(123, 145, 158,0.1)',
                borderWidth: 0,
                labelMargin: 5,
                backgroundColor: 'transparent'
            },
            yaxis: {
                min: 0,
                max: 15,
                tickColor: 'rgba(123, 145, 158,0.1)',
                font: {
                    color: '#7b919e',
                    size: 10
                }
            },
            xaxis: {
                tickColor: 'rgba(123, 145, 158,0.1)',
                font: {
                    color: '#7b919e',
                    size: 10
                }
            },
            tooltip: true, //activate tooltip
            tooltipOpts: {
                content: "%s : %y.0",
                shifts: {
                    x: -30,
                    y: -50
                }
            }
        });
    }

    // Line chart 2
    if ($('#flot-line-2').length) {
        var newCust2 = [[0, 2], [1, 3], [2, 6], [3, 5], [4, 7], [5, 8], [6, 10]];
        var retCust2 = [[0, 1], [1, 2], [2, 5], [3, 3], [4, 5], [5, 6], [6, 9]];
        var plot = $.plot($('#flot-line-2'), [
        {
            data: newCust2,
            label: 'New Customer',
            color: '#fb4d53'
        },
        {
            data: retCust2,
            label: 'Returning Customer',
            color: '#0db4d6'
        }],
        {
            series: {
                lines: {
                    show: true,
                    lineWidth: 0
                },
                splines: {
                    show: true,
                    tension: 0.4,
                    lineWidth: 1,
                    //fill: 0.4
                },
                shadowSize: 0
            },
            points: {
                show: false,
            },
            legend: {
                position: "ne",
				margin : [0, -32],
				noColumns : 0,
				labelBoxBorderColor : null,
				labelFormatter : function(label, series) {
					// just add some space to labes
					return '' + label + '&nbsp;&nbsp;';
				},
				width : 30,
				height : 2
            },
            tooltip: true, //activate tooltip
            tooltipOpts: {
                content: "%s : %y.0",
                shifts: {
                    x: -30,
                    y: -50
                }
            },
            grid: {
                hoverable: true,
                clickable: true,
                borderColor: 'rgba(123, 145, 158,0.1)',
                borderWidth: 0,
                labelMargin: 5,
                backgroundColor: 'transparent'
            },
            yaxis: {
                min: 0,
                max: 20,
                tickColor: 'rgba(123, 145, 158,0.1)',
                font: {
                    color: '#7b919e',
                    size: 10
                }
            },
            xaxis: {
                tickColor: 'rgba(123, 145, 158,0.1)',
                font: {
                    color: '#7b919e',
                    size: 10
                }
            }
        });
    }

    // Line chart 3
    if ($('#flot-line-3').length) {
        var newCust3 = [[0, 10], [1, 7], [2, 8], [3, 9], [4, 6], [5, 5], [6, 7]];
        var retCust3 = [[0, 8], [1, 5], [2, 6], [3, 8], [4, 4], [5, 3], [6, 6]];

        var plot = $.plot($('#flot-line-3'), [
        {
            data: newCust3,
            label: 'New Customer',
            color: '#f1734f'
        },
        {
            data: retCust3,
            label: 'Returning Customer',
            color: '#11c46e'
        }],
        {
            series: {
                lines: {
                    show: true,
                    lineWidth: 2
                },
                shadowSize: 0
            },
            points: {
                show: true,
            },
            legend: {
                position: "ne",
				margin : [0, -32],
				noColumns : 0,
				labelBoxBorderColor : null,
				labelFormatter : function(label, series) {
					// just add some space to labes
					return '' + label + '&nbsp;&nbsp;';
				},
				width : 30,
				height : 2
            },
            tooltip: true, //activate tooltip
            tooltipOpts: {
                content: "%s : %y.0",
                shifts: {
                    x: -30,
                    y: -50
                }
            },
            grid: {
                hoverable: true,
                clickable: true,
                borderColor: 'rgba(123, 145, 158,0.1)',
                borderWidth: 0,
                labelMargin: 5,
                backgroundColor: 'transparent'
            },
            yaxis: {
                min: 0,
                max: 15,
                tickColor: 'rgba(123, 145, 158,0.1)',
                font: {
                    color: '#7b919e',
                    size: 10
                }
            },
            xaxis: {
                tickColor: 'rgba(123, 145, 158,0.1)',
                font: {
                    color: '#7b919e',
                    size: 10
                }
            }
        });
    }

    // Line chart 4
    if ($('#flot-line-4').length) {
        var newCust4 = [[0, 10], [1, 7], [2, 8], [3, 9], [4, 6], [5, 5], [6, 7]];
        var retCust4 = [[0, 8], [1, 5], [2, 6], [3, 8], [4, 4], [5, 3], [6, 6]];
        var plot = $.plot($('#flot-line-4'), [
        {
            data: newCust4,
            label: 'New Customer',
            color: '#008080'
        },
        {
            data: retCust4,
            label: 'Returning Customer',
            color: '#564ab1'
        }],
        {
            series: {
                lines: {
                    show: false
                },
                splines: {
                    show: true,
                    tension: 0.4,
                    lineWidth: 2,
                    //fill: 0.4
                },
                shadowSize: 0
            },
            points: {
                show: true,
            },
            legend: {
                position: "ne",
				margin : [0, -32],
				noColumns : 0,
				labelBoxBorderColor : null,
				labelFormatter : function(label, series) {
					// just add some space to labes
					return '' + label + '&nbsp;&nbsp;';
				},
				width : 30,
				height : 2
            },
            grid: {
                hoverable: true,
                clickable: true,
                borderColor: 'rgba(123, 145, 158,0.1)',
                borderWidth: 0,
                labelMargin: 5,
                backgroundColor: 'transparent'
            },
            yaxis: {
                min: 0,
                max: 15,
                tickColor: 'rgba(123, 145, 158,0.1)',
                font: {
                    color: '#7b919e',
                    size: 10
                }
            },
            xaxis: {
                tickColor: 'rgba(123, 145, 158,0.1)',
                font: {
                    color: '#7b919e',
                    size: 10
                }
            },
            tooltip: true, //activate tooltip
            tooltipOpts: {
                content: "%s : %y.0",
                shifts: {
                    x: -30,
                    y: -50
                }
            },
        });
    }

    // Area chart 1
    if ($('#flot-area-1').length) {
        var plot = $.plot($('#flot-area-1'), [
        {
            data: newCust,
            label: 'New Customer',
            color: '#0db4d6'
        },
        {
            data: retCust,
            label: 'Returning Customer',
            color: '#4E6577'
        }],
        {
            series: {
                lines: {
                    show: true,
                    lineWidth: 0,
                    fill: 0.8
                },
                shadowSize: 0
            },
            points: {
                show: false,
            },
            legend: {
                position: "ne",
				margin : [0, -32],
				noColumns : 0,
				labelBoxBorderColor : null,
				labelFormatter : function(label, series) {
					// just add some space to labes
					return '' + label + '&nbsp;&nbsp;';
				},
				width : 30,
				height : 2
            },
            grid: {
                hoverable: true,
                clickable: true,
                borderColor: 'rgba(123, 145, 158,0.1)',
                borderWidth: 0,
                labelMargin: 5,
                backgroundColor: 'transparent'
            },
            yaxis: {
                min: 0,
                max: 15,
                tickColor: 'rgba(123, 145, 158,0.1)',
                font: {
                    color: '#7b919e',
                    size: 10
                }
            },
            xaxis: {
                tickColor: 'rgba(123, 145, 158,0.1)',
                font: {
                    color: '#7b919e',
                    size: 10
                }
            },
            tooltip: true, //activate tooltip
            tooltipOpts: {
                content: "%s : %y.0",
                shifts: {
                    x: -30,
                    y: -50
                }
            },
        });
    }

    // Area chart 2
    if ($('#flot-area-2').length) { 
        var plot = $.plot($('#flot-area-2'), [
        {
            data: newCust,
            label: 'New Customer',
            color: '#11c46e'
        },
        {
            data: retCust,
            label: 'Returning Customer',
            color: '#38414a'
        }],
        {
            series: {
                lines: {
                    show: true,
                    lineWidth: 0,
                    fill: 0
                },
                splines: {
                    show: true,
                    tension: 0.4,
                    lineWidth: 0,
                    fill: 0.8
                },
                shadowSize: 0
            },
            points: {
                show: false,
            },
            legend: {
                position: "ne",
				margin : [0, -32],
				noColumns : 0,
				labelBoxBorderColor : 'transparent',
				labelFormatter : function(label, series) {
					// just add some space to labes
					return '' + label + '&nbsp;&nbsp;';
				},
				width : 30,
				height : 2
            },
            grid: {
                hoverable: true,
                clickable: true,
                borderColor: 'rgba(123, 145, 158,0.1)',
                borderWidth: 0,
                labelMargin: 5,
                backgroundColor: 'transparent'
            },
            yaxis: {
                min: 0,
                max: 15,
                tickColor: 'rgba(123, 145, 158,0.1)',
                font: {
                    color: '#7b919e',
                    size: 10
                }
            },
            xaxis: {
                tickColor: 'rgba(123, 145, 158,0.1)',
                font: {
                    color: '#7b919e',
                    size: 10
                }
            },
            tooltip: true, //activate tooltip
            tooltipOpts: {
                content: "%s : %y.0",
                shifts: {
                    x: -30,
                    y: -50
                }
            },
        });
    }


    /*********** REAL TIME UPDATES **************/

    var data = [], totalPoints = 50;

    function getRandomData() {
        if (data.length > 0)
            data = data.slice(1);
        while (data.length < totalPoints) {
            var prev = data.length > 0 ? data[data.length - 1] : 50,
                y = prev + Math.random() * 10 - 5;
            if (y < 0) {
                y = 0;
            } else if (y > 100) {
                y = 100;
            }
            data.push(y);
        }
        var res = [];
        for (var i = 0; i < data.length; ++i) {
            res.push([i, data[i]])
        }
        return res;
    }


    // Set up the control widget
    var updateInterval = 1000;

    var plot4 = $.plot('#flot-realtime-1', [getRandomData()], {
        colors: ['#fb4d53'],
        series : {
            grow : {
                active : false
            }, //disable auto grow
            shadowSize : 0, // drawing is faster without shadows
            lines : {
                show : true,
                fill : false,
                lineWidth : 2,
                steps : false
            }
        },
        grid : {
            show : true,
            aboveData : false,
            color : '#dcdcdc',
            labelMargin : 15,
            axisMargin : 0,
            borderWidth : 0,
            borderColor : null,
            minBorderMargin : 5,
            clickable : true,
            hoverable : true,
            autoHighlight : false,
            mouseActiveRadius : 20
        },
        tooltip : true, //activate tooltip
        tooltipOpts : {
            content : "Value is : %y.0" + "%",
            shifts : {
                x : -30,
                y : -50
            }
        },
        yaxis : {
            axisLabel: "Response Time (ms)",
            min : 0,
            max : 100,
            tickColor: 'rgba(123, 145, 158,0.1)',
            font: {
                color: '#7b919e',
                size: 10
            }
        },
        xaxis : {
            axisLabel: "Point Value (1000)",
            show : true,
            tickColor: 'rgba(123, 145, 158,0.1)',
            font: {
                color: '#7b919e',
                size: 10
            }
        }
    });

    var plot5 = $.plot('#flot-realtime-2', [getRandomData()], {
        colors: ['#3d8ef8'],
        series : {
            grow : {
                active : false
            }, //disable auto grow
            shadowSize : 0, // drawing is faster without shadows
            lines : {
                show : true,
                fill : 0.3,
                lineWidth : 1,
                steps : false
            }
        },
        grid : {
            show : true,
            aboveData : false,
            color : '#dcdcdc',
            labelMargin : 15,
            axisMargin : 0,
            borderWidth : 0,
            borderColor : null,
            minBorderMargin : 5,
            clickable : true,
            hoverable : true,
            autoHighlight : false,
            mouseActiveRadius : 20
        },
        tooltip : true, //activate tooltip
        tooltipOpts : {
            content : "Value is : %y.0" + "%",
            shifts : {
                x : -30,
                y : -50
            }
        },
        yaxis : {
            axisLabel: "Response Time (ms)",
            min : 0,
            max : 100,
            tickColor: 'rgba(123, 145, 158,0.1)',
            font: {
                color: '#7b919e',
                size: 10
            }
        },
        xaxis : {
            axisLabel: "Point Value (1000)",
            show : true,
            tickColor: 'rgba(123, 145, 158,0.1)',
            font: {
                color: '#7b919e',
                size: 10
            }
        }
    });

    function update_plot4() {
        plot4.setData([getRandomData()]);
        plot4.draw();
        setTimeout(update_plot4, updateInterval);
    }

    function update_plot5() {
        plot5.setData([getRandomData()]);
        plot5.draw();
        setTimeout(update_plot5, updateInterval);
    }

    update_plot4();
    update_plot5();


    /**************** PIE CHART *******************/
    var piedata = [
        { label: "Series 1", data: [[1, 40]], color: '#3d8ef8' },
        { label: "Series 2", data: [[1, 30]], color: '#7c8a96' },
        { label: "Series 3", data: [[1, 50]], color: '#11c46e' },
        { label: "Series 4", data: [[1, 70]], color: '#f1b44c' },
        { label: "Series 5", data: [[1, 80]], color: '#36B3E3' }
    ];

    $.plot('#flot-pie', piedata, {
        series: {
            pie: {
                show: true,
                radius: 1,
                label: {
                    show: true,
                    radius: 2 / 3,
                    formatter: labelFormatter,
                    threshold: 0.1
                }
            }
        },
        grid: {
            hoverable: true,
            clickable: true
        },
        legend: {
            show: false,
        }
    });

    $.plot('#flot-donut', piedata, {
        series: {
            pie: {
                show: true,
                radius: 1,
                innerRadius: 0.75,
                label: {
                    show: true,
                    radius: 2 / 5,
                    formatter: labelFormatter2,
                    threshold: 0.1
                }
            }
        },
        grid: {
            hoverable: true,
            clickable: true
        },
        legend: {
            show: false,
        },
        tooltip : false, //activate tooltip
        tooltipOpts : {
            content : "Value is : %y.0" + "%",
            shifts : {
                x : -30,
                y : -50
            }
        },
    });

    function labelFormatter(label, series) {
        return "<div style='font-size:10pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
    }

    function labelFormatter2(label, series) {
        return "<div style='font-size:10pt; text-align:center; padding:2px;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
    }

    // Charts show tooltips
    function showTooltip(x, y, contents) {
        $('<div id="tooltip" class="tooltipflot">' + contents + '</div>').css({
            position : 'absolute',
            top : y + 5,
            left : x + 5
        }).appendTo("body").fadeIn(200);
    }

});


$(function () {
    var data24Hours = [
        [0, 601],
        [1, 520],
        [2, 337],
        [3, 261],
        [4, 157],
        [5, 78],
        [6, 58],
        [7, 48],
        [8, 54],
        [9, 38],
        [10, 88],
        [11, 214],
        [12, 364],
        [13, 449],
        [14, 558],
        [15, 282],
        [16, 379],
        [17, 429],
        [18, 518],
        [19, 470],
        [20, 330],
        [21, 245],
        [22, 358],
        [23, 74]
    ];
    var data48Hours = [
        [0, 445],
        [1, 592],
        [2, 738],
        [3, 532],
        [4, 234],
        [5, 143],
        [6, 147],
        [7, 63],
        [8, 64],
        [9, 43],
        [10, 86],
        [11, 201],
        [12, 315],
        [13, 397],
        [14, 512],
        [15, 281],
        [16, 360],
        [17, 479],
        [18, 425],
        [19, 453],
        [20, 422],
        [21, 355],
        [22, 340],
        [23, 801]
    ];
    var dataDifference = [
        [23, 727],
        [22, 18],
        [21, 110],
        [20, 92],
        [19, 17],
        [18, 93],
        [17, 50],
        [16, 19],
        [15, 1],
        [14, 46],
        [13, 52],
        [12, 49],
        [11, 13],
        [10, 2],
        [9, 5],
        [8, 10],
        [7, 15],
        [6, 89],
        [5, 65],
        [4, 77],
        [3, 271],
        [2, 401],
        [1, 72],
        [0, 156]
    ];
    var ticks = [
        [0, "22h"],
        [1, ""],
        [2, "00h"],
        [3, ""],
        [4, "02h"],
        [5, ""],
        [6, "04h"],
        [7, ""],
        [8, "06h"],
        [9, ""],
        [10, "08h"],
        [11, ""],
        [12, "10h"],
        [13, ""],
        [14, "12h"],
        [15, ""],
        [16, "14h"],
        [17, ""],
        [18, "16h"],
        [19, ""],
        [20, "18h"],
        [21, ""],
        [22, "20h"],
        [23, ""]
    ];
    var data = [{
        label: "Last 24 Hours",
        data: data24Hours,
        lines: {
            show: true,
            fill: true
        },
        points: {
            show: true
        }
    }, {
        label: "Last 48 Hours",
        data: data48Hours,
        lines: {
            show: true
        },
        points: {
            show: true
        }
    }, {
        label: "Difference",
        data: dataDifference,
        bars: {
            show: true
        }
    }];
    var options = {
        xaxis: {
            ticks: ticks,
            tickColor: 'rgba(123, 145, 158,0.1)',
            font: {
                color: '#7b919e',
                size: 10
            }
        },
        yaxis: {
            tickColor: 'rgba(123, 145, 158,0.1)',
            font: {
                color: '#7b919e',
                size: 10
            }
        },
        series: {
            shadowSize: 0
        },
        grid: {
            hoverable: true,
            clickable: true,
            tickColor: "rgba(123, 145, 158,0.1",
            borderWidth: 1,
            borderColor: "rgba(123, 145, 158,0.1)"
        },
        colors: ["#dfe3e9", "#fb4d53", "#0db4d6"],
        tooltip: true,
        tooltipOpts: {
            defaultTheme: false
        },
        legend: {
            labelBoxBorderColor: "transparent",
            container: $("#combine-chart-labels"),
            noColumns: 0
        }
    };
    var plot = $.plot($("#combine-chart #combine-chartContainer"),
        data, options);
});

$(function () {
    var data1 = GenerateSeries(0);
    var data2 = GenerateSeries(100);
    var data3 = GenerateSeries(200);
    var dataset = [data1, data2, data3];
    function GenerateSeries(added) {
        var data = [];
        var start = 100 + added;
        var end = 200 + added;
        for (i = 1; i <= 100; i++) {
            var d = Math.floor(Math.random() * (end - start + 1) + start);
            data.push([i, d]);
            start++;
            end++;
        }
        return data;
    }
    var options = {
        series: {
            stack: true,
            shadowSize: 0
        },
        xaxis: {
            tickColor: 'rgba(123, 145, 158,0.1)',
            font: {
                color: '#7b919e',
                size: 10
            }
        },
        yaxis: {
            tickColor: 'rgba(123, 145, 158,0.1)',
            font: {
                color: '#7b919e',
                size: 10
            }
        },
        grid: {
            hoverable: true,
            clickable: true,
            tickColor: "rgba(123, 145, 158,0.1)",
            borderWidth: 1,
            borderColor: "rgba(123, 145, 158,0.1)"
        },
        legend: {
            show: false
        },
        colors: ["#f1b44c", "#7c8a96", "#dfe3e9"],
        tooltip: true,
    };
    var plot;
    function ToggleSeries() {
        var d = [];
        $("#toggle-chart input[type='checkbox']").each(function () {
            if ($(this).is(":checked")) {
                var seqence = $(this).attr("id").replace("cbdata", "");
                d.push({
                    label: "Data " + seqence,
                    data: dataset[seqence - 1]
                });
            }
        });
        options.series.lines = {};
        options.series.bars = {};
        $("#toggle-chart input[type='radio']").each(function () {
            if ($(this).is(":checked")) {
                if ($(this).val() == "line") {
                    options.series.lines = {
                        fill: true
                    };
                } else {
                    options.series.bars = {
                        show: true
                    };
                }
            }
        });
        $.plot($("#toggle-chart #toggle-chartContainer"), d, options);
    }
    $("#toggle-chart input").change(function () {
        ToggleSeries();
    });
    ToggleSeries();
});