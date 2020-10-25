var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var deleteBtns = document.getElementsByClassName("delete");

function inputLength() {
    return input.value.length;
}

for (i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", removeParent);
}


function createListElement() {
    var btn = document.createElement("button");
    var text = document.createTextNode("Delete");
    btn.appendChild(text);
    btn.addEventListener("click", removeParent);

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(btn);
    ul.appendChild(li);
    
    
    input.value = "";
}

ul.onclick = function(event) {
    var target = event.target;
    target.classList.toggle("done");
    
}

function removeParent (e) {
    e.target.parentNode.remove();
}

function addListAfterCLick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.key === 'Enter') {
        createListElement();
    }
}

function toggleElement(event) {
    var x = event.currentTarget;
    x.classList.toggle("done");
}


button.addEventListener("click", addListAfterCLick);

input.addEventListener("keypress", addListAfterKeypress);





