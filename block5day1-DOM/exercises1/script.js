let rodape = document.getElementById("footer-container");
rodape.style.backgroundColor = "rgb(3, 66, 15)";

let urgencia = document.querySelectorAll(".emergency-tasks h3");
 for (i=0; i<urgencia.length; i+=1) {
  urgencia[i].style.backgroundColor = "purple";
 }

 let urg2 = document.querySelectorAll(".no-emergency-tasks h3");
 for (i=0; i<urg2.length; i+=1) {
  urg2[i].style.backgroundColor = "black";
 }

 let bloco = document.getElementsByTagName("section");
 bloco[0].style.backgroundColor = "coral"
 bloco[1].style.backgroundColor = "yellow"

 let head = document.getElementById("header-container");
 head.style.backgroundColor = "rgb(3,150,7)"