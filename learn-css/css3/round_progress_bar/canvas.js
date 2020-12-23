var canvas = document.getElementById("mycanvas");
var context = canvas.getContext("2d");
function draw(i){
    // 大圆框
    // context.beginPath();
    // context.lineWidth = 1;
    // context.arc(50,50,46,0,Math.PI*2);
    // context.strokeStyle = "grey";
    // context.stroke();
    // 大圆
    context.beginPath();
    var grd = context.createLinearGradient(15,15,80,80);
    grd.addColorStop(0,"#DAE9D9");
    // grd.addColorStop(0.2,"#A6EBF6");
    // grd.addColorStop(0.4,"#D3CBF3");
    grd.addColorStop(0.6,"#8FABF1");
    // grd.addColorStop(0.8,"#FAD4DD");
    grd.addColorStop(1,"#FBE9E6");
    context.arc(50,50,38,0,Math.PI*2*(i/100));
    context.lineWidth = 16;
    context.strokeStyle = grd;
    context.stroke();
//          context.fillStyle = grd;
//          context.fill();
    // 小圆
    // context.beginPath();
    // context.arc(50,50,30,0,Math.PI*2);
    // context.lineWidth = 1;
    // context.strokeStyle = "grey";
    // context.stroke();
    // context.fillStyle = "white";
    // context.fill();
    // 字
    context.beginPath();
    context.textBaseline = "middle";
    context.textAlign = "center";
    context.font = "20px Arial";
    context.fillStyle = "black";
    context.fillText(i+"%",50,50);
}
var i = 0;
var progress = parseInt(canvas.innerHTML);
// console.log(progress);
var timer = setInterval(function(){
    if(i >= progress){
        clearInterval(timer);
    }
    context.clearRect(0,0,canvas.width,canvas.height);
    draw(i);
    i++;
},50);
