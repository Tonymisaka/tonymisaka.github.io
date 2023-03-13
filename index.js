let doge = document.querySelector(".dogem");
document.addEventListener("mousemove", function(e){
    doge.style.left = e.pageX + 20 + "px";
    doge.style.top = e.pageY + 20+ "px";
});