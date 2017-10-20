$(function () {
    $.ajax({
        type:'get',
        url:'json/city-chain.json',
        success: function (data) {
            var a='',b='',x=0,y=0,z='';

            function remv() {
                a='';
                $('.city-2').find('li').remove();

            }
            function sheng(x,a) {
               remv();
                for(var i=0;i<data.length;i++){
                    a+='<li><a href="#">'+data[i].name+'</a></li>\n';
                }
                return a;

            }
            function shi(x,y,a) {
                remv();
                for(var i=0;i<data[x].city.length;i++){
                    a+='<li><a href="#">'+data[x].city[i].name+'</a></li>\n';
                }
               return a;
            }
            function qu(x,y,a) {
                remv();
                for(var i=0;i<data[x].city[y].area.length;i++){
                    a+='<li><a href="#">'+data[x].city[y].area[i]+'</a></li>\n';
                }
                return a;
            }
            function list_city(a) {
                $('.city-2').html(a);
               x=click_city_1(b);

            }
            function click_city_1(b) {
                $('.city-2').find('li').on('click',function () {
                    for(b=0;b<data.length;b++){
                        if($(this).find('a').html()==data[b].name){
                            $('.select').find('span').html($(this).find('a').html());
                            y=b;
                            list_city(shi(b,y,a));
                            click_city(b);




                        }
                    }

                    return b;
                })
            }

            function click_city(b) {
                $('.city-2').find('li').on('click',function () {
                   b=$(this).index();
                   if(b==-1){
                       b=0;
                   }
                    $('.select').find('span').html($(this).find('a').html());
                    list_city(qu(y,b,a));
                    $('.city-2').find('li').on('click',function () {
                       $('.select').find('span').html($(this).find('a').html());
                       $('.city').fadeOut();
                    });

                   return b;
                })
            }
           list_city(sheng(x,a));
            $('.select').find('span').click(function () {
                $('.city').fadeToggle();
                list_city(sheng(x,a));
            });


$('#city').click(function () {
    $('.city').fadeOut();

})









        }// success
    })//ajax




})