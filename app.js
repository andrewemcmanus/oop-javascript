// const car = {
//     make: 'tesla',
//     model: 'model s',
//     color: 'red'
// }

// function start() {
//     return 'Outta here...';
// }

// function stop() {
//     return 'push the brakes...';
// }

// EMBEDDING FUNCTIONS INSIDE OF OBJECTS:

const car = {
    make: 'tesla',
    model: 'model s',
    color: 'red',
    start: function() {
        return 'outta here...';
    },
    stop: function() {
        return 'push the brakes';
    }
};

console.log(car.start());  // objectname.function() 

const employee = {
    name: 'Andrew McManus',
    role: 'Composer',
    salary: '$0' 
}

function salaryIncrease(salary) {
    return salary * 1.1; 
}
console.log(salaryIncrease(employee.salary)); // an external function, taking a value from an object as input
employee.salary = salaryIncrease(employee.salary);