class Person{
    static nextId = 0;
    id = ++Person.nextId;
    constructor(fName, lName, address){
        this.fName = fName;
        this.lName = lName;
        this.address = address;
    }
    toString(){
        return `ID: ${this.id}, name: ${this.fName + ' ' + this.lName}, address: ${this.address}`
    }
}

class User extends Person{
    constructor(fName, lName, address, username, password, role){
        super(fName, lName, address);
        this.username = username;
        this.password = password;
        this.role = role;
    }
    toString(){
       return `${super.toString()}, username: ${this.username}, password: ${this.password}, role: ${this.role}`
    }
}

const p1 = new Person('Georgi', 'Petrov', 'Sofia 1000');
console.log(p1.toString());

const p2 = new Person('Ivan', 'Ivanov', 'Sofia 1000');
console.log(p2.toString());

const u1 = new User('Hristo', 'Dimitrov', 'Plovdiv', 'hristo', 'hristo', 'ADMIN');
const u2 = new User('Ivan', 'Dimitrov', 'Ruse', 'ivan', 'ivan', 'AUTHOR');
const u3 = new User('Peter', 'Ivanov', 'Ruse', 'peter', 'ivan', 'READER');

const users = [u1,u2,u3, p1, p2];
function printUsers(users){
    users.forEach((u,i) => console.log(`${i+1}: ${u.toString()}`));
}

printUsers(users);
