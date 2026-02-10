/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function saluto (nome){
    let date= new Date ();
    let time = date.getHours();
    if(time<= 13){
        console.log("Buongiorno " + nome )
    }else if(time<= 17){
        console.log("Buon pomeriggio " + nome )
    }else{
        console.log("Buonasera " + nome )
    }
}

// Invoca la funzione qui e stampa il risultato in console
let risultato = saluto(name)

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.