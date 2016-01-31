$(function(){
	$(".yinc").hover(function(){
		$(this).find(".tao1").show();
		$(this).find(".tao1").animate({right:'35px',opacity:'1'},200);
	},function(){
		$(this).find(".tao1").hide();
		$(this).find(".tao1").animate({right:'75px',opacity:'0'},200);

	});

	$(".jxsc .mov").hover(function(){
		$(this).css({
			marginLeft:'6px'
		});
	},function(){
		$(this).css({marginLeft:'0px'});
	})

	$(".jtfly").hover(function(){
		$(this).css({left:'1075px'});
	},function(){
		$(this).css({left:'1078px'});
	})

	$(".hov").hover(function(){
		$(this).stop();
		$(this).animate({marginLeft:'80px'},300);
	},function(){
		$(this).stop();
		$(this).animate({marginLeft:'90px'},300);
	})

	$(".hov1").hover(function(){
		$(this).stop();
		$(this).animate({
			marginLeft:'10px'
			// transform:'translateX(4px)'
		},500);
		},function(){
			$(this).stop();
			$(this).animate({
				marginLeft:'0'
				// transform:'translateX(0px)'
			},500);
		})

	$(".jxsc").hover(function(){
		$(this).find(".cldh").css({
			display:'block'
		})
	},function(){
		$(this).find(".cldh").css({
			display:'none'
		})
	})
// 悬浮框隔一定距离会出现
// $('#xfks').	
var tim;
$(window).scroll(function(){
	if($(window).scrollTop()>200){
		clearTimeout(tim);
		tim=setTimeout(function(){
			$('#xfcs').show();
		},300);
	}else{
		clearTimeout(tim);
		$('#xfcs').hide();
	};
});


// 返回顶部=========
$('#fanhuidingbu').click(function(){
	$({top:$(window).scrollTop()}).animate(
		{top:0},
		{
			duration:700,
			step:function(){
				$(window).scrollTop(this.top);
		}
	})
})

// ===============================
var imgs=[
        'url("./img/zc/32.png")',
        'url(./img/zc/34.png)',
        'url(./img/zc/36.png)',
        'url(./img/zc/38.png)',
        'url(./img/zc/40.png)',
        'url(./img/zc/42.png)',
        'url(./img/zc/44.png)',
        'url(./img/zc/46.png)',
        'url(./img/zc/48.png)',
        'url(./img/zc/50.png)',
        'url(./img/zc/52.png)',
        ];
var img=[
      'url("./img/zc/31.png")',
      'url(./img/zc/33.png)',
      'url(./img/zc/35.png)',
      'url(./img/zc/37.png)',
      'url(./img/zc/39.png)',
      'url(./img/zc/41.png)',
      'url(./img/zc/43.png)',
      'url(./img/zc/45.png)',
      'url(./img/zc/47.png)',
      'url(./img/zc/49.png)',
      'url(./img/zc/51.png)',
        ];
$('.zcc').each(function(i){
	$(this).data('index',i);
  // console.log(this);
})
var qianyige;
$('.zcc').click(function(){
  // if(qianyige!=undefined){
    $($('.zcc')[qianyige]).css('backgroundImage',img[qianyige]);
  // }
	var i=$(this).data('index');
	var newtop=$($('.section')[i]).offset().top-150;
  console.log($($('.section')[i]).offset().top)
      $($('.zcc')[i]).css('backgroundImage',imgs[i]);
      qianyige=i;
	    $({top:$(window).scrollTop()}).animate(
		{top:newtop},
		{
			duration:400,
			step:function(){
				 $(window).scrollTop(this.top);
			}
		}
		)
	})


var qian;
var time;
$(window).scroll(function(){
clearInterval(time);
   time=setInterval(function(){
      for(var i=0;i<$('.section').length;i++){
      if($(window).scrollTop()<$($('.section')[i]).offset().top-50 && $(window).scrollTop()>$($('.section')[i]).offset().top-200){
        // console.log($(window).scrollTop());
    
         if(qian!=undefined){
             $($('.zcc')[qian]) .css('backgroundImage',img[qian]);
         }
      $($('.zcc')[i]).css('backgroundImage',imgs[i]);
      qian=i;
      } 
  }
  },100)


})
// ======================================
  $('.z-item').each(function(i){
    $(this).data('index',i);
  });
  $('.z-item').hover(function(){
    $('.hide').stop();
    $(this).find('.hid').show(0,function(){
      $(this).animate({left:222},200);
    });
    var i = $(this).data('index');
    $('.zh-item').hide();
    $( $('.zh-item')[i] ).show();
    $('.y-item').hide();
    $( $('.y-item')[i] ).show()  ;
  },function(){
    $('.hide').stop();
    $(this).find('.hid').animate({left:212},20,function(){
      $(this).hide(0);
    });
  });

//===========================================
  var bg=['#69D9B5','#E8E8E8','#CFACFE','#E8E8E8','#DBDBDD','#F73E2A'];
  var index = 0;
  var lunbo  =  function(){
      $('.lunbo-item').hide();
      var el = $('.lunbo-item')[index];
      $(el).show();
      $('#huanse').css( 'backgroundColor',bg[index]);
      $('.yuan').removeClass('red');
      $($('.yuan')[index]).addClass('red');

      index += 1;
      if( index === $('.lunbo-item').length ){
          index = 0;
      }
  }
  $('.yuan').each(function(i){
    $(this).data('index',i)
  });

  $('.yuan').hover(function(){
    clearInterval(timerId);
    $('.yuan').removeClass('red');
    $(this).addClass('red');
    var i = $(this).data('index');
    $('.lunbo-item').hide();
    $( $('.lunbo-item')[i] ).show();
    index = i;
  },function(){
    clearInterval(timerId);
    timerId = setInterval(lunbo,1000);
  });
  var timerId = setInterval(lunbo,1000);

  var kk=0;
  var kaiguan=true;
var ss1=function(){

  var lunbo1  =  function(){
    $('.lunb1').hide();
    var el = $('.lunb1')[kk];
    $(el).show();
    kk += 1;
    if( kk === 3 ){ kk = 0;}
  }
  $('.zan1').click(function(){
    $('.lunb1').hide();
    var el = $('.lunb1')[kk];
    $(el).show();
    kk+=1;
    if(kk===3){ kk=0;}
    kaiguan=false;  
  })
  $('.yan1').click(function(){
    $('.lunb1').hide();
    var el = $('.lunb1')[kk];
    $(el).show();
    kk-=1;
    if(kk===-1){ kk=2;}
    kaiguan=false;
  })
var ti1=setInterval(lunbo1,2000);
}
ss1();



$('.fzda li a').hover(function(){
	$(this).animate({
		marginLeft:'5px'
	})
},function(){
	$(this).animate({
		marginLeft:'0px'
	})
})

var ss2=function(){
  var lunbo2  =  function(){
    $('.lunb2').hide();
    var el = $('.lunb2')[kk];
    $(el).show();
    kk += 1;
    if( kk === 3 ){ kk = 0;}
  }
  $('.zan2').click(function(){
    $('.lunb2').hide();
    var el = $('.lunb2')[kk];
    $(el).show();
    kk+=1;
    if(kk===3){ kk=0;}
     kaiguan=false;  
  })
  $('.yan2').click(function(){
    $('.lunb2').hide();
    var el = $('.lunb2')[kk];
    $(el).show();
    kk-=1;
    if(kk===-1){ kk=2;}
    kaiguan=false;
  })
var ti2=setInterval(lunbo2,1000);
}
ss2();
 
var ss3=function(){
  var lunbo3  =  function(){
    $('.lunb3').hide();
    var el = $('.lunb3')[kk];
    $(el).show();
    kk += 1;
    if( kk === 3 ){ kk = 0;}
  }
  $('.zan3').click(function(){
    $('.lunb3').hide();
    var el = $('.lunb3')[kk];
    $(el).show();
    kk+=1;
    if(kk===3){ kk=0;}
     kaiguan=false;  
  })
  $('.yan3').click(function(){
    $('.lunb3').hide();
    var el = $('.lunb3')[kk];
    $(el).show();
    kk-=1;
    if(kk===-1){ kk=2;}
    kaiguan=false;
  })
var ti3=setInterval(lunbo3,1000);
}
ss3();

var ss4=function(){
  var lunbo4  =  function(){
    $('.lunb4').hide();
    var el = $('.lunb4')[kk];
    $(el).show();
    kk += 1;
    if( kk === 3 ){ kk = 0;}
  }
  $('.zan4').click(function(){
    $('.lunb4').hide();
    var el = $('.lunb4')[kk];
    $(el).show();
    kk+=1;
    if(kk===3){ kk=0;}
     kaiguan=false;  
  })
  $('.yan4').click(function(){
    $('.lunb4').hide();
    var el = $('.lunb4')[kk];
    $(el).show();
    kk-=1;
    if(kk===-1){ kk=2;}
    kaiguan=false;
  })
var ti4=setInterval(lunbo4,1000);
}
ss4();

var ss5=function(){
  var lunbo5  =  function(){
    $('.lunb5').hide();
    var el = $('.lunb5')[kk];
    $(el).show();
    kk += 1;
    if( kk === 3 ){ kk = 0;}
  }
  $('.zan5').click(function(){
    $('.lunb5').hide();
    var el = $('.lunb5')[kk];
    $(el).show();
    kk+=1;
    if(kk===3){ kk=0;}
     kaiguan=false;  
  })
  $('.yan5').click(function(){
    $('.lunb5').hide();
    var el = $('.lunb5')[kk];
    $(el).show();
    kk-=1;
    if(kk===-1){ kk=2;}
    kaiguan=false;
  })
var ti5=setInterval(lunbo5,1000);
}
ss5();

var ss8=function(){
  var lunbo8  =  function(){
    $('.lunb8').hide();
    var el = $('.lunb8')[kk];
    $(el).show();
    kk += 1;
    if( kk === 3 ){ kk = 0;}
  }
  $('.zan8').click(function(){
    // e.preventDefault();
    $('.lunb8').hide();
    var el = $('.lunb8')[kk];
    $(el).show();
    kk+=1;
    if(kk===3){ kk=0;}
     kaiguan=false;  
  })
  $('.yan8').click(function(){
     // e.preventDefault();
    $('.lunb8').hide();
    var el = $('.lunb8')[kk];
    $(el).show();
    kk-=1;
    if(kk===-1){ kk=2;}
    kaiguan=false;
  })
var ti8=setInterval(lunbo8,1000);
}
ss8();
 $(window).click(function(e){
   e.preventDefault();
 })









// $('.remclick').hover({
// 	$('.remclick').animate({borderBottom:'1px solid black'},300);
// },function(){
// 	$('.remclick').animate({borderBottom:'none'},300);

// });


$('.remclick').each(function(i){
	$(this).data('index',i);
});
$('.remclick').click(function(){
    var i = $(this).data('index');
    $('.recen ul').hide();
    $( $('.recen ul')[i] ).show();
});

// 精选市场
// 鼠标滑过banner会变
var tuk=[
    'url("./img/bjt/bb1.jpg")',
    'url("./img/bjt/bb2.jpg")',
    'url("./img/bjt/bb3.jpg")',
    'url("./img/bjt/bb4.jpg")',
    'url("./img/bjt/bb5.jpg")',
    'url("./img/bjt/bb6.jpg")',
    'url("./img/bjt/bb7.jpg")',
    'url("./img/bjt/bb8.jpg")',
    'url("./img/bjt/bb9.jpg")',
    'url("./img/bjt/bb10.jpg")',
    'url("./img/bjt/bb11.jpg")',
    'url("./img/bjt/bb12.jpg")',
    'url("./img/bjt/bb13.jpg")',
    'url("./img/bjt/bb14.jpg")',
    'url("./img/bjt/bb15.jpg")'

]
var color=['#FFD44A','#F2F7FD','#304A6B','#DC2E63','#FAAD11','#BCF9F1','#E2D5C8','#DB060A','#FCE655','#FFC6D5','#29A6FF','#CDE2B9','#E4E2E3','#30C4FF','#FFDEDD'];
 $('.tutu').each(function(i){
    $(this).data('index',i)
  });

  $('.tutu').hover(function(){ 
    clearInterval(timerId);
     $('.lunbo').hide();
    var i = $(this).data('index');
    $('.jtflcen').css({
      backgroundImage:tuk[i],
      zIndex:50
    });
    $('#huanse').css({
      backgroundColor:color[i],
      zIndex:40
  });
  
  },function(){
    $('.lunbo').show();
    clearInterval(timerId);
    timerId = setInterval(lunbo,1000);
  });
  // var timerId = setInterval(lunbo,1000);










});