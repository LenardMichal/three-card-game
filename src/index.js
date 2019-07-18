import Phaser from "phaser";
import cardsUrl from "./assets/sprites.xml";
import cardsImg from './assets/sprites.png';

import GameScene from './scenes/gameScene';

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: [
    {preload, create},
    GameScene
  ]
};

const game = new Phaser.Game(config);

function preload() {
  this.load.atlasXML('cards', cardsImg, cardsUrl);
}
function create(){
  this.scene.start('gameScene');
}

//Variables for wider scope
// let card, card2, card3;

// function create(){

//   this.add.text(0, 0, 'Three Card Game Alpha')


//   card =  new Card(this,0, 'black');
//  card2 = new Card(this, 1, 'red');
//  card3 = new Card(this, 2, 'black');

//   card.flip(); 
//   card2.flip(); 
//   card3.flip(); 



//   shuffleCards(this, 30, 150, [card, card2, card3]);


//  //Event emiited from Card object
//   // this.events.on('checkCards', () => {
    
//   // });
  
  

// }


// function update(){
  
// }

// function randomPositionArray(random){
//     //Hardocded position
//     let randomArr = [];
//     if(random < 0.15){
//       randomArr = [0, 1, 2];
//     } else if(random < 0.3){
//       randomArr = [2, 0, 1];
//     } else if(random < 0.45){
//       randomArr = [1, 2, 0];
//     } else if(random < 0.6) {
//       randomArr = [0, 2, 1];
//     } else if(random < 0.75){
//       randomArr = [1, 0, 2];
//     } else {
//       randomArr = [2, 1, 0];
//     }
//     return randomArr
//   }
//   //Funtion that shuffle cards in setted duration
//   function shuffleCards(scene = this ,shuffles = 50, duration = 500, cards){
    
//     for(let i = 0;i < shuffles ;i++){
//       let randomNum = Math.random();
//       let randomArr = randomPositionArray(randomNum);
//       cards[0].shuffle(randomArr[0], duration);
//       cards[1].shuffle(randomArr[1], duration);
//       cards[2].shuffle(randomArr[2], duration);
//     }
//     cards[0].shuffleTimeline.play();
//     cards[1].shuffleTimeline.play();
//     cards[2].shuffleTimeline.play();
//   }


















//Function that shuffle card x times
// function shuffleBot(scene){

//   let iteration = 0;
//   let animDuration = 500;
//   //Function that perform one shuffle and call next request
//   function shuffle(scene, card, far){
//     return scene.tweens.add({
//       targets: card,
//       x: far,
//       loop: 0,
//       onComplete: shuffleHandler,
//       duration: animDuration,
     
//     })
//   }

//   function shuffleClean(scene, card, far){
//     return scene.tweens.add({
//       targets: card,
//       x: far,
//       loop: 0,
//       duration: animDuration,
      
//     })
//   }

//   function shuffleHandler(){
//     //Breaker for endless loop
//     if (iteration > 500){
//       return null;
//     }
//     let random = Math.random();
//     //array for easier hard coding
   



//     // console.log('iteration of handler: ', iteration);
//     shuffle(scene, randomArr[0], 200);
//     shuffleClean(scene, randomArr[1], 400);
//     shuffleClean(scene, randomArr[2], 600);
//     iteration++
//   }


//   //Start of loop
//   shuffle(scene, card, 200);
  
// }






// function changeTexture(targetsArr){
//   for(let i = 0; i < targetsArr.length;i++){
    
//     if(targetsArr[i].cardHidden == false){
//       targetsArr[i].setFrame('blue_back.png');
//       targetsArr[i].cardHidden = true;
//     }else if (targetsArr[i].cardColor == 'red'){
//       targetsArr[i].setFrame('AH.png')
//       targetsArr[i].cardHidden = false;
//     }else{
//       targetsArr[i].setFrame('AS.png')
//       targetsArr[i].cardHidden = false;

//     }
//   }
// }

// function flipCard(scene){
  
//   //Animation that looks like card flip
//   function flipCardAnimation(scene){
    
//     scene.tweens.add({
//       targets: [card, card2, card3],
//       scaleX: 0,
//       loop: 0,
//       onComplete: onCompleteHandler
//     })
//   }
//   //Second half of the flip animation
//   function showCardsAnimation(scene){
//     scene.tweens.add({
//       targets: [card, card2, card3],
//       scaleX: 0.25,
//       loop: 0,
      
//     })
  
// }

// //On 
// function onCompleteHandler(tween, targets){

//   changeTexture(targets)
//   showCardsAnimation(scene);
// }


// //Start the animation loop;
// flipCardAnimation(scene);

// }

