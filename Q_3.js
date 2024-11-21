// this Keyword

const obj = {
    name: 'John',
    greet: function() {
        console.log(this.name);
    }
};

obj.greet(); // John
