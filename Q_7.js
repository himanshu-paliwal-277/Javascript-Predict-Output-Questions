// setTimeout with var inside a loop

for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // 3, 3, 3
    }, 1000);
}
