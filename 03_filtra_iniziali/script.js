/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

/*PROCEDIMENTO
1) Prendo ogni elemento della stringa usando un ciclo for
2) Prendo l'iniziale di ogni elemento 
3) If l'iniziale == lettera, stampo elemento
*/

// Dichiara la funzione qui.
function inizialiParole (nomi, lettera){
    for (let i=0; i<nomi.length; i++){
        if(nomi[i].charAt(0)==lettera){
            console.log (nomi[i])
        }
    }
}
// Invoca la funzione qui e stampa il risultato in console
inizialiParole (names, "A")


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]