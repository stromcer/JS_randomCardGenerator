export let AllCards ={
    values:[1,2,3,4,5,6,7,8,9,10,11,12,13],
    falmilys:[`♦`,`♥`,`♠`,`♣`],
    
    
    newValue:function(){
        return this.values[Math.floor(Math.random()*(this.values.length-1))]
    },
    newFamily:function(){
        return this.falmilys[Math.floor(Math.random()*(this.falmilys.length-1))]
    },
    newCard:function(){
        let newCardValues = [this.newFamily(),this.newValue()]
    },
    

};