$(function () {
    $("#body").css({
        "background":"url('images/index-3.jpg') no-repeat",
    });
    function body() {
        var i=1;
        return function () {//闭包方式
            $("#body").css({
                "background":"url(\"images/index-"+i+".jpg\") no-repeat",
            });
            i++;
            if(i==4){
                i=1;
            }

        }
    }
  var bodytime=setInterval(body(),3000);
//背景轮播**时间5秒一次**无全局变量（以上  结束）
  function a() {
      var time=new Date();
      var nian=time.getFullYear();
      var yue=time.getMonth()+1;
      var ri=time.getDate();
      var shi=time.getHours();
      var fen=time.getMinutes();
      var miao=time.getSeconds();
      if(yue<10){
          yue="0"+yue;
      } if(ri<10){
          ri="0"+ri;
      } if(shi<10){
          shi="0"+shi;
      } if(fen<10){
          fen="0"+fen;
      } if(miao<10){
          miao="0"+miao;
      }
      $("#time").html(nian+"年"+yue+"月"+ri+"日"+shi+"时"+fen+"分"+miao+"秒");
  }
    a();
    setInterval(a,1000);


    $(".fanka").click(function () {
        alert("由于该项目是jsp格式，个人技术问题无法在页面中显示出来，抱歉！");
       var w= confirm("是否前往“凡客诚品官网？");
        if(w==true){
            $(location).prop('href', 'http://www.vancl.com');
        }else {
            return;
        }

    })









})

