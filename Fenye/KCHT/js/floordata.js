$(function () {

function onelist() {


    var myChart1 =echarts.init(document.getElementById('biao-1'));
    var color = "#176e15";
//'rgba(80,224,255,0.3)'
    var xAxisData = ['星期一','星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];
    var seriesData = [100, 120, 150, 170, 130, 10,150];
    var scale = 1;
    var option1 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#185164'
                }
            }
        },
        backgroundColor: '#fff',
        color: ['#766c2e'],
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                showMinLabel:false,
                textStyle: {
                    color: color,
                    fontSize: 13*scale,
                }
            },
            axisTick: {
                inside:true,
                lineStyle: {
                    color: color,
                }
            },
            axisLine: {
                lineStyle: {
                    color: color,
                }
            },
            splitLine: {
                lineStyle: {
                    color: color,
                    type: 'dashed',
                }
            },
            name: '注册量(%)',
            nameTextStyle: {
                color: color,
                fontSize: 13*scale,
                padding: [0, 0, 50, -100]
            },
            data: xAxisData
        },
        yAxis: {
            type: 'value',
            max:200,
            axisLabel: {
                textStyle: {
                    color: color,
                    fontSize: 16*scale,
                }
            },
            axisTick: {
                lineStyle: {
                    color: color,
                }
            },
            axisLine: {
                lineStyle: {
                    color: color,
                }
            },
            splitLine: {
                lineStyle: {
                    color: color,
                    type: 'dashed',
                },
                show: false
            },
            name: '近一周注册人数统计',
            nameTextStyle: {
                color: color,
                fontSize: 13*scale,
                padding: [0, 0, 15, 0]
            },
        },
        series: [{
            name: 'X代销售',
            type: 'line',
            stack: '总量',
            smooth: true, //这句就是让曲线变平滑的
            data: seriesData,
            symbol: 'circle', //拐点样式
            symbolSize: 10*scale, //拐点大小
            areaStyle: {
                normal: {}
            },
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(232,183,43,0.6)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(232,183,43,0.6)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }
                }
            }
        }, ]
    };
    myChart1.setOption(option1);
}
onelist();
// 表一到此结束
    function twolist() {


    var myChart2 =echarts.init(document.getElementById('biao-2'));
    var color = "#6e605f";
//'rgba(80,224,255,0.3)'
    var xAxisData = ['星期一','星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];
    var seriesData = [150, 20, 50, 130, 110, 140,20];
    var scale = 1;
    var option2 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#ff2d03'
                }
            }
        },
        backgroundColor: '#fff',
        color: ['#0024ff'],
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                showMinLabel:false,
                textStyle: {
                    color: color,
                    fontSize: 13*scale,
                }
            },
            axisTick: {
                inside:true,
                lineStyle: {
                    color: color,
                }
            },
            axisLine: {
                lineStyle: {
                    color: color,
                }
            },
            splitLine: {
                lineStyle: {
                    color: color,
                    type: 'dashed',
                }
            },
            name: '销售情况(%)',
            nameTextStyle: {
                color: color,
                fontSize: 13*scale,
                padding: [0, 0, 50, -100]
            },
            data: xAxisData
        },
        yAxis: {
            type: 'value',
            max:200,
            axisLabel: {
                textStyle: {
                    color: color,
                    fontSize: 16*scale,
                }
            },
            axisTick: {
                lineStyle: {
                    color: color,
                }
            },
            axisLine: {
                lineStyle: {
                    color: color,
                }
            },
            splitLine: {
                lineStyle: {
                    color: color,
                    type: 'dashed',
                },
                show: false
            },
            name: '近一周销售统计',
            nameTextStyle: {
                color: color,
                fontSize: 13*scale,
                padding: [0, 0, 15, 0]
            },
        },
        series: [{
            name: 'X代销售',
            type: 'line',
            stack: '总量',
            smooth: true, //这句就是让曲线变平滑的
            data: seriesData,
            symbol: 'circle', //拐点样式
            symbolSize: 10*scale, //拐点大小
            areaStyle: {
                normal: {}
            },
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(4,106,225,0.6)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(4,106,225,0.6)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }
                }
            }
        }, ]
    };

    myChart2.setOption(option2);
    }
twolist();





})