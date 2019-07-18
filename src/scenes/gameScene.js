import Phaser from 'phaser'
import Card from '../objects/card';

class GameScene extends Phaser.Scene {
    constructor(){
        super('gameScene')
        
    }
//custom functions


 
//**  Start of lifecycles  **/
 create(){
    const CANVAS_WIDTH = this.game.canvas.width;
    const CANVAS_HEIGHT = this.game.canvas.height;


 this.card =  new Card(this,0, 'black');
 this.card2 = new Card(this, 1, 'red');
 this.card3 = new Card(this, 2, 'black');

  this.card.flip(); 
  this.card2.flip(); 
  this.card3.flip(); 

    this.shuffles = 30;
    this.duration = 500;

  this.shuffleCards(this, this.shuffles, this.duration, [this.card, this.card2, this.card3]);


//  Event emiited from Card object
  this.events.on('checkCards', () => {
    this.events.emit('cardsBlocked');
  });

  this.events.on('nextTry', () => {
        this.shuffles += 5;
        if(this.duration > 100){
            this.duration -= 50;
        }  
        this.shuffleCards(this, this.shuffles, this.duration, [this.card, this.card2, this.card3]);
    
})


  
  

}


update(){
  
}

randomPositionArray(random){
    //Hardocded position
    let randomArr = [];
    if(random < 0.15){
      randomArr = [0, 1, 2];
    } else if(random < 0.3){
      randomArr = [2, 0, 1];
    } else if(random < 0.45){
      randomArr = [1, 2, 0];
    } else if(random < 0.6) {
      randomArr = [0, 2, 1];
    } else if(random < 0.75){
      randomArr = [1, 0, 2];
    } else {
      randomArr = [2, 1, 0];
    }
    return randomArr
  }
  //Funtion that shuffle cards in setted duration
  shuffleCards(scene = this ,shuffles = 50, duration = 500, cards){
    
    for(let i = 0;i < shuffles ;i++){
      let randomNum = Math.random();
      let randomArr = this.randomPositionArray(randomNum);
      cards[0].shuffle(randomArr[0], duration);
      cards[1].shuffle(randomArr[1], duration);
      cards[2].shuffle(randomArr[2], duration);
    }
    cards[0].shuffleTimeline.play();
    cards[1].shuffleTimeline.play();
    cards[2].shuffleTimeline.play();
  }
    
}

export default GameScene;