import { smjerovi } from "./SmjerPodaci";

// 1/4 Read od CRUD
async function get() {
    return {data: smjerovi}
}

// 2/4 Create of CRUD
async function dodaj(smjer){
    smjer.sifra = smjerovi.length > 0 ? smjer.sifra = smjerovi[smjerovi.length - 1].sifra + 1 : smjer.sifra = 1;

    smjerovi.push(smjer);
}


export default{
    get,
    dodaj
}

