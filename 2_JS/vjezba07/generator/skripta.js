const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {
    const duzinaLozinke = Number(document.getElementById('a').value); 
    const brojLozinki = Number(document.getElementById('b').value);

    const velikaSlova = document.getElementById('velikaSlova').checked;
    const malaSlova = document.getElementById('malaSlova').checked;
    const brojevi = document.getElementById('brojevi').checked;
    const interpunkcijskiZnakovi = document.getElementById('interpunkcijskiZnakovi').checked;

    const pocetakBroj = document.getElementById('pocetakBroj').checked;
    const pocetakZnak = document.getElementById('pocetakZnak').checked;
    const zavrsetakBroj = document.getElementById('zavrsetakBroj').checked;
    const zavrsetakZnak = document.getElementById('zavrsetakZnak').checked;

    const ponavljanje = document.getElementById('ponavljanje').checked;

    // SVI ZNAKOVI
    const vs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    const ms = "abcdefghijklmnopqrstuvwxyz"; 
    const br = "0123456789"; 
    const zk = "!@#$%^&*()_+-=[]{};:,.<>/?";

    // STRING ZA ZNAKOVE KOJE JE KORISNIK ODABRAO
    let dozvoljeniSimboli = '';
    if(velikaSlova){
        dozvoljeniSimboli += vs;
    }
    if(malaSlova){
        dozvoljeniSimboli += ms;
    }
    if(brojevi){
        dozvoljeniSimboli += br;
    }
    if(interpunkcijskiZnakovi){
        dozvoljeniSimboli += zk;
    }

    // SIGURNOSNE PROVJERE
    if(isNaN(duzinaLozinke) || duzinaLozinke < 1){ 
        rezultat.innerHTML = "Unesite ispravnu dužinu lozinke."; 
        return; 
    }
    if(isNaN(brojLozinki) || brojLozinki < 1){ 
        rezultat.innerHTML = "Unesite ispravan broj lozinki."; 
        return; 
    }
    if(dozvoljeniSimboli.length === 0){ 
        rezultat.innerHTML = "Odaberite barem jednu grupu znakova.";
        return; 
    }
    if(pocetakBroj && pocetakZnak){
        rezultat.innerHTML = "Lozinka ne može počinjati s brojem i sa znakom";
        return; 
    }
    if(zavrsetakBroj && zavrsetakZnak){
        rezultat.innerHTML = "Lozinka ne može završavati s brojem i sa znakom";
        return; 
    }

    // ALGORITAM
    let sveLozinke = "";
    
    for(let i = 0; i < brojLozinki; i++){
        // PRVI ZNAK
        let lozinka = ''
        if(pocetakBroj){
            lozinka += br[Math.floor(Math.random() * br.length)];
        }
        else if(pocetakZnak){
            lozinka += zk[Math.floor(Math.random() * zk.length)];
        }
        else{
            lozinka += dozvoljeniSimboli[Math.floor(Math.random() * dozvoljeniSimboli.length)];
        }
        // SREDINA
        for (let j = 1; j < duzinaLozinke - 1; j++){
            lozinka += dozvoljeniSimboli[Math.floor(Math.random() * dozvoljeniSimboli.length)];
        }
        // ZADNJI ZNAK
        if(zavrsetakBroj){
            lozinka += br[Math.floor(Math.random() * br.length)];
        }
        else if(zavrsetakZnak){
            lozinka += zk[Math.floor(Math.random() * zk.length)];
        }
        else{
            lozinka += dozvoljeniSimboli[Math.floor(Math.random() * dozvoljeniSimboli.length)];
        }
        // SPREMANJE LOZINKE U STRING SVIH LOZINKI
        sveLozinke += lozinka + ' , ';
    }

    rezultat.innerHTML = sveLozinke;
    return;
});