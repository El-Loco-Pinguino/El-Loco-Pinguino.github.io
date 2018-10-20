const descriptionElement = document.getElementById("description")

const lockTouch = () => {
    document.getElementById("allowTouch").setAttribute("id", "noTouch")
}

const permitTouch = () => {
    document.getElementById("noTouch").setAttribute("id", "allowTouch")
}

const showEvent = (xPos, yPos) => {
    if (xPos === 0 && yPos === 0) {
        updateImage("bg_herbe.png")
        if (!items.seeds) {
            descriptionElement.innerText = "Un sac de graines. Je vais le prendre au cas où."
            items.seeds = true
        } else {
            descriptionElement.innerText = "Hum ? Je suis dans une impasse..."
        }
    }
    if (xPos === 0 && yPos === 1) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 0 && yPos === 2) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 0 && yPos === 3) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 0 && yPos === 4) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 0 && yPos === 5) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 0 && yPos === 6) {
        updateImage("bg_desert.png")
        if (!items.money) {
            descriptionElement.innerText = "Un gobelin me barre le passage. Il dit qu'il faut payer un péage pour passer par ici."
            lockTouch()
            addButtonChoice(["Insister", "Faire demi-tour"])
        } else {
            descriptionElement.innerText = "Le gobelin péagiste est parti avec mon argent."
        }
    }
    if (xPos === 0 && yPos === 7) {
        updateImage("bg_desert.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 1 && yPos === 0) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 1 && yPos === 1) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 1 && yPos === 2) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 1 && yPos === 3) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 1 && yPos === 4) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 1 && yPos === 5) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 1 && yPos === 6) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 1 && yPos === 7) {
        updateImage("bg_desert.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 1 && yPos === 11) {
        updateImage("bg_neige.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 1 && yPos === 12) {
        updateImage("bg_neige.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 2 && yPos === 0) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 2 && yPos === 1) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 2 && yPos === 2) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 2 && yPos === 3) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 2 && yPos === 4) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 2 && yPos === 5) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 2 && yPos === 6) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 2 && yPos === 7) {
        updateImage("bg_desert.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 2 && yPos === 8) {
        updateImage("bg_desert.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 2 && yPos === 9) {
        updateImage("bg_desert.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 2 && yPos === 11) {
        updateImage("bg_neige.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 2 && yPos === 12) {
        updateImage("bg_neige.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 3 && yPos === 0) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 3 && yPos === 1) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 3 && yPos === 2) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 3 && yPos === 3) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 3 && yPos === 4) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 3 && yPos === 5) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 3 && yPos === 6) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 3 && yPos === 7) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 3 && yPos === 8) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 3 && yPos === 9) {
        updateImage("bg_desert.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 3 && yPos === 10) {
        updateImage("bg_neige.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 3 && yPos === 11) {
        updateImage("bg_neige.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 3 && yPos === 12) {
        updateImage("bg_neige.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 4 && yPos === 2) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 4 && yPos === 3) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 4 && yPos === 4) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 4 && yPos === 5) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 4 && yPos === 6) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 4 && yPos === 7) {
        updateImage("bg_desert.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 4 && yPos === 8) {
        updateImage("bg_desert.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 4 && yPos === 9) {
        updateImage("bg_desert.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 4 && yPos === 10) {
        updateImage("bg_neige.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 4 && yPos === 11) {
        updateImage("bg_neige.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 4 && yPos === 12) {
        updateImage("bg_neige.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 5 && yPos === 2) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 5 && yPos === 3) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 5 && yPos === 4) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 5 && yPos === 5) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 5 && yPos === 6) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 5 && yPos === 7) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 5 && yPos === 8) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 5 && yPos === 9) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 5 && yPos === 10) {
        updateImage("bg_neige.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 5 && yPos === 11) {
        updateImage("bg_neige.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 5 && yPos === 12) {
        updateImage("bg_neige.png")
        descriptionElement.innerText = "Crayon !"
    }
}