/*ESERCIZIO 1
 Creare una funzione che accetti come parametro un array e trovi il numero più grande all'interno
*/
function elementoMaggiore (array){
    let numeroMaggiore= array[0]
    for(i=0; i<array.length; i++){
        if(array[i]>numeroMaggiore){
            numeroMaggiore=array[i]
        }
    }
    return numeroMaggiore
}
let array1 = [5, 6, 9]
let risultato1 = elementoMaggiore(array1)
console.log(risultato1)

/*ESERCIZIO 2
Creare una funzione che accetti come parametro un array e trovi il numero più piccolo all'interno
*/
function elementoMinore (array){
    let numeroMinore = array[0]
    for(let i=0; i<array.length; i++){
        if (array[i]<array[0]){
            numeroMinore = array[i]
        }
    }
    return numeroMinore
}
let array2 = [7, 5, 2]
let risultato2 = elementoMinore(array1)
console.log(risultato2)

/*ESERCIZIO 3
Creare una funzione che accetti come parametro un array e un numero e ritorna la posizione del numero nell'array o, se non c'è, ritorna -1
*/
function posizioneNumero (array, numero){
    let posizione = -1
    for (let i=0; i<array.length; i++){
        if(numero == array[i]){
           posizione = array.indexOf(numero)
        }
    }
    return posizione
}

let array3= [1, 2, 3, 4, 6]
let num1 = 3;
let num2 = 5;
let risultato3a = posizioneNumero(array3, num1);
console.log(risultato3a)
let risultato3b = posizioneNumero(array3, num2);
console.log(risultato3b)

/*ESERCIZIO 4
Creare una funzione che accetti come parametro un array e ritorna la somma degli elementi dell'array
*/
function somma (array){
    let sum = 0;
    for (i=0; i<array.length; i++){
        sum += array[i]
    }
    return sum
}
let array4 = [5, 4, 1]
let risultato4= somma(array4)
console.log(risultato4)

/*ESERCIZIO 5
Creare una funzione che inverta una stringa passata come argomento
*/
function invertstring(string){
    let stringaInversa = ''
    for(let i=string.length - 1; i>=0; i--){
        stringaInversa += stringa[i]
  }
 return stringaInversa
}

let stringa = "Stringa"
let risultato5 = invertstring(stringa)
console.log(risultato5)


/*ESERCIZIO 6
Creare una funzione che inverta un array passato come argomento
*/
let array6= ["1", "2", "3", "4", "5", "6", "7"]
function invertarray(array){
    let arrayInversa = [];
    for(let i=array.length-1; i>=0; i--){
        arrayInversa.push(array[i])
    }
    return arrayInversa
}
let risultato6 = invertarray(array6)
console.log(risultato6)

/*ESERCIZIO 7
Creare una funzione che conti le occorrenze di un numero in un array. 
La funzione accetta come parametro un array e un numero e ritorna la quantità di volte in cui il numero è presente nell'array, ritorna -1 se non c'è
*/
function occorrenze (array, numero){
    let occurence = 0
    for (let i=0; i<array.length; i++){
        if(numero == array[i]){
            occurence += 1
        }
    }
    return occurence
}
let array7 = [ 1, 3, 2, 2, 4, 5, 2, 2, 6];
let num7= 2; 
let risultato7 = occorrenze(array7, num7)
console.log(risultato7)