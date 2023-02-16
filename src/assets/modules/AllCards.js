export let AllCards ={
    values:["A","two","three","four","five","six","seven","eight","nine","ten","J","Q","K"],
    familys:[`♦`,`♥`,`♠`,`♣`],
    deck:[],
        
    newValue:function(){
        return this.values[Math.floor(Math.random()*(this.values.length-1))]
    },
    newFamily:function(){
        return this.familys[Math.floor(Math.random()*(this.familys.length-1))]
    },
    getColorCard:function(family, element){
        if(family == `♥`|| family== `♦`){
            element.className ="text-danger";
            return
        }
        element.className ="text-black";
    },

    createDeck:function(){
        let tempArr = [];
        for(let family of this.familys){
            for(let value of this.values){
                tempArr.push([value, family])
            }
        }
        this.deck = tempArr;
    },


    shuffleDeck:function(){
        this.createDeck();
        let tempArr = [];
        let tempLength = this.deck.length;
        for(let i=0;i<tempLength;i++){
            let randomIndex = Math.floor(Math.random()*(this.deck.length-1));
            tempArr.push(this.deck[randomIndex]);
            this.deck.splice(randomIndex,1);
        }
        this.deck = tempArr;
    },

    newCard:function(element){
        if(!this.deck.length){
            this.shuffleDeck()
        }
        let [newCardValue, newCardFamily] = this.deck[0]
        this.deck.shift();
        // let [newCardValue, newCardFamily] = [this.newValue(),this.newFamily()];
        this.getOutside(element);
        this.cardBodies[newCardValue]? this.cardBodies[newCardValue](newCardFamily, element) : this.cardBodies.figure(newCardFamily,newCardValue, element) ;
        this.getColorCard(newCardFamily, element);
        return element;
    },
    
    getOutside:function(element){
        element.innerHTML=`<div id="cardSelector" class="card mx-auto d-flex flex-row" >
        <div id="familyTop"  class="card-top ms-2">         
        </div>
        <div id="cardBody"  class="card-body d-flex flex-column m-auto">
        </div>
        <div id="familyBot" class="card-bot me-2">
        </div>  
      </div>`;
    },

    cardBodies:{
        figure:function(cardFamily, cardValue, element){
            element.querySelector("#familyTop").innerHTML= `<div class="text-start figure h1">${cardFamily}${cardValue}</div>`;
            element.querySelector("#cardBody").innerHTML= `<div class="figureCard m-auto">${cardValue == "A"? cardFamily:cardValue}</div>`;
            element.querySelector("#familyBot").innerHTML= `<div class="text-start figure h1">${cardFamily}${cardValue}</div>`;
        },
        two:function(cardValue, element){
            element.querySelector("#familyTop").innerHTML= `<div class="text-start h1">${cardValue}2</div>`;
            element.querySelector("#cardBody").innerHTML= `<div class="twoCard ">${cardValue}</div>  <div class="twoCard rotate180">${cardValue}</div>`;
            element.querySelector("#familyBot").innerHTML= `<div class="text-start h1">${cardValue}2</div>`;
        },
        three:function(cardValue, element){
            element.querySelector("#familyTop").innerHTML= `<div class="text-start h1">${cardValue}3</div>`;
            element.querySelector("#cardBody").innerHTML= `<div class="threeCard ">${cardValue}</div> <div class="threeCard ">${cardValue}</div> <div class="threeCard rotate180">${cardValue}</div>`;
            element.querySelector("#familyBot").innerHTML= `<div class="text-start h1">${cardValue}3</div>`;
        },
        four:function(cardValue, element){
            element.querySelector("#familyTop").innerHTML= `<div class="text-start h1">${cardValue}4</div>`;
            element.querySelector("#cardBody").innerHTML= `<div class="d-flex d-row fourCard "><div >${cardValue}</div> <div >${cardValue}</div> </div><div class="d-flex d-row fourCard"><div class="rotate180">${cardValue}</div> <div class="rotate180">${cardValue}</div> </div>`;
            element.querySelector("#familyBot").innerHTML= `<div class="text-start h1">${cardValue}4</div>`;
        },
        five:function(cardValue, element){
            element.querySelector("#familyTop").innerHTML= `<div class="text-start h1">${cardValue}5</div>`;
            element.querySelector("#cardBody").innerHTML= `<div class="d-flex d-row fiveCard "><div class="">${cardValue}</div><div class="">${cardValue}</div></div><div class="d-flex d-row fiveCard "><div class="">${cardValue}</div></div><div class="d-flex d-row fiveCard"><div class="rotate180">${cardValue}</div><div class="rotate180">${cardValue}</div></div>`;
            element.querySelector("#familyBot").innerHTML= `<div class="text-start h1">${cardValue}5</div>`;
        },
        six:function(cardValue, element){
            element.querySelector("#familyTop").innerHTML= `<div class="text-start h1">${cardValue}6</div>`;
            element.querySelector("#cardBody").innerHTML= `<div class="d-flex d-row sixCard "> <div class="">${cardValue}</div> <div class="">${cardValue}</div></div><div class="d-flex d-row sixCard "><div class="">${cardValue}</div><div class="">${cardValue}</div></div><div class="d-flex d-row sixCard"><div class="rotate180">${cardValue}</div><div class="rotate180">${cardValue}</div></div>`;
            element.querySelector("#familyBot").innerHTML= `<div class="text-start h1">${cardValue}6</div>`;
        },
        seven:function(cardValue, element){
            element.querySelector("#familyTop").innerHTML= `<div class="text-start h1">${cardValue}7</div>`;
            element.querySelector("#cardBody").innerHTML= `<div class="d-flex d-row sevenCard "><div class="">${cardValue}</div><div class="">${cardValue}</div></div><div class="d-flex d-row sevenCard "><div class="">${cardValue}</div></div><div class="d-flex d-row sevenCard rotate180"><div class="">${cardValue}</div><div class="">${cardValue}</div></div><div class="d-flex d-row sevenCard rotate180"><div class="">${cardValue}</div><div class="">${cardValue}</div></div>`;
            element.querySelector("#familyBot").innerHTML= `<div class="text-start h1">${cardValue}7</div>`;
        },
        eight:function(cardValue, element){
            element.querySelector("#familyTop").innerHTML= `<div class="text-start h1">${cardValue}8</div>`;
            element.querySelector("#cardBody").innerHTML= `<div class="d-flex d-row eightCard "><div class="">${cardValue}</div><div class="">${cardValue}</div></div><div class="d-flex d-row eightCard "><div class="">${cardValue}</div><div class="">${cardValue}</div></div><div class="d-flex d-row eightCard rotate180"><div class="">${cardValue}</div><div class="">${cardValue}</div></div><div class="d-flex d-row eightCard rotate180"><div class="">${cardValue}</div><div class="">${cardValue}</div></div>`;
            element.querySelector("#familyBot").innerHTML= `<div class="text-start h1">${cardValue}8</div>`;
        },
        nine:function(cardValue, element){
            element.querySelector("#familyTop").innerHTML= `<div class="text-start h1">${cardValue}9</div>`;
            element.querySelector("#cardBody").innerHTML= `<div class="d-flex d-row nineCard "><div class="">${cardValue}</div><div class="">${cardValue}</div></div><div class="d-flex d-row nineCard "><div class="">${cardValue}</div></div><div class="d-flex d-row nineCard "><div class="">${cardValue}</div><div class="">${cardValue}</div></div><div class="d-flex d-row nineCard rotate180"><div class="">${cardValue}</div><div class="">${cardValue}</div></div><div class="d-flex d-row nineCard rotate180"><div class="">${cardValue}</div><div class="">${cardValue}</div></div>`;
            element.querySelector("#familyBot").innerHTML= `<div class="text-start h1">${cardValue}9</div>`;
        },
        ten:function(cardValue, element){
            element.querySelector("#familyTop").innerHTML= `<div class="text-start h1">${cardValue}<div class="d-flex flex-row">10</div></div>`;
            element.querySelector("#cardBody").innerHTML= `<div class="d-flex d-row tenCard "><div class="">${cardValue}</div><div class="">${cardValue}</div></div><div class="d-flex d-row tenCard "><div class="">${cardValue}</div></div><div class="d-flex d-row tenCard "><div class="">${cardValue}</div><div class="">${cardValue}</div></div><div class="d-flex d-row tenCard rotate180"><div class="">${cardValue}</div><div class="">${cardValue}</div></div><div class="d-flex d-row tenCard rotate180"><div class="">${cardValue}</div></div><div class="d-flex d-row tenCard rotate180"><div class="">${cardValue}</div><div class="">${cardValue}</div></div>`;
            element.querySelector("#familyBot").innerHTML= `<div class="text-start h1">${cardValue}<div class="d-flex flex-row">10</div></div>`;
        }
    }

};