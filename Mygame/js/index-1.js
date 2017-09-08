$(function () {
    var a=$(".text-logo").find("span");

    // alert( a.length);
    var i=0;
    var j=0;
    setInterval(function () {
          a.eq(j).animate({
                fontSize:'70px',
                transform:'rotate(180deg)'
            }).siblings().animate({
              fontSize:'40px',
              color:'#fff',
            });

       if(j<a.length){
            i++;
            j=i%a.length;
       }else if(j>=a.length){
           i++;
       }
    },500);
    //玩家描述
$("#tijiao-1").on("click",function () {
    var a=$("#wan-1").val();
    alert(a);
    sessionStorage.setItem("t",a);
    $("#wan-2").val(a);
    alert(sessionStorage.getItem("t"))
})
    $("#tijiao-2").on("click",function () {
        alert(sessionStorage.getItem("t"));
        $("#wan-2").attr("value",sessionStorage.getItem("t"));

    })



})
