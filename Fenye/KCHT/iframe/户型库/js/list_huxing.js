(function ($) {
   //ajax请求省份的遍历
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
                        if($(this).find('a').html()==dt[i].p){//判断如果省份与json的省份相同就将市区填入方框中；
                            for(var k in dt[i].c ){
                                j+=' <li class="shiqu"><a href="#">'+dt[i].c[k]+'</a></li>\n';
                            }
                            $('.city-2').html(j);//将各市区显示遍历出来的数据填入方框中
                            $('.shiqu').on('click',function () {
                                citys();
                                $('.sou>input').attr('value',$(this).find('a').html()).removeAttr('placeholder');
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
    //ajax请求图片列表的遍历
    $.ajax({
        type:'get',
        url:'json/huxing.json',
        success: function (date) {
            var shu=date;//json里包含所有信息
            var shu_1=parseInt(shu.records);//json里包含的条数
            var bian_ge=9;//规定列表9条信息为一页
            var i=0;//遍历的初始值，从【0】也就是数组的第一个开始

                listbianli(0,9);

            //显示时间
            function gettime(a) {
                var tamp = new Date( parseInt(shu.rows[a].CreateTime.substring(6,shu.rows[a].CreateTime.length - 2)) ) ;
                var Time=tamp.getFullYear()+'-'+(tamp.getMonth()<10?'0'+(tamp.getMonth()+1):tamp.getMonth())+'-'+(tamp.getDate()<10?'0'+tamp.getDate():tamp.getDate());
                return Time;
            }
            //显示列表
            function listbianli(a, b) {
                $('#home .tu').parent().remove();
                for(a;a<b;a++){
                $('#home>.row>.bianli').before(' <div class="col-md-4 col-xs-12">\n' +
                    '                            <!--显示列表部分-->\n' +
                    '                            <div class=" img-responsive tu">\n' +
                    '                                <img src="images/a-1.png">\n' +
                    '                                <span><b class="glyphicon glyphicon-trash"></b></span>\n' +
                    '                                <div class="intr">\n' +
                    '                                    <ul>\n' +
                    '                                        <li><h4>'+shu.rows[a].ProjectName+'&nbsp;&nbsp;'+shu.rows[a].HouseType+'</h4></li>\n' +
                    '                                        <li>面积：130㎡</li>\n' +
                    '                                        <li>\n' +
                    '                                            <label title='+shu.rows[a].Province+shu.rows[a].City+shu.rows[a].Region+shu.rows[a].Location+'>'+shu.rows[a].Province+shu.rows[a].City+shu.rows[a].Region+shu.rows[a].Location+'</label>\n' +
                    '                                            <label><b class="glyphicon glyphicon-time">'+gettime(a)+'</b></label>\n' +
                    '                                        </li>\n' +
                    '                                        <li>\n' +
                    '                                            <button class="btn btn-info">装修</button>\n' +
                    '                                            <button class="btn bg-primary">下载</button>\n' +
                    '                                        </li>\n' +
                    '                                    </ul>\n' +
                    '                                </div>\n' +
                    '                            </div>\n' +
                    '\n' +
                    '                        </div>');
            }
                shubiao();
            }
            //分页方法
            $(function() {
                $("#pagination1").pagination({
                    currentPage:1,
                    totalPage:Math.ceil(shu_1/9),
                    callback: function(current) {
                      listbianli(current*9>=shu_1?shu_1-7:(current-1)*9,current*9>=shu_1?shu_1:current*9);

                    }
                });
            });



            //分页方法
            $(function() {
                $("#pagination2").pagination({
                    currentPage: 1,
                    totalPage:Math.ceil(shu_1/9),
                    callback: function(current) {
                        listbianli(current*9>=shu_1?shu_1-7:(current-1)*9,current*9>=shu_1?shu_1:current*9);
                    }
                });
            });
            //html页面显示
            function shubiao() {
                $("#home .tu>img").hover(function () {
                    $(this).parent().find("span").show();//鼠标放在图片上出现删除图标
                },function () {
                    $(this).parent().find("span").hide();//鼠标移开图片时隐藏删除图标
                });
                $("#home .tu>img").parent().find("span").hover(function () {
                    $(this).show();//鼠标放在图片上出现删除图标，并且防止出现闪烁

                },function () {
                    $(this).hide();//鼠标移开图片时隐藏删除图标，并且防止出现闪烁
                });
                //显示在户型图上的地区个数
                $('#geshu').html(shu.records);
                //页面分页部分
            }

        }// success
    })//ajax
})(jQuery);
