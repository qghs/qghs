$(function () {
    $('#floor-1').on('click',function () {
      $('#ifm').attr('src','iframe/首页.html');
    })
    $('#floor-2').on('click',function () {
        $('#ifm').attr('src','iframe/户型库/index.html');
    })
    $('#floor-3').on('click',function () {
        $('#ifm').attr('src','iframe/本地账户管理.html');
    })
    $('#floor-4').on('click',function () {
        $('#ifm').attr('src','iframe/首页.html');
    })
    $('#floor-5').on('click',function () {
        $('#ifm').attr('src','iframe/首页.html');
    })
    $('#floor-6').on('click',function () {
        $('#ifm').attr('src','iframe/首页.html');
    })
    $('#floor-7').on('click',function () {
        $('#ifm').attr('src','iframe/首页.html');
    })
    $('#floor-8').on('click',function () {
        $('#ifm').attr('src','iframe/首页.html');
    })
    $('#floor-9').on('click',function () {
        $('#ifm').attr('src','iframe/首页.html');
    })
    $('#floor-10').on('click',function () {
        $('#ifm').attr('src','iframe/首页.html');
    })
    $('#floor-11').on('click',function () {
        $('#ifm').attr('src','iframe/首页.html');
    })
    $('#floor-12').on('click',function () {
        $('#ifm').attr('src','iframe/首页.html');
    })

$('.muns-logor-2>div').click(
    function () {
        $('#user-floor').slideToggle();
    });

    $('#muns-floor').click(function () {
        var a= $(window).width() ;
        if(a<=992){
            $('#floor-list').attr('class','col-md-2 col-xs-5 floor-aside-1');
               for(var i=1;i<=12;i++){
                   $('#floor-'+i+'').click(function () {
                       $('#floor-list').attr('class','col-md-2 col-xs-5 floor-aside-1 hidden-sm hidden-xs');
                   })
               }

        }
    })




// 地图部分
    // 基于准备好的dom，初始化echarts实例
    var myChart =echarts.init(document.getElementById('main'));
    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '2017科创量房神器注册人数',
            subtext: '数据来源于数据库，单位：人',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}/人"
        },

        dataRange: {
            min: 0,
            max: 4000,
            x: 'left',
            y: 'bottom',

            text: ['高', '低'], // 文本，默认为数值文本
            calculable: false,

            splitNumber: 0,


            color: ['orangered', 'gold','yellow', 'green', 'lightgreen', 'lightgrey']
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            x: 'right',
            y: 'center',
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: false
                },
                dataZoom: {
                    show: true
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        roamController: {
            show: true,
            x: 'right',
            mapTypeControl: {
                'china': true
            }
        },
        series: [{
            name: '注册地方：人数/人',
            type: 'map',
            mapType: 'china',
            roam: true,
            itemStyle: {
                normal: {
                    label: {
                        show: true
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
            data: [
                {name: '黑龙江', value: 3544},
                {name: '吉林',   value: 2805},
                {name: '内蒙古', value: 2250},
                {name: '山东',   value: 2050},
                {name: '河南',   value: 1853},
                {name: '河北',   value: 1670},
                {name: '辽宁',   value: 1403},
                {name: '山西',   value: 862},
                {name: '四川',   value: 765},
                {name: '云南',   value: 747},
                {name: '新疆',   value: 705},
                {name: '甘肃',   value: 577},
                {name: '陕西',   value: 543},
                {name: '安徽',   value: 496},
                {name: '湖北',   value: 332},
                {name: '贵州',   value: 324},
                {name: '广西',   value: 280},
                {name: '重庆',   value: 259},
                {name: '江苏',   value: 252},
                {name: '宁夏',   value: 226},
                {name: '湖南',   value: 188},
                {name: '天津',   value: 107},
                {name: '广东',   value: 77},
                {name: '北京',   value: 49},
                {name: '浙江',   value: 31},
                {name: '福建',   value: 21},
                {name: '青海',   value: 18},
                {name: '江西',   value: 12},
                {name: '上海',   value: 2},
                {name: '西藏',   value: 0},
                {name: '海南',   value: 8}
            ]

        }, ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
// 左侧表格
    var sheng=option.series[0].data;
    var floor_1=0;
    var floor_2=8;
    $('.floor-mop').find('tbody').html(map_ta(floor_1,floor_2));

    $('#floor-mop-right').on('click',function () {
        floor_1=floor_2<sheng.length?floor_1=floor_2:floor_1;
        floor_2=floor_2<sheng.length-8?floor_2+8:sheng.length;
        $('.floor-mop').find('tbody').children().remove();
        $('.floor-mop').find('tbody').html(map_ta(floor_1,floor_2));

    })
    $('#floor-mop-left').on('click',function () {
        floor_1=floor_2<=16?0:floor_2-16;
        floor_2=floor_2<=16?8:floor_2-8;
        $('.floor-mop').find('tbody').children().remove();
        $('.floor-mop').find('tbody').html(map_ta(floor_1,floor_2));

    })

    function map_ta(i,j) {
        var s='';
        for(i;i<j;i++){
            s+='<tr>\n' +
                '      <td>'+sheng[i].name+'</td>\n' +
                '      <td>'+sheng[i].value+'</td>\n' +
                '      <td>'+sheng[i].value+'</td>\n' +
                '      <td>'+sheng[i].value+'</td>\n' +
                '      <td>'+sheng[i].value+'K</td>\n' +
                ' </tr>'
        }
        return s;
    }

























})//function