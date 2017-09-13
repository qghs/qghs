$(function () {
    $('.qq').find('img').hover(
      function () {
        $(this).attr('src','images/qq-2.png');
          $(this).parent().parent().find('.weixin-er').show().css({'background':"url('images/weixin-erweima.jpg')","background-size":" 100px"});

    },function () {
            $(this).attr('src','images/qq-1.png');
            $(this).parent().parent().find('.weixin-er').hide();
    })//qq的移动事件
    $('.weixin').find('img').hover(
        function () {
            $(this).attr('src','images/weixin-2.png');
            $(this).parent().parent().find('.weixin-er').show().css({'background':"url('images/weixin-erweima.jpg')","background-size":" 100px"});
        },function () {
            $(this).attr('src','images/weixin-1.png');
            $(this).parent().parent().find('.weixin-er').hide();
        })//微信的移动事件
$('.nav').find('li').hover(
    function () {
    $(this).attr('class','active').find('a').css('color','#d05aef');

    },function () {
        $(this).removeAttr('class').find('a').css('color','#ef0a3e');
})
    //图片轮播
$('#myCarousel').carousel({
    interval:3000,
});



})