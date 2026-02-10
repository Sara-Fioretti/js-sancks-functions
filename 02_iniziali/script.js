/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

// Dichiara la funzione qui.
function initials (nomi){
   let iniziali = [];
    for (let i=0; i< nomi.length; i++){
      iniziali.push(nomi[i].charAt(0));
    }
    return iniziali;
    }
        
// Invoca la funzione qui e stampa il risultato in console
const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
const risultato= initials(names);
console.log(risultato);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]