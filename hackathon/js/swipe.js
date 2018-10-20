const bottomScreenElement = document.getElementById("touch")
var hammertime = new Hammer(bottomScreenElement);
hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL })
hammertime.on('swipeup', function(ev) {
	alert("Swipe en haut")
})
hammertime.on('swipeleft', function(ev) {
	alert("Swipe à gauche")
})
hammertime.on('swipedown', function(ev) {
	alert("Swipe en bas")
})
hammertime.on('swiperight', function(ev) {
	alert("Swipe à droite")
})