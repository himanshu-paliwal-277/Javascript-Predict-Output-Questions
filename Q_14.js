// Event Loop and Synchronous/Asynchronous Execution

console.log(1);

setTimeout(function() {
    console.log(2);
}, 0);

Promise.resolve().then(function() {
    console.log(3);
});

console.log(4);

// Output
// 1
// 4
// 3
// 2
