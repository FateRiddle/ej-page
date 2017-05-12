/**
 * Created by Administrator on 2017/4/19.
 */
$(window).scroll(function(){
    //var msg = $(".construct_B");
    var item = $(".marginL span");
    var items = $(".marginR span");
    var windowHeight = $(window).height();
    var Scroll = $(document).scrollTop();
    //console.log(windowHeight,Scroll);
    //if((msg.offset().top - Scroll -windowHeight)<=0){
    //    msg.fadeIn(1500);
    //}
    for(var i=0;i<item.length;i++){
        if(($(item[i]).offset().top - Scroll - windowHeight)<= -100){
            $(item[i]).addClass("activeL");
        }
    }
    for(var i=0;i<items.length;i++){
        if(($(items[i]).offset().top - Scroll - windowHeight)<= -100){
            $(items[i]).addClass("activeR");
        }
    }
});

$(document).ready(function(){
	$(".nav .nav_a a:eq(1)").css("color","#FFC61E");
	$(".constr_button").click(function(){
		location.href="null.html";
	});
});
