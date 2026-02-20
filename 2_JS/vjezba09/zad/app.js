function ucitajBroj(s){
  const b1 = Number(s);

  if(!b1) {
    rezultat.innerHTML = 'Uneseni podatak nije broj';
    return false;
  }

  if(b1 < 2 || b1 > 1000){
    rezultat.innerHTML = 'Uneseni broj mora biti između dva i tisuću';
    return false;
  }
  return b1;
}


  const zadaci={
    z1:(a,b)=>{
      console.log('Zadatak 1');
      // početak zadatka
      const b1 = ucitajBroj(a)
      if(!b1){
        return;
      }

      const b2 = ucitajBroj(b);
      if(!b2){
        return;
      }
      
      const razlika = a - b;
      if(razlika < 0){
        rezultat.innerHTML = razlika * - 1;
      }
      else{
        rezultat.innerHTML = razlika;
      }
      //kraj zadatka
    },

    z2:(a,b)=>{
      console.log('Zadatak 2');
      // početak zadatka
      const b3 = ucitajBroj(a);
      if(!b3){
        return;
      }
      const b4 = ucitajBroj(b);
      if(!b4){
        return;
      }
      if(b3 > b4){
        rezultat.innerHTML = b3;
      }
      else if(b3 === b4){
        rezultat.innerHTML = "Brojevi su jednaki";
      }
      else{
        rezultat.innerHTML = b4;
      }
      //kraj zadatka
    },
    
    z3:(a,b)=>{
      console.log('Zadatak 3');
      // početak zadatka
      const broj = ucitajBroj(a);
      if(!broj){ return; }

      if(!b){
        rezultat.innerHTML = 'Unesite boju u polje B';
        return;
      }

      let html = '';

      for(let i = 1; i <= broj; i++){
        if(i % 2 === 0){
          html += `<div style="padding:10px; background:${b}; margin:4px 0;">Div ${i}</div>`;
        } else {
          html += `<div style="padding:10px; background:#eee; margin:4px 0;">Div ${i}</div>`;
        }
      }
      rezultat.innerHTML = html;
      //kraj zadatka
    },

    z4:(a,b)=>{
      console.log('Zadatak 4');
      // početak zadatka
      if(a === '' && b === ''){ 
        rezultat.innerHTML = '🌟🔥'; 
        return; 
      } 
      rezultat.innerHTML = 'Ostavite oba polja prazna za prikaz emojija.';
      //kraj zadatka
    },

    z5:(a,b)=>{
      console.log('Zadatak 5');
      // početak zadatka
      if(!a){
        rezultat.innerHTML = 'Unesite tekst u polje A.';
        return;
      }

      let noviString = '';

      for(let i = 0; i < a.length; i++){
        if(a[i] >= 'a' && a[i] <= 'z'){
          noviString += a[i].toUpperCase();
        } else if(a[i] >= 'A' && a[i] <= 'Z'){
          noviString += a[i].toLowerCase();
        } else {
          noviString += a[i];
        }
      }
      rezultat.innerHTML = noviString;
      //kraj zadatka
    }
        // ovdje dodajemo nove zadatke
  }


const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {

  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const zadatak = document.getElementById('zadatak').value;
  if(!(('z' + zadatak) in zadaci)){
    rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
    return;
  }
  // poziv funkcije u objektu
  zadaci['z' + zadatak](a, b);
});
