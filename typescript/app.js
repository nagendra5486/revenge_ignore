var username = "NagendraVeeraVenkata";
// const data=username.split("").reverse().join("");
// console.log(data);
var reversedUsername = "";
for (var i = username.length - 1; i >= 0; i--) {
    reversedUsername += username[i];
}
console.log(reversedUsername);
var promise = Promise.resolve("Success");
promise.then(function (result) {
    console.log(result);
});
