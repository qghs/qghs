$(function () {

$(".con2_5").click(function () {
    // $(".con2_4 ul").children().hide();
    var array=[0,1,2,3,4,5,6,7,8,9];
    for(var i=0;i<20;i++){
        var a=Math.floor(Math.random()*10);
        var b=Math.floor(Math.random()*10);
        var temp=0;
        temp=array[a];
        array[a]=array[b];
        array[b]=temp;
    }
    for(var i=0;i<10;i++){
        var yuan=
        $(".con2_4 ul").children().eq(array[i]).html($(".con2_4 ul").children().eq(i).html());
        console.log(array[i]);
    }


})//点击出现效果

})//运行完后执行



