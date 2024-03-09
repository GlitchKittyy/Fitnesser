from colorama import Fore
from os import name, system
import sys
from time import sleep

banner = """
  ▄▀  █  █▀ ▀▄    ▄ 
▄▀    █▄█     █  █  
█ ▀▄  █▀▄      ▀█   
█   █ █  █     █    
 ███    █    ▄▀     
       ▀           
GlitchKittyy Tools
"""

system("clear")
print(Fore.RED+banner+Fore.WHITE)
print("\n1. Tools\n2. Options\n3. Exit\n\n")
choice = input(Fore.YELLOW + "[" + Fore.BLUE + "·" + Fore.YELLOW + "]" + Fore.WHITE + " Enter Choice: ")
