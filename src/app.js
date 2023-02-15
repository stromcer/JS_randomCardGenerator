// /* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";
import { AllCards } from "./assets/modules/AllCards.js";

let cardFamilys = [`♦`,`♥`,`♠`,`♣`];
let cardValues =  ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];

let $ = element => document.querySelector(element);


function handleNewCardButton(){
  AllCards.newCard();
}





window.onload = function() {
  $("#getNewCard").addEventListener(`click`,handleNewCardButton);
};
