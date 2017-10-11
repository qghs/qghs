$(function () {
    //html页面显示
    $(".tu>img").hover(function () {
        $(this).parent().find("span").show();//鼠标放在图片上出现删除图标
    },function () {
        $(this).parent().find("span").hide();//鼠标移开图片时隐藏删除图标
    });
    $(".tu>img").parent().find("span").hover(function () {
        $(this).show();//鼠标放在图片上出现删除图标，并且防止出现闪烁

    },function () {
        $(this).hide();//鼠标移开图片时隐藏删除图标，并且防止出现闪烁
    });
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
            }else if($('.dan').eq(i).prop('checked',false)){
                $('.kuang>input').prop('checked',false);//判断如果有一个没选中，全选就不选

            }
            if(j==$('.dan').length){
                $('.kuang>input').prop('checked',true);//判断如果全部选中，全选就勾选
            }
        }

    $('#quanxuanshuliang').html(j); //回收站中关于单选框旁边的全选数量；
});



    $.ajax({
        type:'get',
        url:'json/chain-city.json',
        success: function (data) {
            var dt=data.city;//里面包含各省各市
            function citys() {
                var j='';
                for(var i in dt){//将各省份显示遍历出来
                    j+=' <li><a href="#">'+dt[i].p+'</a></li>\n';
                }
                $('.city-2').html(j);//将各省份显示遍历出来的数据填入方框中
                $('.city-2>li').on('click',function () {
                    var j='';
                    for(var i in dt){
                        if(dt[i].p==$(this).find('a').html()){//判断如果省份与json的省份相同就将市区填入方框中；
                            for(var k in dt[i].c ){
                                j+=' <li class="shiqu"><a href="#">'+dt[i].c[k]+'</a></li>\n';
                            }
                            $('.city-2').html(j);//将各市区显示遍历出来的数据填入方框中
                            $('.shiqu').on('click',function () {
                                citys();
                                $('.sou>input').attr('value',$(this).find('a').html());
                                $('.select>span').html('<span>'+$(this).find('a').html()+'<b class="glyphicon glyphicon-chevron-down"></b></span>');
                                $('.city').slideUp();//方框的显示隐藏
                            })
                        }
                    }
                })
            }
            citys();
         $('.select>span').on('click',function () {
             $('.city').slideToggle();//方框的显示隐藏
         })


        }// success
    })//ajax
})
