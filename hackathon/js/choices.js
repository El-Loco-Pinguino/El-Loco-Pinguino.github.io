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