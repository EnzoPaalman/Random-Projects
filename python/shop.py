winkelwagen = []

while True:

    print("wil je iets toevoegen(t) of verijderen(v) uit de winkelwagen?")
    a = input("(t/v): ")
    if a == "t":
        toevoegen = input("top, wat zou u willen toevoegen?: ")
        winkelwagen.append(toevoegen)
        print("er zit nu:",winkelwagen, "in de winkelwagen")
    if a == "v":
        verwijder = input("Wat zou u willen verwijderen: ")
        winkelwagen.remove(verwijder)
        print(winkelwagen)