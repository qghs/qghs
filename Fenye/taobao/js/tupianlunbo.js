$(function () {
    var i=0;//全局变量控制指定图片；
    var Timer;//定时器的变量；
    $(".ig").eq(0).show().siblings(".ig").hide();

    showTime();
    //清除定时器，让#lunbo-01-bottom p点击时，指定到指定的图片
    $("#lunbo-01-bottom p").click(function () {
        clearInterval(Timer);//清除定时器
        showTime();//鼠标离开时重新计时
        i=$(this).index();
        show();
    }).mouseout(function () {

    })
    //清除定时器，让lunbo-01-left点击时，指定到指定的图片
$("#lunbo-01-left").click(function () {

    clearInterval(Timer);
    if(i==0){i=5}
    i--;
    show();
    showTime();
})
    //清除定时器，lunbo-01-right点击时，指定到指定的图片
    $("#lunbo-01-right").click(function () {
        clearInterval(Timer);
        i++;
        if(i==5){i=0}
        show();
        showTime();
    })
$(".lunbo-01").hover(function () {
    $("#lunbo-01-left").fadeIn();
    $("#lunbo-01-right").fadeIn();

},function () {
    $("#lunbo-01-left").fadeOut();
    $("#lunbo-01-right").fadeOut();
})










//图片和按钮的选择
function show() {
        $(".ig").eq(i).stop().fadeIn().siblings(".ig").stop().fadeOut();

        $("#lunbo-01-bottom p").eq(i).css("background","#FF4400").siblings().css("background","#B7B7B7");
    }//图片轮播

function showTime() {
    Timer=setInterval(function () {
        i++;
        if(i==5){i=0}
        show();

    },2000);//定时器
}




















})





