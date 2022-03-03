/**
 *
 *
   Crea due tag div con due id diversi:
   un div avrà il testo colorato di rosso mentre l'altro di verde.
   Partendo da un array di numeri, creo una funzione che controlla se siano pari o dispari.
   Se sono pari li stampo nell'div "rosso",
   se sono dispari li stampo nell'div "verde".
 *
 */


   const firsElement = document.createElement("div");

   firsElement.id = "first-element-even";

   firsElement.classList.add("text-danger");

   const secondElement = document.createElement("div");

   firsElement.id = "second-element-odd";

   secondElement.classList.add("text-success");

   document.body.appendChild(firsElement);

   document.body.appendChild(secondElement);

   const numbersArray = [];

   for ( let i = 0; i < 10 ; i++){

      numbersArray[i] = Math.floor(Math.random() * 100);

      if(isEven(numbersArray[i])){

         firsElement.innerHTML += " " + numbersArray[i];
      }
      else{

         secondElement.innerHTML += " " + numbersArray[i];
      }

   }

/**
 * function that returns true if number is even and false if number is odd
 * 
 * @param {*} number 
 * @returns 
 */

   function isEven (number){

      if(number % 2 == 0){
         return true;
      }

      return false;
   }

   // * creo un'altra funzione che controlla che la somma di due numeri x e y sia pari
   // *
   // * sommaPari(24214, 12451241) ==> true se la somma mi dà un numero pari
   // *                            ==> false se la somma mi dà un numero dispari
   // */


/**
 * function that returns true if the sum of two numbers is even and false if the sum of two numbers is odd
 * 
 * @param {*} firstNumber 
 * @param {*} secondNumber 
 * @returns 
 */
   function isSumEven ( firstNumber, secondNumber){

      if((firstNumber + secondNumber) % 2 == 0){
         return true;
      }

      return false;
   }

   if(isSumEven(2,2)){
      console.log("somma pari");
   }