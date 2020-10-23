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
function setChess (player: string, x: number, y: number) {
    let list: string[] = []
    if (x == 0 && y == 0) {
        list[0] = player
    } else if (x == 1 && y == 0) {
        list[1] = player
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else {
    	
    }
}
input.onButtonPressed(Button.A, function () {
    setChess("A", idxX, idxY)
})
input.onGesture(Gesture.Shake, function () {
    movePosition()
})
input.onButtonPressed(Button.B, function () {
    setChess("B", idxX, idxY)
})
let idxY = 0
let idxX = 0
basic.clearScreen()
idxX += 0
idxY = 0
let chessState = [0, 0, 0, 0, 0, 0, 0, 0, 0]
basic.forever(function () {
    led.toggle(idxX, idxY)
})
