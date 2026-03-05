function movezeros(arr) {

    return arr.filter(x => x !== 0).concat(arr.filter(x => x === 0));


}

console.log(movezeros([1, 0, 1, 2, 0, 1, 3])); // [1, 1, 2, 1, 3, 0, 0]