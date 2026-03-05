const fruits = ["apple", "banana", "orange"];
fruits.reverse();
console.log(fruits); // Output: ["orange", "banana", "apple"]


const fruites = "nagendra";

const result = fruites.split("").reverse().join("");

console.log(result);



const str = "nagendra";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}

console.log(reversed);