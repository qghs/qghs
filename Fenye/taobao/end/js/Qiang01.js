// 导航栏的五角星的变色
$("#xin").hover(function () {
    $("#sou01").attr("src", "image/xin.png");
}, function () {
    $("#sou01").attr("src", "image/xin1.png");
})

// 导航栏的显示与隐藏
$("#nav-right li").hover(function () {
        $(this).find("div").slideDown(100);
    }, function () {
        $(this).find("div").slideUp(100);
    }
);
//改变.display06-01-02 p a 的字体颜色
$(".display06-01-02").find("p").hover(function () {
    $(this).children().css("color", "#fff");
}, function () {
    $(this).children().css("color", "#424242");
})
//改变.display06-02-02 p a 的字体颜色
$(".display06-02-02").find("p").hover(function () {
    $(this).children().css("color", "#fff");
}, function () {
    $(this).children().css("color", "#424242");
})
//改变.display06-03-02 p a 的字体颜色
$(".display06-03-02").find("p").hover(function () {
    $(this).children().css("color", "#fff");
}, function () {
    $(this).children().css("color", "#424242");
})
//改变.display06-04-02 p a 的字体颜色
$(".display06-04-02").find("p").hover(function () {
    $(this).children().css("color", "#fff");
}, function () {
    $(this).children().css("color", "#424242");
})
//通过点击“宝贝”改变input框的颜色
$(".Middle-input01").find("p:eq(0)").click(function () {
        $(this).css({"background": "#FF5400", "color": "#fff"}).siblings().css({
            "background": "rgba(255,255,255,0)",
            "color": "#FF5400"
        });
        $(".Middle-input02").css({"border": "3px solid #FF5400"});
        $("#lookup").css("background", "#FF5400")
        $("#zaoxiang").children().show();//照相机显示
        $(".Middle-input03-01").show();
        $(".Middle-input03-02").hide();
        $("#inp").attr("placeholder", "       运动跑步装备").focus();
    }
)
//通过点击“天猫”改变input框的颜色
$(".Middle-input01").find("p:eq(1)").click(function () {
        $(this).css({"background": "#C40000", "color": "#fff"}).siblings().css({
            "background": "rgba(255,255,255,0)",
            "color": "#FF5400"
        });
        $(".Middle-input02").css({"border": "3px solid #C40000"});
        $("#lookup").css("background", "#C40000");
        $("#zaoxiang").children().hide();//照相机隐藏
        $(".Middle-input03-01").hide();
        $(".Middle-input03-02").show();
        $("#inp").attr("placeholder", "       牛仔裤的夏天").focus();

    }
)
//通过点击"店铺”改变input框的颜色
$(".Middle-input01").find("p:eq(2)").click(function () {
        $(this).css({"background": "#FF5400", "color": "#fff"}).siblings().css({
            "background": "rgba(255,255,255,0)",
            "color": "#FF5400"
        });
        $(".Middle-input02").css({"border": "3px solid #FF5400"});
        $("#lookup").css("background", "#FF5400");
        $("#zaoxiang").children().hide();//照相机隐藏
        $(".Middle-input03-01").show();
        $(".Middle-input03-02").hide();
        $("#inp").attr("placeholder", "").focus();
    }
)
//input框内的照相机的变色
$("#zaoxiang").hover(function () {
    $(this).children().attr("src", "image/zao1.png");
}, function () {
    $(this).children().attr("src", "image/zao.png");
});
//通过点击"input”框隐藏搜索框放大镜
$("#inp").keydown(function () {
    if($("#inp").val().length==1){
        $("#chazao").show();
    }if($("#inp").val().length==0){
        $("#chazao").hide();
    }
    console.log($("#inp").val().length)
})
$("#erweima img:nth-child(1)").click(function () {
    $("#erweima").hide();

})

