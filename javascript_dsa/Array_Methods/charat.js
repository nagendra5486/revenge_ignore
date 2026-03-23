console.log("charatjs printing or not ");


function charAt(){
    const user_name="nagendra";
    const result=user_name.charAt(1);
    console.log(result);


    const result_ok=user_name.includes("z");
    console.log(result_ok);



    const resultone=user_name.indexOf("a");
    console.log(resultone);



    const resultreplace=user_name.replace("a","b");
    console.log(resultreplace);
}


charAt();