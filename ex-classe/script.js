/*ESERCIZIO 1
 Creare una funzione che accetti come parametro un array e trovi il numero più grande all'interno
*/


/*ESERCIZIO 2
Creare una funzione che accetti come parametro un array e trovi il numero più piccolo all'interno
*/

/*ESERCIZIO 3
Creare una funzione che accetti come parametro un array e un numero e ritorna la posizione del numero nell'array o, se non c'è, ritorna -1
*/
function posizioneNumero (array, numero){
    for(let i=0; i<array.length; i++){
        if(numero == array[i]){
            console.log(array.indexOf(i))
        }else{
            console.log("-1")
        }
    }
}
let arrayProva = ["1", "2", "3", "4", "5", "6"]
let numero1 = 5;
let numero2 = 10;
let risultato1 = posizioneNumero(arrayProva, numero1)
let risultato2 = posizioneNumero(arrayProva, numero2)
console.log(risultato1)
console.log(risultato2)

/*ESERCIZIO 4
Creare una funzione che accetti come parametro un array e ritorna la somma degli elementi dell'array
*/
function sommaElementi (array){
    let somma = 0;
    for(i=0; i<array.length; i++){
        somma += array[i]
    }
}
sommaElementi(arrayProva)

/*ESERCIZIO 5
Creare una funzione che inverta una stringa passata come argomento
*/

/*ESERCIZIO 6
Creare una funzione che inverta un array passato come argomento
*/

/*ESERCIZIO 7
Creare una funzione che conti le occorrenze di un numero in un array. 
La funzione accetta come parametro un array e un numero e ritorna la quantità di volte in cui il numero è presente nell'array, ritorna -1 se non c'è
*/