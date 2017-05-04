/**
 * Created by Administrator on 2017/3/24.
 */
//show
$(function(){
    var showBigData=[
        ["279-big1","279-big2","279-big3","279-big1"],
        ["399d1-big","399d2-big","399d3-big","399d1-big"],
        ["399j1-big","399j2-big","399j3-big","399j1-big"],
        ["399-big1","399-big2","399-big3","399-big1"],
        ["599-big1","599-big2","599-big3","599-big1"],
        ["799-big1","799-big2","799-big3","799-big1"]
    ];
    var showSmallData=[
        ["279-small1","279-small2","279-small3","279-small1"],
        ["399d1-small","399d2-small","399d3-small","399d1-small"],
        ["399j1-small","399j2-small","399j3-small","399j1-small"],
        ["399-small1","399-small2","399-small3","399-small1"],
        ["599-small1","599-small2","599-small3","599-small1"],
        ["799-small1","799-small2","799-small3","799-small1"]
    ];
    $("#container-tab").on("touchstart","li",function(){
        var i=$(this).index();
        //tab切换
        $(this).addClass("exp-active").siblings().removeClass("exp-active");
        //大图切换
        $(".car-big img").each(function(index,src){
            src.src="images/"+showBigData[i][index]+".jpg";
        });
    //    小图切换
        $(".car-small img").each(function(index,src){
            src.src="images/"+showSmallData[i][index]+".jpg";
        });
    });
    var Ewidth=$(".exper-container-carsouel").width();
    console.log(Ewidth);
    $(".car-big img").width(Ewidth);
    var imgHei= $(".car-big img").height();
    $(".exper-container-carsouel").height(imgHei);
    expCarsouel();
    function expCarsouel(){
        var i=0;
        var bigBox=$(".car-big");
        //var bigBoxLi=$(".car-big li");
        var smallBox=$(".car-small li");
        var Xstart,Xend,Xmove;
        //var firstLi=bigBoxLi.first().clone();
        bigBox.width(Ewidth*4);
        bigBox.on("touchstart",function(e){
            e.preventDefault();
            Xstart= e.originalEvent.changedTouches[0].pageX;

        });
        bigBox.on("touchend",function(e){
            e.preventDefault();
            Xend= e.originalEvent.changedTouches[0].pageX;
            Xmove=Xend-Xstart;
            if(Xmove<30){
                clearInterval(timer);
               moveRight();
            }else if(Xmove>-30){
                clearInterval(timer);
                moveLeft();}

        });
        timer=setInterval(function(){
           moveRight();
        },3000);
        //点击
        $(".btn-L").on("touchstart",function(){
            clearInterval(timer);
            moveLeft();

        });
        $(".btn-R").on("touchstart",function(){
            moveRight();
        });
        function moveRight(){
            i++;
            if(i>3){
                i=1;
                bigBox.css("left",0);
            }
            bigBox.stop().animate({left:-i*Ewidth},1000);
            if(i>2){
            smallBox.eq(0).addClass("active").siblings().removeClass("active");
            }else{

                smallBox.eq(i).addClass("active").siblings().removeClass("active");
            }

        }
        function moveLeft(){
            i--;
            if(i<0){
                i=2;
                bigBox.css("left",-(i+1)*Ewidth);
            }
            bigBox.stop().animate({left:-i*Ewidth},1000);
            smallBox.eq(i).addClass("active").siblings().removeClass("active");
        }


    }

});