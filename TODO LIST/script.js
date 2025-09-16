const inputBox = document.getElementById("input-box")
const listcontainer = document.getElementById("list-container")

function addTask(){
    if(inputBox.value === ''){
        alert("You have to Enter some ")
    }  
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value   
        listcontainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML="x"
        li.appendChild(span)
    }
    inputBox.value = ""
    showData();
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        showData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        showData();
    }
},false)

function showData() {
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data")
}
showTask();