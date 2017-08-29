/**
 * Created by Administrator on 2017/6/10.
 */
$(function () {
    window.onscroll = function () {
        var topDiv = $("#div").height();
        var scr = $("body").scrollTop();
        if(scr>=500){
            $("#fixed-dh").css({"position":"fixed","top":"79px"})
        }else{
            $("#fixed-dh").css({"position":"absolute","top":"490px"})
        }

        if(scr >= 100){
            $("#div").show();
        }else{
            $("#div").hide();
        }
        $(".fixed").each(function () {
            var thisOff = $(this).offset().top; //获取滚动到哪个方位就获取哪一块的top值
            if(scr+topDiv >= thisOff){
                $(".fixed-a").eq($(".fixed").index(this)).addClass("on").siblings().removeClass("on")
            }

        })
    };
    //点击跳转到相应的块的scrollleft
    $(".fixed-a").click(function () {
        var topDiv = $("#div").height();
        var fixindex = $(this).index();//获取到点击那个获取相对应的下标
        if(fixindex==6){
            $("body").animate({scrollTop:0},"slow");
        }
        var off = $(".fixed").eq(fixindex).offset().top;
        $("body").animate({scrollTop:off-topDiv},"slow");


    })
});