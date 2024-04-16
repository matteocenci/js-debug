/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}


// ESERCIZIO 2
// function addIfEven(num) {
    // if (num % 2 = 0) { //devono esserci due uguali non uno
        // return num + 5;
    // }
    // return num;
// }

function addIfEven(num) {
    if (num % 2 == 0) {         // correzione
        return num + 5;
    }
    return num;
}


// ESERCIZIO 3
// function loopToFive() {
    // for (let i = 0, i < 5, i++) {     // ci devono essere ; e non solo ,
        // console.log(i);
    // }
// }

function loopToFive() {
    for (let i = 0; i < 5; i++) {        //correzione
        console.log(i);
    }
}

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// function displayEvenNumbers() {
    // let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    // let evenNumbers = [];
    // for (let i = 0; i < numbers.length - 1; i++;) {      //errore di punto e virgola posizionato male
        // if (numbers % 2 = 0); {  //errore di due uguali
            // evenNumbers.push(i);   //elemento i non è definito
        // }
        // return evenNumbers;
    // }
// }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]



function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++); {      //errore di punto e virgola posizionato male
        if (numbers % 2 === 0); {  //errore di due uguali
            evenNumbers.push(numbers[i]);
        }
        return evenNumbers;
    }

    
}
displayEvenNumbers(); 

console.log(numbers);
// dovrebbe restituire [2,4,6,8]