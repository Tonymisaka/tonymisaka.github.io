let doge = document.querySelector(".dogem");
document.addEventListener("mousemove", function(e){
    doge.style.left = e.clientX + 20 + "px";
    doge.style.top = e.clientY + 20+ "px";
});