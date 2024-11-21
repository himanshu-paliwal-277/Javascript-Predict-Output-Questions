// this Keyword

const obj = {
    name: 'John',
    greet: function() {
        console.log(this.name);
    }
};

const greet = obj.greet;
greet(); // undefined
