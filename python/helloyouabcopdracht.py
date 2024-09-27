from logging.handlers import QueueListener


print("Hello you!")
print("My name is Enzo.")
print("And you are?")
name = input("Please input your name: ")
print("Nice to meet you " + name + "!")
print("Could I give you a quiz about me?")

choice = input("input choice: ")    
if choice == 'yes':
    print("Alright here we go!")
    print("I used to play a sport before football, what sport was it?")
    print("A: Kickbox")
    print("B: Karate")
    print("C: Basketball")
elif choice == 'no':
    print("Oke nvm")
    quit

choice = input("input choice:  ")
if choice == 'A':
    print("incorrect")
elif choice == 'B':
    print("Correct")
    print("I did karate for 3 years back when i lived in Krommenie.")
elif choice == 'C':
    print("incorrect")

print("Next Question!")
print("What is my favorite game")
print("A: GTA")
print("B: Cyberpunk 2077")
print("C: Far Cry New Dawn")

choice = input("input choice: ")
if choice == 'A':
    print("incorrect")
    print("Great game but incorrect")
elif choice == 'B':
    print("Correct")
    print("The game used to be sh*t, but after some patching its almost perfect. I also really love anything cyberpunk themed.")
elif choice == 'C':
    print("incorrect")
    print("you're a psychopath")

print("Now for the last question.")
print("What is my favorite drink?")
print("A: Caprisun")
print("B: Aloe vera")
print("C: Rivella")

choice = input("input choice: ")
if choice == 'A':
    print("Correct")
    print("caprisun supremacy.")
elif choice == 'B':
    print("also an S tier drink.")
    print("sadly incorrect tho.")
elif choice == 'C':
    print("Incorrect")

print("that was my game, thanks 4 playing.")


