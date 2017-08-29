/**
 * Created by 兜兜 on 2017/6/5.
 */

$(function(){

    /**
     * 品质生活
     */
    $(".qualityC1").mouseover(function () {
        $(this).css("outline","1px solid #f40");
    }).mouseout(function () {
        $(this).css("outline","1px solid #f1f1f1");
    });
    $(".qualityC2").mouseover(function () {
        $(this).css("outline","1px solid #f40");
    }).mouseout(function () {
        $(this).css("outline","1px solid #f1f1f1");
    });

    $(".qualityC1").find("article").find("div").mouseover(function () {
        $(this).find("strong").css("color","#f40");
        $(this).find("span").css("color","#f40");
    }).mouseout(function () {
        $(this).find("strong").css("color","#6c6c6c");
        $(this).find("span").css("color","#6c6c6c");
    });

    $("[name=img]").mouseenter(function () {
        $(this).find("img:first").attr("src","css/images/erweima2.jpg");
        $(this).find(".qhi").fadeIn();
    }).mouseleave(function () {
        $(this).find("img:first").attr("src","css/images/erweima1.jpg");
        $(this).find(".qhi").fadeOut();
    });
    $(".qhi").mouseenter(function () {
        $(this).fadeIn();
    }).mouseleave(function () {
        $(this).fadeOut();
    });

    /**
     * 专业
     */
    $(".shihuiC1").mouseover(function () {
        $(this).find(".shihuiC1-r").find(".shihuiC1-img2").css("opacity","0.75");
    }).mouseout(function () {
        $(this).find(".shihuiC1-r").find(".shihuiC1-img2").css("opacity","1");
    });

    $(".shihuiC1-div").mouseover(function () {
        $(this).find(".shihuiC1-div-r").find(".shihuiC1-img2").css("opacity","0.75");
    }).mouseout(function () {
        $(this).find(".shihuiC1-div-r").find(".shihuiC1-img2").css("opacity","1");
    });
    $(".shi-er").mouseover(function () {
        $(this).parent().find(".shi").fadeIn();
    }).mouseout(function () {
        $(this).parent().find(".shi").fadeOut();

    });
    $(".shihuiC1-l .shi-er").mouseover(function () {
        $(this).parent().parent().find(".shi").fadeIn();
    }).mouseout(function () {
        $(this).parent().parent().find(".shi").fadeOut();

    });



});