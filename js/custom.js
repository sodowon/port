$(function(){
    //scroll
    let baseline=-300;
    let pos1 = $("#visual").offset().top + baseline;
    let pos2 = $("#aboutme").offset().top + baseline;
    let pos3 = $("#portfolio").offset().top + baseline;
    let pos4 = $("#work").offset().top + baseline;
    let pos5 = $("#contact").offset().top + baseline;

    $(window).on("scroll",function(){
        let scroll = $(this).scrollTop();

        if (scroll >= pos1 && scroll < pos2){
            $("#navi li").removeClass("on");
            $("#navi li").eq(0).addClass("on")
            $("#wrap>div").removeClass("on")
            $("#wrap>div").eq(0).addClass("on")
        } else if(scroll >= pos2 && scroll < pos3 ){
            $("#navi li").removeClass("on");
            $("#navi li").eq(1).addClass("on")
            $("#wrap>div").removeClass("on")
            $("#wrap>div").eq(1).addClass("on")
        } else if(scroll >= pos3 && scroll < pos4){
            $("#navi li").removeClass("on");
            $("#navi li").eq(2).addClass("on")
            $("#wrap>div").removeClass("on")
            $("#wrap>div").eq(2).addClass("on")
        } else if(scroll >= pos4 && scroll < pos5){
          $("#navi li").removeClass("on");
          $("#navi li").eq(3).addClass("on")
          $("#wrap>div").removeClass("on")
          $("#wrap>div").eq(3).addClass("on")
        } else {
            $("#navi li").removeClass("on");
            $("#navi li").eq(4).addClass("on");
            $("#wrap>div").removeClass("on")
            $("#wrap>div").eq(4).addClass("on")
        }        
    });

    //navi
    $("#navi li").on("click", function () {
        let target = $(this).children("a").attr("href");
        //alert(target);
        let pos = $(target).offset().top;
        //alert(pos);             
        $("#navi li").removeClass("on");
        $(this).addClass("on");
        $("html,body").stop().animate({scrollTop:pos},1000);   
    });
});

$(function(){
  $(".closet_close").on("mouseenter",function(){
    $(".closet_close").stop().hide();
    $(".closet").stop().show();
  });
  $(".closet").on("mouseleave",function(){
    $(".closet").stop().hide();
    $(".closet_close").stop().show();
  });

  setInterval(function(){
    $(".visual_box").stop().slideDown();
  },500);
});

$(function(){
  
  $(".start>a:first-child").on("click",function(){
    $(".gnb_wrap").stop().slideToggle();
  });

  $("#visual .bar").on("click",function(){
    $("#visual .main").stop().slideUp();
  }); 
  $("#visual .x").on("click",function(){
    $("#visual .main").stop().slideUp();
  }); 

  $("#visual .min_x").on("click",function(){
    $("#visual .main").stop().slideToggle();
    $("#visual .min_o").stop().css({display:"block"});
    $("#visual .min_x").stop().css({display:"none"});
  });
  $("#visual .min_o").on("click",function(){
    $("#visual .main").stop().slideToggle();
    $("#visual .min_o").stop().css({display:"none"});
    $("#visual .min_x").stop().css({display:"block"});
  });

  $("#visual .max").on("click",function(){
    $("#visual .main").stop().animate({width:"99.5%", height:"94vh"});
    $("#visual .main_visual").stop().animate({height:"90vh"});
    $(".visual_video").stop().animate({maxHeight:"95vh"});
    $("#visual .max").stop().css({display:"none"});
    $("#visual .min").stop().css({display:"block"});
  });

  $("#visual .min").on("click",function(){
    $("#visual .main").stop().animate({width:"80%", height:"83vh"});
    $("#visual .main_visual").stop().animate({height:"83vh"});    
    $(".visual_video").stop().animate({maxHeight:"79vh"});
    $("#visual .max").stop().css({display:"block"});
    $("#visual .min").stop().css({display:"none"});
  });

  $(".ok").on("click",function(){
    alert("감사합니다");
  });
})

$(function(){
    $(".con").on("mouseenter",function(){
        vid = $(this).find("video").get(0);
        vid.play();
        $(this).stop().animate({width:"225%"});
        $(this).children("video").stop().animate({opacity:"1"},1000);
        $(this).children("h2").stop().css({color:"#0e1619",background:"#c8a3b5"});
        $(this).children(".con1_text").stop().show().animate({right:"50px"},1000);
        $(this).children("img").stop().animate({opacity:"1",width:"70%"},1000);
    });

    $(".con").on("mouseleave",function(){
        vid = $(this).find("video").get(0);
        vid.pause();
        $(this).stop().animate({width:"33.333%"});
        $(this).children("video").stop().animate({opacity:"0"});
        $(this).children("h2").stop().css({color:"#c8a3b5",background:"#0e1619"});
        $(this).children(".con1_text").stop().hide().css({right:"-1000px"});
        $(this).children("img").stop().animate({opacity:"0",width:"0"},1000);
    });

    $("#container>div:nth-child(3)").on("mouseenter",function(){
      $(".skills_wrap").stop().show();
      $('.count-num').each(function() { 
        var $this = $(this),
            countTo = $this.attr('data-count');            
        $({ countNum: $this.text()}).animate({
          countNum: countTo 
        },
        {
          duration: 1000,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
           
          },
          complete: function() {
            $this.text(this.countNum);           
          }
        });  
      });
    });

    $("#container>div:nth-child(3)").on("mouseleave",function(){
      $(".skills_wrap").stop().hide();
    });

});


$(function(){
    $(".button li").on("click", function () {
        i = $(this).index();
        $(".box li").fadeOut();
        $(".box li").eq(i).fadeIn();
        $(".button li").removeClass("click");
        $(".button li").eq(i).addClass("click");
        $(".box li").css({opacity:"0", top:"50%"});
        $(".box li").eq(i).fadeIn().animate({opacity:"1",top:"0%"});
      });
});

$(function(){
  $(".box_img>img, .large").on("mouseenter",function(){
    $(".large").stop().css({display:"block"});
  });
  $(".box_img>img").on("mouseleave",function(){
    $(".large").stop().css({display:"none"});
  });
});

/*work*/
$(function(){
  i=0;

  $(".next").on("click",function(){
      $(".panel1")
      .stop()
      .animate({left : "-100%"},function(){
          $(".panel1>li").first().appendTo(".panel1");
          $(".panel1").css({left: "-100%"});              
      });
      $(".panel0")
      .stop()
      .animate({left : "-100%"},function(){
          $(".panel0>li").first().appendTo(".panel0");
          $(".panel0").css({left: "-100%"});
      });  
  });
  $(".prev").on("click",function(){
      $(".panel1")
      .stop()
      .animate({left:"-100%"},function(){
          $(".panel1>li").last().prependTo(".panel1");
          $(".panel1").css({left: "-100%"});
      });
      $(".panel0")
      .stop()
      .animate({left : "-100%"},function(){
          $(".panel0>li").last().prependTo(".panel0");
          $(".panel0").css({left: "-100%"});
      }); 
  });
});

$(function(){
  $("#contact .contact_box>.ok").on("click",function(){
    $("#contact .contact_box").stop().slideUp();
  });
  $("#contact .contact_box>.main_x a").on("click",function(){
    $("#contact .contact_box").stop().slideUp();
  });
});

$(function(){
  $(".slider1").on("mouseenter",function(){
    $(".a_text").stop().show();
  });
  $(".slider1").on("mouseleave",function(){
    $(".a_text").stop().hide();
  });
})




$(function () {
    let total = $(".panel li").length;
    let i = 0;
  
    start();
  
    function panel() {
      $(".panel li").stop().fadeOut();
      $(".panel li").eq(i).stop().fadeIn();
      $(".slide_navi li").removeClass("on");
      $(".slide_navi li").eq(i).addClass("on");
    }
  
    function start() {
      time = setInterval(function () {
        if (i == total - 1) {
          i = 0;
        } else {
          i = i + 1;
        }
        panel();
      }, 2000);
    }
  
    $(".next2").on("click", function () {
      clearInterval(time);
      if (i == total - 1) {
        i = 0;
      } else {
        i++;
      }
      panel();
  
      start();
    });
  
    $(".prev2").on("click", function () {
      clearInterval(time);
      if (i == 0) {
        i = total - 1;
      } else {
        i--;
      }
      panel();
      start();
    });
  
    $(".slide_navi li").on("click", function () {
      clearInterval(time);
      i = $(this).index();
      panel();
      start();
    });
  });

