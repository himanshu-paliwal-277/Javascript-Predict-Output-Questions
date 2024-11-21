// Arrow Functions & this

const obj = {
    name: 'John',
    greet: () => {
        console.log(this.name);
    }
};

obj.greet(); // undefined
