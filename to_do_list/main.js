// let addBtn = document.querySelector("#addBtn");
// addBtn.addEventListener("click", newRegister);

let form = document.querySelector("form");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    newRegister();
})

function newRegister(){
    let newList = document.createElement("li");
    newList.setAttribute("class", "items");
    let itemList = document.querySelector("#item-list");
    let item = document.querySelector("#item");
    let newText = document.createTextNode(item.value);
    newList.appendChild(newText);
    item.value = "";
    item.focus();

    let newS = document.createElement("span");
    let delText = document.createTextNode("X");
    newS.setAttribute("class", "del");
    newS.appendChild(delText);
    newList.appendChild(newS);
    itemList.insertBefore(newList, itemList.children[0]);

    let delBtn = document.querySelectorAll(".del");
    for(let i=0;i<delBtn.length;i++){
        delBtn[i].addEventListener("click", function(){
            if(this.parentNode.parentNode){
                this.parentNode.parentNode.removeChild(this.parentNode);
            }
        })
    }

    let colorText = document.querySelectorAll(".items");
    for(let i=0;i<colorText.length;i++){
        colorText[i].addEventListener("click", function(){
            this.style.color = "#ccc";
        })
        
    }

}