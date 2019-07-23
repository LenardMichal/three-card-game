import { Scene } from 'phaser'
import Card from '../objects/card';
import shuffleCards from './helpers/shuffleCards';

class GameScene extends Scene {
    constructor(){
        super('gameScene')
        
    }
//custom functions


 
//**  Start of lifecycles  **/
 create(){
  

  this.scene.launch('UIScene');


  this.card =  new Card(this,0, 'black');
  this.card2 = new Card(this, 1, 'red');
  this.card3 = new Card(this, 2, 'black');

  this.card.flip(); 
  this.card2.flip(); 
  this.card3.flip(); 

  //Values for beggining of gamemn 
  this.shuffles = 10;
  this.duration = 500;

  shuffleCards(this, this.shuffles, this.duration, [this.card, this.card2, this.card3]);


//  Event emiited from Card object
  this.events.on('checkCards', () => {
    this.events.emit('cardsBlocked');
  });

  this.events.on('nextTry', () => {
        if(this.shuffles < 30){
          this.shuffles += 5;
        }  
        if(this.duration > 100){
            this.duration -= 50;
        }  
        shuffleCards(this, this.shuffles, this.duration, [this.card, this.card2, this.card3]);
    
})

this.game.events.on('restartGame',() => {
  this.scene.stop('UIScene');
  this.scene.start('RestartScene');
})


  
  

}


update(){
  
}


    
}

export default GameScene;