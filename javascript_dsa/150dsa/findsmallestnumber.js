function findSmallestNumber(nums){

    return Math.min(...nums);
    
}


console.log(findSmallestNumber([1, 2, 3, 4, 5])); // Output: 1
console.log(findSmallestNumber([-1, -2, -3, -4, -5])); // Output: -5