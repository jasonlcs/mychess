input.onGesture(Gesture.LogoUp, function () {
    movePositionByShake("DOWN")
})
input.onGesture(Gesture.TiltLeft, function () {
    movePositionByShake("LEFT")
})
function setState (x: number, y: number, state: boolean) {
    if (state) {
        led.plot(x, y)
    } else {
        led.unplot(x, y)
    }
}
function movePosition () {
    setState(idxX, idxY, false)
    idxX = idxX + 1
    if (idxX > 4) {
        idxX = 0
        idxY += 1
    }
    if (idxY > 4) {
        idxY = 0
    }
}
function movePositionByShake (direction: string) {
    if (direction == "RIGHT") {
        if (idxX < 3) {
            idxX = idxX + 1
        }
    } else if (direction == "LEFT") {
        if (idxX > 1) {
            idxX = idxX - 1
        }
    } else if (direction == "DOWN") {
        if (idxY < 3) {
            idxY = idxY + 1
        }
    } else if (direction == "UP") {
        if (idxY > 1) {
            idxY = idxY - 1
        }
    } else {
    	
    }
    showIndex(idxX, idxY)
}
function setChess (player: string, x: number, y: number) {
    let list: string[] = []
    if (x == 1 && y == 1) {
        list[0] = player
    } else if (x == 2 && y == 1) {
        list[1] = player
    } else if (x == 3 && y == 1) {
        list[2] = player
    } else if (x == 1 && y == 2) {
        list[3] = player
    } else if (x == 2 && y == 2) {
        list[4] = player
    } else if (x == 3 && y == 2) {
        list[5] = player
    } else if (x == 1 && y == 3) {
        list[6] = player
    } else if (x == 2 && y == 3) {
        list[7] = player
    } else if (x == 3 && y == 3) {
        list[8] = player
    } else {
    	
    }
}
input.onButtonPressed(Button.A, function () {
    setChess("X", idxX, idxY)
})
input.onGesture(Gesture.LogoDown, function () {
    movePositionByShake("UP")
})
input.onButtonPressed(Button.B, function () {
    setChess("O", idxX, idxY)
})
input.onGesture(Gesture.TiltRight, function () {
    movePositionByShake("RIGHT")
})
function showIndex (x: number, y: number) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    led.plot(x, 0)
    led.plot(0, y)
}
let idxY = 0
let idxX = 0
basic.clearScreen()
idxX += 1
idxY = 1
let chessState = [0, 0, 0, 0, 0, 0, 0, 0, 0]
showIndex(1, 1)
basic.forever(function () {
	
})
