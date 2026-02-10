/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.
function vocali (parola){
    let parola2= parola.toLowerCase()
    let numeroVocali = 0;
    for (let i=0; i<parola.length; i++){
        if(parola[i] == "a" || parola [i] == "e" || parola[i] =="i" || parola[i] =="o" || parola[i] =="u"){
           numeroVocali += 1
        }
    }
    return numeroVocali
}

// Invoca la funzione qui e stampa il risultato in console
let risultato = vocali (word)
console.log(risultato)

//Risultato atteso se si passa 'javascript': 3 (a, a, i)