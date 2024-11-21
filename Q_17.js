// bind() Method

const obj = { name: 'Alice' };
function greet() {
    console.log(this.name);
}

const boundGreet = greet.bind(obj);
boundGreet(); // Alice
