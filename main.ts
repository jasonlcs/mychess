input.onGesture(Gesture.LogoUp, function () {
    movePositionByShake("DOWN")
})
function displayBoard () {
    setPointLight(1, 1, chessState[0])
    setPointLight(2, 1, chessState[1])
    setPointLight(3, 1, chessState[2])
    setPointLight(1, 2, chessState[3])
    setPointLight(2, 2, chessState[4])
    setPointLight(3, 2, chessState[5])
    setPointLight(1, 3, chessState[6])
    setPointLight(2, 3, chessState[7])
    setPointLight(3, 3, chessState[8])
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
        setChessCheck(0, player)
    } else if (x == 2 && y == 1) {
        setChessCheck(1, player)
    } else if (x == 3 && y == 1) {
        setChessCheck(2, player)
    } else if (x == 1 && y == 2) {
        setChessCheck(3, player)
    } else if (x == 2 && y == 2) {
        setChessCheck(4, player)
    } else if (x == 3 && y == 2) {
        setChessCheck(5, player)
    } else if (x == 1 && y == 3) {
        setChessCheck(6, player)
    } else if (x == 2 && y == 3) {
        setChessCheck(7, player)
    } else if (x == 3 && y == 3) {
        setChessCheck(8, player)
    } else {
    	
    }
}
input.onButtonPressed(Button.A, function () {
    setChess("O", idxX, idxY)
    led.plot(idxX, idxY)
})
function setChessCheck (index: number, player: string) {
    if (chessState[index] == "N") {
        chessState[index] = player
    } else {
        music.playTone(262, music.beat(BeatFraction.Quarter))
    }
}
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
    for (let index2 = 0; index2 <= 2; index2++) {
        led.unplot(0, index2 + 1)
    }
    led.plot(x, 0)
    led.plot(0, y)
}
let chessState: string[] = []
let idxY = 0
let idxX = 0
basic.clearScreen()
idxX = 1
idxY = 1
chessState = ["N", "N", "N", "N", "N", "N", "N", "N", "N"]
basic.forever(function () {
    displayBoard()
})
