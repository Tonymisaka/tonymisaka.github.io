//insert a picture to the page
function makeLi(link){
    let ulbox = document.querySelector(".ulbox");
    let pbox = document.createElement("li");
    pbox.innerHTML=`
        <img src="${link}" width = 100%>
    `;
    ulbox.appendChild(pbox);
}

makeLi("./add116.jpg");
makeLi("./add11.jpg");
makeLi("./redwall.jpg");

makeLi("./hole.jpg");
makeLi("./add114.jpg");
makeLi("./add115.jpg");


makeLi("./add15.jpg");
makeLi("./suns.jpg");
makeLi("./cao.jpg");

makeLi("./add14.jpg");

makeLi("./add13.jpg");
makeLi("./add16.jpg");

makeLi("./add17.jpg");
makeLi("./add12.jpg");
makeLi("./add110.jpg");

makeLi("./add18.jpg");
makeLi("./add113.jpg");
makeLi("./window.jpg");


makeLi("./bird1.jpg");
makeLi("./add111.jpg");
makeLi("./add19.jpg");

makeLi("./add112.jpg");
