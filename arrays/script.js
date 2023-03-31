//ARRAY
const fruits = ["Mango","Apple","Grapes","Melon"]; 
loadFruits();

function submit() {
    var input = document.getElementById("input").value;
    fruits.push(input);
    document.getElementById("input").value ="";
    loadFruits();
}

function remove(index) 
{ 
   for(var i=0; i<fruits.length;i++)
   { 
       if(i==index) {
          fruits.splice(index,1);
       }
   }
   loadFruits();
}

function loadFruits(){
   var output = document.getElementById("output");
   output.innerHTML="";
   for(var i=0; i<fruits.length;i++)
   { 
      const deleteBtn = "<button onclick='remove("+i+")'>DELETE</button>"
      const card = "<div class='card'>"+fruits[i]+deleteBtn +"</div>";
      output.innerHTML += card;
   } 
}