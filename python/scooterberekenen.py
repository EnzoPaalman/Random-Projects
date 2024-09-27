def bereken_maand_kosten(km_per_maand):

    verzekering_per_maand = int(23)
    benzine_kosten_per_liter = int(1.54)
    liter_per_kilometer = (0.2)


   # km_per_maand = input("hier uw antwoord")
    echte_liters = (km_per_maand / liter_per_kilometer)
    print(verzekering_per_maand + (echte_liters * benzine_kosten_per_liter) )


bereken_maand_kosten(int(input("hoeveel km rij jij per maand op jouw scooter?")))