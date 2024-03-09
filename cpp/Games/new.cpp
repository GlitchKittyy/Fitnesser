#include <iostream>
#include <thread>
#include <cstdlib>
#include <string>

void sleep(int time){
    std::this_thread::sleep_for(std::chrono::seconds(time));
}

int main(){
    std::string word;
    int times;
    std::cout<<"Enter the word : ";
    std::cin>>word;
    std::cout<<"Enter how many times : ";
    std::cin>>times;
    system("clear");
    for(int i = 0;i<times;i++){
        std::cout<<word;
    }
}

