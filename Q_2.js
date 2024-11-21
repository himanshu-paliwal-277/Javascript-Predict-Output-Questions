// Function Scope & Hoisting

function test() {
    console.log(x); // undefined
    var x = 5;
    console.log(x); // 5
}

test();
