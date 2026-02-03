// UVJETNO GRANANJE IF

// if radi s boolean tipom podatka

const uvijet = true;

// osnovna if sintaksa treba samo if granu
if(uvijet){ // u if granu se ulazi ako je vrijednost true
    console.log('Uvijet je true');
}
else{ // ovdje se ulazi ako je vrijednost false
    console.log('Uvijet je false');
}
// ako ne postoji {} zagrade tada se uvijet odnosi samo naprvu sljedeću liniju

if(uvijet)
    console.log('Bez {} true');
else
    console.log('Bez {} false'); 
    console.log('Ovo se treba izvesti ako je false'); // ova linija se nece izvesti jer nema {} zagrada


// if naredba ima i else if dio
// -bolja zamjena za else if je switch

const ocjena = 3;

if(ocjena===1){
    console.log('Nedovoljan');
}
else if(ocjena===2){
    console.log('Dovoljan');
}
else if(ocjena===3){
    console.log('Dobar');
}
// možemo imati puno else if
else{
    console.log('Ocjena nije 1, 2, 3');
}
    
// ugnježđeni if
if(uvijet){
    if(ocjena>1){
        console.log('Oba uvijeta su zadovoljena');   
    }
}

// ovo gore može kraće
if(uvijet && ocjena>1){
    console.log('Kraći način zadovoljavanja oba uvijeta');
}

// tercijarni operator ? : je zapravo in line if
// ukoliko rezultat uvijeta (true/false) pozove istu akciju (u primjeru console.log)

if(ocjena>=2){
    console.log('Pozitivna');
}
else{
    console.log('Negativna');
}
//          uvijet      true          false
console.log(ocjena>2 ? 'Pozitivna' : 'Negativna');

// falsy/truly vrijednosti
const ime='Pero';
// const ime='Pero' // if(ime) true

if(ime){
    console.log('Ime je postavljeno');
}

// OSTALE FALSY VRIJEDNOST:
const b=0;
let objekt=null;
let nedefinirano; // undefined

const broj = Number('aaa');
console.log(broj); // dobije se NaN - Not a Number


