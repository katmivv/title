function work(){ 
    let cin = document.getElementById("cin") 
    let vistkl = cin.value; 
    let text2 = document.createElement("p"); 
    text2.innerHTML = "Nice to meet u, " + vistkl + "! Some more text"; 
    let gamepomenbshe = document.getElementById("gamepomenbshe"); 
    gamepomenbshe.appendChild(text2);

    let input2 = document.createElement("input"); 
    input2.id = "cin";
    input2.placeholder = "type smth";  
    gamepomenbshe.appendChild(input2);

    let knpk2 = document.createElement("a"); 
    knpk2.classList.add("knpk"); 
    knpk2.innerHTML = "Next";
    knpk2.setAttribute("onclick", "work2()")
    gamepomenbshe.appendChild(knpk2);
}

function work2(){
    let text3 = document.createElement("p"); 
    text3.innerHTML = "The End"; 
    let gamepomenbshe = document.getElementById("gamepomenbshe"); 
    gamepomenbshe.appendChild(text3);
}
