function makePro(title, content, date, link){
     let prul = document.querySelector(".prul");
     let prli = document.createElement("li");
     prli.innerHTML = `
         <h2>${title}</h2>
         <p>${content}</p>
         <p>Date: ${date}</p>
         <div>
             <span>Link:</span> <a href="${link}">${link}</a>
         </div>
     `;

     prul.appendChild(prli);

}

     let title = "";
     let content = "";
     let date = "";
     let link = "";
    

     title = "Reactive Realtime Clock";
     content = "Using a clock to remember what time is it is always important to me. This time, I use HTML, CSS, and Javascript to create a clock website that can change beautiful 4k wallpapers through times, show correct time, and enable users to write down immediate comments"
     date = "11.2022 - 1.2023";
     link = "https://tonymisaka.github.io/Clock.html";
     makePro(title, content, date, link);



     title = "Personal Portfolio Website Development";
     content = "In this project, I create a reactive website using HTML5, CSS3, and Javascript in ES6 version. This project is aimed for providing myself a platform to show my technical and project experience, and also my lifestyle. This website have not only English version run on github.io but also have a Chinese version run on my own server. Through searching my name using Baidu and Google, the users can find this website and know who I am."
     date = "12.2021 - Current";
     link = "http://www.tonymisaka.cn"

     
     makePro(title, content, date, link);

     title = "Beijing TianZhengHengTong Technology Company Website";
     content = "For this project, I mainly in charge of designing and implement the webiste of one start up conmpany Beijing TianZhengHengTong technology. By typically using HTML, CSS, Javascript, I realize the design of their companies' main page, product selling page and product intoductions"
     date = "6.2022 - 9.2022"
     link = "http://43.143.101.16/"

     makePro(title, content, date, link);