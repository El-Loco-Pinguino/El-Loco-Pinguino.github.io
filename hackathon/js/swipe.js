const bottomScreenElement = document.getElementById("touch")

const updateImage = image => {
    document.getElementById("action").style.backgroundImage = `url("./res/${image}")`
}

const hammertime = new Hammer(bottomScreenElement)
hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL })
hammertime.on('swipeup', function(ev) {
    updateImage("cerise.png")
    caseValue = map[xCurr][yCurr]
    moveNorth(xCurr, yCurr)
    console.log("Position actuelle: " + xCurr + ", " + yCurr)
})
hammertime.on('swipeleft', function(ev) {
    updateImage("fraise.png")
    caseValue = map[xCurr][yCurr]
    moveWest(xCurr, yCurr)
    console.log("Position actuelle: " + xCurr + ", " + yCurr)
})
hammertime.on('swipedown', function(ev) {
    updateImage("melon.png")
    caseValue = map[xCurr][yCurr]
    moveSouth(xCurr, yCurr)
    console.log("Position actuelle: " + xCurr + ", " + yCurr)
})
hammertime.on('swiperight', function(ev) {
    updateImage("pomme.png")
    caseValue = map[xCurr][yCurr]
    moveEast(xCurr, yCurr)
    console.log("Position actuelle: " + xCurr + ", " + yCurr)
})