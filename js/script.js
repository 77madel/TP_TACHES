// const inputBox = document.getElementById("input-box");
// const inputBox1 = document.getElementById("input-box1");
// const inputBox2 = document.getElementById("input-box2");
    

 const listContainer = document.getElementById("list-container");

function ajouterTache(){

    let tache = document.forms["myForm"]["tache"].value;
    let date =  document.forms["myForm"]["date"].value;
    let priori = document.forms["myForm"]["priori"].value;
    

    if(tache == "" || date == "" || priori == "")
    {
        alert("Veuillez remplir le champs");
    
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = tache + " " + date + " " + priori;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    saveData();
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData()
{
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTaches(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTaches();