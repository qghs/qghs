/**
 * Created by Administrator on 2017/6/8.
 */
$(function () {
    var tab=document.getElementById("demo");
    var tab1=document.getElementById("demo1");
    var tab2=document.getElementById("demo2");
    //首先demo2克隆demo1的html元素，达到滚动复制的感觉
    tab2.innerHTML = tab1.innerHTML;
    //弄一个函数计算最大的框 scrollleft值 //默认为0
    //每0.1秒执行这个函数，让最大的框 scrollleft值自增
    //当scrollleft值 与克隆的offsetwidth值相减 等于0的时候让最大框的scrollleft值等回0
    var time=20;
    function scroll() {
        if(tab.scrollLeft - tab2.offsetWidth ==0){
            tab.scrollLeft = 0
        }else{
            tab.scrollLeft++;
        }
    }
    var auto = setInterval(scroll,time);
    //鼠标移动在最大的框中消除定时器，
    tab.onmouseover = function () {
        clearInterval(auto);
    }
    //鼠标一开最大的框中再次开启定时器，保留目前的位置开始滚动
    tab.onmouseout = function () {
        auto = setInterval(scroll,time);
    }
});