const buttonElement = document.getElementById("description")

const addButtonChoice = listChoice => {
    listChoice.forEach(el => {
        buttonElement.innerHTML += `<button onclick="${el.replace(/\s|\-/g,'').toLowerCase()}()">${el}</button>`
    })
}