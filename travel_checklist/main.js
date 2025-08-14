let itemList = [];
let addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", addList);

function addList(){
    let item = document.getElementById("item").value;
    if(item != null){
        itemList.push(item);
        document.getElementById("item").value = "";
        document.getElementById("item").focus();
    }
    showList();
}

function showList(){
    let list = "<ul>";
    for(let i=0;i<itemList.length;i++){
        list += `<li>${itemList[i]}<span class="close" id=${i}>X</span></li>`;
    }
    list += "</ul>";
    document.getElementById("item-list").innerHTML = list;

    let remove = document.querySelectorAll(".close");
    for(let i=0;i<remove.length;i++){
        remove[i].addEventListener("click", removeList);
    }
    
}

function removeList(){
    let id = this.getAttribute("id");
    itemList.splice(id,1);
    showList();
}