const input = document.querySelector('input')
const btn = document.querySelector('button')
const div = document.querySelector('div')
const output = document.createElement('div')
const delBtn = document.createElement('button')
const btnNodeText = document.createTextNode('Radera')

const addDeleteButton = function() {
    div.appendChild(delBtn)
    delBtn.appendChild(btnNodeText)
}

btn.onclick = function() {
    const value = input.value
    
    if(value){
        localStorage.setItem('name', value)
        location.reload()
    }
}

delBtn.onclick = function(){
    localStorage.clear()
    output.innerHTML = ''
    div.removeChild(output)
    div.removeChild(delBtn)
}

for (let i=0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    const value = localStorage.getItem(key)

    div.appendChild(output)
    output.innerHTML = `${value}`
    addDeleteButton()
}
