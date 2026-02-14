const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {
    const a = document.getElementById('a').value;
    const b = document.getElementById('b').value;
    const c = document.getElementById('c').value;
    const zadatak = document.getElementById('zadatak').value;

    if(zadatak === '1'){
        const a1 = Number(a);
        const b1 = Number(b);

        if(isNaN(a1) || isNaN(b1) || a1 <= 0 || b1 <= 0){
          rezultat.innerHTML = "Unesite brojeve veće od 0 u polja A i B";
          return;
        }

        const povrsinaPravokutnika = a1 * b1;
        rezultat.innerHTML = `Površina pravokutnika je: ${povrsinaPravokutnika} cm&sup2 !`;
        return;
    }

    else if(zadatak === '2'){
      if(a === ''){
        rezultat.innerHTML = "Unesite broj u polje A";
        return;
      }
      const a2 = Number(a);
      if(isNaN(a2)){
        rezultat.innerHTML = "Unesite broj u polje A";
        return;
      }
      
      if(a2 < 0){
        rezultat.innerHTML = `${a2} je negativan broj`;
        return;
      }
      else if(a2 === 0){
        rezultat.innerHTML = 'Uneseni broj je nula';
        return;
      }
      else{
        rezultat.innerHTML = `${a2} je pozitivan broj!`;
        return;
      }
    }

    else if(zadatak === '3'){
      if(!a.trim()){
        rezultat.innerHTML = "Unesite elemente niza u polje A";
        return;
      }
      
      const niz = a.split(",").map(element => Number(element.trim()));
      let suma = 0;
      for(let i = 0; i < niz.length; i++){
        if(!isNaN(niz[i])){
          suma += niz[i];
        }
      }
      rezultat.innerHTML = `Zbroj brojeva u nizu iznosi: ${suma}!`;
      return;
    }

    else if(zadatak === '4'){
      const a4 = Number(a);
      if(isNaN(a4)){
        rezultat.innerHTML = "Unesite broj ocjena u polje A";
        return;
      }
      if(!b){
        rezultat.innerHTML = "Unesite ocjene u polje B";
        return;
      }

      const niz4 = b.split(",").map(element => Number(element.trim()));
      if(a4 != niz4.length){
        rezultat.innerHTML = "Uneseni broj ocjena se ne podudara s unesenim ocjenama!";
        return;
      }

      let sumaOcjena = 0;
      for(let i = 0; i < niz4.length; i++){
        if(isNaN(niz4[i])){
          rezultat.innerHTML = "U polje B moraju biti unesene samo ocjene!";
          return;
        }
        if(!isNaN(niz4[i])){
          sumaOcjena += niz4[i];
        }
      }

      const prosjek = sumaOcjena / niz4.length;
      rezultat.innerHTML = prosjek.toFixed(2);
      return;
    }

    else if(zadatak === '5'){
      const a5 = Number(a);
      if(isNaN(a5)){
        rezultat.innerHTML = "Unesite broj elemenata Fibonaccijevog niza u polje A";
        return;
      }
      if(a5 < 2){
        rezultat.innerHTML = "Neka broj elemenata Fibonaccijevog niza budem barem 2";
        return;
      }

      let fibNiz = [];
      fibNiz[0] = 0;
      fibNiz[1] = 1;
      for(let i = 2; i < a5; i++){
        fibNiz[i] = fibNiz[i-1] + fibNiz[i-2];
      }
      
      rezultat.innerHTML = fibNiz.join(", ");
      return;
    }

    else if(zadatak === '6'){

      if(!a){
        rezultat.innerHTML = "Unesite string!";
        return;
      }
      let naopako = '';
      for (let i = a.length-1; i >= 0; i--){
        naopako += a[i];
      }
      rezultat.innerHTML = naopako;
      return;
    }

    else if(zadatak === '7'){
      const a7 = String(a).toLowerCase();
      if(a7 === ""){
        rezultat.innerHTML = "Krivi unos!";
        return;
      }
      let samoglasnik = 0;
      for(let i = 0; i < a7.length; i++){
        if(a7[i] === 'a' || a7[i] === 'e' || a7[i] === 'i' || a7[i] === 'o' || a7[i] === 'u'){
          samoglasnik++;
        }
      }
      rezultat.innerHTML = `Broj samoglasnika u stringu ${a7} je ${samoglasnik}.`;
      return;
    }

    else if(zadatak === '8'){
      const a8 = Number(a);
      if(isNaN(a8)){
        rezultat.innerHTML = "Neispravan unos u polje A!";
        return;
      }
      const tempFahrenheit = a8*9/5 + 32; 
      rezultat.innerHTML = `${a8}°C iznosi ${tempFahrenheit}°F`;
      return;
    }
    
    else if(zadatak === '9') {
      if (!a) {
          rezultat.innerHTML = "Unesite elemente niza u polje A!";
          return;
      }

      const niz9 = a.split(",").map(el => Number(el.trim()));

      for (let i = 0; i < niz9.length; i++) {
          if (isNaN(niz9[i])) {
              rezultat.innerHTML = "U polju A moraju biti uneseni samo brojevi!";
              return;
          }
      }

      niz9.sort((x, y) => x - y);

      rezultat.innerHTML = niz9.join(", ");
      return;
    }

    else if(zadatak === '10') {
      const a10 = Number(a);
      const b10 = Number(b);
      const c10 = String(c);
      if(isNaN(a10) || isNaN(b10)) {
        rezultat.innerHTML = "U polje A i B unesite broj!";
        return;
      }
      if(c10 != '+' && c10 != '-' && c10 != '*' && c10 != '/'){
        rezultat.innerHTML = "U polje C unesite samo znak operacije!";
        return;
      }
      else if (c10 === '/' && b10 === 0){
        rezultat.innerHTML = "Ne može se dijeliti s nulom!"; 
        return; 
      }
      switch (c10) {
        case '+':
          rezultat.innerHTML = a10 + b10;
        break;
        case '-':
          rezultat.innerHTML = a10 - b10;
        break;
        case '*':
          rezultat.innerHTML = a10 * b10;
        break;
        case '/':
          rezultat.innerHTML = a10 / b10;
        break;
      }
      return;
    }

    rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
});

document.getElementById('zadatak').addEventListener('change', () => {
    const zadatak = document.getElementById('zadatak').value;
    const ozadatku = document.getElementById('ozadatku');
   switch (zadatak) {
    case '1':
      ozadatku.innerHTML= "Unesite duljinu pravokutnika u A i širinu pravokutnika u B!";
    break;
    case '2':
      ozadatku.innerHTML= "Unesite neki broj u polje A!";
    break;
    case '3':
      ozadatku.innerHTML= "U polje A unesite elemente niza odvojene zarezom!";
    break;
    case '4':
      ozadatku.innerHTML= "U polje A unesite n broj ocjena, a u polje B ocjene odvojene zarezom!";
    break;
    case '5':
      ozadatku.innerHTML= "U polje A unesite neki broj n koji označava broj elemenata u Fibonaccijevom nizu!";
    break;
    case '6':
      ozadatku.innerHTML= "U polje A unesite string koji će biti ispisan naopako!";
    break;
    case '7':
      ozadatku.innerHTML= "Unesite string u polje A koji u sebi sadrži samoglasnike!";
    break;
    case '8':
      ozadatku.innerHTML= "U polje A unesite temperaturu u Celzijusima °C!";
    break;
    case '9':
       ozadatku.innerHTML = "U polje A unesite brojeve odvojene zarezom!";
    break;
    case '10':
       ozadatku.innerHTML = "U polje A i B unesite po jedan broj, a u polje C željenu operaciju (+, -, *, /)";
    break;
    default:
      ozadatku.innerHTML = "";
  }
});