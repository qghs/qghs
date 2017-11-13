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
            if($('#floor-list').attr('class')=='col-md-2 col-xs-6 floor-aside-1 hidden-sm hidden-xs'){
                $('#floor-list').attr('class','col-md-2 col-xs-5 floor-aside-1');
            }else if( $('#floor-list').attr('class')=='col-md-2 col-xs-5 floor-aside-1'){
                $('#floor-list').attr('class','col-md-2 col-xs-6 floor-aside-1 hidden-sm hidden-xs');
            }



               for(var i=1;i<=12;i++){
                   $('#floor-'+i+'').click(function () {
                       $('#floor-list').attr('class','col-md-2 col-xs-6 floor-aside-1 hidden-sm hidden-xs');
                   })
               }

        }

    })




// 地图部分
    // 基于准备好的dom，初始化echarts实例
    var myChart =echarts.init(document.getElementById('main'));
    // 指定图表的配置项和数据
    option = {
        title: {
            text: '全国省份总注册人数',
            subtext:'广州市科创电脑技术开发有限公司'
        },
        tooltip:{
            show:true,
            formatter:function(params){
                if(params.value){
                    return params.name +'<br />'+params.value+'个';
                }else{

                }
            }
        },
        visualMap:{
            type:'piecewise',
            show: false,
            inRange:{
                color:['#a0b600','#e5ba63','red']
            },
            outOfRange:{
                color:['#fff']
            }
        },

        series: [
            {
                type: 'map',
                map: 'china',
                aspectScale: 0.75,
                zoom:1.2,
                label:{
                    normal: {
                        show: false,
                        textStyle:{
                            color:'#f3f2ff'
                        }
                    },
                    emphasis: {
                        show: false,
                        textStyle:{
                            color:'#f3f2ff',
                            fontSize:14
                        }
                    }
                },
                itemStyle:{
                    normal:{
                        borderColor: '#f3f2ff',
                        borderWidth:1,

                    },
                    emphasis:{
                        areaColor: '#ecffa7',
                    }
                },

                data:[
                    { "name": "西藏",value:0},
                    { "name": "青海",value:0},
                    { "name": "宁夏",value:10},
                    { "name": "重庆",value:30},
                    { "name": "贵州",value:50},
                    { "name": "甘肃",value:55},
                    { "name": "云南",value:70},
                    { "name": "辽宁",value:28},
                    { "name": "新疆",value:0},
                    { "name": "黑龙江",value:88},
                    { "name": "上海",value:120},
                    { "name": "四川",value:110},
                    { "name": "广西",value:102},
                    { "name": "吉林",value:76},
                    { "name": "内蒙古",value:54},
                    { "name": "天津",value:76},
                    { "name": "江西",value:80},
                    { "name": "湖南",value:43},
                    { "name": "陕西",value:42},
                    { "name": "浙江",value:50},
                    { "name": "广东",value:18},
                    { "name": "福建",value:66},
                    { "name": "北京",value:30},
                    { "name": "海南",value:18},
                    { "name": "湖北",value:72},
                    { "name": "安徽",value:80},
                    { "name": "河南",value:42},
                    { "name": "江苏",value:27},
                    { "name": "山西",value:75},
                    { "name": "山东",value:41},
                    { "name": "河北",value:31},
                    { "name": "台湾",value:59},
                    { "name": "澳门",value:36},
                    { "name": "香港",value:2},

                ]
            }


        ]


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