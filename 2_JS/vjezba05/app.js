// switch je višestruko grananje
// if radi sa boolean tipom podatka, a switch radi s svim tipovima podataka
const ocjena = 3;

switch(ocjena){
    case 1: 
        console.log('Nedovoljan');
        break;
    case 2:
        console.log('Dovoljan');
        break;
    case 3: 
        console.log('Dobar');
        break;
    case 4:
        console.log('Vrlo dobar');
        break;
    case 5:
        console.log('Odličan');
        break;
    default:
        console.log('Nije broj');    
}
