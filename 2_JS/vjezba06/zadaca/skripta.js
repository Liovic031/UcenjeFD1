document.getElementById('izvedi').addEventListener('click', () => {
    const a = document.getElementById('a').value;
    const b = document.getElementById('b').value;
    const zadatak = document.getElementById('zadatak').value;

    if(zadatak === '1'){
        if(!a || !b){
            console.log('Krivi unos');
        }
        else{
            const niz = [a, 20, 30, b];
            console.log(`Prvi: ${niz[0]}, Zadnji: ${niz[3]}`);
        }
        return
        
    }
    else if(zadatak === '2'){
        if(!a || !b) {
            console.log('Neispravan unos');
            return;
        }

        const niz2 = ["a", a, "c"];
        let index;

        if(!isNaN(b)) {
            index = Number(b);
        } else {
            index = b.length;
        }

        if(index >= niz2.length || index < 0) {
            console.log("Indeks prevelik");
            return;
        }

        console.log(niz2[index]);
        return;
    }
    else if(zadatak === '3'){
        if(!a || !b) {
            console.log('Neispravan unos');
            return;
        }
        const niz3 = [a, b, 3];
        console.log(`Niz prije zamjene: ${niz3}`);
        niz3[0] = b;
        niz3[1] = a;
        console.log(`Niz nakon zamjene: ${niz3}`);
        return;
    }
    else if(zadatak === '4'){
        if(!a || !b) {
            console.log('Neispravan unos');
            return;
        }
        let x = Number(a);
        if(isNaN(x)){
            x = a;
        }
        const niz4 = [x, b];

        if(typeof x === "string" && x.length < 3){
            niz4[niz4.length] = 'X';
        }
        else{
            niz4[0] = 'Y';
            niz4[1] = x;
            niz4[2] = b;
        }
        console.log(niz4);
        return;
    }
    else if(zadatak === '5'){
        let x;

        const num = Number(a);
        if(a === "") {     
            x = undefined;
        }
        else if(!isNaN(num)) {
            x = num; 
        } 
        else if(a.toLowerCase() === "true") {
            x = true;
        } else if(a.toLowerCase() === "false") {
            x = false;
        } 
        else {
            x = a;
        }
        switch (typeof x) {
            case "undefined":
                console.log(`a je undefined.`);
                break;
            case "string":
                console.log(`${x} je string.`);
                break;
            case "number":
                console.log(`${x} je broj.`);
                break;
            case "boolean":
                console.log(`${x} je boolean.`);
                break;
            default:
                console.log(`Nepoznat tip: ${typeof x}`);
        }
        return;
    }
    else if(zadatak === '6'){
        if(!a || !b) {
            console.log('Neispravan unos');
            return;
        }
        const niz5 = [a, b, "KRAJ"];
        console.log(niz5);
        
        niz5.length = niz5.length - 1;

        console.log(niz5);
        
        return;
    }
    else if(zadatak === '7'){
        if(!a || !b) {
            console.log('Neispravan unos');
            return;
        }
        const niz6 = [a, 2];
        const niz7 = [b, 4];
        const spojeni = [...niz6, ...niz7];
        console.log(spojeni);
        
        return;
    }
    else if(zadatak === '8'){
        if(!a || !b) {
            console.log('Neispravan unos');
            return;
        }
        const niz8 = [];
        niz8[0] = a;
        niz8[2] = b;
        console.log(niz8);
        console.log(1 in niz8);
        return;
    }
    else if(zadatak === '9'){
        if(!a || !b) {
            console.log('Neispravan unos');
            return;
        }
        const niz9 = [a, b, 7, 6];
        const [first, ...rest] = niz9;
        console.log(first);
        console.log(rest);
        return;
    }
    else if(zadatak === '10'){
        let x = Number(a);
        if (isNaN(x)){ 
            x = a;
        }
        let y = Number(b);
        if (isNaN(y)){
            y = b;
        }
        let niz10 = [];

        switch(true){
            case a === '' || b === '':
                niz10 = [];
                break;
            case x === y:
                niz10 = [x];
                break;
            case typeof y === 'number' && y === 2:
                niz10 = [x, y];
                break;
            default:
                niz10 = [x, y, "x"];
        }

        console.log(niz10);
        return;
    }

    console.log('Niste odabarali niti jedan zadatak!');
});