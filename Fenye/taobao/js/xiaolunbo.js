$(function () {
    var i=0;//全局变量控制指定图片；
    var Timer;//定时器的变量；
    $(".igm").eq(0).show().siblings(".igm").hide();

    showTime();
    //清除定时器，让#xiaolunbo-01-bottom p点击时，指定到指定的图片
    $("#xiaolunbo-01-bottom p").click(function () {
        clearInterval(Timer);//清除定时器
        showTime();//鼠标离开时重新计时
        i=$(this).index();
        $("#shuzi").html(i+1);
        show();
    })
    //清除定时器，让xiaolunbo-01-left点击时，指定到指定的图片
    $("#xiaolunbo-01-left").click(function () {

        clearInterval(Timer);
        if(i==0){i=6}
        i--;
        $("#shuzi").html(i+1);
        show();
        showTime();
    })
    //清除定时器，xiaolunbo-01-right点击时，指定到指定的图片
    $("#xiaolunbo-01-right").click(function () {
        clearInterval(Timer);
        i++;
        if(i==6){i=0}
        $("#shuzi").html(i+1);
        show();
        showTime();
    })
    $(".xiaolunbo-01").hover(function () {
        $("#xiaolunbo-01-left").fadeIn();
        $("#xiaolunbo-01-right").fadeIn();

    },function () {
        $("#xiaolunbo-01-left").fadeOut();
        $("#xiaolunbo-01-right").fadeOut();
    })










//图片和按钮的选择
    function show() {
        $(".igm").eq(i).stop().fadeIn().siblings(".igm").stop().fadeOut();
        $("#xiaolunbo-01-bottom p").eq(i).css("background","#FF4400").siblings().css("background","#B7B7B7");
    }//图片轮播

    function showTime() {
        Timer=setInterval(function () {
            i++;
            if(i==6){i=0}
            show();
            $("#shuzi").html(i+1);
        },2000);//定时器
    }




















})





