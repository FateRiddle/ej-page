/**
 *
 * Created by Administrator on 2017/3/23.
 */
$(function(){
    $('.feLeft li:even').addClass('yellowBg');
    $('.feLeft li:odd').addClass('whiteBg');
//    轮播图
    carsouel('.img','.num');
    carsouel('.img1','.num1');
    //carsouel('.img1','.num1');
    // 专业量房部分尺寸配置
 var h= $('.feRight').height();
    console.log(h);
    var ht=parseInt(h/5);
    $('.feLeft li').css({"height":ht,"line-height":ht+'px'});


});
//两个ul的class名
function  carsouel(b,c){
    var i=0;
    var timer=null;
    for (var j = 0; j < $(b+' li').length; j++) {  //创建圆点
        $(c).append('<li></li>')
    }
    $(c+' li').first().addClass('active'); //给第一个圆点添加样式

    var firstimg=$(b+' li').first().clone(); //复制第一张图片
    $(b).append(firstimg).width($(b+' li').length*($(b+' img').width())); //将第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度

    //判断左右滑动切换
    $(b).on("touchstart", function(e) {
        e.preventDefault();
        startX = e.originalEvent.changedTouches[0].pageX;
        //                            e.stopPropagation();
        return false;
    });
    $(b).on("touchend", function(e) {
                                  e.preventDefault();
        //                            e.stopPropagation();
        moveEndX = e.originalEvent.changedTouches[0].pageX,
            X = moveEndX - startX,
            console.log(X)
        if ( X > 0 ) {
            clearInterval(timer);
            i--;
            if (i==-1) {
                i=$(b+' li').length-2;
                $(b).css({left:-($('.img li').length-1)*$(b+' img').width()});
            }
            $(b).stop().animate({left:-i*$(b+' img').width()},500);
            $(c+' li').eq(i).addClass('active').siblings().removeClass('active');
        }
        else if ( X < 0 ) {
            clearInterval(timer);
            i++;
            if (i==$(b+' li').length) {
                i=1; //这里不是i=0
                $(b).css({left:0}); //保证无缝轮播，设置left值
            };

            $(b).stop().animate({left:-i*$(b+' img').width()},300);
            if (i==$(b+' li').length-1) {   //设置小圆点指示
                $(c+' li').eq(0).addClass('active').siblings().removeClass('active');
            }else{
                $(c+' li').eq(i).addClass('active').siblings().removeClass('active');
            }
        }
        return false;
    });
    //定时器自动播放
    timer=setInterval(function(){
        i++;
        if (i==$(b+' li').length) {
            i=1;
            $(b).css({left:0});
        };

        $(b).stop().animate({left:-i*$(b+' img').width()},300);
        if (i==$(b+' li').length-1) {
            $(c+' li').eq(0).addClass('active').siblings().removeClass('active');
        }else{
            $(c+' li').eq(i).addClass('active').siblings().removeClass('active');
        }
    },1500);

}

//顶部轮播
var oBa = document.getElementsByClassName("banner");
var oBm = document.getElementsByClassName("banner_img");
oBm[0].style.width = (oBa[0].offsetWidth) + "px";
oBm[1].style.width = (oBa[0].offsetWidth) + "px";
oBm[2].style.width = (oBa[0].offsetWidth) + "px";
oBm[3].style.width = (oBa[0].offsetWidth) + "px";
oBm[4].style.width = (oBa[0].offsetWidth) + "px";
oBm[5].style.width = (oBa[0].offsetWidth) + "px";
oBa[0].style.width = (oBa[0].offsetWidth*6) + "px";
var time = setInterval(function () {
    oBa[0].style.left = (oBa[0].offsetLeft - oBa[0].offsetWidth/6) + "px";
    if (oBa[0].offsetLeft == -oBa[0].offsetWidth/2 ){
        oBa[0].style.left = 0 + "px";
    }
},2000);