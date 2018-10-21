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
        descriptionElement.innerText = "Il y a plein de champignons autour de moi. Je n'en avais jamais vu de cette couleur-ci."
    }
    if (xPos === 0 && yPos === 2) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Un sentier très tranquille. Je vois des écureuils passer devant moi. Que c'est mignon !"
    }
    if (xPos === 0 && yPos === 3) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Un aigle vole en direction des montagnes !"
    }
    if (xPos === 0 && yPos === 4) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Je devrais songer à prendre note des endroits où je passe. Je pense que ça serait plus qu'utile."
    }
    if (xPos === 0 && yPos === 5) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Ah. Des gros rochers délimitent l'endroit d'où je suis actuellement du désert."
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
        descriptionElement.innerText = "Plusieurs scorpions sont visibles au loin. La faune est très variée."
    }
    if (xPos === 1 && yPos === 0) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Je commence à fatiguer un peu à force de marcher tout le temps ! Je me reposerais bien un peu."
    }
    if (xPos === 1 && yPos === 1) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Quelle verdure... L'air est tellement pur."
    }
    if (xPos === 1 && yPos === 2) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Des arbres géants sont tout autour de moi ! J'en ai mal au cou à regarder leur cîme."
    }
    if (xPos === 1 && yPos === 3) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Un deux trois nous irons au bois ! Faisons gaffe au loup quand même."
    }
    if (xPos === 1 && yPos === 4) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Il n'y a personne dans les parages. Que c'est calme... À part les oiseaux qui chantent, bien sûr."
    }
    if (xPos === 1 && yPos === 5) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Il y a plein de coccinelles sur les troncs. De toutes les couleurs j'aime en voir !"
    }
    if (xPos === 1 && yPos === 6) {
        updateImage("bg_herbe.png")
        if (!items.cape) {
            descriptionElement.innerText = "Ce gobelin gardait une cape chauffante. Elle me sera utile pour m'aventurer dans la plaine enneigée."
            items.cape = true
        } else {
            descriptionElement.innerText = "Il n'y a rien à faire par ici."
        }
    }
    if (xPos === 1 && yPos === 7) {
        updateImage("bg_desert.png")
        descriptionElement.innerText = "Il n'y a aucune végétation par ici. Que c'est triste ce désert..."
    }
    if (xPos === 1 && yPos === 11) {
        updateImage("bg_neige.png")
        descriptionElement.innerText = "!!! La princesse est inconsciente ! Elle a sans doute pris froid. Est-ce que je dois l'aider ?"
            lockTouch()
            addButtonChoice(["La secourir", "Ne rien faire"])
    }
    if (xPos === 1 && yPos === 12) {
        updateImage("bg_neige.png")
        descriptionElement.innerText = "Crayon !"
    }
    if (xPos === 2 && yPos === 0) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Ça manque de bâtiments par ici. Quel est cet endroit dans lequel j'ai atterri ?"
    }
    if (xPos === 2 && yPos === 1) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "On entend le bruit de la rivière. L'eau est tellement pure."
    }
    if (xPos === 2 && yPos === 2) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "J'ai le nez qui me grattouille un peu... Sans doute le pollen."
    }
    if (xPos === 2 && yPos === 3) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Un conseil: je devrais faire un plan de cet endroit. Je pense que ça m'aiderait pour plus tard."
    }
    if (xPos === 2 && yPos === 4) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Une petite brise de l'ouest souffle. C'est très agréable."
    }
    if (xPos === 2 && yPos === 5) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Un sentier sinueux. Pourquoi tout n'est pas fait de lignes droites ? Ça me fait marcher plus pour pas grand-chose."
    }
    if (xPos === 2 && yPos === 6) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "J'entends des gobelins gromeller au loin. J'ai l'impression d'être le héros d'un RPG !"
    }
    if (xPos === 2 && yPos === 7) {
        updateImage("bg_desert.png")
        descriptionElement.innerText = "Je ne vois que du sable, du sable, et encore que du sable !"
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
        descriptionElement.innerText = "Je m'enfonce dans les plaines enneigées. Je pense qu'on est près de la fin, et de la faim."
    }
    if (xPos === 2 && yPos === 12) {
        updateImage("bg_neige.png")
        descriptionElement.innerText = "Je ne comprends pas comment peut-on ne pas aimer mon humour."
    }
    if (xPos === 3 && yPos === 0) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Cette vallée est assez escarpée. Je pense qu'il pourrait y avoir quelque chose au bout du chemin."
    }
    if (xPos === 3 && yPos === 1) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Une vallée est à proximité. La montagne et la plaine ne forment plus qu'un seul corps..."
    }
    if (xPos === 3 && yPos === 2) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Une petite grotte se trouve devant moi. On pourrait trouver quelque chose dedans."
    }
    if (xPos === 3 && yPos === 3) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Je réalise à peine que je suis au beau milieu d'un endroit complétement inconnu. Qui sait ce que je pourrai trouver ici ?"
    }
    if (xPos === 3 && yPos === 4) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Me voilà au beau milieu de nulle part. Une princesse doit être retrouvée. Glissez votre doigt/pointeur sur l'écran tactile dans une direction pour partir vers cette dernière."
    }
    if (xPos === 3 && yPos === 5) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Beurk, un écureuil mort ! Ça ne présage rien de bon."
    }
    if (xPos === 3 && yPos === 6) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Si seulement j'avais pris mon ordinateur... Enfin, Internet n'existe pas ici !"
    }
    if (xPos === 3 && yPos === 7) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Des petites dunes de sable autour de moi. Le désert n'est pas loin."
    }
    if (xPos === 3 && yPos === 8) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Cerné par le sable du désert, cet espace de verdure restreint tente de lutter face aux pouvoirs de Mère Nature."
    }
    if (xPos === 3 && yPos === 9) {
        updateImage("bg_desert.png")
        descriptionElement.innerText = "De l'herbe au sable, il n'y a qu'un pas ! Le monde est trop petit pour moi tout seul."
    }
    if (xPos === 3 && yPos === 10) {
        updateImage("bg_neige.png")
        if (!items.cape) {
            descriptionElement.innerText = "Quel froid violent ! Je ne peux pas continuer."
            lockTouch()
            addButtonChoice(["Lutter au froid", "Abandonner"])
        } else {
            descriptionElement.innerText = "C'est quand même bizarre comment la prairie, le désert et la plaine enneigée se côtoient !"
        }
    }
    if (xPos === 3 && yPos === 11) {
        updateImage("bg_neige.png")
        descriptionElement.innerText = "De la neige, de la neige, et encore de la neige ! Bienvenue au Canada !"
    }
    if (xPos === 3 && yPos === 12) {
        updateImage("bg_neige.png")
        descriptionElement.innerText = "Yéti, y es-tu ? Enfin, vaudrait mieux pas. Parce qu'il peut mesurer plus de 3 mètres !"
    }
    if (xPos === 4 && yPos === 2) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Il fait sombre ! Je devrais rester sur mes gardes."
    }
    if (xPos === 4 && yPos === 3) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Aïe ! Je me suis pris un mur ! Il faut faire demi-tour."
    }
    if (xPos === 4 && yPos === 4) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "J'entends des oiseaux chanter. Que c'est apaisant..."
    }
    if (xPos === 4 && yPos === 5) {
        updateImage("bg_herbe.png")
        descriptionElement.innerText = "Je réfléchis à ce que je pourrais rencontrer ici. Un dragon ? Un clown tueur ? Le Grand Méchant Loup ? Faites vos jeux !"
    }
    if (xPos === 4 && yPos === 6) {
        updateImage("bg_herbe.png")
        if (!items.money) {
            descriptionElement.innerText = "Un peu d'argent. Y a pas de bar-tabac dans les environs, mais ça pourrait me servir."
            items.money = true
        } else {
            descriptionElement.innerText = "Il n'y a rien à faire par ici."
        }
    }
    if (xPos === 4 && yPos === 7) {
        updateImage("bg_desert.png")
        descriptionElement.innerText = "Je m'ennuie... Il n'y a personne dans les parages !"
    }
    if (xPos === 4 && yPos === 8) {
        updateImage("bg_desert.png")
        descriptionElement.innerText = "Le sable chaud me brûle les pieds. Je devrais faire vite."
    }
    if (xPos === 4 && yPos === 9) {
        updateImage("bg_desert.png")
        descriptionElement.innerText = "Il n'y a qu'un pas entre le sable, la neige, et la verdure ! Aucune logique."
    }
    if (xPos === 4 && yPos === 10) {
        updateImage("bg_neige.png")
        if (!items.cape) {
            descriptionElement.innerText = "Quel froid violent ! Je ne peux pas continuer."
            lockTouch()
            addButtonChoice(["Lutter au froid", "Abandonner"])
        } else {
            descriptionElement.innerText = "Mon beau copain, roi des gélées, est-ce que tu pourrais m'aider ?"
        }
    }
    if (xPos === 4 && yPos === 11) {
        updateImage("bg_neige.png")
        descriptionElement.innerText = "Les neiges du Kilimandjaro... Je ne sais plus qui c'est qui chantait cette chanson. Peut-être Mort Schuman ?"
    }
    if (xPos === 4 && yPos === 12) {
        updateImage("bg_neige.png")
        descriptionElement.innerText = "Ah... si seulement la température actuelle était en Fahrenheit ! On aurait plus chaud d'environ 15 degrés !"
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
        if (!items.cape) {
            descriptionElement.innerText = "Quel froid violent ! Je ne peux pas continuer."
            lockTouch()
            addButtonChoice(["Lutter au froid", "Abandonner"])
        } else {
            descriptionElement.innerText = "J'ai l'impression d'être la Reine des Neiges ! Le paysage est paralysé par le gel."
        }
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