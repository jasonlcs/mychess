def setState(x: number, y: number, state: bool):
    if state:
        led.plot(x, y)
    else:
        led.unplot(x, y)

def on_button_pressed_a():
    global idxX, idxY
    setState(idxX, idxY, True)
    idxX = idxX + 1
    if idxX > 4:
        idxX = 0
        idxY += idxY + 1
input.on_button_pressed(Button.A, on_button_pressed_a)

idxY = 0
idxX = 0
basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    """)
idxX += 0
idxY = 0

def on_forever():
    led.toggle(idxX, idxY)
basic.forever(on_forever)
