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
        descriptionElement.innerText = "Quand t'es dans le désert depuis trop longtemps... Tu t'demandes à qui ça sert toutes les règles un peu truquées du jeu qu'on veut te faire jouer les yeux bandés !"
    }
    if (xPos === 2 && yPos === 9) {
        updateImage("bg_desert.png")
        descriptionElement.innerText = "Ce désert est tellement étrange. Il ne doit pas faire plus de 25°. On pourrait presque s'installer là-bas."
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
        descriptionElement.innerText = "Me voilà au beau milieu de nulle part. Une princesse doit être retrouvée. Utilisez l'écran tactile pour vous déplacer."
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
        descriptionElement.innerText = "De l'herbe au sable, il n'y a qu'un pas ! Le monde est trop petit pour moi tout seul."
    }
    if (xPos === 3 && yPos === 10) {
        updateImage("bg_neige.png")
        descriptionElement.innerText = "C'est quand même bizarre comment la prairie, le désert et la plaine enneigée se côtoient !"
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
        descriptionElement.innerText = "Que c'est beau, la mer qui s'étend vers l'infini... Dommage que je ne sache pas nager."
    }
    if (xPos === 5 && yPos === 3) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "La mer est à proximité. Un vent frais mais faible souffle. C'est tellement agréable..."
    }
    if (xPos === 5 && yPos === 4) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Je suis sur une dune près de la mer. La vue est à couper le souffle ! Je devrais faire attention à ne pas tomber."
    }
    if (xPos === 5 && yPos === 5) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "La mer d'un côté, la montagne de l'autre. La topologie de cet endroit est tellement particulière."
    }
    if (xPos === 5 && yPos === 6) {
        updateImage("bg_herbe.png")
        if (!items.seeds) {
            descriptionElement.innerText = "Des dizaines d'oiseaux sont en train de voler autour de moi. Il serait risqué de passer au travers."
            lockTouch()
            addButtonChoice(["Forcer le passage", "Rebrousser chemin"])
        } else {
            descriptionElement.innerText = "Les oiseaux qui étaient là se sont dispersés."
        }
    }
    if (xPos === 5 && yPos === 7) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Des arbres et du sable à moins de 100 mètres d'écart ! C'est complétement insensé !"
    }
    if (xPos === 5 && yPos === 8) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Enclavée entre la montagne et le désert, cette forêt semble être étouffée."
    }
    if (xPos === 5 && yPos === 9) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Encore meilleur. Désert au nord, neige à l'est et montagne au sud ! On dirait un potage de ma grand-mère !"
    }
    if (xPos === 5 && yPos === 10) {
        updateImage("bg_neige.png")
        descriptionElement.innerText = "J'ai l'impression d'être la Reine des Neiges ! Le paysage est paralysé par le gel."
    }
    if (xPos === 5 && yPos === 11) {
        updateImage("bg_neige.png")
        descriptionElement.innerText = "Ce chemin enneigé semble s'étendre à l'infini..."
    }
    if (xPos === 5 && yPos === 12) {
        updateImage("bg_neige.png")
        descriptionElement.innerText = "Une impasse. Je suis en train de geler ! Brrrr !"
    }
}