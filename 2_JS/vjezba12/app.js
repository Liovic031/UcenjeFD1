// FUNKCIONALNE METODE - skraćuju kod, standardno se koriste

// prvo nam trebaju podaci

const korisnici = [
    {id: 1, ime: 'Ana', prezime: 'Kartek', godine: 25, admin: false},
    {id: 2, ime: 'Ivan', prezime: 'Ivanović', godine: 28, admin: true},
    {id: 3, ime: 'Karlo', prezime: 'Karlović', godine: 35, admin: true},
    {id: 4, ime: 'Marko', prezime: 'Marković', godine: 21, admin: true},
    {id: 5, ime: 'Iva', prezime: 'Ivić', godine: 48, admin: false}
];


// onako kako znate, ispišite sva imena korisnika jedno ispod drugog
for(let i = 0; i < korisnici.length; i++){
    console.log(korisnici[i].ime);
}
console.log('***********************************');

// forEach()
korisnici.forEach(korisnik => console.log(korisnik.ime)); // u pravilu se ne radi ovako

console.log('***********************************');

korisnici.forEach(o => console.log(o.ime)); // o generički predstavlja objekt

console.log('***********************************');

korisnici.forEach(o => console.log(`${o.ime} ${o.prezime}`));
console.log('***********************************');
// idemo lijepo osloviti naše korisnike
korisnici.forEach(o => {
    let poruka = 'Poštavan';
    if(o.ime.endsWith('a')){
        poruka += 'a gospođo';
    }
    else{
        poruka += 'i gospodine';
    }
    console.log(`${poruka} ${o.ime} ${o.prezime}`);
});

console.log('***********************************');
// map() FUNKCIJA
// želim iz ovog niza izvući samo imena u novi niz
const samoImena = korisnici.map(o=> o.ime);
console.log(samoImena);
console.log('***********************************');

const maliNiz = korisnici.map(({id, ime, prezime}) => ({sifra: id, imeOsobe: ime + ' ' + prezime}));
console.log(maliNiz);
console.log('***********************************');

//find() FUNKCIJA
const pronaden = korisnici.find(o => o.id === 3);
console.log(pronaden);
console.log(korisnici.find(o => o.id === 3)?.ime);

console.log('***********************************');

// findIndex()
console.log(korisnici.findIndex(o=> o.ime === 'Iva'));
console.log('***********************************');

//filter()
console.log(korisnici.filter(o => o.godine>25));
console.log('***********************************');

// reduce()
console.log(korisnici.reduce((suma, o) => suma + o.godine, 0)); // 0 je početna vrijednost
console.log('***********************************');

// some()
const imaAdmin = korisnici.some(o => o.admin); // admin je bool pa ne treba o.admin===true
console.log(imaAdmin ? 'Ima admin' : 'Nema admin');

// every()
const sviPunoljetni = korisnici.every(o => o.godine >= 18);
console.log(sviPunoljetni ? 'Svi su punoljetni' : 'Nisu svi punoljetni');
