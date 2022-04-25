/*
const, let, var -> változók létrehozása
Az egyenlőség jel bal oldalán = a változó neve, jobb oldalon pedig az ehhez tartó érték

Primitívek: string, number, boolean, undefined, null
*/

/* PRIMITIVES */
// const aString = "I am a string!"; //MINDIG idézőjelbe rakjuk a stringet, backtick-kel többsörös string-et is létre tudunk hozni ``.

//EZEKET TILOS IDÉZŐJELBE RAKNI, KÜLÖNBEN STRING-KÉNT LESZNEK ÉRTELMEZVE
// let aNumber = 012;
// var aBoolean = false;
// let anUndefined = undefined;
// let aNull = null;

// //MINDEN OLYAN MŰVELET EREDMÉNYE, AMELYNEK AZ EREDMÉNYE NEM SZÁM
// let notANumber = NaN;

//typeof ->
// console.log(typeof aNumber);

// console.log(typeof anUndefined); //Type -> undefined

// console.log(typeof aNull); //Type -> object

// console.log(typeof notANumber); //Type -> number

//FUNCTIONS

// HA SZIMPLA FÜGGVÉNY -> A STACK TETEJÉRE UGRIK, LEFUT
// A FIRST CLASS CITIZEN => DEKLARÁCIÓ UTÁN CSAK!!!

// console.log(aFunction01());

// function aFunction01() {
//Ez a függvény belseje

//A függvény mindenképpen return-öl, ha lefuttatjuk -> ha nem adjuk meg a return értékét, undefined az eredmény

//     return "I am a function";
// };

// const aFunction02 = function () {
//     //FIRST CLASS CITIZEN = a függvény teljesen egyenértékű egy primitívvel v. objektummal

//     //ez is egy függvény, majdnem úgy viselkedik, mintha a függvénynek neve lenne

//     return "this is an another function"
// };

// const aFunction03 = () => {
//     return "This is a function, but declared with an arrow function!"
// };

// const aFunction04 = () => `This is a function, declared with arrow function, but it is short-handed`;


//MINDEN VÁLTOZÓBA MENTETT CUCCUNK CSAK DEKLARÁCIÓ UTÁN FÉRÜNK HOZZÁ!!!
// console.log(aFunction02());

//SCOPE

// console.log(carType);

// function scope() {
//     let x = "Element";
//     let carType = "Van";
//     let counter = 0;
//     // console.log(i);
//     function addToCounter() {
//         for (var i = 0; i < 100; i++) {
//             counter++
//         };
//         console.log(i)
//     };
//     addToCounter();
//     return `${x} ${counter}`;
// };

// console.log(scope());
// // console.log(carType);
// console.log(scope());


//PARAMETERS

// let theString = "This is a string";
// let theNumber = 24;
// let theArray = [12, "index01", [24, 36, 48]];

// function letThereBeParams(string = "Fluffy", number = 26, array = ["hello", "world", 12, 245, [22, "topic"]]) {
//     return `${string} ${number} ${array}`;
// };

// console.log(letThereBeParams(theString, theNumber, theArray));
// console.log(letThereBeParams("String", 12, [52, "Margit"]));
// console.log(letThereBeParams());

//IF ELSE elágazások

// if (number % 2 === 0) {
//     //ide jön a teljesült feltétel
//      return "Even"
// } else {
//     //ide jön ha nem teljesül a feltétel
//     return "False"
// }

const arr = [1, 2, 3, 4, 5, 6, 10];

let elementsIter01 = function (array) {
    for (let i = 0; i < array.length; i++) {
        console.log(arr[i])
    };
};

let elementsIter02 = function (array) {
    for (element of array) {
        console.log(element)
    };
};

// elementsIter01(arr);
elementsIter02(arr);