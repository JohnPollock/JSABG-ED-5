let goshDiv = document.getElementById("div1");
let goshDivTitle = goshDiv.getAttribute("title");
window.alert(goshDivTitle);

let seeYouDiv = document.createElement("div");
seeYouDiv.setAttribute("title", "Lucky!");
seeYouDiv.appendChild(document.createTextNode("See you!"));
goshDiv.appendChild(seeYouDiv);
