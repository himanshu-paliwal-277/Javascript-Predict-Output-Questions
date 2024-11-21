// let inside a loop with setTimeout

for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // 0, 1, 2
    }, 1000);
}
