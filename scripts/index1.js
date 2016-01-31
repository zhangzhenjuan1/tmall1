window.onload=function(){

var tao=document.getElementsByClassName('tao');
var tao1=document.getElementsByClassName('tao1');
for(var j=0;j<tao.length;j++){
  tao[j].index=j;
  tao[j].onmouseover=function(){
    // tao1[this.index].style.opacity='1';
    tao1[this.index].style.display='block';
  };
  tao[j].onmouseout=function(){
    // tao1[this.index].style.opacity='0';
    tao1[this.index].style.display='none';
  };
}




 
// 返回顶部 一定时间
var fanhuidingbu=document.getElementById('fanhuidingbu');
// var xx=document.getElementById('xx');
var SEC=2,TIME=20;
fanhuidingbu.onclick=function(){
	var sc=document.body.scrollTop;
	var rt=sc/TIME/SEC;
	clearInterval();
	var timerId=setInterval(function(){
		document.body.scrollTop = sc;
		sc=sc-rt;
		if(sc<=0){
			clearInterval(timerId);
		}
	},SEC);
};

//fixed 悬浮定位 隔一段时间出现
var xfcs=document.getElementById('xfcs');
var tim;
window.onscroll=function(){
	clearTimeout(tim);
	if(document.body.scrollTop<100){
		xfcs.style.display='none';
	}else{
		tim=setTimeout(function(){
			xfcs.style.display='block';
		},2000);
	}
}

var jxsc=document.getElementsByClassName('jxsc');
var cldh=document.getElementsByClassName('cldh');
for(var i=0;i<jxsc.length;i++){
	jxsc[i].index=i;
	jxsc[i].onmouseover=function(){
		cldh[index].style.display='block';
	}
}


// var wangzhandaohang=document.getElementById('wangzhandaohang');
// var wdao1=document.getElementById('wdao1');
// wangzhandaohang.onmouseover=function(){
// 	wdao1.style.display='block';
// }
var shl=document.getElementsByClassName('shl');
var ssl=document.getElementsByClassName('ssl');
shl[0].onfocus=function(){
	shl[0].value=" ";
}
ssl[0].onfocus=function(){
	ssl[0].value=" ";
}
















};