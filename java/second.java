import java.util.Scanner;

public class second{
  public static void main(String[] args){
    Scanner objects = new Scanner(System.in);
    System.out.println("Enter first number:");
    double num1 = objects.nextInt();
    System.out.println("Enter expression [+ - * /]: ");
    char ex = objects.next().charAt(0);
    System.out.println("Enter second number:");
    double num2 = objects.nextInt();
    double sum = 0;
    if(ex=='+'){
      sum = num1 + num2;}
    else if(ex=='-'){
      sum = num1 - num2;}
    else if(ex=='*'){
      sum = num1 * num2;}
    else if(ex=='/'){
      sum = num1 / num2;}
    System.out.println(sum);
    System.out.println("\n");
    
    objects.close();
    
  }

}