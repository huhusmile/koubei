$(function(){
    initEvents();
    initSearch();
    initMainnav();
    initLmLR();

    handle = setInterval("fun();",2000);

    initKBTab();
});

function initEvents(){
    $(".tbmenu").mouseover(function(){
        $(this).find("dt").addClass("dtover");
        $(this).find("dd").show();
    });
    $(".tbmenu").mouseout(function(){
        $(this).find("dt").removeClass("dtover");
        $(this).find("dd").hide();
    }); 


    $(".ju123morem").mouseover(function(){
    	$(".ju123morehd").addClass("ju123mhover");
    	$(".ju123morecon").show();
    });
    $(".ju123morem").mouseout(function(){
    	$(".ju123morehd").removeClass("ju123mhover");
    	$(".ju123morecon").hide();
    });
    $(".ju123morecon").mouseover(function(){
    	$(".ju123morehd").addClass("ju123mhover");
    	$(".ju123morecon").show();
    });
    $(".ju123morecon").mouseout(function(){
    	$(".ju123morehd").removeClass("ju123mhover");
    	$(".ju123morecon").hide();
    });
    $(".ju123morecon dl").mouseover(function(){
    	$(this).css("background-color","#ddd");
    });
    $(".ju123morecon dl").mouseout(function(){
    	$(this).css("background-color","#fff");
    });
}

function initSearch(){
    $("#searchbtn").mouseover(function(){
        $(this).css({"background-image":"url(images/T1Hqj1XnN.png)","background-position":"0 -104px","background-repeat":"no-repeat"});
        $("#tskeyword").css({"border-top-color":"#f95c19","border-bottom-color":"#f95c19"});
        $("#searchtype").css({"border-top-color":"#f95c19","border-bottom-color":"#f95c19","border-left-color":"#f95c19"});
    });
    $("#searchbtn").mouseout(function(){
        $(this).css({"background-image":"url(images/T1Hqj1XnN.png)","background-position":"0 -35px","background-repeat":"no-repeat"});
        $("#tskeyword").css({"border-top-color":"#c0c0c0","border-bottom-color":"#c0c0c0"});
        $("#searchtype").css({"border-color":"#c0c0c0","border-right":"0"});
    });
    $("#tskeyword").hover(function(){
        $("#tskeyword").css({"border-top-color":"#f95c19","border-bottom-color":"#f95c19"});
        $("#searchtype").css({"border-top-color":"#f95c19","border-bottom-color":"#f95c19","border-left-color":"#f95c19"});
    },function(){
        $("#tskeyword").css({"border-top-color":"#c0c0c0","border-bottom-color":"#c0c0c0"});
        $("#searchtype").css({"border-color":"#c0c0c0","border-right":"0"});
    });
    $("#searchtype").hover(function(){
        $("#tskeyword").css({"border-top-color":"#f95c19","border-bottom-color":"#f95c19"});
        $("#searchtype").css({"border-color":"#f95c19","border-right":"0"});
        $(this).find("ul").show();
        $(this).find("li").mouseover(function(){
            $(this).addClass("searchtypehover");
            $(this).click(function(){
                var txt = $(this).html();
                $("#searchtype span").html(txt);
                $("#searchtype").find("ul").hide();
            });
        });
        $(this).find("li").mouseout(function(){
            $(this).removeClass("searchtypehover");
        });
    },function(){
        $("#tskeyword").css({"border-top-color":"#c0c0c0","border-bottom-color":"#c0c0c0"});
        $("#searchtype").css({"border-color":"#c0c0c0","border-right":"0"});
        $(this).find("ul").hide();
    });
}

function initMainnav(){
    $("#navshanghu").hover(function(){
        $(this).addClass("overshanghu");
    },function(){
        $(this).removeClass("overshanghu");
    });
    $("#navshangcheng").hover(function(){
        $(this).addClass("overshangcheng");
        $(this).find("ul").show();
    },function(){
        $(this).removeClass("overshangcheng");
        $(this).find("ul").hide();
    });
    $("#navquan").hover(function(){
        $(this).addClass("overquan");
    },function(){
        $(this).removeClass("overquan");
    });
    $("#navtuan").hover(function(){
        $(this).addClass("overtuan");
    },function(){
        $(this).removeClass("overtuan");
    });
    $("#navshequ").hover(function(){
        $(this).addClass("overshequ");
    },function(){
        $(this).removeClass("overshequ");
    });

    $(".hidehaha").mouseover(function(){
        $(this).css("background-color","#fe7b35");
    });
    $(".hidehaha").mouseout(function(){
        $(this).css("background-color","#e65310");
    });
}

function initLmLR(){
    $(".ksnav").hover(function(){
        clearInterval(handle);
        for (var i = 1; i <= 4; i++) {
            $(".ksnav").css({"background-image": "url(images/T1c3z1Xm.png)","background-position": "0 -1px", "background-repeat": "no-repeat"});    
        }
        $(this).css({"background-image": "url(images/T1c3z1Xm.png)","background-position": "0 -11px", "background-repeat": "no-repeat"});
        
        var ids = $(this).attr("id");
        $("#lbSlide").css("background-image","url(images/"+ ids +".jpg)");
    },function(){
        handle = setInterval("fun();",2000);
    });
}

var curIndex = 1;
function fun(){
    for (var i = 1; i <= 4; i++) {
        $(".ksnav").css({"background-image": "url(images/T1c3z1Xm.png)","background-position": "0 -1px", "background-repeat": "no-repeat"});    
    }
    var idd = "#t" + curIndex;
    $(idd).css({"background-image": "url(images/T1c3z1Xm.png)","background-position": "0 -11px", "background-repeat": "no-repeat"});
    
    $("#lbSlide").css("background-image","url(images/t"+ curIndex +".jpg)");
    curIndex = curIndex%4 + 1;
}

function initKBTab(){
    $(".kbtabdt").click(function(){
        for (var i = 1; i <= 4; i++) {
            var ele = $(this).attr("id");
            var kbtab = "kbtabdt" + i;
            if (ele == kbtab) {
                $("#"+kbtab).css({"border":"1px solid #e5e5e5","border-top":"2px solid #ff7a33","border-bottom": "0"});
                $("#kbtabdd"+i).show();
            }else{
                $("#"+kbtab).css({"border":"0","border-bottom": "1px solid #e5e5e5"});
                $("#kbtabdd"+i).hide();
            }   
        }
    });

    $("#lblkeywords").click(function(){
        $(this).hide();
    });
    $("#Jkeywords").mouseout(function(){
        $("#lblkeywords").show();
    });

    $(".cattabradio").click(function(){

        var wl = $(this).attr("checked");
        
    });
}