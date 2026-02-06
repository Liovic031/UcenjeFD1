
const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {
  rezultat.innerHTML = '';
  const a = document.getElementById('a').value;
  const zadatak = document.getElementById('zadatak').value;

  switch (zadatak) {
    case '1':
      // rješavanje 1. zadatak
      switch (a){
        case 'start':
          rezultat.innerHTML = 'Početak programa';
          break;
        case 'stop':
          rezultat.innerHTML = 'Zaustavljanje programa';
          break;
        case 'pauza':
          rezultat.innerHTML = 'Pauziranje programa';
          break;
        default:
          rezultat.innerHTML = 'Neispravan unos';
      }
      // kraj rješavanje 1. zadatak
    break;
    case '2':
      // rješavanje 2. zadatak
      switch (a.toUpperCase()){
        case 'A':
        case 'B':
        case 'C':
          rezultat.innerHTML = 'Položio';
          break;
        case 'D':
        case 'F':
          rezultat.innerHTML = 'Nije Položio';
          break;
        default:
          rezultat.innerHTML = 'Neispravan unos!'
      }
      // kraj rješavanje 2. zadatak
    break;
    case '3':
      // rješavanje 3. zadatak
      const bodovi = Number(a);
      switch(true){
        case bodovi < 50:
          rezultat.innerHTML = 'Nedovoljan';
          break;
        case bodovi < 65:
          rezultat.innerHTML = 'Dovoljan';
          break;
        case bodovi < 80:
          rezultat.innerHTML = 'Dobar';
          break;
        case bodovi < 90:
          rezultat.innerHTML = 'Vrlo dobar';
          break;
        case bodovi <= 100:
          rezultat.innerHTML = 'Odličan';
          break;
        default:
          rezultat.innerHTML = 'Neispravan unos';
        }
      // kraj rješavanje 3. zadatak
    break;
    case '4':
      // rješavanje 4. zadatka
      const x = parseFloat(a);
      const cijelibroj = parseInt(a);
      if(!x){
        rezultat.innerHTML = 'Niste unijeli ispravnu vrijednost';
        return;
      }
      rezultat.innerHTML = Math.round((x - cijelibroj)*100);
      //kraj rješavanja 4. zadatka
      break;
    case '5':
      // rješavanje 5. zadatka
      const br = Number(a);
      if(isNaN(br)){
        rezultat.innerHTML = 'Krivi unos';
        return;
      }
      else if(br % 2 == 0){
        rezultat.innerHTML = `Broj ${br} je paran.`;
      }
      else{
        rezultat.innerHTML = `Broj ${br} je neparan.`;
      }
      //kraj rješavanja 5. zadatka
      break;
    case '6':
      // rješavanje 6. zadatka
      const voce = a.toLowerCase();
      if (voce === 'jabuka' || voce === 'kruška' || voce === 'banana'){
        rezultat.innerHTML = `${voce} je voće`;
      }
      else{
        rezultat.innerHTML = 'Nisam siguran je li voće';
      }
      //kraj rješavanja 6. zadatka
      break;
    case '7':
      // rješavanje 7. zadatka
      rezultat.innerHTML = a.length;
      //kraj rješavanja 7. zadatka
      break;

    default:
      rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
  }

});


// Zadaci

// 1. zadatak
// Napiši program koji prima string komandu ("start", "stop", "pauza") i ispisuje odgovarajuću poruku.
// Primjer ulaza: "pause"
// Ispis: "Pauza programa"

// 2. zadatak
// Napiši program koji prima ocjenu ("A", "B", "C", "D", "F") i ispisuje:
// "Položio" za "A", "B", "C"
// "Nije položio" za "D" i "F"

// 3. zadatak
// Napiši program koji prima broj bodova (0–100) i ispisuje ocjenu:
// < 50 → "Nedovoljan"
// 50–64 → "Dovoljan"
// 65–79 → "Dobar"
// 80–89 → "Vrlo dobar"
// 90–100 → "Odličan"
// Napomena: koristi switch(true).

