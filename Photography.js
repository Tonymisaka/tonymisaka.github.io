//insert a picture to the page
function makeLi(link){
    let ulbox = document.querySelector(".ulbox");
    let pbox = document.createElement("li");
    pbox.innerHTML=`
        <img src="${link}" width = 100%>
    `;
    ulbox.appendChild(pbox);
}

makeLi("./bird1.jpg");
makeLi("./suns.jpg");
makeLi("./cao.jpg");
makeLi("./hole.jpg");
makeLi("./window.jpg");
makeLi("./redwall.jpg");

