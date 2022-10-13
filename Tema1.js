//FUNCTII
/** In JavaScript o functie este un bloc de cod conceput pentru a executa o anumita sarcina */
//  O functie este definita prin keyword-ul "function", urmata de un nume, urmat de paranteze ( )
//  O functie poate avea sau nu parametri

function getSumOfTwo(first, second) {
    return first + second;
}

const sum = getSumOfTwo(13, 45);

console.log(sum);

//O functie poate fi prescurtata folosind operatorul "=>" (arrow)

const getSumOfTwoSecond = (first, second) => {first + second}

console.log(getSumOfTwo(23, 54));
 
//1.2 VAR, LET, CONST


/** LET si CONST - introduse in JavaScript ES6
 * 
 * Diferente intre VAR si LET
 *      - variabilele de tip VAR sunt accesibile in cadrul functiei in care sunt definite
 *      - variabilele de tip LET sunt accesibile in cadrul blocului in care sunt definite
 *      
 *      - variabilele de tip LET nu pot fi accesate inainte de a fi declarate
 * 
 *      - variabilele de tip LET nu pot fi redeclarate
 * 
 * CONST
 *      - variabilele de tip CONST sunt similare cu cele de tip LET dpdv al accesibilitatii,
 *        dar nu pot fi re-atribuite, iar initializarea cu o valoare este necesara
*/

{
    let y = 357;
}

let x = 120;

function printSomething() {
    console.log(x);
    //console.log(y) ==> ReferenceError

    var z = 37;
}

//console.log(z) ==> Reference Error

printSomething();

//console.log(a); undefined
var a = 40;
//console.log(b);  ReferenceError: b is not defined
let b = 30;

var d;
var d; // Works fine.

//let e;
//let e;  SyntaxError: Identifier 'e' has already been declared

var f;
//let f;  SyntaxError: Identifier 'f' has already been declared

for(let g = 0; g < 3; g++) {
    console.log(g);
}

/**________________________________________________________________________________________ */
//1.3 SPREAD OPERATOR
/** SPREAD OPERATOR (...) ne permite sa copiem in intregime sau partial un obiect / vector in alt obiect / vector */

const vector1 = [1, 2, 3];
const vector2 = [3, 4, 5];

const vector3 = [...vector1, ...vector2];
console.log(vector3); //OUTPUT [ 1, 2, 3, 3, 4, 5 ]

/**Putem folosi SPREAD OPERATOR pentru a clona un sir (in JavaScript copierea se face prin referinta nu prin valoare)*/

let arr1 = [ 1, 2, 3];
let arr2 = arr1;

console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3]

arr1.push(4);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]

let arr3 = [ 1, 2, 3];

// Copiere
let arr4 = [...arr1];

console.log(arr3); // [1, 2, 3]
console.log(arr4); // [1, 2, 3]

// Adaugare element in vectorul arr3
arr3.push(4);

console.log(arr3); // [1, 2, 3, 4]
console.log(arr4); // [1, 2, 3]

/** De asemenea, putem folosi acest operator si pentru a copia obiecte */
const obj1 = { x : 1, y : 2 };
const obj2 = { z : 3 };

const obj3 = {...obj1, ...obj2};

console.log(obj3); // {x: 1, y: 2, z: 3}

/**_________________________________________________________________________________________ */
//1.4 OBIECTE
/** In JavaScript un obiect este o entitate care reprezinta o colectie de proprietati,
 * unde o proprietate este o asociere intre o cheie si o valoare.
 */

const masina = {
    marca: 'Volkswagen',
    model: 'Passat',
    an: 2016
}

/** Pentru a accesa valoarea unui camp din interiorul obiectului folosim operatorul "." */

console.log(masina.model);

/** Pentru a itera printr-un obiect, putem folosi una din cele 3 metode statice predefinite:
 *      - Object.keys()  ==> returneaza cheile
 *      - Object.values() ==> returneaza valorile
 *      - Object.entries() ==> returneaza perechile (cheie, valoare)
 */

let proprietati = Object.entries(masina);

for ([key, value] of proprietati){
    console.log(key, value);
  } 

/** __________________________________________________________________________________________ */
//1.5 ARRAYS
/** Iteratie */

const array = [13, 46, 35, 25, 19, 83, 22, 55];

//folosing un while loop
var i = 0;
while(i < array.length) {
    console.log(array[i]);
    i++;
}

console.log();

//folosind un for loop
for(var j = 0; j < array.length; j++) {
    console.log(array[j]);
}

console.log();

//folosing un for .. in loop
for(k in array) {
    console.log(array[k]);
}

console.log();
//folosind un for .. of loop

for(l of array) {
    console.log(l);
}

console.log();
//folosind un forEach loop

array.forEach((element) => {
    console.log(element);
})

/** Mutator methods ==> modifica array-ul */

//sort() ==> sorteaza array-ul

const myArray = [5, 4, 3, 2, 1]

// Sortare crescatoare
myArray.sort(function(a, b) {return a - b});
//------->Return value: [1, 2, 3, 4, 5]

//unshift() ==> adauga 1 sau mai multe elemente la inceputul sirului

myArray.unshift(7, 0, 9, 6);

//shift() ==> sterge primul element dintr-un sir, pe care il returneza

myArray.unshift();

//splice() ==> adauga sau sterge elemente din sir

myArray.splice(2, 3); // ==> sterge 2 elemente incepand cu pozitia 2
myArray.splice(1, 0, 14, 11); // ==> adauga elementele 14 si 11 incepand cu pozitia 1


myArray.reverse(); // inverseaza sirul
myArray.pop(); // sterge ultimul element din sir, pe care il returneaza

//fill() ==> myArray.fill(value, start, end) ==> umple sirul cu o valoare transmisa ca parametru
//forEach() ==> aplica o functie fiecarui element din sir

/**  __________________________________________________________________________________________________ */
//1.6 PROMISE si CALLBACK

/** CALLBACKS - functii care sunt transmise ca si parametru in cadrul altor functii, unde sunt apelate */
console.log();

function mySumDisplayer(some) {
    console.log(some);
}
  
function mySum(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

mySumDisplayer(mySum(5, 3));

/** PROMISE este un obiect care reprezinta o eventuara completare / esuare a unei operatii asincronizate */

var promise = new Promise((resolve, reject) => {
    const x = "cuvant";
    const y = "cuvantul"
    if(x === y) {
        resolve();
    } else {
        reject();
    }
  });
     
  promise.then(function () {
          console.log('Egalitate');
      }).catch(function () {
          console.log('Non-Egalitate');
      });

/** ______________________________________________________________________________________________ */
//ASYNC si AWAIT
/** Cuvantul ASYNC inaintea unei functii face ca functia sa returneze un PROMISE*/
/** Cuvantul AWAIT inaintea unei functii face ca functia sa astepte un PROMISE */

async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      resolve("Afiseaza un mesaj");
    });
    console.log(await myPromise);
  }
  
  myDisplay();

/** ______________________________________________________________________________________________  */
//1.9 CLOSURES

/*In JavaScipt CLOSURE inseamna ca o functie interioara are mereu acces la variabilele si parametrii functilor exterioare, chiar si dupa ce functia exterioara s a returnat.*/



function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer variable ' + outerVariable);
        console.log('Inner variable ' + innerVariable);
    }
}

const newFunction = outerFunction("outsideMsg");
newFunction('insideMsg');
