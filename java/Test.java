class Test{
    public static void main(String[] args){
        System.out.println("hello World");
    }
}


class Test2{
    public static void main(String[] args){
        System.out.println("hello Worldtest 2");
    }
}



   class ReverseString{
        public static void main(String[] args){
            String str = "Hello World";
            StringBuilder str2=new StringBuilder(str);
            System.out.println(str2);
            
            String reversed = new StringBuilder(str).reverse().toString();

            System.out.println(reversed);
            
        }
    }


    class ReverseString2{
        public static void main(String[] args){
            String Str="hello World";
            System.out.println(Str.charAt(3));  
            for(int i=Str.length()-1;i>=0;i--){
                System.out.print(Str.charAt(i));
            }
        }
    }


    class Palindrome{
        public static void main(String[] args){
            String str = "madam";
            String reversed = new StringBuilder(str).reverse().toString();
            if(str.equals(reversed)){
                System.out.println(str + " is a palindrome");
            }else{
                System.out.println(str + " is not a palindrome");
            }
        }
    }