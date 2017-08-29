/**
 * Created by Administrator on 2017/6/7.
 */
$(function () {
    //$(".top_logo_search_t ul li:eq(0)").css("color","#ff4400").css("font-weight","normal").css("background-color","#ffffff");
    $(".top_logo_search_t ul li").mouseover(function () {

    });
    $(".top_logo_search_t ul li").click(function () {
        $(this).css("color","#ffffff").css("font-weight","bold").css("background-color","#F50");
        $(this).siblings().css("color","#ff4400").css("font-weight","normal").css("background-color","#ffffff");
    });
});

