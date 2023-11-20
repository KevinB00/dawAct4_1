 document.getElementById("btnCambiar").addEventListener("click", function(){
     ul = document.getElementsByTagName("ul")[0];
     li = ul.getElementsByTagName("li");
     for (let i = li.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [li[i], li[j]] = [li[j], li[i]];
         ul.appendChild(li[i]);
     }
 })