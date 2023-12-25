let marka = "bmw";
let brand = "m4";
let price = "30000";
let color = "black";


// obyektin yaradilmasi

let car = {
    marka : "bmw",
    brand : "m4",
    price : 30000,
    color : "black",
    "is auto" : true,
};


// console.log(car.marka);
// console.log(car.color);
// console.log(car["marka"]);

// console.log(Object.keys(car));
// console.log(Object.values(car));
// console.log(Object.entries(car));

// delete car.price;

// car.marka = 20000;

// console.log("price" in car);

// for(let key in car){
//     console.log(key,car[key]);
// }

// function makeUser(name, age){
//     return {
//         name,
//         age,
//     };
// }

// let user = makeUser("fatime",18);
// console.log(user);


// let object = {
//     name: 1,
//     for: 2,
//     const: 3,
//     return: 4,
// }


// console.log(object.for);

// let user = {};
// console.log(user.price);

// console.log("age" in user);
// console.log("price" in user);


// let object = {
//     test: undefined,
// }

// console.log("test" in object);

// let codes = {
//     "+994" : "Aze",
//     "+49" : "Ger",
//     "+1" : "Usa",
//     "+12" : "Spa"
// }

// for(let key in codes){
//     console.log(key);
// }

// let user = {
//     name: "fatime",
//     surname:"yusubova",
// }

// user.age = 18;

// for(let key in user){
//     console.log(key);
// }

let user = {
    name: "fatime",
    surname:"yusubov",
}

let person = {};
// person.name = "vusal";


// console.log(user);

// for(let key in user){
//     person[key] = user[key];
// }

// person.name = "vusal"
// console.log(user);

Object.assign(person,user);

person.age = 19;

// console.log(user);


// primitive types = string,numbers,null,undefined,symbol,boolen
// reference types = array,func,object,date,object ....


// let age = 18;

// let age1 = age;
// age1 = 20;

// age = age1

// console.log(age);
// console.log(age1);


// let numbers = [1,23,5,12,65];


// console.log(Math.max(0, 150, 30, 20, -8, -200));
console.log(Math.trunc(Math.random()*100));


// 0<x<100

