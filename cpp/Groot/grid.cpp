#include <iostream>
#include <cstdlib>
char spaces[] = {'P',' ',' ','-','-',' ',' ',' ',' ',' ','-','-',' ',' ',' ',' ',' ',' ','_','=','_'}; // 0-20 (21)
char spaces2[] = {
'_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_',
'\n','|','P',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|',
'\n','|',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|',
'\n','|',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','=','|','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','_','|',
}; //134 chars van index 0

char walk;
char player = 'P';
int walkIndex = 0;
int level = 1;

void next();
void checkCheat();
void draw();
void logic();

int main(){
    while (true){
        draw();
        std::cin>>walk;
        logic();
    }
}

void next(){
    system("clear");
    walkIndex=28;
    level++;
}

void logic(){
    if(level == 1){
        switch (walk){
            case 'w':
                spaces[walkIndex] = ' ';
                walkIndex -=3;
                if(spaces[walkIndex]=='-'|| spaces[walkIndex]=='_'){
                    walkIndex +=3;
                }
                if(spaces[walkIndex]=='='){
                    next();
                }
                spaces[walkIndex] = player;
                break;
            case 'a':
                spaces[walkIndex] = ' ';
                walkIndex -=1;
                if(spaces[walkIndex]=='-'|| spaces[walkIndex]=='_'){
                    walkIndex +=1;
                }
                if(spaces[walkIndex]=='='){
                    next();
                }
                spaces[walkIndex] = player;
                break;
            case 's':
                spaces[walkIndex] = ' ';
                walkIndex +=3;
                if(spaces[walkIndex]=='-'|| spaces[walkIndex]=='_'){
                    walkIndex -=3;
                }
                if(spaces[walkIndex]=='='){
                    next();
                }
                spaces[walkIndex] = player;
                break;
            case 'd':
                spaces[walkIndex] = ' ';
                walkIndex +=1;
                if(spaces[walkIndex]=='-'|| spaces[walkIndex]=='_'){
                    walkIndex -=1;
                }
                if(spaces[walkIndex]=='='){
                    next();
                }
                spaces[walkIndex] = player;
                break;
            default:
                break;
            }
        system("clear");
    }
    else if(level == 2){
        
        switch (walk)
        {
        case 'w':
            spaces[walkIndex] = ' ';
            walkIndex +=28;
            if(spaces[walkIndex]=='-'|| spaces[walkIndex]=='_'){
                walkIndex -=28;
            }
            checkCheat();
            if(spaces[walkIndex]=='='){
                next();
            }
            spaces[walkIndex] = player;
            break;
        case 's':
            system("clear");
            spaces2[walkIndex] = ' ';
            walkIndex+=28;
            if(spaces2[walkIndex]=='|'||spaces2[walkIndex]=='_'||spaces2[walkIndex]=='.'){
                walkIndex-=28;
            }
            checkCheat();
            spaces2[walkIndex] = player;
            break;
        default:
            break;
        }
    }
}

void draw(){
    if(level==1){
        std::cout<<" ___\n";
        std::cout<<"|"<<spaces[0]<<spaces[1]<<spaces[2]<<"|"<<'\n'<<"|"<<spaces[3]<<spaces[4]<<spaces[5]<<"|"<<'\n';
        std::cout<<"|"<<spaces[6]<<spaces[7]<<spaces[8]<<"|"<<'\n'<<"|"<<spaces[9]<<spaces[10]<<spaces[11]<<"|"<<'\n';
        std::cout<<"|"<<spaces[12]<<spaces[13]<<spaces[14]<<"|"<<'\n'<<"|"<<spaces[15]<<spaces[16]<<spaces[17]<<"|"<<'\n';
        std::cout<<"|"<<spaces[18]<<spaces[19]<<spaces[20]<<"|                          [use WASD for movement] : ";
    }
    else if(level==2){
        for(int i = 0; i < sizeof(spaces2);i++){
            if(spaces2[i]==24||spaces2[i]==52||spaces2[i]==80){
                std::cout<<'\n';
            }
            else{
                std::cout<<spaces2[i];
            }
        }
    }
}

/*
eerste line 0
tweede 28
3e 52
4e 80

*/

void checkCheat(){
    if(level==2){
        if(walkIndex=='\n'){
            walkIndex+=28;
        }
    }
}