function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
    url1 = "https://public.tableau.com/views/Deforestration/Sheet1?:display_count=y&publish=yes&:origin=viz_share_link";
    url2 = "https://public.tableau.com/shared/3G5X4TK2P?:display_count=y&:origin=viz_share_link"

    var world_viz = new tableau.Viz(worldViz, url1);
    var deforestation_viz = new tableau.Viz(deforestationViz, url2);

    drawAmazon();
}

function drawAmazon(){

    Highcharts.chart('back1', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Amazon Rainforest Share Between Countries'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Forest Shared',
            colorByPoint: true,
            data: [{
                name: 'Brazil',
                y: 58.4,
                sliced: true,
                selected: true
            }, {
                name: 'Peru',
                y: 12.8
            }, {
                name: 'Bolivia',
                y: 7.7
            }, {
                name: 'Colombia',
                y: 7.1
            }, {
                name: 'Venezuela',
                y: 6.1
            }, {
                name: 'Guyana',
                y: 3.1
            }, {
                name: 'Suriname',
                y: 2.5
            }, {
                name: 'French Guyana',
                y: 1.4
            }, {
                name: 'Ecuador',
                y: 1
            }]
        }]
    });


    Highcharts.chart('back2', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'World Oxygen Production Breakdown'
        },

        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Oxygen Production',
            colorByPoint: true,
            data: [{
                name: 'Marine Plants',
                y: 70,
            }, {
                name: 'Rainforest',
                y: 28
            }, {
                name: 'Others',
                y: 2
            }]
        }]
    });

    Highcharts.chart('pie3', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Browser market shares in January, 2018'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Chrome',
                y: 61.41,
                sliced: true,
                selected: true
            }, {
                name: 'Internet Explorer',
                y: 11.84
            }, {
                name: 'Firefox',
                y: 10.85
            }, {
                name: 'Edge',
                y: 4.67
            }, {
                name: 'Safari',
                y: 4.18
            }, {
                name: 'Sogou Explorer',
                y: 1.64
            }, {
                name: 'Opera',
                y: 1.6
            }, {
                name: 'QQ',
                y: 1.2
            }, {
                name: 'Other',
                y: 2.61
            }]
        }]
    });

}

