input.onGesture(Gesture.LogoUp, function () {
    movePositionByShake("DOWN")
})
function displayBoard () {
    setPointLight(1, 1, list[0])
    setPointLight(2, 1, list[1])
    setPointLight(3, 1, list[2])
    setPointLight(1, 2, list[3])
    setPointLight(2, 2, list[4])
    setPointLight(3, 2, list[5])
    setPointLight(1, 3, list[6])
    setPointLight(2, 3, list[7])
    setPointLight(3, 3, list[8])
}
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
    setChess("O", idxX, idxY)
    led.plot(idxX, idxY)
})
input.onGesture(Gesture.LogoDown, function () {
    movePositionByShake("UP")
})
input.onButtonPressed(Button.B, function () {
    setChess("X", idxX, idxY)
    led.toggle(idxX, idxY)
})
input.onGesture(Gesture.TiltRight, function () {
    movePositionByShake("RIGHT")
})
function setPointLight (x: number, y: number, player: string) {
    if (player == "O") {
        led.plot(x, y)
    } else if (player == "X") {
        led.toggle(x, y)
    } else {
        led.unplot(x, y)
    }
}
function showIndex (x: number, y: number) {
    for (let index = 0; index <= 2; index++) {
        led.unplot(index + 1, 0)
    }
    for (let index = 0; index <= 2; index++) {
        led.unplot(0, index + 1)
    }
    led.plot(x, 0)
    led.plot(0, y)
}
let list: string[] = []
let idxY = 0
let idxX = 0
basic.clearScreen()
idxX += 1
idxY = 1
let chessState = [0, 0, 0, 0, 0, 0, 0, 0, 0]
showIndex(1, 1)
basic.forever(function () {
    displayBoard()
})
