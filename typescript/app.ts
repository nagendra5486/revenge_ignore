const username="NagendraVeeraVenkata";


// const data=username.split("").reverse().join("");

// console.log(data);



let reversedUsername="";

for(let i=username.length-1;i>=0;i--){
    reversedUsername+=username[i];
}

console.log(reversedUsername);


const promise = Promise.resolve("Success");

promise.then(result => {
  console.log(result);
});
