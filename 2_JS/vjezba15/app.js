function duziPoziv(){ // očekujem da će se ovo duže izvršavati
    
    setTimeout(() => {
        // ovdje se čeka 5 sekundi
        // ovakvo gnježđenje uzrokuje callbackhell
        // console.log('Prošlo je 5 sekundi');
        povratnaFunkcija();
    }, 5000); // 5 sekundi
    
    
}
function povratnaFunkcija(){
    console.log('Prošlo je 5 sekundi');
}

console.log('Početak');
duziPoziv();



//ASYNC 

async function apiPoziv(naziv, url, milisekundi=1000){
    console.log(naziv, url, milisekundi);
    return await cekaj(milisekundi);
}

async function cekaj(ms){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(7); // ovdje se šalje 7 a kada će ovisiti o primljenom broju milisekundi
        }, ms);
    });
}

async function izvedi(){
    // const r1 = await apiPoziv('Primjer 1', 'https://http.dog',4000);

    // console.log(r1);

    // console.log(await apiPoziv('P2', 'URL2', 1000));

    // console.log(await apiPoziv('P3 čekam 3 sekunde', 'URL3', 3000));
    
    // for (let i = 0; i < 10; i++) {
    //     console.log(await apiPoziv(i+1,'URL' + (i+1) + (i+1)*1000));
    // }
    await fetch('https://dogapi.dog/api/v1/facts?number=4')
    .then(res => res.json())
    .then(data => data.facts.forEach(o => {
        const li = document.createElement('li');
        li.innerText = o;
        document.getElementById('podaci')
        .appendChild(li);


    }));
}

for(let i = 0; i < 10; i++){izvedi();}
