#include <iostream>
#include <thread>

void sleep(int time){
    std::this_thread::sleep_for(std::chrono::seconds(time));
}

int main(){
    bool returning = false;
    int included = 0;
    
    std::cout<<"Loading"<<std::endl;
    std::cout<<"Loading"<<std::endl;
}