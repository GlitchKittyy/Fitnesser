#include <iostream>
#include <string>

void menu();

bool started = true;

int menuOption;

int main(){
    menu();
}

void menu(){
    std::cout << "Forza Horizon 6\n1. Start\n2. Options\n";
    std::cin >> menuOption;
    switch (menuOption)
    {
    case 1:
        started = true;
        break;
    case 2:
        break;
    default:
        break;
    }
}

void gameloop(){

}