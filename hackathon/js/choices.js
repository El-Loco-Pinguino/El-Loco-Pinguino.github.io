const insister = () => {
    permitTouch()
    descriptionElement.innerHTML = "Malheureusement pour moi, les gobelins n'aiment pas les gens qui ne paient pas. Après m'avoir insulté, il me coupe la tête. <a href='index.html'>Recommencer</a>"
    gameOver = true
    hammertime.destroy()
}

const fairedemitour = () => {
    permitTouch()
    moveEast(xCurr, yCurr)
}

const forcerlepassage = () => {
    descriptionElement.innerHTML = "Comme dans ce fameux film d'Alfred Hitchcock, les Oiseaux ont été sans pitié avec moi. <a href='index.html'>Recommencer</a>"
    gameOver = true
    hammertime.destroy()
}

const rebrousserchemin = () => {
    permitTouch()
    moveEast(xCurr, yCurr)
}

const lutteraufroid = () => {
    descriptionElement.innerHTML = "Je n'aurais jamais dû insister. La température de -19°C a eu raison de moi. <a href='index.html'>Recommencer</a>"
    gameOver = true
    hammertime.destroy()
}

const abandonner = () => {
    permitTouch()
    moveWest(xCurr, yCurr)
}

const lasecourir = () => {
    descriptionElement.innerHTML = "Voilà une décision conne comme je les aime. En lui prêtant ma cape chauffante, elle a repris conscience. Quant à moi... le froid aura eu raison de moi. (FIN)"
    gameOver = true
    hammertime.destroy()
}

const nerienfaire = () => {
    descriptionElement.innerHTML = "On peut dire que j'ai été froid avec elle. De toute façon, je me suis rendu compte qu'elle était déjà morte. (FIN)"
    gameOver = true
    hammertime.destroy()
}