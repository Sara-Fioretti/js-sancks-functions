/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

let names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
function inizialiParole (nomi, lettera){
    let nomiDaStampare= [];
    for (let i=0; i<nomi.length; i++){
        if(nomi[i].charAt(0)==lettera){
            nomiDaStampare.push(nomi[i])
        }
    }
    return(nomiDaStampare) 

}

// Invoca la funzione qui e stampa il risultato in console
let risultato = inizialiParole (names, "A")
console.log (risultato)

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]