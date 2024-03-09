#include <iostream>
#include <cmath>
#include <stdlib.h>

char player='X';
char ai='O';

char spaces[] = {' ',' ',' ',' ',' ',' ',' ',' ',' '};

void logic();
void AI();
void draw();

bool running = false;
int pos;
int posAI;

int main(){
    
    while(running!=true){
        system("clear");
        int option;
        std::cout<<"--TIC-TAC-TOE--\n\n1. Play\n--------\nEnter Option: ";
        std::cin>>option;
        if(option==1){
            running=true;
        }
    }   

    while(running){
        system("clear");
        logic();
        draw();
        do{
            std::cout<<"Enter a spot to place (1-9): ";
            std::cin>>pos;
            pos--;
            if(spaces[pos]==' '){
                spaces[pos] = player;
            }
        }while(pos<0||pos>8);
        logic();
        AI();
    }
}

void AI(){
    while(true){
        posAI = rand() % 8;
        if(spaces[posAI]==' '){
            spaces[posAI]=ai;
            break;
        }
    }
}

void draw(){
    std::cout<<"     |     |     \n";
    std::cout<<"  "<<spaces[0]<<"  |  "<<spaces[1]<<"  |  "<<spaces[2]<<"  \n";
    std::cout<<"_____|_____|_____\n";
    std::cout<<"     |     |     \n";
    std::cout<<"  "<<spaces[3]<<"  |  "<<spaces[4]<<"  |  "<<spaces[5]<<"  \n";
    std::cout<<"_____|_____|_____\n";
    std::cout<<"     |     |     \n";
    std::cout<<"  "<<spaces[6]<<"  |  "<<spaces[7]<<"  |  "<<spaces[8]<<"  \n";
    std::cout<<"     |     |     \n";
}

void logic(){
    if(spaces[0]==spaces[1]&&spaces[1]==spaces[2]){
        if(spaces[0]!=' '){
            if(spaces[0]==player){
                running=false;
                draw();
                std::cout<<"You win!";
            }
            else if(spaces[0]==ai){
                running=false;
                draw();
                std::cout<<"You Lose";
            }
        }
    }
    else if(spaces[3]==spaces[4]&&spaces[4]==spaces[5]){
        if(spaces[3]==player){
                running=false;
                draw();
                std::cout<<"You win!";
            }
            else if(spaces[3]==ai){
                running=false;
                draw();
                std::cout<<"You Lose";
            }
    }
    else if(spaces[0]==spaces[3]&&spaces[3]==spaces[6]){
        if(spaces[0]==player){
                running=false;
                draw();
                std::cout<<"You win!";
            }
            else if(spaces[0]==ai){
                running=false;
                draw();
                std::cout<<"You Lose";
            }
    }
    else if(spaces[1]==spaces[4]&&spaces[4]==spaces[7]){
        if(spaces[1]==player){
                running=false;
                draw();
                std::cout<<"You win!";
            }
            else if(spaces[1]==ai){
                running=false;
                draw();
                std::cout<<"You Lose";
            }
    }
    else if(spaces[2]==spaces[5]&&spaces[5]==spaces[8]){
        if(spaces[2]==player){
                running=false;
                draw();
                std::cout<<"You win!";
            }
            else if(spaces[2]==ai){
                running=false;
                draw();
                std::cout<<"You Lose";
            }
    }
    else if(spaces[6]==spaces[7]&&spaces[7]==spaces[8]){
        if(spaces[6]==player){
                running=false;
                draw();
                std::cout<<"You win!";
            }
            else if(spaces[6]==ai){
                running=false;
                draw();
                std::cout<<"You Lose";
            }
    }
    else if(spaces[0]==spaces[4]&&spaces[4]==spaces[8]){
        if(spaces[0]==player){
                running=false;
                draw();
                std::cout<<"You win!";
            }
            else if(spaces[0]==ai){
                running=false;
                draw();
                std::cout<<"You Lose";
            }
    }
    else if(spaces[2]==spaces[4]&&spaces[4]==spaces[8]){
        if(spaces[2]==player){
                running=false;
                draw();
                std::cout<<"You win!";
            }
            else if(spaces[2]==ai){
                running=false;
                draw();
                std::cout<<"You Lose";
            }
    }

}