#include <iostream>
#include <string>
#include <cctype>

int insulted = 0;
int i = 0;
std::string firstword;
std::string input;
std::string list[] = {"hey","hello","hi"};
std::string feelings[] = {"good","bad"};

void checkForGreet();
void convert();

int size=sizeof(list)/sizeof(list);

int main(){
    bool continueProgram = false;

    std::cout<<">> ";
    std::cin>>input;
    convert();
    for(i = 0; i < size; i++){

        std::size_t found = input.find(list[i]);
        if (found == std::string::npos){
            firstword=list[i];
            continueProgram = true;
        }
        else{
            std::cout<<"error";
        }
    }
    
    if(continueProgram){
        checkForGreet();
        return true;
    }
    else{
        return false;
    }


}

void checkForGreet(){
    std::size_t found = input.find("how");
    if (found == std::string::npos){
        std::size_t found = input.find("fuck");
        if (found == std::string::npos){
            insulted++;
        }
        std::cout<<list[i]<<feelings[insulted];

    }
}

void convert(){
    for (char &c : input) {
        c = std::tolower(c);
}
    }
