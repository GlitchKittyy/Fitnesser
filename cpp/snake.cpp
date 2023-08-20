#include <iostream>
#include <cstdlib>
#include <unistd.h>

int highscore;
bool cheatScreen = false;
bool gameOver;
int width = 20;
int height = 20;
int x, y, fruitX, fruitY, score;
int tailX[100], tailY[100];
int Ntail;
enum eDirection

{
    STOP = 0,
    LEFT,
    RIGHT,
    UP,
    DOWN
};
eDirection dir;

void setup()
{
    gameOver = false;
    dir = STOP;
    x = width / 2;
    y = height / 2;
    fruitX = rand() % width;
    fruitY = rand() % height;
    score = 0;
    Ntail = 0;
}

void draw()
{
    system("clear");

    for (int i = 0; i < width + 2; i++)
    {
        std::cout << '#';
    }
    std::cout << std::endl;

    for (int i = 0; i < height; i++)
    {
        std::cout << '#';
        for (int j = 0; j < width; j++)
        {
            if (i == y && j == x)
            {
                std::cout << 'O';
            }
            else if (i == fruitY && j == fruitX)
            {
                std::cout << 'F';
            }
            else
            {
                bool print = false;
                for (int k = 0; k < Ntail; k++)
                {
                    if (tailX[k] == j && tailY[k] == i)
                    {
                        std::cout << "o";
                        print = true;
                    }
                }
                if (!print)
                {
                    std::cout << ' ';
                }
            }
        }
        std::cout << '#' << std::endl;
    }

    for (int i = 0; i < width + 2; i++)
    {
        std::cout << '#';
    }

    std::cout << std::endl;
    std::cout << "Score: " << score << std::endl;
    if (highscore < score)
    {
        highscore = score;
    }
    std::cout << "HighScore " << highscore << std::endl;
}

void input()
{
    if (std::cin.peek() != EOF)
    {
        char ch;
        std::cin >> ch;
        switch (ch)
        {
        case 'a':
            dir = LEFT;
            break;
        case 'd':
            dir = RIGHT;
            break;
        case 's':
            dir = DOWN;
            break;
        case 'w':
            dir = UP;
            break;
        case 'x':
            gameOver = true;
            break;
        default:
            break;
        }
    }
}

void logic()
{
    int prevX = tailX[0];
    int prevY = tailY[0];
    int prev2X, prev2Y;
    tailX[0] = x;
    tailY[0] = y;
    for (int i = 1; i < Ntail; i++)
    {
        prev2X = tailX[i];
        prev2Y = tailY[i];
        tailX[i] = prevX;
        tailY[i] = prevY;
        prevX = prev2X;
        prevY = prev2Y;
    }
    switch (dir)
    {
    case LEFT:
        x--;
        break;
    case RIGHT:
        x++;
        break;
    case UP:
        y--;
        break;
    case DOWN:
        y++;
        break;
    default:
        break;
    }
    if (x >= width || x < 0 || y >= height || y < 0)
    {
        gameOver = true;
    }
    for (int i = 0; i < Ntail; i++)
    {
        if (tailX[i] == x && tailY[i] == y)
        {
            gameOver = true;
        }
    }

    if (x == fruitX && y == fruitY)
    {
        score += 10;
        fruitX = rand() % width;
        fruitY = rand() % height;
        Ntail++;
    }
}

void menu();
void options();
void extra();
void gameLoop();

int main()
{
    while (true)
    {
        menu();
        gameLoop();
    }

    return 0;
}

void menu()
{
    bool menuRun = true;
    while (menuRun)
    {
        system("clear");
        std::cout << "--Snake--\n1. Start Game\n2. Options\n3. Extra\n4. Quit\n";
        int menuChoice;
        std::cin >> menuChoice;
        switch (menuChoice)
        {
        case 1:
            setup();
            menuRun = false;
            break;
        case 2:
            options();
            break;
        case 3:
            extra();
            break;
        case 4:
            exit(0);
        default:
            break;
        }
    }
}

void options()
{
    bool optionsrun = true;
    while (optionsrun)
    {
        system("clear");
        std::cout << "--Options--\n1. Change width\n2. Change Height\n3. Reset Sizes\n4. Reset Score\n5. Exit Options\n";
        int optionChoice;
        std::cin >> optionChoice;
        switch (optionChoice)
        {
        case 1:
            system("clear");
            std::cout << "\nEnter new width: ";
            std::cin >> width;
            if (!cheatScreen)
            {
                if (width < 10)
                {
                    width = 10;
                }
                else if (width > 100)
                {
                    width = 100;
                }
            }
            std::cout << "The new Width is: " << width << std::endl;
            sleep(2);
            break;

        case 2:
            system("clear");
            std::cout << "Enter new height: ";
            std::cin >> height;
            if (!cheatScreen)
            {
                if (height < 10)
                {
                    height = 10;
                }
                else if (height > 100)
                {
                    height = 100;
                }
            }
            std::cout << "The new Height is: " << height << std::endl;
            sleep(2);
            break;

        case 3:
            system("clear");
            height = 20;
            width = 20;
            std::cout << "The Height And Width Are Set To 20\n";
            sleep(2);
            break;

        case 4:
            system("clear");
            std::cout << "The Score Is Set To 0 From " << highscore << std::endl;
            sleep(3);
            highscore = 0;
            break;

        default:
            optionsrun = false;
            break;
        }
    }
}

void extra()
{
    std::string cheatcode;
    std::string cheatcodes[] = {"Ihatethemax!"};
    system("clear");
    std::cout << "Enter Cheat Code: ";
    std::cin >> cheatcode;
    if (cheatcode == cheatcodes[0])
    {
        cheatScreen = true;
        system("clear");
        std::cout << "Cheat Code '" << cheatcode << "' is found and activated!\nThe max of 100 is no longer active!"<<std::endl;
        sleep(3);
    }
    else
    {
        system("clear");
        std::cout << "Cheat Code '" << cheatcode << "' is NOT found!\n";
        sleep(5);
    }
}

void gameLoop()
{
    setup();
    while (!gameOver)
    {
        draw();
        input();
        logic();
        usleep(100000);
    }

    std::cout << "Game Over! Your score: " << score << std::endl;
    std::cout << "Returning to the menu..." << std::endl;
    sleep(3);
}
