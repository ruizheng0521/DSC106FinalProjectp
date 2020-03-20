function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
    url1 = "https://public.tableau.com/views/Deforestration/Sheet1?:display_count=y&publish=yes&:origin=viz_share_link";
    url2 = "https://public.tableau.com/shared/3G5X4TK2P?:display_count=y&:origin=viz_share_link";
    url3 = "https://public.tableau.com/views/Deforestationshare/Sheet1?:display_count=y&publish=yes&:origin=viz_share_link";

    var world_viz = new tableau.Viz(worldViz, url1);
    var deforestation_viz = new tableau.Viz(deforestationViz, url2);
    var cause_Viz = new tableau.Viz(causeViz, url3)

    drawAmazon();
}

function drawAmazon(){

    Highcharts.chart('back1', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            style: {
                fontFamily: 'Arial',
            }
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
            type: 'pie',
            style: {
                fontFamily: 'Arial',
            }
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

    Highcharts.chart('back3', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            style: {
                fontFamily: 'Arial',
            }
        },
        title: {
            text: 'Amazon Rainforest Species Breakdown'
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
            name: 'Species',
            colorByPoint: true,
            data: [{
                name: 'Plants',
                y: 40000,
            }, {
                name: 'Mammals',
                y: 427
            }, {
                name: 'Birds',
                y: 1300
            }, {
                name: 'Reptiles',
                y: 378
            }, {
                name: 'Amphibians',
                y: 400
            },{
                name: 'Freshwater Fishes',
                y: 3000
            }
                ]
        }]
    });

}

