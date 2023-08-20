#include <iostream>
#include <fstream>
#include <string>
#include <thread>
#include <cstdlib>

void second();

void sleep(int time){
    std::this_thread::sleep_for(std::chrono::seconds(time));
}
void clear(){
    system("clear");
}

void countDown(int i) {
    while (i >= 0) {
        if (i == 10 or i == 100 or i == 1000) {
            std::cout << "\r       ";
        } else {
            std::cout << "\b\b\b   ";
        }
        std::cout << "\r" << i << std::flush;
        std::this_thread::sleep_for(std::chrono::seconds(1));
        i--;
    }
    std::cout << std::endl;
    system("clear");
}
void countDownInvisible(int i){
    while (i >= 0) {
        i--;
        std::this_thread::sleep_for(std::chrono::seconds(1));
    }
}



void registerUser() {
    std::string name;
    std::string username, password, plan;
    std::cout << "Enter a username: "; 
    std::cin >> username;
    std::cout << "Enter a password: ";
    std::cin >> password;
    std::cout << "Enter your real name: ";
    std::cin >> name;

    std::ifstream file("info.txt");
    std::string line;
    bool exists = false;
    while (getline(file, line)) {
        if (line.find("username = " + username + " |") != std::string::npos) {
            exists = true;
            break;
        }
    }
    file.close();

    if (exists) {
        int number = 1;
        while (exists) {
            std::string newUsername = username + std::to_string(number);
            std::ifstream file("info.txt");
            std::string line;
            exists = false;
            while (getline(file, line)) {
                if (line.find("username = " + newUsername + " |") != std::string::npos) {
                    exists = true;
                    break;
                }
            }
            file.close();
            if (!exists) {
                username = newUsername;
                std::ofstream file2("info.txt", std::ios::app);
                std::string plan = "standard";
                file2 << "username = " << username << " | password = " << password << " | name = " << name << std::endl;
                file2.close();
                break;
            }
            number++;
        }
        std::cout << "The username already exists. Your new username is: " << username << std::endl;
        std::this_thread::sleep_for(std::chrono::seconds(1)); 
    } else {
        std::ofstream file2("info.txt", std::ios::app);
        file2 << "username = " << username << " | password = " << password << " | name = " << name <<  std::endl;
        file2.close();
        std::cout << "Registration successful!" << std::endl;
    }
}

void second(std::string username, std::string password, std::string name) {
    while(true) {
        std::cout << "Hello, " << username;
        break;
    }
}

void loginUser() {
    bool found = false;
    std::string username, password, name = "", plan, line;
    std::cout << "Enter your username: ";
    std::cin >> username;
    std::cout << "Enter your password: ";
    std::cin >> password;
    std::ifstream file("info.txt");
    while (getline(file, line)) {
        if (line.find("username = " + username + " | password = " + password + " | name = " + name) != std::string::npos) {
            found = true;
            int pos = line.find("name = ");
            name = line.substr(pos + 7);
            break;
        }
    }
    file.close();
    if (found) {
        system("clear");
        std::cout << "Login successful!\n";
    } else {
        std::cout << "Login failed. Please try again.\n";
    }
    second(username, password, name);
}

int main(){
    bool verify = false;
    int choice;
    while (true) {
        std::cout << "Welcome to the program. Login[1] or Register[2]? (Enter 0 to quit)\n";
        std::cin >> choice;
        switch (choice) {
            case 0:
                std::cout << "Exiting program...\n";
                return 0;
            case 1:
                system("clear");
                loginUser();
                break;
            case 2:
                system("clear");
                registerUser();
                break;
            case 3:
                countDown(10);
                break;
            case 4:
                countDownInvisible(2);
                break;
            default:
                std::cout << "Invalid choice. Please try again.\n";
                break;
            }
        }
    }
