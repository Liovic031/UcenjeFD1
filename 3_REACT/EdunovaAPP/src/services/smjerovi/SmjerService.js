import { smjerovi } from "./SmjerPodaci";

// 1/4 Read od CRUD
async function get() {
    return {data: [...smjerovi]}
}

async function getBySifra(sifra) {
    return {data: smjerovi.find(s => s.sifra === parseInt(sifra))}
}

// 2/4 Create of CRUD
async function dodaj(smjer){
    smjer.sifra = smjerovi.length > 0 ? smjer.sifra = smjerovi[smjerovi.length - 1].sifra + 1 : smjer.sifra = 1;

    smjerovi.push(smjer);
}

// 3/4 Update of CRUD
async function promjeni(sifra, smjer) {
    const index = nadiIndex(sifra)
    smjerovi[index] = {...smjerovi[index], ...smjer}
}

function nadiIndex(sifra){
    return smjerovi.findIndex(s => s.sifra === parseInt(sifra))
}



export default{
    get,
    dodaj,
    getBySifra,
    promjeni
}

