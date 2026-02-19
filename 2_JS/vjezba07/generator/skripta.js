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

    const nePonavljanje = document.getElementById('nePonavljanje').checked;

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
    if(isNaN(duzinaLozinke) || duzinaLozinke < 3 || duzinaLozinke > 25){ 
        rezultat.innerHTML = "Unesite dužinu lozinke između 3 i 25."; 
        return; 
    }
    if(isNaN(brojLozinki) || brojLozinki < 1){ 
        rezultat.innerHTML = "Unesite broj lozinki."; 
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
    if(nePonavljanje && pocetakBroj && !brojevi) {
        rezultat.innerHTML = "Lozinka treba početi brojem, ali brojevi nisu uključeni.";
        return;
    }
    if(nePonavljanje && pocetakZnak && !interpunkcijskiZnakovi) {
        rezultat.innerHTML = "Lozinka treba početi interpukcijskim znakom, ali interpukcijski znakovi nisu uključeni.";
        return;
    }
    if (nePonavljanje && zavrsetakBroj && !brojevi) {
        rezultat.innerHTML = "Lozinka treba završiti brojem, ali brojevi nisu uključeni.";
        return;
    }
    if (nePonavljanje && zavrsetakZnak && !interpunkcijskiZnakovi) {
        rezultat.innerHTML = "Lozinka treba završiti znakom, ali znakovi nisu uključeni.";
        return;
    }
    if (nePonavljanje && duzinaLozinke > dozvoljeniSimboli.length) {
        rezultat.innerHTML = "Nema dovoljno različitih znakova za lozinku bez ponavljanja. Smanjite dužinu lozinke ili omogućite još znakova!";
        return;
    }

    
    // ALGORITAM
    let sveLozinke = "";

    for(let i = 0; i < brojLozinki; i++){

        // I. PRVI ZNAK

        let lozinka = ''
        // varijable koje se koriste u slučaju da se znakovi ne smiju ponavljati
        let lokalniSimboli = dozvoljeniSimboli;
        let lokalniBr = br;
        let lokalniZk = zk;
        let zadnjiZnak = '';
        //
        if(pocetakBroj){ // ukoliko je prvi znak broj

            if(nePonavljanje){ //Samo u slučaju da se znakovi ne smiju ponavljati
                lozinka += lokalniBr[Math.floor(Math.random() * lokalniBr.length)];
                zadnjiZnak = lozinka[lozinka.length-1];
                lokalniSimboli = lokalniSimboli.replace(zadnjiZnak,'');
                lokalniBr = lokalniBr.replace(zadnjiZnak,'');
            }
            else{ // Ako se znakovi smiju ponavljati
                lozinka += br[Math.floor(Math.random() * br.length)];
            }

        }
        else if(pocetakZnak){ // Ukoliko je prvi znak interpukcijski znak

            if(nePonavljanje){ // Isti način
                lozinka += lokalniZk[Math.floor(Math.random() * lokalniZk.length)];
                zadnjiZnak = lozinka[lozinka.length-1];
                lokalniSimboli = lokalniSimboli.replace(zadnjiZnak,'');
                lokalniZk = lokalniZk.replace(zadnjiZnak,'');
            }
            else{
                lozinka += zk[Math.floor(Math.random() * zk.length)];
            }

        }
        else{ // ukoliko je svejedno koji je prvi znak

            if(nePonavljanje){ // Isti način
                lozinka += lokalniSimboli[Math.floor(Math.random() * lokalniSimboli.length)];
                zadnjiZnak = lozinka[lozinka.length-1];
                lokalniSimboli = lokalniSimboli.replace(zadnjiZnak,''); // izbacivanje simbola iz stringa
                lokalniZk = lokalniZk.replace(zadnjiZnak,''); // zanemarit će se ako se simbol ne nalazi u stringu
                lokalniBr = lokalniBr.replace(zadnjiZnak,''); // zanemarit će se ako se simbol ne nalazi u stringu
            }
            else{
                lozinka += dozvoljeniSimboli[Math.floor(Math.random() * dozvoljeniSimboli.length)];
            }
        }


        // II. SREDINA

        for (let j = 1; j < duzinaLozinke - 1; j++){
            if(nePonavljanje){ // Isti način kao za prvi znak
                lozinka += lokalniSimboli[Math.floor(Math.random() * lokalniSimboli.length)];
                zadnjiZnak = lozinka[lozinka.length-1];
                lokalniSimboli = lokalniSimboli.replace(zadnjiZnak,'');
                lokalniZk = lokalniZk.replace(zadnjiZnak,'');
                lokalniBr = lokalniBr.replace(zadnjiZnak,'');
            }
            else{
                lozinka += dozvoljeniSimboli[Math.floor(Math.random() * dozvoljeniSimboli.length)];
            }
        }


        // III. ZADNJI ZNAK

        if(zavrsetakBroj){
            if(nePonavljanje){
                lozinka += lokalniBr[Math.floor(Math.random() * lokalniBr.length)];
                // ne treba izbacivati znakove jer je ovo zadnji znak lozinke
            }
            else{
                lozinka += br[Math.floor(Math.random() * br.length)];
            }        
        }

        else if(zavrsetakZnak){
            if(nePonavljanje){
                lozinka += lokalniZk[Math.floor(Math.random() * lokalniZk.length)];
            }
            else{
                lozinka += zk[Math.floor(Math.random() * zk.length)];
            }
        }

        else{
            if(nePonavljanje){
                lozinka += lokalniSimboli[Math.floor(Math.random() * lokalniSimboli.length)];
            }
            else{
                lozinka += dozvoljeniSimboli[Math.floor(Math.random() * dozvoljeniSimboli.length)];
            }
        }

        // SPREMANJE LOZINKE U STRING SVIH LOZINKI
        sveLozinke += lozinka + '<br>';
    }

    rezultat.innerHTML = sveLozinke;
    return;
});