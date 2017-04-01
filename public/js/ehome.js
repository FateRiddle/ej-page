/**
 * Created by Administrator on 2017/3/21.
 */
//侧栏选项切换
$('#sideClick li').on('click',function(){
    $(this).addClass('boxActive').siblings().removeClass('boxActive');
    var price=$(this).children('p').html().split('').slice(1,4).join('');
    $('.price span').html(price);
})
//l轮播
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