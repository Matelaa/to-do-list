function addTodo() {
    var content = document.getElementById('myInput').value
    var text = document.createTextNode(content)
    var li = document.createElement('li')
    li.appendChild(text)
    document.getElementById('listTodo').appendChild(li)
}