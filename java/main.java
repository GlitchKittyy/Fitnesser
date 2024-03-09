import java.util.Scanner;

public class main { 
    private Scanner menuScanner;

    public main() {
        menuScanner = new Scanner(System.in); 
    }

    public void menu() {
        System.out.println("-----CODING-QUIZ-----\n1. Start\n2. Options\n3. Quit\n");
        String menuInput = menuScanner.nextLine();
        if (menuInput.equals("1")) {
            start();
        } else if (menuInput.equals("2")) {
            options();
        } else {
            menuScanner.close(); 
            System.exit(0);
        }
    }

    public void options() {
        
    }

    public void start() {
        int correct = 0;
        char[] answers = {'a','d'};
        System.out.print("\033\143");
        Scanner answerScanner = new Scanner(System.in);
        System.out.println("1. Who created Python?\n\nA. Guido van Rossum     B. Bjarne Stroustrup\nC. James Gosling        D. Jaakko Iisalo\n(Enter A, B, C or D)");
        char answerOne = answerScanner.next().charAt(0);
        if(answerOne == answers[0]){
            correct += 1;
        }
        System.out.println("2. How do you declare an int in C++?\n\nA. int variableName = value     B. variablename = value;\nC. variablename;                D. int variablename;");
        char answerTwo = answerScanner.next().charAt(0);
        if (answerTwo == answers[1]){
            correct += 1;
        }

        answerScanner.close();
        double percentage = ((double) correct / answers.length ) * 100;
        System.out.println("Total Correct Answers: " + correct+"/"+answers.length+". You had "+percentage+"% correct");
    }

    public static void main(String[] args) {
        main mainObject = new main();
        mainObject.menu();
    }
}
