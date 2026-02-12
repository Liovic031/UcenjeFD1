
const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {

  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const zadatak = document.getElementById('zadatak').value;

  switch (zadatak) {
    case '1':
      // rješavanje 1. zadatak
      const a1 = Number(a);
      if(!a1 || a1 <= 2 || a1 >= 10000000){
        rezultat.innerHTML = "Krivi unos";
        return;
      }
      let brojac = 0;
      for(let i = 1; i <= a1; i++){
        if(a1 % i === 0){
          brojac++;
        }
      }
      if(brojac === 2){
        rezultat.innerHTML = "Broj je prost";
      }
      else{
        rezultat.innerHTML = "Broj nije prost";
      }
      // kraj rješavanje 1. zadatak
    break;
    case '2':
      // rješavanje 2. zadatak
      const b1 = Number(b);
      if(!b1 || b1 <= 2 || b1 >= 1000){
        rezultat.innerHTML = "Krivi unos";
        return;
      }
      let zbroj = 0;
      for(let i = 1; i < b1; i++){
        if(b1 % i === 0){
          zbroj += i;
        }
      }
      if(zbroj === b1){
        rezultat.innerHTML = "Broj je savršeni broj";
      }
      else{
        rezultat.innerHTML = "Broj nije savršeni broj";
      }
      // kraj rješavanje 2. zadatak
    break;
    case '3':
      // rješavanje 3. zadatak
      const b2 = Number(b);
      if(!b2 || b2 <= 2 || b2 >= 100){
        rezultat.innerHTML = "Krivi unos";
        return;
      }
      let suma = 0;
      let temp = b2;
      let znamenka = 0;
      let brojZnamenki = b2.toString().length;
      for(;temp > 0;){
        znamenka = temp % 10;
        suma += znamenka ** brojZnamenki;
        temp = Math.floor(temp/10);
      }
      if(suma === b2){
        rezultat.innerHTML = "Broj je Armstrongov broj";
      }
      else{
        rezultat.innerHTML = "Broj nije Armstrongov broj";
      }
      // kraj rješavanje 3. zadatak
    break;
    case '4':
      // rješavanje 4. zadatak
      a2 = String(a);
      prazan = '';
      if(!a2){
        rezultat.innerHTML = "Unesite neku riječ!";
      }
      for (let i = a2.length - 1; i >= 0; i--) {
        prazan += a2[i];
      }
      if(prazan === a2){
        rezultat.innerHTML = `${a2} je palindrom`;
      }
      else{
        rezultat.innerHTML = `${a2} nije palindrom`;
      }
      // kraj rješavanje 4. zadatak
    break;
    case '5':
      // rješavanje 5. zadatak
      const rijec = String(b).toLowerCase();
      let pronadjeno = false;
      for(let i = 0; i <= stopRijeci.length-1; i++){
        if(rijec === stopRijeci[i]){
          pronadjeno = true;
          break;
        }
      }
      if(pronadjeno){
        rezultat.innerHTML = `${rijec} se nalazi u nizu stopRijeci`;
      } 
      else{
        rezultat.innerHTML = `${rijec} se ne nalazi u nizu stopRijeci`;
      }
      // kraj rješavanje 5. zadatak
    break;
    case '6':
      // rješavanje 6. zadatak
      const a3 = String(a);
      if(!a3){
        rezultat.innerHTML = "Krivi unos";
        return;
      }
      let samoglasnik = 0;
      let suglasnik = 0;
      for(let i = 0; i <= a3.length-1; i++){
        if (a3[i] >= 'a' && a3[i] <= 'z'){
          if(a3[i] === 'a' || a3[i] === 'e' || a3[i] === 'i' || a3[i] === 'o' || a3[i] === 'u'){
            samoglasnik++;
          }
          else{
            suglasnik++;
          }
        }
      }
      rezultat.innerHTML = `${a3} ima ${samoglasnik} samoglasnika i ${suglasnik} suglasnika`;
      // kraj rješavanje 6. zadatak
    break;
    case '7':
      // rješavanje 7. zadatak
      const a7 = Number(a);
      const b7 = Number(b);
      let manji = 0;
      let veci = 0;
      if(!a7 || !b7 || a7 === b7 ){
        rezultat.innerHTML = "Unesite dva razlicita broja u polja A i B";
        return;
      }

      if(a7 > b7){
        veci = a7;
        manji = b7;
      }
      else{
        veci = b7;
        manji = a7;
      }

      let brojevi = '';
      for(let i = manji + 1; i < veci; i++){
        brojevi += i + '\t';
      }

      if(brojevi.length === 0){
        rezultat.innerHTML = "Nema brojeva između A i B"
      }
      else{
        rezultat.innerHTML = brojevi;
      }
      // kraj rješavanje 7. zadatak
    break;

    default:
      rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
  }
});
const poveznica = document.getElementById('poveznica');
poveznica.href='https://enciklopedija.hr/clanak/primbrojevi';
document.getElementById('zadatak').addEventListener('change', (event) => {
   switch (event.target.value) {
    case '1':
      poveznica.href='https://enciklopedija.hr/clanak/primbrojevi';
    break;
    case '2':
      poveznica.href='https://www.enciklopedija.hr/clanak/savrseni-broj';
    break;
    case '3':
      poveznica.href='https://hafura.wordpress.com/2017/09/13/armstrongov-broj-ispitni-zadatak/';
    break;
    case '4':
      poveznica.href='https://www.enciklopedija.hr/clanak/palindrom';
    break;
    case '5':
      poveznica.href='https://www.coursera.org/articles/what-are-stop-words';
    break;
    case '6':
      poveznica.href='https://enciklopedija.hr/clanak/samoglasnik';
    break;
    case '7':
      poveznica.href='https://hjp.znanje.hr/index.php?show=search_by_id&id=d1ZlWhU%3D';
    break;
    default:
      poveznica.href='#';
  }
});



const stopRijeci = [
  'a', 'ako', 'ali', 'bi', 'bih', 'bila', 'bili', 'bilo', 'bio', 'bismo', 
  'biste', 'biti', 'bumo', 'da', 'do', 'duž', 'ga', 'hoće', 'hoćemo', 'hoćete', 
  'hoćeš', 'hoću', 'i', 'iako', 'idemo', 'ideš', 'ide', 'iz', 'iza', 'iznad', 
  'ja', 'jako', 'jer', 'jesmo', 'jeste', 'jesu', 'je', 'kad', 'kada', 'kao', 
  'kroz', 'li', 'me', 'mene', 'meni', 'mi', 'mimo', 'mene', 'moj', 'moja', 
  'moje', 'mu', 'na', 'nad', 'nakon', 'nam', 'nama', 'nas', 'naš', 'naša', 
  'naše', 'našu', 'ne', 'nego', 'neka', 'neki', 'nekog', 'neko', 'nema', 'netko', 
  'neće', 'nećemo', 'nećete', 'nećeš', 'neću', 'ni', 'nije', 'nijedan', 'nikad', 
  'nismo', 'niste', 'nisu', 'njega', 'njegov', 'njegova', 'njegovo', 'njemu', 'njen', 
  'njena', 'njeno', 'njih', 'njihov', 'njihova', 'njihovo', 'njim', 'njima', 'njoj', 
  'nju', 'o', 'od', 'odmah', 'on', 'ona', 'onaj', 'onam', 'onamo', 'one', 
  'oni', 'ono', 'onolika', 'onoliko', 'onoliki', 'onoliku', 'ova', 'ovaj', 'ovdje', 
  'ove', 'ovi', 'ovo', 'ovuda', 'pa', 'pak', 'po', 'pod', 'pored', 'poslije', 
  'povrh', 'preko', 'pri', 'pred', 'prema', 'sa', 'sam', 'samo', 'se', 'sebe', 
  'sebi', 'si', 'smo', 'ste', 'su', 'sve', 'svi', 'svog', 'svoj', 'svoja', 
  'svoje', 'ta', 'taj', 'tako', 'tamo', 'te', 'tebe', 'tebi', 'ti', 'to', 
  'točno', 'u', 'uz', 'vam', 'vama', 'vas', 'vaš', 'vaša', 'vaše', 'već', 
  'vi', 'vrlo', 'za', 'zar', 'će', 'ćemo', 'ćete', 'ćeš', 'ću', 'što', 'the', 
  'and', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 
  'had', 'do', 'does', 'did', 'but', 'if', 'or', 'because', 'as', 'until', 
  'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 
  'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 
  'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 
  'further', 'then', 'once'
];