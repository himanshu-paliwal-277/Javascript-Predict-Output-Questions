// Arrow Functions and this Binding

const obj = {
    name: 'Bob',
    greet: () => {
        console.log(this.name);
    }
};

obj.greet(); // undefined
