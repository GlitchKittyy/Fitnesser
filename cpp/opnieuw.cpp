#include <iostream>
#include <string>
#include <thread>

void sleepFor(int time);
void generate(int level);


int main(){
    generate(1);
}

// de functies

void sleepFor(int time){
    std::this_thread::sleep_for(std::chrono::seconds(time));
}

void generate(int level){
    for(int k = 0;k<20;k++){std::cout<<"-";} std::cout<<"\n";
    for(int i = 0; i < 20;i++){
        for(int j = 0; j < 20; j++){
            if(j>1){
                std::cout<<" ";
            }
            else{
                std::cout<<"|";
            }
        }
        std::cout<<"\n";
        
    }
}