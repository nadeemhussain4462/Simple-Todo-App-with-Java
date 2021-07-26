var a = document.getElementById('main');
var b = document.getElementById('inpText')
function getElement(){
    var newElement = document.createElement('P')
    var value = b.value
    var text = value
    text = document.createTextNode(text)
    newElement.appendChild(text)
    a.appendChild(newElement)
    b.value = " "

    var editBtn = document.createElement('BUTTON')
    var editBtnText = document.createTextNode(' EDIT ')
    editBtn.appendChild(editBtnText)
    editBtn.setAttribute('onclick','editTodo(this)')
    newElement.appendChild(editBtn)


    var deleteBtn = document.createElement('BUTTON')
    var deleteBtnText = document.createTextNode(' DELETE ')
    deleteBtn.appendChild(deleteBtnText)
    deleteBtn.setAttribute('onclick','deleteTodo(this)')
    newElement.appendChild(deleteBtn)


}

function editTodo(e){
    var proValue = e.parentNode.firstChild.nodeValue;
    var editBtnText = prompt( "Enter Value " ,proValue )
    e.parentNode.firstChild.nodeValue = editBtnText
}

function deleteTodo(e){ 
    e.parentNode.remove()
}

function deletAll(){
    a.innerHTML = ""
}

