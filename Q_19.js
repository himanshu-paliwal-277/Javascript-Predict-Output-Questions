//  Function with Arguments

function sum() {
    return arguments[0] + arguments[1];
}

console.log(sum(1, 2)); // 3
console.log(sum(1)); // NaN
