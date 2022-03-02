/**
 *
 *
   Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.
   Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 200.
*
 */



// const listNumbers = [];

// let userNumber = 0;

// let sum = 0;


// while (sum < 200){

//     userNumber = parseInt(prompt("Inserisci un numero"));

//     listNumbers.push(userNumber);

//     sum+=userNumber;
// }

// console.log(listNumbers);

// crea due liste, entrambe devono arrivare almeno a 200, in una ci metti i numeri inseriti pari e nell'altra i dispari

// const listPari = [];

// const listDispari = [];

// let userNumber = 0;

// let sum = 0;


// while (sum < 201){

//     userNumber = parseInt(prompt("Inserisci un numero"));

//     if((userNumber % 2) == 0){

//         listPari.push(userNumber);
//     }else{
//         listDispari.push(userNumber);
//     }


//     sum += userNumber;
// }

// console.log(listPari);

// console.log(listDispari);

/**
   Fai inserire un numero, che chiameremo N, all'utente.
   Genera N array, ognuno formato da 10 numeri casuali tra 4 e 4532.
   Ogni volta che ne crei uno, stampalo a schermo.
*/


// const numberRep = parseInt(prompt("Inserisci un numero di volte"));

// for ( i = 0; i < numberRep; i++){
//     const Array = [];

//     for( c = 0; c < 10; c++){
//         let casualNumber = Math.floor((Math.random() * 4528) + 4);

//         Array.push(casualNumber);
//     }

//     console.log(Array);

// }

   /** 
 *
 * § BONUS 1
 *
   Fai inserire due numeri, che chiameremo N & M, all'utente.
   Genera N array, ognuno formato da M numeri casuali tra 4 e 4532.
   Ogni volta che ne crei uno, stampalo a schermo.

 *
 */

// const numberRep = parseInt(Math.floor(prompt("Inserisci un numero di array")));


// const numberNumbers = parseInt(Math.floor(prompt("Inserisci quanti numeri vuoi all'interno degli array")));

// while(isNaN(numberRep) || isNaN(numberNumbers)){

//     numberRep = parseInt(Math.floor(prompt("Inserisci un numero di array")));


//     numberNumbers = parseInt(Math.floor(prompt("Inserisci quanti numeri vuoi all'interno degli array")));

// }

// for ( i = 0; i < numberRep; i++){
//     const Array = [];

//     for( c = 0; c < numberNumbers; c++){
//         let casualNumber = Math.floor((Math.random() * 4528) + 4);

//         Array.push(casualNumber);
//     }

//     console.log(Array);

// }

   /**
 *
 * # BONUS 2
 *
   Fai inserire tre numeri, che chiameremo N & M & L, all'utente.
   Genera N array, ognuno formato da M numeri casuali tra 4 e 4532 che sommati diano almeno L.
   Ogni volta che ne crei uno, stampalo a schermo.

 *
 */

// const numberRep = parseInt(Math.floor(prompt("Inserisci un numero di array")));

// const numberNumbers = parseInt(Math.floor(prompt("Inserisci quanti numeri vuoi all'interno degli array")));

// const sumNumbers = parseInt(Math.floor(prompt("Inserisci una somma a cui devono arrivare i numeri")));

// while(isNaN(numberRep) || isNaN(numberNumbers)){

//     numberRep = parseInt(Math.floor(prompt("Inserisci un numero di array")));


//     numberNumbers = parseInt(Math.floor(prompt("Inserisci quanti numeri vuoi all'interno degli array")));

// }

// let sum = 0;

// for ( i = 0; i < numberRep; i++){
//     let Array = [];

//     sum = 0;

//         while ( sum < sumNumbers){

//             Array = [];

//             sum = 0;

//             for( x = 0; x < numberNumbers; x++){
//                 let casualNumber = Math.floor((Math.random() * 4528) + 4);
   
//                 Array.push(casualNumber);
   
//                 sum += casualNumber;
//             }

//         }

//     console.log(Array);

// }


   /**
 *
 * # BONUS 3
 *
   Fai inserire tre numeri, che chiameremo N & M & L, all'utente.
   Genera N array, ognuno formato da M numeri casuali tra 4 e 4532 che sommati diano al più L.
   Ogni volta che ne crei uno, stampalo a schermo.

 *
 */



   const numberRep = parseInt(Math.floor(prompt("Inserisci un numero di array")));

   const numberNumbers = parseInt(Math.floor(prompt("Inserisci quanti numeri vuoi all'interno degli array")));
   
   const sumNumbers = parseInt(Math.floor(prompt("Inserisci una somma a cui devono arrivare i numeri")));
   
   while(isNaN(numberRep) || isNaN(numberNumbers)){
   
      numberRep = parseInt(Math.floor(prompt("Inserisci un numero di array")));
   
   
      numberNumbers = parseInt(Math.floor(prompt("Inserisci quanti numeri vuoi all'interno degli array")));
   
   }
   
   let sum = 0;
   
   for ( i = 0; i < numberRep; i++){
      let Array = [];
   
      sum = 0;
   
         while ( sum > sumNumbers || sum == 0){
   
               Array = [];
   
               sum = 0;
   
               for( x = 0; x < numberNumbers; x++){
                  let casualNumber = Math.floor((Math.random() * 4528) + 4);
      
                  Array.push(casualNumber);
      
                  sum += casualNumber;
               }
   
         }
   
      console.log(Array);
   
   }