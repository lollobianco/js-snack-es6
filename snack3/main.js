// Snack 3
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bikes = [
   {
      nome: 'biciUno',
      peso: 5
   },
   {
      nome: 'biciDue',
      peso: 10
   },
   {
      nome: 'biciTre',
      peso: 7
   },
   {
      nome: 'biciQuattro',
      peso: 12
   }
];

let { nome, peso } = bikes;

console.log(peso);