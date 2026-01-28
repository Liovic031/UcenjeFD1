// varijabla je prostor u memoriji
// može biti različitih tipova
// u JS se može definirati na tri različita načina

//ulaz podatka u program
// prompt uvijek unosi string
const ime = 'Edunova';//prompt('Unesi svoje ime');
// Fiksno stavljena vrijednost da pri izvođenju ne pita svaki puta za unos
// za testiranje treba obrisati Edunova

console.log(`Dobar dan ${ime}!`)

console.log(typeof ime, ime);


// unos godina je string
const unosGodina = '2026';//prompt('Unesi godinu');


//konverzija u broj
const godina = Number(unosGodina);

console.log(typeof godina, godina);


// odavdje više ne koristim prompt već fiksno string
//decimalni broj - floating point
const unosDecimalniBroj = '3.14'; // decimalni dio se odvaja s točka

const decimalniBroj = parseFloat(unosDecimalniBroj);

console.log(typeof decimalniBroj, decimalniBroj);


//cijeli broj
const cijeliBroj = parseInt('12');

console.log(typeof cijeliBroj, cijeliBroj);


//logička vrijednost
const logickaVrijednost = true;

console.log(typeof logickaVrijednost, logickaVrijednost);


// const je konstantna, varijabla se ne može mijenjati
//logickaVrijednost = false; Uncaught TypeError: Assignment to constant variable.

// "prava varijabla u VS"
let broj = 7;

// let dozvoljava promjenu vrijednosti varijable
broj = 9;

console.log(typeof broj, broj);


//let broj = 2; Varijabla se ne može redeklarirati

//JS je interpreter
broj = '9'; //promjena tipa varijable
console.log(typeof broj, broj);


//STARO, ne koristiti - ne znači da ne postoji

var i = 7;
console.log(typeof i, i);
i='7';
console.log(typeof i, i);
var i = true; //var omogućava redeklaraciju i to nije dobro
console.log(typeof i, i);


const velikiCijeliBroj = 34326435345324235324n;
console.log(typeof velikiCijeliBroj, velikiCijeliBroj);

let x; //undefined
console.log(typeof x, x);
x=6;
console.log(typeof x, x);

let y = null;
console.log(typeof y, y);

//JSON - javaScript Object Notation
const osobaObjekt = {
    ime:'Pero',
    godine:'27',
    znaProgramirati: true
};

console.log(typeof osobaObjekt, osobaObjekt);
console.table(typeof osobaObjekt, osobaObjekt);

const brojevi = [2,3,1,2]; 
console.log(typeof brojevi, brojevi); // piše object ali to je Array

const podaciBackend = [
    {
        ime: 'Pero',
        prezime: 'Perić'
    },
    {
        ime: 'Ana',
        prezime: 'Majić'
    }

];
console.table(podaciBackend);

// tradicionalni način pisanja funkcija
function pozdrav(){
    console.log('Hello iz funkcije');
}

console.log(typeof pozdrav, pozdrav);

// trenutni način pisanja funkcija
const pozdravi = () => console.log('Hello iz funkcije nove')
console.log(typeof pozdravi, pozdravi);

const id1 = Symbol('id'); //ovo ispod '' je opis
const id2 = Symbol('id');

console.log(typeof id1, id1);
console.log(typeof id2, id2);

// operator provjere jednakosti
// == -> provjerava samo po vrijednosti '2' je jednako 2
// === -> provjerava po tipu i po vrijednosti '2' nije jednako 2
console.log(id1==id2);
console.log(id1===id2);