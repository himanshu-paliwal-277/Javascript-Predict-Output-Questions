// Function Expression vs Declaration

foo(); // ReferenceError: Cannot access 'foo' before initialization

const foo = function() {
    console.log('Hello');
};
