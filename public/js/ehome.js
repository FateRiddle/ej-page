/**
 * Created by Administrator on 2017/3/21.
 */
var timer;
var data=[
    ["279brand1","279brand2","279brand3","279brand3","279brand4","279brand2","279brand5","279brand6","279brand3","279brand2","279brand3","279brand7"],
    ["279brand2","279brand2","279brand2","279brand2","279brand2","279brand2","279brand2","279brand2","279brand2","279brand2","279brand2","279brand2"],
    ["279brand3","279brand3","279brand3","279brand3","279brand3","279brand3","279brand3","279brand3","279brand3","279brand3","279brand3","279brand3"],
    ["399brand1","399brand2","399brand3","399brand3","399brand4","399brand5","399brand6","399brand7","399brand8","399brand8","399brand9","399brand10"],
    ["279brand2","599brand1","399brand3","399brand4","399brand4","399brand5","279brand5","599brand2","399brand8","399brand8","399brand9","599brand3"],
    ["799brand1","599brand1","399brand3","399brand5","399brand4","399brand4","799brand2","599brand2","799brand3","799brand4","399brand9","799brand5"]
];
housedata=[
    ["279img1","279img3","279img4","279img5","279img2"],
    ["339imgd1","339imgd3","339imgd4","339imgd5","339imgd2"],
    ["339imgj2","339imgj4","339imgj5","339imgj1","339imgj3"],
    ["339img2","339img3","339img4","339img1","339img5"],
    ["599img5","599img1","599img2","599img3","599img4"],
    ["799img1","799img2","799img4","799img3","799img5"]
]
//侧栏选项切换
$('#sideClick li').on('click',function(){
    var i=$(this).index();
    $(this).addClass('boxActive').siblings().removeClass('boxActive');
    var price=$(this).children('p').html().split('').slice(1,4).join('');
    $('.price span').html(price);
    //变换头部背景
    $(".E-top").css("backgroundImage","url('images/topbg"+i+".jpg')");
    // 改变图片组
    $(".e-switch-md ul img").each(function(index,src){
        src.src="images/"+housedata[i][index]+".jpg";
    });
    // 改变品牌组
    $(".E-brandbox li img").each(function(index,src){
        src.src="images/"+data[i][index]+".png";
    });
});

//设置高
$('#brandHeight li').width();
$("#brandHeight li").height($('#brandHeight li').width());
//l轮播
function resultMove(){
var oIm = document.getElementsByClassName("result_m");
var oW = document.getElementById("result_where");
var oWD = oW.getElementsByTagName("div");
var oSW = document.getElementById("result_show");
var liSW =oSW.getElementsByTagName("li");
var index = 0;
var this_i =0;
var this_m = 0;
for(var n=0;n<liSW.length;n++){
    liSW [n].addEventListener("click",function(e){
        e.preventDefault();
    })}
  timer = setInterval(function () {
    var bj = index;
    index++;
    if (index >= 5){
        index =0;
    }
    liSW[bj].style.display = "none";
    liSW[index].style.display = 'block';
    oWD[bj].style.backgroundColor = "rgba(0,0,0,0.6)";
    oWD[index].style.backgroundColor='#ffc519';
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
        oWD[index].style.backgroundColor='rgba(0,0,0,0.6)';
        liSW[index].style.display = 'none';
        liSW[this_i].style.display = 'block';
        this.style.backgroundColor="#ffc519";
        index = this_i;

    },false);
}
}
resultMove();
//禁止图片点击
var shouImg=document.getElementById("shouImg");
shouImg.addEventListener("click",function(e){
    e.preventDefault();
});
