//  Array Methods (map, filter, reduce)

const arr = [1, 2, 3, 4, 5];

const result = arr.map(x => x * 2).filter(x => x > 5).reduce((sum, x) => sum + x, 0);

console.log(result); 

// Output
// 24
