/**
 * Created by Administrator on 2017/3/24.
 */
var oUl = document.getElementById("experience_wrap");
var liAll = oUl.getElementsByTagName("li");
var oWrap = document.getElementById("experience_wraps");

var myAttr = [{
    "left": 10.9,
    "zindex": 2,
    "scale": 0.8,
    "index": 0,
    "oc": 0.4
}, {
    "left":0,
    "zindex": 3,
    "scale": 0.9,
    "index": 1,
    "oc": 0.6
}, {
    "left": 10.9,
    "zindex": 4,
    "scale": 1,
    "index": 2,
    "oc": 0
}, {
    "left": 22,
    "zindex": 3,
    "scale": 0.9,
    "index": 3,
    "oc": 0.6
}];
//体验馆轮播图
oWrap.style.height = (liAll[2].offsetWidth*0.8) + "px";
setStyle(liAll, myAttr)
function change(n) {
    for(var i = 0; i < n; i++) {
        var temp = myAttr[0];
        myAttr[0] = myAttr[1];
        myAttr[1] = myAttr[2];
        myAttr[2] = myAttr[3];
        myAttr[3] = temp;
    }
}
function changes(n) {
    for(var i = 0; i < n; i++) {
        var temp = myAttr[0];
        myAttr[0] = myAttr[3];
        myAttr[3] = myAttr[2];
        myAttr[2] = myAttr[1];
        myAttr[1] = temp;
    }
}
var times = setInterval(startMove, 3000);
function startMove() {
    change(1);
    setStyle(liAll, myAttr)
}
function startMoves() {
    setTimeout("startMove()","3000");
    changes(1);
    setStyle(liAll, myAttr)
}
function setStyle(elements, styleArr) {
    for(var i = 0; i < elements.length; i++) {
        elements[i].style.left = styleArr[i].left + "%";
        elements[i].style.zIndex = styleArr[i].zindex;
        elements[i].style.transform = "scale(" + styleArr[i].scale + ")";
        elements[i].isIndex = styleArr[i].index;
        elements[i].lastElementChild.style.opacity = styleArr[i].oc;
    }
}
var startX = endX = delaX = 0;
for(var i = 0; i < liAll.length; i++) {
    liAll[i].addEventListener('touchstart',function (event) {
        var touch = event.targetTouches[0];
        startX = touch.pageX


    },false);
    liAll[i].addEventListener('touchmove',function (event) {
        var touch = event.targetTouches[0];
        endX = touch.pageX;

        delaX = startX - endX;
    },false);
    liAll[i].addEventListener("touchend",function (event) {
        if (delaX > 0){
            startMoves();
        }
        if (delaX < 0){
            startMove();
        }
    },false)
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
