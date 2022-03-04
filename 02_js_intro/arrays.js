//Print in format employees under 40 years in format: id -> NAME, 20

var employees = [
    { name: 'John', age: 35 },
    { name: 'Bill', age: 45 },
    { name: 'Amy', age: 27 },
    { name: 'Ivan', age: 27 }
];

var person = new Object();
person.name = 'Dimi'
person.age = 10
employees.push(person);

var result = employees.filter(function(employee){
    return employee.age < 40
})
.map((emp, ind) => {
    console.log(`${ind} -> ${emp.name.toUpperCase()}, ${emp.age}`);
})
