// Snack 3
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bikes = [{
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
]

const bikeWeight = [];

let printedBike = document.getElementById('BiciLeggera');

bikes.forEach(({nome, peso}) => {

   console.log(peso);
   bikeWeight.push(peso);
})



console.log(bikeWeight);

const lighterBike = Math.min(...bikeWeight);

for (let i = 0; i <= bikes.length; i++) {

   let bikesElement = bikes[i];

   if (bikesElement.peso == lighterBike){

      console.log(`la bici più leggera pesa ${lighterBike} Kg ed è la ${bikesElement.nome}`)
      printedBike.innerHTML = `la bici più leggera pesa ${lighterBike} Kg ed è la: ${bikesElement.nome}`
   }
}





