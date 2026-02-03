
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
    const q = Number(d); // mogu dobiti NaN
    if(!q){
      rezultat.innerHTML='D nije broj';
      return;
    }

    rezultat.innerHTML=x+y+z+q;

    return;
  }
  //4.zad Provjera punoljetnosti // Korisnik unosi godinu rodjenja u pole A. // Izracunaj njegovu dob u odnosu na tekucu godinu i ispisi je li punoljetan ili nije.
  else if(zadatak === '4'){
    const godiste = Number(a); // mogu dobiti NaN
    if(!godiste || godiste<1900 || godiste>2026){
      rezultat.innerHTML='Niste unijeli ispravnu godinu rodjenja';
      return;
    }
    const brojGodina = 2026 - godiste;
    if(brojGodina<18){
      rezultat.innerHTML="Niste punoljetni."
    }
    else{
      rezultat.innerHTML="Punoljetni ste."
    }
    return;
  }

  
  // ovo će se ispisati ako u HTML dodatke option za zadatak a ovdje ga ne obradite
  rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
});



