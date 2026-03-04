function customFlat(array) {
    let result = [];
    for (let item of array) {
        if (Array.isArray(item)) {
		
            result = result.concat(customFlat(item));
			console.log(result);
        } else {
            result.push(item);
            console.log(result,"resuli9ts");
        }
    }
    return result;
}

const arr = [1, [2, [3, 4]], 5];
console.log(customFlat(arr)); // Output: [1, 2, 3, 4, 5]