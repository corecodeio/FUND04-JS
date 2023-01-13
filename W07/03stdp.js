let a = [1, 2, 3, 4];
console.log(a);
a.push(true);
console.log(a);
a.push('Yosef');
console.log(a);
a.pop();
console.log(a);

console.log(['Yosef', ...a]);

/**
 * Main.java
 * 
 * 
  import java.util.Arrays;

  public class Main {

    public static void main(String[] args) {
      System.out.println("Hello World");
      User u = new User("Yosef", 27);
      System.out.println(u);
      //System.out.println(u.name);
      String[] a = { "Hola", "Yosef" };
      System.out.println(a[0]);
      System.out.println(Arrays.toString(a));
    }
  }
 * 
 */

/**
 * User.java
 * 
 * 
  public class User {

    private String name;
    private int age;

    public User(String name, int age) {
      this.name = name;
      this.age = age;
    }

    public boolean isLegal() {
      return this.age >= 21;
    }

    public String toString() {
      return "=====\nname: " + this.name + "\nage:" + this.age + "\n=====";
    }
  }
 * 
 */
