function isPalindrome(str){


    str=str.toString().toLowerCase();
    console.log(str);

    return str===str.split("").reverse().join("");

}


const result=isPalindrome(12321);


console.log(result);