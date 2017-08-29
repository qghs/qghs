/**
 * Created by Administrator on 2017/6/6.
 */

$(function () {

    function mouseMove(dianji,xianshi) {
        for(var i = 0; i < dianji.length; i++){
            dianji[i].index = i;
            dianji[i].onmousemove = function () {
                for(var j = 0; j < xianshi.length; j++){
                    xianshi[j].style.display = "none";
                    xianshi[this.index].style.display = "block";
                }
            };
            dianji[i].onmouseout = function () {
                for(var j = 0; j < xianshi.length; j++){
                    xianshi[this.index].style.display = "none";
                }
            }
        }
    }

    //app图片显示功能
    var appA = document.getElementsByClassName("t-app-a");
    var oul = document.getElementById("t-app-ul");
    var odiv = oul.getElementsByTagName("div");
    mouseMove(appA,odiv);
    //公告块显示功能
    var time = null;
         $(".a").mouseover(function (e) {
             e=$(this);
            time =  setTimeout(function () {
                 $(e).addClass("on").siblings().removeClass("on")
                 var ul = $("#t-gg-div ul");
                 ul.eq($(e).index()).show().siblings().hide();
             },300)
         }).mouseout(function () {
             clearTimeout(time);
         })

    //icon显示功能
    $(".t-icona").mousemove(function () {
        $(this).find("span").addClass("hover").parent().siblings().find("span").removeClass("hover");
        $(".t-icon-div").show();
        $(this).addClass("on").removeClass("out").siblings().addClass("out").removeClass("on");
        $(".t-icon-div1").eq($(this).index()).show().siblings().hide();
    })
    //点击页面文档任何位置关闭icon 在框框范围内不关闭

    $(".t-icon-div").click(function(e){
        e.stopPropagation(); //让页面如果点击的是.t-icon-div的范围内，就清除点击隐藏的方法
    })
    /*
    $("body").click(function () {
        $(".t-icon-div").hide();
        $(".t-icona").removeClass("out on")
    })*/
    $("body").click(function(){
        $(".t-icon-div").hide();
        $(".t-icona").removeClass("out on")
    })

    //点击x关闭icon
    $(".t-icon-div1 span").click(function () {
        $(".t-icon-div").hide();
        $(".t-icona").removeClass("out on")
    })

    //icon内容偏移

    //封装一个行动动画效果
    var time2 = null;
    $.ggmouseover = function (e,act) {
        $(e).mouseover(function () {
            var This = $(this); //得到触发事件的那个项
            time2 = setTimeout(function () {  //鼠标移上去的时候会执行这个定时器
                $(e).first().removeClass("t-icon-div1-a-first"); //给所有模块的第一个a添加css
                $(This).css("color","#f40").siblings().css("color","");
                var index = $(This).index();
                $(act).animate({
                    left:index * -275
                },200)
            },500);
        }).mouseout(function () {
            clearTimeout(time2); //鼠标离开清除定时器
        })
    };
    $.ggmouseover("#t-icon-div1 a","#t-icon-nr");
    $.ggmouseover("#t-icon-div2 a","#t-icon-nr-2");
    $.ggmouseover("#t-icon-div3 a","#t-icon-nr-3");
    $.ggmouseover("#t-icon-div4 a","#t-icon-nr-4");
    //充话费功能
    $(".t-table-inp").click(function () {
            $(this).parents("tr").siblings().find("input").removeClass("on");
            $(this).parent().siblings().find("input").removeClass("on");
            $("#t-hfcz").val($(this).val());
            $(this).addClass("on");
    })


    //打开充话费功能界面
    $("#t-hfcz").click(function () {
        var hf = $("#t-hf");
        if(hf.is(":hidden")){
            $("#t-hf").show();
        }else{
            $("#t-hf").hide();
        }
    })

    //猜你喜欢评分功能
    $(".guess_like_comment_2 a").click(function(){
        var textval = $(".guess_like_comment textarea");
        if(!textval.val()){
            alert("您还没有输入任何评价内容哦！")
        }
    })
    var iScore = iStar = 0;
    var ols = document.getElementById("t-pf-ul").getElementsByTagName("ol");
    var msg = [
        "很不满意|差得太离谱，根本不是我想要的，超级差！",
        "不满意|根本跟自己的喜欢的感兴趣，都不搭边。",
        "一般|推荐的一般般，稍微有几个看的对眼。",
        "满意|挺不错的，基本是自己想要的，小淘淘真的是太棒了！",
        "非常满意|一级棒！千里寻知音，我要把小淘淘娶回家！"

    ]
    $("#t-pf-ul ol").each(function(){
        console.log($(this).index()+1);
        //var index = $(this).index()+1;
        console.log($("#t-pf-ul ol").length)
        var uloffleft = $("#t-pf-ul").offset().left;
        console.log(uloffleft)
        //console.log(index);
        var index = $(this).index()+1;
        $(this).mouseover(function(){
            //console.log(this.offsetWidth);
            console.log(index);
            fnPoint(index);
            //浮动窗口显示
            $("#t-pf-box p").show();
            //计算浮动层的位置
            $("#t-pf-box p").css("left",""+(uloffleft+index * this.offsetWidth-150)+"px"+"")
            //匹配浮动层文字内容
            $("#t-pf-box p").html("<em><i>" + index + "</i> 分 " + msg[index - 1].match(/(.+)\|/)[1]+"<br>" + "</em>" + msg[index - 1].match(/\|(.+)/)[1]
)
        }).mouseout(function(){
            //关闭窗口
            $("#t-pf-box p").hide();
            fnPoint();
        }).click(function(){
            iStar = index;
            $("#t-pf-box p").hide();
            $(".comment_mark_1").eq(1).html("<strong>"+index+" 分</strong> ("+msg[index-1].match(/\|(.+)/)[1]+")");
        })
    })
    function fnPoint(iArg){
        //分数赋值
        iScore = iArg || iStar;
        for(var i = 0; i < ols.length; i++){
            ols[i].className = i < iScore ? "on" : "";
        }
    }
});