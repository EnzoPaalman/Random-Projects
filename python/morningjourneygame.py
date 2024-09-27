name = input("enter your name:")
print("Hello", name )
print("Could I ask you some questions about your journey to school?")
choice = input()
if choice == 'yes':
    print("perfect, lets get straight to it.")
    print("in the morning, do you WAKE UP? Or do you SNOOZE")
    choice = input()
    if choice == 'wake up':
        print("Youre an early beard.")
        print("Do you have a hard time waking up?")
        choice = input()
        if choice == 'yes':
            print("me too, just skip school if your tired.")
        elif choice == 'no':
            print("you're a weirdo.")
        else:
            print("invalid answer")
    elif choice == 'snooze':
        print("me too, monday mornings are the worst.")
        print("do you usually skip classes when you hit snooze?")
        choice = input()
        if choice == 'yes':
            print("fackin legend mate.")
        elif choice == 'no':
            print("you must have an early alarm.")
        else:
            print("invalid answer")
    else:
        print("invalid answer")
elif choice == 'no':
    print("nevermind then.")
    quit
else:
    print("invalid answer")

