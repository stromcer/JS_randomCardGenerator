export let AllCards ={
    values:["A","two","three","four","five","six","seven","eight","nine","ten","K","Q","K"],
    falmilys:[`♦`,`♥`,`♠`,`♣`],
    
    
    newValue:function(){
        return this.values[Math.floor(Math.random()*(this.values.length-1))]
    },
    newFamily:function(){
        return this.falmilys[Math.floor(Math.random()*(this.falmilys.length-1))]
    },
    getColorCard:function(family){
        if(family == `♥`|| family== `♦`){
            document.getElementById("randomCardDiv").className ="text-danger";
            return
        }
        document.getElementById("randomCardDiv").className ="text-black";
    },

    newCard:function(){
        const nuevaCarta = document.createElement("div");
        let [newCardValue, newCardFamily] = [this.newValue(),this.newFamily()];
        this.getOutside();
        this.cardBodies[newCardValue]? this.cardBodies[newCardValue](newCardFamily) : this.cardBodies.figure(newCardFamily,newCardValue) ;
        this.getColorCard(newCardFamily);
    },
    
    getOutside:function(){
        document.getElementById("randomCardDiv").innerHTML=`<div class="card mx-auto d-flex flex-row" >
        <div id="familyTop"  class="card-top ms-2">         
        </div>
        <div id="cardBody"  class="card-body d-flex flex-column m-auto">
        </div>
        <div id="familyBot" class="card-bot me-2">
        </div>  
      </div>`;
    },

    cardBodies:{
        figure:function(cardFamily, cardValue){
            document.getElementById("familyTop").innerHTML= `<div class="text-start h1">${cardFamily}${cardValue}</div>`;
            document.getElementById("cardBody").innerHTML= `<div class="figureCard m-auto">${cardValue == "A"? cardFamily:cardValue}</div>`;
            document.getElementById("familyBot").innerHTML= `<div class="text-start h1">${cardFamily}${cardValue}</div>`;
        },
        two:function(cardValue){
            document.getElementById("familyTop").innerHTML= `<div class="text-start h1">${cardValue}2</div>`;
            document.getElementById("cardBody").innerHTML= `<div class="twoCard ">${cardValue}</div>  <div class="twoCard rotate180">${cardValue}</div>`;
            document.getElementById("familyBot").innerHTML= `<div class="text-start h1">${cardValue}2</div>`;
        },
        three:function(cardValue){
            document.getElementById("familyTop").innerHTML= `<div class="text-start h1">${cardValue}3</div>`;
            document.getElementById("cardBody").innerHTML= `<div class="threeCard ">${cardValue}</div> <div class="threeCard ">${cardValue}</div> <div class="threeCard rotate180">${cardValue}</div>`;
            document.getElementById("familyBot").innerHTML= `<div class="text-start h1">${cardValue}3</div>`;
        },
        four:function(cardValue){
            document.getElementById("familyTop").innerHTML= `<div class="text-start h1">${cardValue}4</div>`;
            document.getElementById("cardBody").innerHTML= `<div class="d-flex d-row fourCard "><div >${cardValue}</div> <div >${cardValue}</div> </div><div class="d-flex d-row fourCard"><div class="rotate180">${cardValue}</div> <div class="rotate180">${cardValue}</div> </div>`;
            document.getElementById("familyBot").innerHTML= `<div class="text-start h1">${cardValue}4</div>`;
        },
        five:function(cardValue){
            document.getElementById("familyTop").innerHTML= `<div class="text-start h1">${cardValue}5</div>`;
            document.getElementById("cardBody").innerHTML= `<div class="d-flex d-row fiveCard "><div class="">${cardValue}</div><div class="">${cardValue}</div></div><div class="d-flex d-row fiveCard "><div class="">${cardValue}</div></div><div class="d-flex d-row fiveCard"><div class="rotate180">${cardValue}</div><div class="rotate180">${cardValue}</div></div>`;
            document.getElementById("familyBot").innerHTML= `<div class="text-start h1">${cardValue}5</div>`;
        },
        six:function(cardValue){
            document.getElementById("familyTop").innerHTML= `<div class="text-start h1">${cardValue}6</div>`;
            document.getElementById("cardBody").innerHTML= `<div class="d-flex d-row sixCard "> <div class="">${cardValue}</div> <div class="">${cardValue}</div></div><div class="d-flex d-row sixCard "><div class="">${cardValue}</div><div class="">${cardValue}</div></div><div class="d-flex d-row sixCard"><div class="rotate180">${cardValue}</div><div class="rotate180">${cardValue}</div></div>`;
            document.getElementById("familyBot").innerHTML= `<div class="text-start h1">${cardValue}6</div>`;
        },
        seven:function(cardValue){
            document.getElementById("familyTop").innerHTML= `<div class="text-start h1">${cardValue}7</div>`;
            document.getElementById("cardBody").innerHTML= `<div class="d-flex d-row sevenCard "><div class="">${cardValue}</div><div class="">${cardValue}</div></div><div class="d-flex d-row sevenCard "><div class="">${cardValue}</div></div><div class="d-flex d-row sevenCard rotate180"><div class="">${cardValue}</div><div class="">${cardValue}</div></div><div class="d-flex d-row sevenCard rotate180"><div class="">${cardValue}</div><div class="">${cardValue}</div></div>`;
            document.getElementById("familyBot").innerHTML= `<div class="text-start h1">${cardValue}7</div>`;
        },
        eight:function(cardValue){
            document.getElementById("familyTop").innerHTML= `<div class="text-start h1">${cardValue}8</div>`;
            document.getElementById("cardBody").innerHTML= `<div class="d-flex d-row eightCard "><div class="">${cardValue}</div><div class="">${cardValue}</div></div><div class="d-flex d-row eightCard "><div class="">${cardValue}</div><div class="">${cardValue}</div></div><div class="d-flex d-row eightCard rotate180"><div class="">${cardValue}</div><div class="">${cardValue}</div></div><div class="d-flex d-row eightCard rotate180"><div class="">${cardValue}</div><div class="">${cardValue}</div></div>`;
            document.getElementById("familyBot").innerHTML= `<div class="text-start h1">${cardValue}8</div>`;
        },
        nine:function(cardValue){
            document.getElementById("familyTop").innerHTML= `<div class="text-start h1">${cardValue}9</div>`;
            document.getElementById("cardBody").innerHTML= `<div class="d-flex d-row nineCard "><div class="">${cardValue}</div><div class="">${cardValue}</div></div><div class="d-flex d-row nineCard "><div class="">${cardValue}</div></div><div class="d-flex d-row nineCard "><div class="">${cardValue}</div><div class="">${cardValue}</div></div><div class="d-flex d-row nineCard rotate180"><div class="">${cardValue}</div><div class="">${cardValue}</div></div><div class="d-flex d-row nineCard rotate180"><div class="">${cardValue}</div><div class="">${cardValue}</div></div>`;
            document.getElementById("familyBot").innerHTML= `<div class="text-start h1">${cardValue}9</div>`;
        },
        ten:function(cardValue){
            document.getElementById("familyTop").innerHTML= `<div class="text-start h1">${cardValue}<div class="d-flex flex-row">10</div></div>`;
            document.getElementById("cardBody").innerHTML= `<div class="d-flex d-row tenCard "><div class="">${cardValue}</div><div class="">${cardValue}</div></div><div class="d-flex d-row tenCard "><div class="">${cardValue}</div></div><div class="d-flex d-row tenCard "><div class="">${cardValue}</div><div class="">${cardValue}</div></div><div class="d-flex d-row tenCard rotate180"><div class="">${cardValue}</div><div class="">${cardValue}</div></div><div class="d-flex d-row tenCard rotate180"><div class="">${cardValue}</div></div><div class="d-flex d-row tenCard rotate180"><div class="">${cardValue}</div><div class="">${cardValue}</div></div>`;
            document.getElementById("familyBot").innerHTML= `<div class="text-start h1">${cardValue}<div class="d-flex flex-row">10</div></div>`;
        }
    }

};