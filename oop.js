//OOP
//class

class Tao {
    constructor(firstName, lastName, bt){
        this.firstName = firstName;
        this.lastName = lastName;
        this.bt = bt;
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }

}

//instantiate object
const tao1 = new Tao('Pedro', 'Penduko', 'A');
const tao2 = new Tao('Nenang', 'Penduko', 'B');

console.log(tao1.firstName);
console.log(tao1.getFullName());

//constructor function
function Tao(firstName, lastName, bt) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.bt = bt;

    this.getFullname = () => {
        return `${this.firstName} ${this.lastName}`;
    }
}