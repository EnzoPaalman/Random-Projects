from microbit import *
display.scroll("HELLO WORLD")
x = Image("19293:"
          "94959:"
          "69798:"
          "12345:"
          "67899:")
while True:
    if button_a.is_pressed():
        display.scroll("ik ben Enzo")
    elif button_b.is_pressed():
        display.show(x)