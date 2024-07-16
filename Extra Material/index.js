var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
var body = document.querySelector("#main");

body.addEventListener("mousemove",function(e){
    // var y = e.clientY;
    // var x = e.clientX;
    cursor.style.left = e.x+"px";
    cursor.style.top = e.y+"px";
});

body.addEventListener("mousemove",function(e){
    // var y = e.clientY;
    // var x = e.clientX;
    cursor2.style.left = e.x+"px";
    cursor2.style.top = e.y+"px";
});