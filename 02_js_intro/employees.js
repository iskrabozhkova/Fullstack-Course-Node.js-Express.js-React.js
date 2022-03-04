function Employee(name, experienceInYears, qualifications){
  this.name = name;
  this.experienceInYears = experienceInYears;
  this.qualifications = qualifications;
}

Employee.prototype.toString = function employeeToString(){
    return this.name + ' ' + this.experienceInYears + ' ' + this.qualifications;
}

var employee1 = new Employee('Ivan', 23, ['programmer', 'doctor']);
var employee2 = new Employee('Maria', 40, ['laywer']);

console.log(employee1.toString());
console.log(employee2.toString());