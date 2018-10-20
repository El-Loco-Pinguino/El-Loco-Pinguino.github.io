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
        console.log("Pas possible d'aller à l'ouest !")
    } else {
        yCurr -= 1
    }
}

const moveEast = (xPos, yPos) => {
    const possibleMoves = [1, 2, 3, 5, 6, 9, 10, 13]
    if (possibleMoves.indexOf(map[xPos][yPos]) === -1) {
        console.log("Pas possible d'aller à l'est !")
    } else {
        yCurr += 1
    }
}

const moveNorth = (xPos, yPos) => {
    const possibleMoves = [1, 2, 3, 4, 6, 7, 8, 12]
    if (possibleMoves.indexOf(map[xPos][yPos]) === -1) {
        console.log("Pas possible d'aller au nord !")
    } else {
        xCurr -= 1
    }
}

const moveSouth = (xPos, yPos) => {
    const possibleMoves = [1, 2, 4, 5, 7, 9, 11, 14]
    if (possibleMoves.indexOf(map[xPos][yPos]) === -1) {
        console.log("Pas possible d'aller au sud !")
    } else {
        xCurr += 1
    }
}

const move = (xPos, yPos) => {
    switch (map[xPos][yPos]) {
        case 0:
            console.log("Position impossible !")
            break
        case 1:
            console.log("Nord-Est-Sud-Ouest")
            break
        case 2:
            console.log("Nord-Est-Sud")
            break
        case 3:
            console.log("Nord-Est-Ouest")
            break
        case 4:
            console.log("Nord-Sud-Ouest")
            break
        case 5:
            console.log("Est-Sud-Ouest")
            break
        case 6:
            console.log("Nord-Est")
            break
        case 7:
            console.log("Nord-Sud")
            break
        case 8:
            console.log("Nord-Ouest")
            break
        case 9:
            console.log("Est-Sud")
            break
        case 10:
            console.log("Est-Ouest")
            break
        case 11:
            console.log("Sud-Ouest")
            break
        case 12:
            console.log("Nord")
            break
        case 13:
            console.log("Est")
            break
        case 14:
            console.log("Sud")
            break
        case 15:
            console.log("Ouest")
            break
    }
}

const map = [
    [14, 09, 10, 05, 05, 10, 05, 11, 00, 00, 00, 00, 00, 00, 00],
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