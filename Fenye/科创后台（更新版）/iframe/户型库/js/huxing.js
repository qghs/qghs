$(function () {

    //回收站中关于单选框全选部分
    $('.kuang>input').on('click',function () {
        var j=0;  //回收站中关于单选框旁边的全选数量，默认0；
        if($(this).is(':checked')){
            $(".tu>img").parent().find("span").show();//回收站中当点击全选每个图片单选框部分显示
            $('.dan').prop('checked',true);//回收站中当点击全选每个图片单选框全选
            for(var i=0;i<$('.dan').length;i++){
                if( $('.dan').eq(i).is(':checked')){
                    j=j+1;
                }
            }

        }else {
            $('.dan').prop('checked',false);//回收站中当点击全选每个图片单选框取消全选
            $(".tu>img").parent().find("span").hide();//回收站中每个图片单选框部分隐藏

        }
        $('#quanxuanshuliang').html(j); //回收站中关于单选框旁边的全选数量；
    });
    //回收站中关于单选框图片单选部分

$('.dan').on('click',function () {
    var j=0;
    for(var i=0;i<$('.dan').length;i++){
            if( $('.dan').eq(i).is(':checked')){//判断是否选中，并把选中个数显示在选中总数上
                j=j+1;
               $('.dan').eq(i).parent().parent().show();
            }else if($('.dan').eq(i).prop('checked',false)){
                $('.kuang>input').prop('checked',false);//判断如果有一个没选中，全选就不选

            }
            if(j==$('.dan').length){
                $('.kuang>input').prop('checked',true);//判断如果全部选中，全选就勾选
            }

        }

    $('#quanxuanshuliang').html(j); //回收站中关于单选框旁边的全选数量；
});
    //html页面显示
    $(".tu-1>img").hover(function () {
        $(this).parent().find("span").show();//鼠标放在图片上出现删除图标
    },function () {
        $(this).parent().find("span").hide();//鼠标移开图片时隐藏删除图标
    });
    $(".tu-1>img").parent().find("span").hover(function () {
        $(this).show();//鼠标放在图片上出现删除图标，并且防止出现闪烁

    },function () {
        if($(this).find('.dan').is(':checked')){
            $(this).show();
        }else {
            $(this).hide();//鼠标移开图片时隐藏删除图标，并且防止出现闪烁
        }

    });

})

