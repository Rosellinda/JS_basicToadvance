//var can overwrite the variables
//let can update the variables
//const unable to change the value of the variables

//Data Types
// const Name = "Pedro";
// const Age = 19;
// const Rating = 49.3;
// const isComplete = true;
// const Val = null;
// const unk = undefined;
// console.log(typeof Val); //object

// let String = `My name is ${Name} and my Age is ${Age}`;
// console.log(String);

//******************************************** */
//Array

// const Fruits = ["Manga", "Banana", "Grapes", "Pinya"];
// Fruits.push("Santol"); //add at the end of the array
// Fruits.unshift("Santol"); //start of the array
// Fruits.pop("Santol"); //delete at the end of the array
// console.log(Fruits);

//How to check if the variables is an array
// console.log(Array.isArray(Fruits));

//How to checke the index in an array
// console.log(Fruits.indexOf("Pineapple"));

//1st para, specify san sa array mgsstart, 2nd param ilan ang tatanggalin
// Fruits.splice(0, 1);



//******************************************** */
//Object Literals - usually used when we use API
// const tao = 
// {
//     firstName: 'Pedro',
//     lastName: 'Penduko',
//     age: 35,
//     favorites: ['Apple', 'Blue', 'Math', 'FCC'],
//     familyMembers: {
//         father: 'Juan Penduko',
//         mother: 'Nenang Penduko',
//         sister: 'Nena Penduko'
//     }
// }

// console.log(tao);

const Contacts = [
    {
        id: 1,
        fullName: "Pedro Penduko",
        isSaved: "Phone"
    },
    {
        id: 2,
        fullName: "Juan Penduko",
        isSaved: "Phone"
    },
    {
        id: 3,
        fullName: "Nenang Penduko",
        isSaved: "SD"
    }
]

for(let i = 0; i< Contacts.length; i++){
    console.log(Contacts[i].id);
}

for(let contact of Contacts){
    console.log(contact);
}

Contacts.forEach( function(contact) {
    console.log(contact.fullName);
});

const ContactsFullname = Contacts.map
(function(contact) {
    return contact.fullName;
});
console.log(ContactsFullname);

const ContactsPhone = Contacts.filter( function(contact){
    return contact.isSaved == "Phone";
}).map(function(contact){
    return contact.fullName;
});

console.log(ContactsPhone);



