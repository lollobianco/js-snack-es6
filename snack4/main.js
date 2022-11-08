// Snack4
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadre = [
   {
      nome: 'Bologna',
      puntiFatti: 0,
      falliSubiti: 0
   },
   {
      nome: 'Atalanta',
      puntiFatti: 0,
      falliSubiti: 0
   },
   {
      nome: 'Fiorentina',
      puntiFatti: 0,
      falliSubiti: 0
   },
   {
      nome: 'Inter',
      puntiFatti: 0,
      falliSubiti: 0
   },
   {
      nome: 'Milan',
      puntiFatti: 0,
      falliSubiti: 0
   },
   {
      nome: 'Genoa',
      puntiFatti: 0,
      falliSubiti: 0
   },
]

let finalArray = [];


//FUNZIONE NUMERI CASUALI

function randomNumber(min, max){

   let randomNum = Math.floor(Math.random() * max) + min;

   return randomNum

}


//CICLO PER ASSEGNARE NUMERI CASUALI

squadre.forEach((element) => {

   element.puntiFatti = randomNumber(1, 100);

   let falliSubiti = element.falliSubiti;

   falliSubiti = randomNumber(1, 100);

   let nomeSquadra = element.nome;

   finalArray.push({nomeSquadra, falliSubiti});

})


console.log(finalArray)