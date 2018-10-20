/*
    0 = Impassable
    1 = NESO
    2 = NES
    3 = NEO
    4 = NSO
    5 = ESO
    6 = NE
    7 = NS
    8 = NO
    9 = ES
    10 = EO
    11 = SO
    12 = N
    13 = E
    14 = S
    15 = O

    NORD - 1 2 3 4 6 7 8 12
    EST - 1 2 3 5 6 9 10 13
    SUD - 1 2 4 5 7 9 11 14
    OUEST - 1 3 4 5 8 10 11 15
*/

const moveWest = (xPos, yPos) => {
    const possibleMoves = [1, 3, 4, 5, 8, 10, 11, 15]
    if (possibleMoves.indexOf(map[xPos][yPos]) === -1) {
        descriptionElement.innerText = "Je ne peux pas partir dans cette direction."
    } else {
        yCurr -= 1
        showEvent(xCurr, yCurr)
    }
}

const moveEast = (xPos, yPos) => {
    const possibleMoves = [1, 2, 3, 5, 6, 9, 10, 13]
    if (possibleMoves.indexOf(map[xPos][yPos]) === -1) {
        descriptionElement.innerText = "Je ne peux pas partir dans cette direction."
    } else {
        yCurr += 1
        showEvent(xCurr, yCurr)
    }
}

const moveNorth = (xPos, yPos) => {
    const possibleMoves = [1, 2, 3, 4, 6, 7, 8, 12]
    if (possibleMoves.indexOf(map[xPos][yPos]) === -1) {
        descriptionElement.innerText = "Je ne peux pas partir dans cette direction."
    } else {
        xCurr -= 1
        showEvent(xCurr, yCurr)
    }
}

const moveSouth = (xPos, yPos) => {
    const possibleMoves = [1, 2, 4, 5, 7, 9, 11, 14]
    if (possibleMoves.indexOf(map[xPos][yPos]) === -1) {
        descriptionElement.innerText = "Je ne peux pas partir dans cette direction."
    } else {
        xCurr += 1
        showEvent(xCurr, yCurr)
    }
}

const map = [
    [14, 09, 10, 05, 05, 15, 05, 11, 00, 00, 00, 00, 00, 00, 00],
    [07, 06, 05, 04, 02, 11, 12, 07, 00, 00, 00, 09, 15, 00, 00],
    [07, 09, 04, 02, 04, 06, 11, 02, 10, 11, 00, 02, 11, 00, 00],
    [06, 03, 04, 06, 01, 05, 03, 03, 05, 01, 10, 01, 04, 00, 00],
    [00, 00, 06, 15, 07, 07, 14, 09, 04, 02, 11, 07, 12, 00, 00],
    [00, 00, 13, 10, 03, 03, 03, 03, 08, 06, 03, 03, 15, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00],
    [00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00]
]

let xCurr = 3
let yCurr = 4
let caseValue = map[xCurr][yCurr]