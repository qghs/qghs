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
$('.p1').on('click',function () {
    $('.p1').css('color','#000000');
    $(this).css('color','#199ED8');
})
    $('.p2').on('click',function () {
        $('.p2').css('color','#000000');
        $(this).css('color','#199ED8');
    })



    function listclick() {
        for(var i=1;i<=12;i++){
            $('#floor-'+i+'').click(function () {
                for(var j=1;j<=12;j++) {
                    $('#floor-' + j + '').removeAttr('style');
                    $('#floor-' + j + '').find('a').removeAttr('style');
                }
               $(this).css('background','#45bdf0').find('a').css({'color':'#fff'});
            })
        }
    }
    listclick();
$('#floor-One').collapse('show')
























})//function