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