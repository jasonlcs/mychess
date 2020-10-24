def on_gesture_logo_up():
    movePositionByShake("DOWN")
input.on_gesture(Gesture.LOGO_UP, on_gesture_logo_up)

def displayBoard():
    list2: List[str] = []
    setPointLight(1, 1, list2[0])
    setPointLight(2, 1, list2[1])
    setPointLight(3, 1, list2[2])
    setPointLight(1, 2, list2[3])
    setPointLight(2, 2, list2[4])
    setPointLight(3, 2, list2[5])
    setPointLight(1, 3, list2[6])
    setPointLight(2, 3, list2[7])
    setPointLight(3, 3, list2[8])

def on_gesture_tilt_left():
    movePositionByShake("LEFT")
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def setState(x: number, y: number, state: bool):
    if state:
        led.plot(x, y)
    else:
        led.unplot(x, y)
def movePosition():
    global idxX, idxY
    setState(idxX, idxY, False)
    idxX = idxX + 1
    if idxX > 4:
        idxX = 0
        idxY += 1
    if idxY > 4:
        idxY = 0
def movePositionByShake(direction: str):
    global idxX, idxY
    if direction == "RIGHT":
        if idxX < 3:
            idxX = idxX + 1
    elif direction == "LEFT":
        if idxX > 1:
            idxX = idxX - 1
    elif direction == "DOWN":
        if idxY < 3:
            idxY = idxY + 1
    elif direction == "UP":
        if idxY > 1:
            idxY = idxY - 1
    else:
        pass
    showIndex(idxX, idxY)
def setChess(player: str, x: number, y: number):
    if x == 1 and y == 1:
        setChessCheck(0, player)
    elif x == 2 and y == 1:
        setChessCheck(1, player)
    elif x == 3 and y == 1:
        setChessCheck(2, player)
    elif x == 1 and y == 2:
        setChessCheck(3, player)
    elif x == 2 and y == 2:
        setChessCheck(4, player)
    elif x == 3 and y == 2:
        setChessCheck(5, player)
    elif x == 1 and y == 3:
        setChessCheck(6, player)
    elif x == 2 and y == 3:
        setChessCheck(7, player)
    elif x == 3 and y == 3:
        setChessCheck(8, player)
    else:
        pass

def on_button_pressed_a():
    setChess("O", idxX, idxY)
    led.plot(idxX, idxY)
input.on_button_pressed(Button.A, on_button_pressed_a)

def setChessCheck(index: number, player: str):
    if chessState[index] == "N":
        chessState[index] = player

def on_gesture_logo_down():
    movePositionByShake("UP")
input.on_gesture(Gesture.LOGO_DOWN, on_gesture_logo_down)

def on_button_pressed_b():
    setChess("X", idxX, idxY)
    led.toggle(idxX, idxY)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_tilt_right():
    movePositionByShake("RIGHT")
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

def setPointLight(x: number, y: number, player: str):
    if player == "O":
        led.plot(x, y)
    elif player == "X":
        led.toggle(x, y)
    else:
        led.unplot(x, y)
def showIndex(x: number, y: number):
    for index in range(3):
        led.unplot(index + 1, 0)
    for index2 in range(3):
        led.unplot(0, index2 + 1)
    led.plot(x, 0)
    led.plot(0, y)
chessState: List[str] = []
idxY = 0
idxX = 0
basic.clear_screen()
idxX = 1
idxY = 1
chessState = ["N", "N", "N", "N", "N", "N", "N", "N", "N"]

def on_forever():
    displayBoard()
basic.forever(on_forever)
