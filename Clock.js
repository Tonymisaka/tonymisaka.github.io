let bigbox = document.querySelector(".bigbox");
let paperlist = ["./wallpaper1.jpg", "./wallpaper2.jpg", "./wallpaper3.jpg", "./wallpaper4.jpg", "./wallpaper5.jpg", "./wallpaper6.jpg", "./wallpaper7.jpg"];
let dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let body = document.querySelector("body");
let comments = document.querySelector(".comments");
let textarea = document.querySelector("textarea");

setInterval(function(){
    let date = new Date();
    let hours = date.getHours();
    if(hours>=0 && hours<=9){
        hours = "0"+hours;
    }
    
    let minutes = date.getMinutes();

    if(minutes>=0 && minutes<=9){
        minutes = "0"+minutes;
    }

    let days = date.getDay();
    let dayss = dayList[days];
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let dates = date.getDate();

    bigbox.innerHTML = `
        <p id = "timee">${hours} : ${minutes}</p>
        <p id = "datee">${dayss} ${year}.${month}.${dates} </p>
        <p id = "linkk"><a href = "http://www.tonymisaka.cn" target="_blank">@Tonymisaka.cn</a></p>
    `

}, 1000);


let num = -1;
let imgg = new Image();
    setInterval(function(){
        ++num;
        
        imgg.src = paperlist[num];
        imgg.addEventListener("load", function(){
           body.style.backgroundImage = `url(${imgg.src})`;

        })
        
        if (num == 6){
            num = -1;
        }
    }, 5000);


let commbox = document.querySelector(".comments");
let sumb = document.querySelector(".sumb");
let textt = document.querySelector(".textt");
let com = document.querySelector(".com")
textt.value = "";
textt.addEventListener('click', function(){
    textt.style.borderColor = "rgba(0,0,0,0)";
    textt.style.outline = "none";
    textt.style.backgroundColor = "rgba(233, 233, 233, 0.4)";

})

textt.addEventListener('mouseleave', function(){
    textt.style.borderColor = "rgba(0,0,0,0)";
    textt.style.borderWidth = 0;
    textt.style.backgroundColor = "rgba(233, 233, 233, 0.2)";

})

sumb.addEventListener('click', function(){
    if(!textt.value==""){
            let content = textt.value;
    let div = document.createElement("div");
    div.className = "divv";
    div.innerHTML = `
        <p>${content}</p><span>delete</span>
    `;
    com.insertBefore(div, com.children[0]);
    let x = div.children[1];
    x.addEventListener("click", function(){
        x.parentNode.parentNode.removeChild(div);
    })
    }

    textt.value = "";
});

if(window.innerWidth<window.innerHeight){
    bigbox.style.width = "100%";
    bigbox.style.paddingBottom = "2%";
    comments.style.width = "100%";
    comments.style.padding = "30px 0px";
    textarea.cols = "50";
}

textarea.addEventListener("keydown", function(e){
    if(e.key == "Enter"){
        sumb.click();
    }
});
    





