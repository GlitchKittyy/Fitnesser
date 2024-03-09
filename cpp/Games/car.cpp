#include <iostream>
#include <cstdlib>
#include <thread>
#include <fstream>
#include <string>

int main(){
    std::string out;
    std::ofstream file("cars.txt");
    std::ifstream readFile("cars.txt");

    file.open("cars.txt");

    while (std::getline (readFile, out)) {
        std::cout << out;
    }
    file.close();
}