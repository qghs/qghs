/**
 * Created by Administrator on 2017/6/6.
 */
$(function () {
    $(".guess_like_center ul li a img").lazyload({
        effect:"fadeIn",
    });
    $(".guess_like_center ul li").mouseover(function () {
        $(this).find('div').show();
    });
    $(".guess_like_center ul li").mouseout(function () {
        $(this).find('div').hide();
    });
});
