// Operatori
// = operator dodjeljivanja
// typeof omogućuje pristup tipa podatka
// == operator uspoređivanja vrijednosti
// === operator uspoređivanja po tipu i po vrijednosti

// ARITMETICKI OPERATORI
// + - * / 
const a = 2, b = 3; // simulacija unosa od korisnika (ulaz)
let rez = a + b; // algoritam
console.log(rez); // izlaz


// OPERATOR MODULO %
// ostatak nakon cjelobrojnog djeljenja
console.log(9 % 2); // 1
console.log(10 % 2); // 0
console.log(1000%100 === 0); // true


// OPERATORI DODJELE
// =
// želim vrijednost varijable rez uvećati za 2
rez = rez + 2; // u matematici se prvo izvodi desna strana i dodjeljuje lijevoj
console.log(rez); // 7

rez += 2;
console.log(rez); // 9
rez -= 5;
console.log(rez); // 4
const x = 2;
rez += x;
console.log(rez); // 6
rez += 1;
console.log(rez); // 7


// OPERATORI INCREMENT I DECREMENT
rez++; // -> ALI NITI OVO SE NE RADI
console.log(rez); // 8
// u isto vrijeme možeš koristiti i uvećavati/umanjivati vrijenost varijable
console.log(rez++); // 8 // prvo sam ispisao trenutnu vrijednost od rez i nakon toga ju uvećao
console.log(++rez); // 10 (9 je bilo nakon ispisa u prethodnoj liniji) pa prvo uvećanje tek onda ispis
console.log(--rez); // 9
console.log(rez--); // 9
console.log(rez); // 8


// OPERATORI USPOREĐIVANJA
console.log(5 == 5); // true
console.log('5' == 5); // true (uspoređuje samo po vrijednosti)
console.log('5' == 5); // false (usporešuje i po tipu i po vrijednosti)
console.log(3 == 7); // false
console.log('Osijek' === 'Osijek'); // true
console.log('Osijek' === 'osijek'); // false
console.log(5 === '5'); // false
console.log('Edunova' === 'Druga škola'); // false

// != različito (uspoređuje i tip i vrijednost)
console.log(4 != 3); // true
console.log('4'!= 4); // false

// veće od >
// veće jednako od >=
let godine = 18;
console.log(godine > 18); // false
console.log(godine >= 18); // true
// manje od <
// manje ili jednako od <=
godine = 21;
console.log(godine < 21); // false
console.log(godine <= 21); // true


// LOGIČKI OPERATORI: and (&&), or (||) i not (!)
const i1 = 5 == '5'; // i1 = true
const i2 = 7 > 9;  // i2 = false
// AND
console.log(i1 && i2); // false
// OR
console.log(i1 || i2); // true
// NE
console.log(!i1); // false
console.log(!i2); // true


// TERNARNI OPERATOR -> koristiti ćemo ga u if naredbi
// ? : 
const poruka = godine >=18 ? 'Punoljetan' : 'Maloljetan';
console.log(poruka);

// spajanje stringova (concatenation) +
const skola = 'Edunova';
console.log('Najbolja škola je ' + skola); // ovo se ne preporuča, već se preporuča koriptenje bakticks ``
console.log(`Najbolja škola je ${skola}`);
const razred = 5;
console.log('Idem u ' + razred + '. razred.');
console.log(`Idem u ${razred}. razred.`);


// SPREAD OPERATOR (...)
// koristi se na nizovima i objektima
// na nizu
const niz = [2,2,3,3]; // varijablu niz ne smijem mijenjati
console.log(niz);
const noviNiz = [1, ...niz, 4];
console.log(noviNiz);

// na objektu
const osoba = {
    ime: 'Pero',
    prezime: 'Perić'
};
console.log(osoba);
// želim proširiti pojam osobe na polaznika
const polaznik = {
    ...osoba,
    edukacija: 'Frontend'
};
console.log(polaznik);


// DESTRUCTING -> suprotno od spread
// na nizu
const [prvi, drugi] = [1, 2]; // s desne strane se nalazi niz s dva elementa, on je napravio dvije varijable koje imaju vrijednosti iz niza 
console.log(prvi);
console.log(drugi);

// na objektu
const {prezime, ...objektBezPrezimena} = polaznik;
console.log(objektBezPrezimena);
console.log(prezime); // ovo mi je škart koji postoji ali ne moram ga koristiti


// NULLISH COALESCING OPERATOR (??) 
let sifra = null;
console.log(sifra ?? 'Šifra nije postavljena'); // ako je šifra postavljena ispisuje se njezina vrijednost, inače ispisuje se '...'


// optional chaining (?.)
// malo kompleksniji JSON
const korisnik = {
    adresa:{
        grad: 'Osijek'
    }
};

console.log(korisnik.adresa.grad); // ispisuje Osijek
console.log(korisnik.adresa.ulica); // undefined, kod korištenja greška

console.log(korisnik?.adresa?.ulica); // undefined, bez greške


// typeof, instanceof
console.log([3,4,5] instanceof Array); //true


// in operator
console.log('prezime' in osoba); // true (provjerava nalazi li se u objektu)
console.log('prezime' in objektBezPrezimena); //false


// NEĆEMO KORISTITI - operatori nad bitovima bitwise (& i |)