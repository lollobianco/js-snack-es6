// Snack 1

// Dato l'array di nomi:
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).

// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.
// esempio: dati i valori min: 2 e come max: 4 i nomi nell'array nuovo saranno i nomi compresi tra queste posizioni 2 e 4

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
const yourArray = [];

let min = prompt('Inserisci il minimo: ');
let max = prompt('Inserisci il massimo: ');


//CONTROLLO DEL MINIMO E DEL MASSIMO

while (min < 0 || max > myArray.length - 1){

   alert('il valori devono essere compresi tra 0 e 5')

   min = prompt('Inserisci il minimo: ');
   max = prompt('Inserisci il massimo: ');

}


//CREAZIONE DELL'ARRAY IN BASE AI NUMERI INSERITI DALL'UTENTE (VERSIONE CON FOREACH)

myArray.forEach((element, index) => {

   if (index >= min && index <= max){
      yourArray.push(element);
   }

   return yourArray;
});

console.log(yourArray)


