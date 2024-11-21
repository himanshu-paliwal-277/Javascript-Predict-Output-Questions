// Promises and Asynchronous Code

console.log('Start');

setTimeout(() => {
    console.log('Timeout 1');
}, 0);

Promise.resolve().then(() => {
    console.log('Promise 1');
});

console.log('End');

// Output
// Start
// End      
// Promise 1
// Timeout 1
