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

    },
    z4:(a,b)=>{
      console.log('Zadatak 4');

    },
    z5:(a,b)=>{
      console.log('Zadatak 5');

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
