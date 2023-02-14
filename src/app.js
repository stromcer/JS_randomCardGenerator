// /* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";


let cardFamilys = 
let cardValues =  ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];

let $ = element => document.querySelector(element);




function getRandomCard(){
  let cardValue = getRandomIndex(cardValues);
  let cardFamily =  getRandomIndex(cardFamilys);
  return [cardValue,cardFamily]
}


function getRandomIndex(array){
  return array[Math.floor(Math.random()*(array.length-1))]
}





function handleNewCardButton(){
  let [newCard, newValue] = getRandomCard();
  $("#cardValue").innerHTML = newCard;
  $("#familyBot").innerHTML = newValue;
  $("#familyTop").innerHTML = newValue;
}

$("#getNewCard").addEventListener(`click`,handleNewCardButton)



window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
