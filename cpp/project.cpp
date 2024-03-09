#include <iostream>

void draw();

int main(){
    while(true){
        draw();
    }
}

char space[] = {'.','.','.','.'};
char car = 'V';
int newpos;
int loader;
char nothing = ' ';
int oldpos;
void draw(){
    std::cout<<space[2]<<space[3]<<"\n";
    std::cout<<space[0]<<space[1]<<"\n";
    std::cin>>newpos;
    if(newpos==1){
        loader-2;
        space[loader] = car;
        oldpos = loader;
    }
    else if(newpos==2){
        loader--;
        space[loader] = car;
        oldpos = loader;
    }
    else if(newpos==3){
        loader++;
        space[loader] = car;
        oldpos = loader;
    }
    else if(newpos==4){
        loader-2;
        space[loader] = car;
        oldpos = loader;
    }
}