// petlje, iteracije, ponavljanje koraka

// klasična for petlja

// zad ispisati 10 puta Edunova u konzoli
console.log('Edunova');
console.log('Edunova');
console.log('Edunova');
console.log('Edunova');
console.log('Edunova');
console.log('Edunova');
console.log('Edunova');
console.log('Edunova');
console.log('Edunova');
console.log('Edunova');

console.log('==================');

for(let i = 0; i < 10; i++){
    console.log('Edunova');
}

console.log('==================');

for(let i = 0; i < 10; i++) console.log('Edunova');

console.log('==================');

for(let i = 0; i < 10; i++){
    console.log(`Vrijednost i je ${i}`);
}

console.log('==================');

let suma = 0;
for(let i = 0; i < 10; i++){
    console.log(`${suma} + ${i+1} = `);
    suma += i + 1;
    console.log(suma);
    //debugger;
}
console.log('suma', suma);

console.log('==================');
// petlja se može preskočiti i nasilno prekinuti
for(let i = 0; i < 10; i++){
    if(i===3){
        continue; // preskoči console.log
    }
    if(i===7){
        break; // nasilno prekini petlju bez obzira na vrijednost i
    }
    console.log(i);
}

console.log('==================');

for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        console.log( (i+2) * (j+1));     
    }
}

console.log('==================');
// for s nizom
const niz = [2, 3, 45, 5, 6];
for(let i = 0; i < niz.length; i++){
    console.log(niz[i]);
}

console.log('==================');
// pojednostavljena sintaksa ali samo za prolazak
for(const broj of niz){
    console.log(broj); 
}

// string je niz (neformalno ali je)

const ime = 'Marko'; // string
for(let i=0; i<ime.length;i++){
    console.log(ime[i]);
}

console.log('==================');
// beskonačna petlja
let broj = 0;
for(;;){
    console.log(broj++);
    if(broj === 5)break;
}
