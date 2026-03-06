const user= new Map([["name", "af"], ["age", 25], ["city", "New York"]]);

user.set("name", "af");
user.set("age", 25);
user.set("city", "New York");

console.log(user); // Output: Map(3) {"name" => "af", "age" => 25, "city" => "New York"}
user.clear();

console.log(user); // Output: Map(0) {}