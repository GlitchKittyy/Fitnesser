#include <iostream>
#include <cstdlib>
#include <thread>

bool devMenu;
void extra();
void options();
void credits();
void play();
bool menuRunning;

void menu()
{
    char menuChoice;
    while (menuRunning)
    {
        system("clear");
        if (devMenu == true)
        {
            std::cout << "--Ducky Ducky House--\n1. Play\n2. Options\n3. Extra\n4. Quit\n---Dev Menu---\n5. Credits\n6. Free Money\n";
            std::cin >> menuChoice;
        }
        else
        {
            std::cout << "--Ducky Ducky House--\n1. Play\n2. Options\n3. Extra\n4. Quit\n";
            std::cin >> menuChoice;
        }
        switch (menuChoice)
        {
        case '1':
            menuRunning = false;
            play();
            break;

        case '2':
            menuRunning = false;
            options();
            break;
        case '3':
            extra();
            break;

        case '4':
            exit(0);
            break;
        case '5':
            if (devMenu){
                system("clear");
                credits();
            }
            else{
                std::cout << "Invalid choice. Please select a valid option.\n";
                std::this_thread::sleep_for(std::chrono::seconds(3));
                system("clear");
            }
            break;
        case '6':
            if (devMenu)
            {
                std::cout << "This Function Is Not Available Yet...";
                std::this_thread::sleep_for(std::chrono::seconds(3));
            }
            else
            {
                std::cout << "Invalid choice. Please select a valid option.\n";
                std::this_thread::sleep_for(std::chrono::seconds(3));
            }
            break;
        default:
            std::cout << "Invalid choice. Please select a valid option.\n";
            menu();
            break;
        }
    }
}

void options()
{
    while (true)
    {
        system("clear");
        int optionChoices;
        std::cout << "--Options--\n1. Input Type\n2. Exit Options\n";
        std::cin >> optionChoices;
        switch (optionChoices)
        {
        case 1:
            system("clear");
            std::cout << "--Options--\n1. Input Type (standard is text, numbers not available yet.)\n2. Exit Options\n";
            std::this_thread::sleep_for(std::chrono::seconds(3));
            system("clear");
            break;
        case 2:
            menuRunning = true;
            menu();
            break;
        default:
            break;
        }
    }
}

void extra(){
    system("clear");
    int extraChoice;
    std::string cheatCode;
    std::cout << "--Extra--\n1. CheatCodes\n2. Exit Extra\n";
    std::cin >> extraChoice;
    
    if (extraChoice == 1){
        system("clear");
        const std::string cheatCodes[] = {"GlitchKittyy", "!DevMenu!", "C++", "Nicolai"};
        std::cout << "Enter Cheatcode: ";
        std::cin >> cheatCode;
        if (cheatCode == cheatCodes[0]){
            int money = 1000;
            std::cout << "Cheat Code '" << cheatCodes[0] << "' Activated!\n";
            std::this_thread::sleep_for(std::chrono::seconds(3));
        }
        else if (cheatCode == cheatCodes[1]){
            devMenu = true;
            std::cout << "Cheat Code '" << cheatCodes[1] << "' Activated!\n";
            std::this_thread::sleep_for(std::chrono::seconds(3));
        }
        else if (cheatCode == cheatCodes[2]){
            std::cout << "Cheat Code '" << cheatCodes[2] << "' Activated!";
            std::cout << "Yes, I coded this in C++\n";
            std::this_thread::sleep_for(std::chrono::seconds(3));
        }
        else if (cheatCode == cheatCodes[3]){
            std::cout << "Hoi Nicolai";
            std::this_thread::sleep_for(std::chrono::seconds(3));
        }
        else{
            std::cout << "Invalid Cheat Code.\n";
            std::this_thread::sleep_for(std::chrono::seconds(3));
        }
    }
    else{
        menu();
    }
    }
    void credits()
    {
        std::cout << "Credits:\n";
        std::cout << " - GlitchKittyy [overall coder]\n";
        std::cout << " - StormPart [ideas]\n";
        std::this_thread::sleep_for(std::chrono::seconds(3));
        system("clear");
    }
//block

int main()
{
    devMenu = false;
    menuRunning = true;

    system("clear");
    menu();

    return 0;
}

char tutoY;
void tutorialString();

void play()
{
    system("clear");

    std::cout << "::--loading--::\n";
    std::cout << "...\n";
    std::this_thread::sleep_for(std::chrono::milliseconds(700));
    system("clear");
    std::cout << "Done[1] = true;\n";
    std::this_thread::sleep_for(std::chrono::milliseconds(800));
    system("clear");
    std::cout << "runing...;\n";
    std::this_thread::sleep_for(std::chrono::milliseconds(800));
    system("clear");
    std::cout << "\n--Welcome To--";
    std::cout << "\nDucky Ducky House!\n";
    std::cout << "-----------------\n";
    std::cout << "Do You Wanna Play The Tutorial? (y/n): ";
    std::cin >> tutoY;
    switch (tutoY)
    {
    case 'y':
        tutorialString();
        break;
    case 'n':
        break;
    default:
        std::cout << "invalid choice, starting..\n";
        break;
    }
}

// TUTORIAL ROOMS!!
std::string tutorialRooms[3] = {"kitchen", "machineroom", "bathroom"};
std::string tutorialRoomChoice;
double hpTutorial;
const int roomsTutorial = 3;

void tutorialString()
{
    system("clear");
    std::cout << "::--loading--::\n";
    std::cout << "...\n";
    std::this_thread::sleep_for(std::chrono::milliseconds(700));
    system("clear");
    std::cout << "Done[1] = true;\n";
    std::this_thread::sleep_for(std::chrono::milliseconds(800));
    system("clear");
    std::cout << "runing...;\n";
    std::this_thread::sleep_for(std::chrono::milliseconds(800));
    system("clear");
    std::cout << "\n--Welcome To The Tutorial!--\n";

    std::cout << "In Ducky Ducky House You are undercover as a duck to take down an illegal bird killing facility located in a house which is run by ducks";
    std::cout << "\n\nTo get started, enter a room to enter ('machineroom','kitchen','bathroom') *these rooms are for the tutorial!*\n";

    std::cin >> tutorialRoomChoice;
    if (tutorialRoomChoice != tutorialRooms[0] && tutorialRoomChoice != tutorialRooms[1] && tutorialRoomChoice != tutorialRooms[2])
    {
        std::cout << "invalid input.";
    }

    std::cout << " + h";
}
