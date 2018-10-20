const bottomScreenElement = document.getElementById("touch")

const updateImage = image => {
    document.getElementById("action").style.backgroundImage = `url("./res/${image}")`
}

const hammertime = new Hammer(bottomScreenElement)
hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL })
hammertime.on('swipeup', function(ev) {
    alert("Swipe en haut")
    updateImage("cerise.png")
})
hammertime.on('swipeleft', function(ev) {
    alert("Swipe à gauche")
    updateImage("fraise.png")
})
hammertime.on('swipedown', function(ev) {
    alert("Swipe en bas")
    updateImage("melon.png")
})
hammertime.on('swiperight', function(ev) {
    alert("Swipe à droite")
    updateImage("pomme.png")
})