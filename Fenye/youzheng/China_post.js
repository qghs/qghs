// JavaScript Document
//中间轮播
var k = 0;//定时器,全局变量
var ss1 = new Array();//创建数组，把东西存数组
ss1[0] = "url(images/b-2.png) repeat-x";
ss1[1] = "url(images/b-1.png) repeat-x";
var ss2 = new Array();
ss2[0] = "#1CB37A";
ss2[1] = "#FF9900";
ss2[2] = "#66FFFF";
ss2[3] = "#60F1F1";
ss2[4] = "#1CB37A";
function AA(){
	var uls = document.getElementById("uls");
	var lis = uls.getElementsByTagName("li");
	var imgs = document.getElementById("imgs");
	var img = imgs.getElementsByTagName("img");// 获取元素只获取这个id下面的li 和 img
	var banner = document.getElementById("banner");
	if(k>img.length-1){//遍历所有图片
		k=0;
		}
		for(var i = 0; i<img.length; i++){
			img[i].style.opacity = 0;//先让图片透明度为0
			if(i==k){
				$(img[i]).animate({opacity:1},2000);//再让图片透明度在2s时间内从0过渡到1
				img[i].style.display = "block";
				lis[i].style.background = ss1[0];
				}else{
					img[i].style.display = "none";
					lis[i].style.background = ss1[1];
					}
			}
			banner.style.background = ss2[k];
			banner.style.animation="banner linear 10s infinite";
			k++;
	}
	var timer = setInterval(AA,2000);
function BB(e){
	var uls = document.getElementById("uls");
	var lis = uls.getElementsByTagName("li");
	var imgs = document.getElementById("imgs");
	var img = imgs.getElementsByTagName("img"); 
	for(var i = 0; i<img.length; i++){
		img[i].style.opacity = 0;
		if(e==i){
			$(img[i]).animate({opacity:1},2000);
			img[i].style.display = "block";
			lis[i].style.background = ss1[0];
			banner.style.background = ss2[i];
			}else{
			img[i].style.display = "none";
			lis[i].style.background = ss1[1];
				}
		}
		clearInterval(timer);//清空定时器
	}
function CC(e){
	k=e;
	timer = setInterval(AA,2000);//再次启动定时器
	}
		/*当鼠标停在图片上时停止切换，移走恢复正常
		function Stopimg(){
			clearInterval(timer);
			}
		*/
//右边tab栏切换
function tab(id){//封装tab栏
var ewm = document.getElementById("ewm");
var ew = document.getElementById("ew");
var lis = ew.getElementsByTagName("li");
var divs = ewm.getElementsByTagName("div");
for(var i = 0; i<lis.length; i++){
	lis[i].index = i;//得到每个li的索引号
	lis[i].onmouseover = function(){
		for(var j = 0; j<lis.length; j++){
			lis[j].className = "";//清空自己
			divs[j].className = "";
			}
			this.className = "ew";//再赋予相应的类
			divs[this.index].className = "ewm";
		}
	}	
}
tab("ewm");//调用函数
//新闻公告
function DD(e){
	var li = document.getElementById("li");
	var tab = document.getElementById("tab");
	var lis = li.getElementsByTagName("li");
	var divs = tab.getElementsByTagName("div");
	for(var i = 0; i<lis.length; i++){//遍历
		if(i==e){
			lis[i].style.background = "none";
			divs[i].style.display = "block";
			}else{
				lis[i].style.background = "#e6e6e6";
				divs[i].style.display = "none";
				}
		}
}
//回到顶部
function scroll() {  // 开始封装自己的scrollTop
    return {
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}
window.onload = function() {
		var backTop = document.getElementById("backTop");
        var time = null,leader = 0,target = 0;
       // leader 当前的位置    target 目标位置
        window.onscroll = function() {
			if(scroll().top>0){
				backTop.style.display = "block";
				}else{
					backTop.style.display = "none";
					}
            // 如果大于0  就显示  否则 就隐藏
            leader = scroll().top;   // 存储当前的位置
        }
        backTop.onclick = function() {
            clearInterval(timer);
            time = setInterval(function() {
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                window.scrollTo(0,leader); // 去往页面中的某个位置
                console.log(leader);
                if(leader == target) {
                    clearInterval(time);
					timer = setInterval(AA,2000);
                }
            },30)
        }
        // 缓动公式
        // target为 0
        // leader 当前的位置不知道,可以通过 scrollTop获得
    }
//右侧广告部分
	var ad = document.getElementById("ad");
	var close = document.getElementById("close");
	close.onclick = function(){
		ad.style.display = "none";
		}
	function SS(){
        ad.style.display = "none";
    }
    setTimeout(fn,5000);//让图片停留5秒时间后关闭
    function fn() {
		SS("ad");
    }
