import time as t
import random as r

woorden = {
    'außer': 'behalve',
    'erklären': 'uitleggen',
    'gehören zu': 'horen bij',
    'neben': 'naast',
    'stattfinden': 'plaatsvinden',
    'unten': 'beneden',
    'vor allem': 'vooral',
    'Ziel': 'doel'
}

i = 0


for x in range(1,50,1):
    woord = r.choice(list(woorden.items()))
    keuze = input(f"{woord[0]}: ")
    if keuze == woord[1]:
        i+=1
    print(i)