
const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {
  rezultat.innerHTML='';
  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const c = document.getElementById('c').value;
  const d = document.getElementById('d').value;
  const zadatak = document.getElementById('zadatak').value;

  // Za svaki zadatak zahtijevamo određene ulaze
  if (zadatak === '1') {
    // console.log('1. zadatak');
    // console.log(a);

    const x = Number(a); // mogu dobiti NaN
    if(!x){
      rezultat.innerHTML='A nije broj';
      return;
    }
    const y = Number(b); // mogu dobiti NaN
    if(!y){
      rezultat.innerHTML='B nije broj';
      return;
    }

    if(x>y){
      rezultat.innerHTML=x;
    }
    else if(y>x){
      rezultat.innerHTML=y;
    }
    else{
      rezultat.innerHTML='Brojevi su jednaki';
    }
    
    
    return; // short curcuiting
  }

  // Ovdje će doći drugi zadatak
  else if (zadatak === '2'){
    const x = Number(a); // mogu dobiti NaN
    if(!x){
      rezultat.innerHTML='A nije broj';
      return;
    }
    const y = Number(b); // mogu dobiti NaN
    if(!y){
      rezultat.innerHTML='B nije broj';
      return;
    }
    const z = Number(c); // mogu dobiti NaN
    if(!z){
      rezultat.innerHTML='C nije broj';
      return;
    }

    if((x<y && x<z)){
      rezultat.innerHTML=x;
      return;
    }
    else if((y<x && y<z)){
      rezultat.innerHTML=y;
      return;
    }
    else if((z<x && z<y)){
      rezultat.innerHTML=z;
      return;
    }
    else{
      rezultat.innerHTML='Nema najmanjeg broja!'
    }

    return;
  }
  else if(zadatak === '3'){
    const x = Number(a); // mogu dobiti NaN
    if(!x){
      rezultat.innerHTML='A nije broj!';
      return;
    }
    const y = Number(b); // mogu dobiti NaN
    if(!y){
      rezultat.innerHTML='B nije broj!';
      return;
    }
    const z = Number(c); // mogu dobiti NaN
    if(!z){
      rezultat.innerHTML='C nije broj!';
      return;
    }
    const q = Number(d); // mogu dobiti NaN
    if(!q){
      rezultat.innerHTML='D nije broj!';
      return;
    }

    rezultat.innerHTML=x+y+z+q;

    return;
  }
  //4.zad Provjera punoljetnosti // Korisnik unosi godinu rodjenja u pole A. // Izracunaj njegovu dob u odnosu na tekucu godinu i ispisi je li punoljetan ili nije.
  else if(zadatak === '4'){
    const godiste = Number(a); // mogu dobiti NaN
    if(!godiste || godiste<1900 || godiste>2026){
      rezultat.innerHTML='Niste unijeli ispravnu godinu rodjenja!';
      return;
    }
    const brojGodina = 2026 - godiste;
    brojGodina<18 ? rezultat.innerHTML="Niste punoljetni." : rezultat.innerHTML="Punoljetni ste.";
    return;
  }
  //  [ZADATAK 5]
  //  Pozitivan, negativan ili nula: 
  //  Za uneseni broj u polju A ispiši poruku je li on pozitivan, negativan ili je nula.
  else if(zadatak === '5'){
    const br = Number(a);

    if (isNaN(br)) {
      rezultat.innerHTML = 'A nije broj!';
      return;
    }
    if (br === 0) {
      rezultat.innerHTML = 'Broj je 0!';
    } else if (br > 0) {
      rezultat.innerHTML = 'Broj je pozitivan!';
    } else {
      rezultat.innerHTML = 'Broj je negativan!';
    }
    return;
  }
  //   [ZADATAK 6]
  //  Parnost broja: 
  //  Provjeri je li uneseni broj u polju A paran ili neparan koristeći modulo operator (%).
  else if(zadatak === '6'){
    const numb = Number(a);
    if(isNaN(numb)){
      rezultat.innerHTML = 'A nije broj!';
    }
    if(numb % 2 == 0){
      rezultat.innerHTML = 'Broj je paran!';
      return;
    }
    else{
      rezultat.innerHTML = 'Broj je neparan!';
    }
    return;
  }
  //   [ZADATAK 7]
  //  Ocjenjivanje: 
  //  Na temelju unesenog broja bodova (0-100) u polje A, ispiši ocjenu:
  //  90-100: Odličan, 80-89: Vrlo dobar, 70-79: Dobar, 60-69: Dovoljan, <60: Nedovoljan.
  else if(zadatak === '7'){
    const bodovi = Number(a);
    if(isNaN(bodovi) || bodovi<0 || bodovi>100){
      rezultat.innerHTML = 'Niste unijeli ispravan broj bodova!';
    }
    else if(bodovi < 60){
      rezultat.innerHTML = 'Nedovoljan';
      return;
    }
    else if(bodovi>=60 && bodovi<70){
      rezultat.innerHTML = 'Dovoljan';
      return;
    }
    else if(bodovi>=70 && bodovi<80){
      rezultat.innerHTML = 'Dobar';
      return;
    }
    else if(bodovi>79 && bodovi<=89){
      rezultat.innerHTML = 'Vrlo dobar';
      return;
    }
    else{
      rezultat.innerHTML = 'Odličan';
    }
    return;
  }
  //    [ZADATAK 8]
  //  Djeljivost: 
  //  Provjeri je li broj u polju A djeljiv s brojem u polju B bez ostatka. 
  //  Ispiši "Djeljiv je" ili "Nije djeljiv".  
  //   */
  else if(zadatak === '8'){
    const x = Number(a); // mogu dobiti NaN
    if(isNaN(x)){
      rezultat.innerHTML='A nije broj!';
      return;
    }
    const y = Number(b); // mogu dobiti NaN
    if(isNaN(y)){
      rezultat.innerHTML='B nije broj!';
      return;
    }
    if(y === 0){
      rezultat.innerHTML='Djelitelj ne smije biti 0!'
      return;
    }
    if(!Number.isInteger(x) || !Number.isInteger(y)){
      rezultat.innerHTML='Djeljivost vrijedi samo za cijele brojeve!';
      return;
    }
    if(x % y === 0){
      rezultat.innerHTML='Djeljiv je!';
      return;
    }
    else{
      rezultat.innerHTML='Nije djeljiv!';
    }
    return;
  }
  else if(zadatak === '9'){
    const x = Number(a); // prebacujem string a u broj x
    const y = Number(b); // i za ostale tri varijable to radimo
    const z = Number(c);
    const q = Number(d);
    if(isNaN(x) || isNaN(y) || isNaN(z) || isNaN(q)){ 
      rezultat.innerHTML='Jedno od unosnih polja nije broj';
    }

    //9. Zbroj većih brojeva (A i B) + (C i D)
    if(x>=y && z>=q){
      rezultat.innerHTML=x+z;
    }
    else if(x>=y && q>=z){
      rezultat.innerHTML=x+q;
    }
    else if(y>=x && z>=q){
      rezultat.innerHTML=y+z;
    }
    else if(y>=x && q>=z){
      rezultat.innerHTML=y+q;
    }

    return;
  }
  else if(zadatak === '10'){
    const q = Number(d);
    if(isNaN(q)){ 
      rezultat.innerHTML='D nije broj';
      return;
    }

    rezultat.innerHTML= d * 10;

    return;
  }
  else if(zadatak === '11'){
    if(!b){
      rezultat.innerHTML= 'Obavezan unos grada pod vrijednost B';
    }
    if(b.toLowerCase() === 'osijek'){
      rezultat.innerHTML=`${b} je sjedište Edunove.`;
    }
    else{
      rezultat.innerHTML=`${b} je sjedište Edunove.`;
    }

    return;
  }
  else if(zadatak === '12'){
    if(!a || !b){
      rezultat.innerHTML= 'Neispravan unos pojmova u polja A i B';
    }
    rezultat.innerHTML=`${a} ${b}`;
    
    return;
  }
  else if(zadatak === '13'){
    const x = Number(a); 
    if(isNaN(x) || x === 0){
      rezultat.innerHTML='Greška u unosu';
      return;
    }
    const y = Number(b); 
    if(isNaN(y || y === 0)){
      rezultat.innerHTML='Greška u unosu';
      return;
    }

    rezultat.innerHTML=x*y;
    
    return;
  }
  
  

  // ovo će se ispisati ako u HTML dodatke option za zadatak a ovdje ga ne obradite
  rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
});

