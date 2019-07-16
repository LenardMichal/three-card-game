import Phaser from "phaser";
import cardsUrl from "./assets/sprites.xml";
import cardsImg from './assets/sprites.png';
import Card from './objects/card';

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create, 
    update
    
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.atlasXML('cards', cardsImg, cardsUrl);
}
let card
function create(){
 card =  new Card(this,0, 'black');
 let card2 = new Card(this, 1, 'black');
 let card3 = new Card(this, 2, 'red');
//  card.flipCard();
//  card.setFrame(1);
console.log(game.canvas);

}


function update(){
  
}

