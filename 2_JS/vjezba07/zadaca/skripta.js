const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {
    const a = document.getElementById('a').value;
    const b = document.getElementById('b').value;
    const c = document.getElementById('c').value;
    const zadatak = document.getElementById('zadatak').value;

    if(zadatak === '1'){

        return;
    }
    else if(zadatak === '2'){

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
      poveznica.href='O zadatku';
  }
});