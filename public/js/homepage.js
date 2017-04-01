/**
 * Created by Administrator on 2017/3/22.
 */


var oP = document.getElementsByClassName("designers_p");
var oD = document.getElementsByClassName("designers_sgt");
var oS = document.getElementsByClassName('designers_span');
var oSD = document.getElementsByClassName('sp1');
var oFDP = document.getElementsByClassName("fd_p");
var oFD = document.getElementById("fd");
var oBa = document.getElementsByClassName("banner");
var oBm = document.getElementsByClassName("banner_img");
var oBrs = document.getElementById("brand_bgs");
var oUl = document.getElementById("experience_wrap");
var liAll = oUl.getElementsByTagName("li");
var oWrap = document.getElementById("experience_wraps");
oP[0].style.left = (oD[0].offsetWidth - oP[0].offsetWidth)/4 + "px";
oP[1].style.left = (oD[0].offsetWidth - oP[0].offsetWidth)/2 + "px";
oS[0] .style.left =(oD[0].offsetWidth/2 - oS[0].offsetWidth) + "px";
oS[1] .style.left =(oD[0].offsetWidth/2 - oS[1].offsetWidth) + "px";
oSD[0] .style.left =oD[0].offsetWidth/2 + "px";
oSD[1] .style.left =oD[0].offsetWidth/2 + "px";
oFDP[0].style.top = (oFD.offsetHeight-oFDP[0].offsetHeight)/2 + "px";
oFDP[1].style.top = (oFD.offsetHeight-oFDP[1].offsetHeight)/2 + "px";
oBm[0].style.width = (oBa[0].offsetWidth) + "px";
oBm[1].style.width = (oBa[0].offsetWidth) + "px";
oBm[2].style.width = (oBa[0].offsetWidth) + "px";
oBm[3].style.width = (oBa[0].offsetWidth) + "px";
oBm[4].style.width = (oBa[0].offsetWidth) + "px";
oBm[5].style.width = (oBa[0].offsetWidth) + "px";
oBa[0].style.width = (oBa[0].offsetWidth*6) + "px";
//头部轮播图
var time = setInterval(function () {
   oBa[0].style.left = (oBa[0].offsetLeft - oBa[0].offsetWidth/6) + "px";
     if (oBa[0].offsetLeft == -oBa[0].offsetWidth/2 ){
         oBa[0].style.left = 0 + "px";
     }
},2000);
//品牌轮播图
var speed = 1;

var timer = setInterval(function () {
    oBrs.style.left = (oBrs.offsetLeft - speed) +"px";
    if (oBrs.offsetLeft <= -(oBrs.offsetWidth/2 -oBrs.offsetWidth*0.039)){
        oBrs.style.left = 0 + "px";
    }
},16);
//体验馆轮播图
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
//装修轮播图
var oIm = document.getElementsByClassName("result_m");
var oW = document.getElementById("result_where");
var oWD = oW.getElementsByTagName("div");
var oSW = document.getElementById("result_show");
var liSW =oSW.getElementsByTagName("li");
var index = 0;
var this_i =0;
var this_m = 0;
console.log(oWD);
var timr = setInterval(function () {
    var bj = index;
    index++;
    if (index >= 5){
        index =0;
    }
    liSW[bj].style.display = "none";
    liSW[index].style.display = 'block';
    oWD[bj].style.backgroundColor = "#e2dcdd";
    oWD[index].style.backgroundColor='orange';
},2000);
for (var i=0; i<oWD.length;i++){
    oWD[i].addEventListener('touchstart',function (event) {
        if (this.innerHTML === '客厅'){
            this_i = 0;
        }
        if (this.innerHTML === '厨房'){
            this_i = 1;
        }
        if (this.innerHTML === '卧室'){
            this_i = 2;
        }
        if (this.innerHTML === '卫浴'){
            this_i = 3;
        }
        if (this.innerHTML === '阳台'){
            this_i = 4;
        }
        oWD[index].style.backgroundColor='#e2dcdd';
        liSW[index].style.display = 'none';
        liSW[this_i].style.display = 'block';
        this.style.backgroundColor="orange";
        index = this_i;

    },false);
}
