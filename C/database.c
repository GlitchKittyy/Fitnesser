#include <stdio.h>
#include <string.h>

int studentID[] = {1, 2, 3, 0, 0, 0, 0, 0, 0, 0};
char studentName[10][20] = {"Yanick", "Bob", "Barry", "", "", "", "", "", "", ""};
int studentAge[10] = {14, 15, 16, 0, 0, 0, 0, 0, 0, 0};

void getStudent() {
    char search[20];
    printf("Enter Search: ");
    scanf("%s", search);
    
    for (int j = 0; j < 10; j++) {
        if (strstr(studentName[j], search) != NULL) {
            printf("Found: %s\n", studentName[j]);
            return;
        }
    }
    
    printf("Student not found\n");
}

void getList() {
    for (int i = 0; i < 10; i++) {
        if (studentName[i][0] == '\0') {
            printf("%d Undefined Student %d\n", studentID[i], studentAge[i]);
        } else if (studentID[i] == 0) {
            printf("Undefined StudentID %s %d\n", studentName[i], studentAge[i]);
        } else {
            printf("%d %s %d\n", studentID[i], studentName[i], studentAge[i]);
        } 
    }
}

int main(int argc, char **argv) {
    int input;
    printf("Enter option;\n1. Show Students List\n2. Search Student\n");
    scanf("%d", &input);
    switch(input){
        case 1:
            getList();
            break;
        case 2:
            getStudent();
            break;
    }
    return 0;
}
