// Try catch je mehanizam koji omogućava obradu iznimke (greške)
/*console.log('Početak programa');

const i = 7;

const rezultat = i + varijabla;

console.log(rezultat);

console.log('Kraj programa');
*/
// osnovna sintaksa
try{
    console.log('Početak programa');

    const i = 7;

    const rezultat = i + varijabla;

    console.log(rezultat);
}catch(e){
    console.log('Greška', e.name, e.message, e);
}
console.log('Kraj programa');


// opcionalna sintaksa ima try catch finally
console.log('Primjer 2');
const i = 7;
let rezultat = 0;
try {
    rezultat = i + varijabla; // ovo je puklo ali se program nastavio izvoditi dalje
} catch (e) {
    rezultat = i + 1; // što će se dogoditi ako je greška
}finally{
    console.log(rezultat);
}
console.log('Kraj primjer 2');

// funkcija može baciti iznimku (error)
function odradiPosao(){
    const i = -5;

    if(i < 0){
        throw new Error('Broj mora biti veći ili jednak 0');
    }

    return Math.sqrt(i);
}

try {
    console.log(odradiPosao());
} catch (e) {
    console.log(e.message);
}