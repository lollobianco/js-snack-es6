// Snack 2

// Dato un elenco degli studenti di una facoltà, con il totale dei loro voti
// let students = [
//     { name: 'Marco', id: 213, grades: 78 },
//     { name: 'Paola', id: 110, grades: 96 },
//     { name: 'Andrea', id: 250, grades: 48 },
//     { name: 'Gaia', id: 145, grades: 74 },
//     { name: 'Luigi', id: 196, grades: 68 },
//     { name: 'Piero', id: 102, grades: 50 },
//     { name: 'Francesca', id: 120, grades: 84 },
//   ];
// 1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. Ci serve quindi un nuovo array di stringhe. Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.
// 2-  Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70
// 3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

let students = [
   { name: 'Marco', id: 213, grades: 78 },
   { name: 'Paola', id: 110, grades: 96 },
   { name: 'Andrea', id: 250, grades: 48 },
   { name: 'Gaia', id: 145, grades: 74 },
   { name: 'Luigi', id: 196, grades: 68 },
   { name: 'Piero', id: 102, grades: 50 },
   { name: 'Francesca', id: 120, grades: 84 },
];

let upperNames = [];
let niceGradesString = '';
let gradesAndIdString = '';



//ARRAY NOMI IN MAIUSCOLO

students.forEach((element) => {

   upperNames.push(element.name.toUpperCase())

})

console.log(`Nomi Studenti (${upperNames.length}): ${upperNames}`)



//ARRAY STUDENTI CON UN TOTALE DI VOTI SUPERIORE A 70

let niceGrades = students.filter((element) => {

   return element.grades > 70;

});

for(let i = 0; i < niceGrades.length; i++){
   niceGradesString += `${niceGrades[i].name}: ${niceGrades[i].grades}, `
}

console.log (`Gli studenti con un totale di voti maggiore a 70 sono ${niceGrades.length}: ${niceGradesString}`)



//ARRAY STUDENTI CON UN TOTALE DI VOTI SUPERIORE A 70 E ID SUPERIORE A 120

let gradesAndId = students.filter((element) => {

   return element.id > 120 && element.grades > 70;

});

for(let i = 0; i < gradesAndId.length; i++){
   gradesAndIdString += `${gradesAndId[i].name}: ${gradesAndId[i].grades}, `
}

console.log (`Gli studenti con un totale di voti maggiore a 70 e id superiore a 120 sono ${gradesAndId.length}: ${gradesAndIdString}`)