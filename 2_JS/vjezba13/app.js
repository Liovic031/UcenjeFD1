// OOP je objektno orijentirano programiranje
// Klasa je opisnik objekta
class Osoba {
    // OOP princip učahurivanje (encapsulation)
    // skrivanje svojstva
    #ime;

    // omogućavanje pristupa skrivenom svojstvu
    get ime() { return this.#ime; }
    set ime(s) { this.#ime = s; }

    constructor(ime = '') {
        console.log("Konstruiram objekt iz klase Osoba");
        this.#ime = ime;

    }
}

// Objekt je instanca (pojavnost) klase
// o je objekt
const o = new Osoba(); // new je poziv konstruktora
o.ime = 'Pero'; // bez set u klasi ne može se postaviti vrijednost
//o.setIme('Marija') - ovako se ne postavlja ime
console.log(o.ime);

const d = new Date();
console.log(d.getDate());

const jucer = new Date(2025, 1, 24);

const student = new Osoba('Marija'); // slanje imena u konstruktor
console.log(student.ime);



// OOP princip nasljeđivanje (inheritance)
class Polaznik extends Osoba {
    #odradioObaveze;

    get odradioObaveze() { return this.#odradioObaveze; }
    set odradioObaveze(b) { this.#odradioObaveze = b; }

    constructor(ime = '', b = false) {
        super(ime);
        this.#odradioObaveze = b;
    }
}

[
    new Polaznik('Lucija', false), new Polaznik('Rita', true)
].forEach(o => console.log(o.ime, o.odradioObaveze));

const p = new Polaznik();
p.ime = 'Karlo';
p.odradioObaveze = true;

console.log(p.ime, p.odradioObaveze);



class Predavac extends Osoba {
    #redoviti;
    get redoviti() { return this.#redoviti; }
    constructor(ime = '', redoviti = false) {
        super(ime);
        this.#redoviti = redoviti;
    }
    toString() { // kako bi mogli u console log staviti samo predavac
        return `Ime je ${super.ime}, redovita: ${this.#redoviti}`;
    }
}


const predavac = new Predavac('Gordana', true);
console.log(`${predavac}`); // predavac instanca klase predavac
console.log(p); // instanca klase polaznik

console.log(jucer); // pozvala se metoda toString()

// JS još implementira Polimorfizam (višeobličje)

console.log(Math.random());

// Ideja objekta je da bude kontejner za podatke i metode koje upravljaju tim podacima
// Što s kodom koji nema potrebu pamtiti podatke već samo izvesti neku logiku

// U OOP ako želimo samo logiku bez potrebe pamćenja podataka koristimo statične metode

class Pomocno {
    static slucajniBroj(min = 0, max = 0) {
        if (min === 0 && max === 0) {
            return Math.random();
        }
        return ((Math.random() * (max - min) + min).toFixed(0));
    }
}
console.log(Pomocno.slucajniBroj());
console.log(Pomocno.slucajniBroj(25, 75));


