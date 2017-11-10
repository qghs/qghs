$(function () {


    var myChart1 =echarts.init(document.getElementById('biao-1'));
    var option1 = {
        backgroundColor: '#ddd',
        tooltip: {
            trigger: 'axis'
        },
        title: {
            text: 'X:一周天数\nY: 近一周订单统计',
            color: '#ddd',
            fontSize: 10
            // subtext: '纯属虚构'
        },
        legend: {

            data: ['上限', '实际值'],
            textStyle: {
                color: '#333',
                fontSize: 20
            }
        },
        toolbox: {
            show: true,
            feature: {
                dataZoom: {},
                dataView: {
                    readOnly: false
                },
                magicType: {
                    type: ['line', 'bar']
                },
                restore: {},
                saveAsImage: {}
            }
        },

        xAxis: {

            type: 'category',
            boundaryGap: false,
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dotted'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#333',
                    fontSize: 20
                },
            },
            axisLine: {
                lineStyle: {
                    color: '#333'
                }
            },

            data: ['天数','周一', '周二', '周三', '周四', '周五', '周六', '周天', '一周总数'],
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#333',
                    fontSize: 20
                }
            },
            min: 0,
            axisLine: {
                lineStyle: {
                    color: '#333'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dotted'
                }
            }
        },
        series: [{
            // name:'实际值',
            type: 'line',
            symbol: 'roundRect',
            itemStyle: {
                normal: {
                    color: 'rgba(117,136,228,0.5)'
                }
            },
            data: [20, 30, 40, 50, 20, 35, 50, 10, 15],
            lineStyle: {
                normal: {
                    color: 'rgba(117,136,228,0.5)',
                    width: 3
                }
            },
            smooth: true,
            areaStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(117,136,228,0.5)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(117,136,228,0.5)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }
                }
            }
        },


            {
                name: '平行于x轴的趋势线',
                type: 'line',
                markLine: {
                    data: [{
                        yAxis: 55
                    }],
                    lineStyle: {
                        normal: {
                            // color: colors[0]
                        }
                    }
                }
            }, {
                name: '平行于y轴的趋势线',
                type: 'line',

                markLine: {

                    itemStyle: {
                        normal: {
                            borderWidth: 1,

                            lineStyle: {

                                type: 'dash',
                                color: '#333 ',
                                width: 1,
                            },

                            label: {
                                formatter: '',
                                textStyle: {
                                    fontSize: 16,
                                    fontWeight: "bolder",
                                },
                            }
                        },

                    },
                    data: [
                        // {type: 'average', name: '平均值'},
                        [{
                            coord: ['10e5', 0]
                        }, {
                            coord: ['10e5', 55]
                        }],
                        [{
                            coord: ['10e8', 0]
                        }, {
                            coord: ['10e8', 55]
                        }]
                    ]
                }
            }
        ]
    };

    var index = 0;

    myChart1.setOption(option1);

// 表一到此结束
    var myChart2 =echarts.init(document.getElementById('biao-2'));
    var colors = ['#5793f3', '#d14a61', '#675bba'];

    var option2 = {
        color: colors,
        title: {
            text: "近一周销售情况"
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        grid: {
            left: '5%',
            right: '10%',
            bottom: '16%',
            top: '8%',
            containLabel: true
        },
        legend: {
            data: ['销售占率(%)', '新销售数(万)', '销售总数(万)']
        },
        dataZoom: [{
            show: true,
            start: 0,
            end: 60,
            bottom: '8%'
        },

        ],
        xAxis: [{
            type: 'category',

            data: ['2017-01-05', '2017-01-06', '2017-01-07', '2017-01-08', '2017-01-09', '2017-01-10', '2017-01-11', '2017-01-12', '2017-01-13', '2017-01-14', '2017-01-15', '2017-01-16']
        }],
        yAxis: [{
            type: 'value',
            name: '新销售数占率(%)',
            min: 0,
            max: 100,
            nameRotate: 90,
            nameGap: 50,
            nameLocation: "middle",
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value} %'
            },

        }, {
            type: 'value',
            name: '市场新增数量(万)',
            min: 0,
            max: 250,
            nameRotate: 90,
            nameGap: 50,
            nameLocation: "middle",
            offset: 80,
            axisLine: {
                lineStyle: {
                    color: colors[1]
                }
            },
            axisLabel: {
                formatter: '{value} '
            }
        }, {
            type: 'value',
            name: '新销售数(万)',
            min: 0,
            max: 25,
            nameRotate: 90,
            nameGap: 50,
            nameLocation: "middle",
            axisLine: {
                lineStyle: {
                    color: colors[2]
                }
            },

        }],
        series: [{
            name: '新销售数占率(%)',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 86.6, 62.2, 32.6, 20.0, 6.4, 3.3]
        }, {
            name: '新销售数(万)',
            type: 'line',
            yAxisIndex: 1,
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        }, {
            name: '销售总数(万)',
            type: 'line',
            yAxisIndex: 2,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }]
    };

    myChart2.setOption(option2);







})