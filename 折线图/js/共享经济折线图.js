$(document).ready(function () {
    // Line Chart Custom 1

    'use strict';
    Chart.defaults.global.defaultFontColor = '#d0d0d0';
    var LINECHARTEXMPLE   = $('#lineChartCustom1');
    var lineChartExample = new Chart(LINECHARTEXMPLE, {
        type: 'line',
        options: {
            legend: {labels:{fontColor:"#d0d0d0", fontSize: 14}},
            scales: {
                xAxes: [{
                    display: false,
                    gridLines: {
                        color: 'transparent'
                    }
                }],
                yAxes: [{
                    ticks: {
                        max: 60,
                        min: 0
                    },
                    display: true,
                    gridLines: {
                        color: 'transparent'
                    }
                }]
            },
        },
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "APP年定制数量（百万）",
                    fill: true,
                    lineTension: 0,
                    backgroundColor: "rgba(105,154,247,0.5)",
                    borderColor: "rgb(105,154,247)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1,
                    pointBorderColor: "rgba(105,154,247,0.5)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(105,154,247,0.5)",
                    pointHoverBorderColor: "rgba(105,154,247,0.5)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [0, 20, 17, 40, 30, 22, 30],
                    spanGaps: false
                },
                {
                    label: "服务器年销量（百万）",
                    fill: true,
                    lineTension: 0,
                    backgroundColor: "rgba(249,249,249,0.3)",
                    borderColor: "rgba(249,249,249,0.3)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1,
                    pointBorderColor: "rgb(6,209,211)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(71,71,71,0.3)",
                    pointHoverBorderColor: "rgba(71,71,71,0.3)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [0, 30, 22, 20, 35, 25, 50],
                    spanGaps: false
                }
            ]
        }
    });
});