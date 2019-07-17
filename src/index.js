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


//Variables for wider scope
let card, card2, card3;

function create(){
 card =  new Card(this,0, 'black');
 card2 = new Card(this, 1, 'black');
 card3 = new Card(this, 2, 'red');

 const COORDINATES = [
   card.x, card2.x, card3.x
 ]

console.log(COORDINATES);

// flipCard(this);
// shuffleBot(this);

 //Event emiited from Card object
  this.events.on('checkCards', () => {
    flipCard(this);
    shuffleBot(this);
  });
  let mockTween = this.tweens.create({
    targets: [card, card2, card3],
    y: 50,
  })
  card.flip(0)
  // card2.shuffle(0)
  // card3.shuffle(0)


}


function update(){
  
}
//Function that shuffle card x times
function shuffleBot(scene){

  let iteration = 0;
  let animDuration = 500;
  //Function that perform one shuffle and call next request
  function shuffle(scene, card, far){
    return scene.tweens.add({
      targets: card,
      x: far,
      loop: 0,
      onComplete: shuffleHandler,
      duration: animDuration,
     
    })
  }

  function shuffleClean(scene, card, far){
    return scene.tweens.add({
      targets: card,
      x: far,
      loop: 0,
      duration: animDuration,
      
    })
  }

  function shuffleHandler(){
    //Breaker for endless loop
    if (iteration > 500){
      return null;
    }
    let random = Math.random();
    //array for easier hard coding
    let randomArr = [];
    if(random < 0.15){
      randomArr = [card, card2, card3];
    } else if(random < 0.3){
      randomArr = [card3, card, card2];
    } else if(random < 0.45){
      randomArr = [card2, card3, card];
    } else if(random < 0.6) {
      randomArr = [card, card3, card2];
    } else if(random < 0.75){
      randomArr = [card2, card, card3];
    } else {
      randomArr = [card3, card2, card];
    }



    // console.log('iteration of handler: ', iteration);
    shuffle(scene, randomArr[0], 200);
    shuffleClean(scene, randomArr[1], 400);
    shuffleClean(scene, randomArr[2], 600);
    iteration++
  }


  //Start of loop
  shuffle(scene, card, 200);
  
}






function changeTexture(targetsArr){
  for(let i = 0; i < targetsArr.length;i++){
    
    if(targetsArr[i].cardHidden == false){
      targetsArr[i].setFrame('blue_back.png');
      targetsArr[i].cardHidden = true;
    }else if (targetsArr[i].cardColor == 'red'){
      targetsArr[i].setFrame('AH.png')
      targetsArr[i].cardHidden = false;
    }else{
      targetsArr[i].setFrame('AS.png')
      targetsArr[i].cardHidden = false;

    }
  }
}

function flipCard(scene){
  
  //Animation that looks like card flip
  function flipCardAnimation(scene){
    
    scene.tweens.add({
      targets: [card, card2, card3],
      scaleX: 0,
      loop: 0,
      onComplete: onCompleteHandler
    })
  }
  //Second half of the flip animation
  function showCardsAnimation(scene){
    scene.tweens.add({
      targets: [card, card2, card3],
      scaleX: 0.25,
      loop: 0,
      
    })
  
}

//On 
function onCompleteHandler(tween, targets){

  changeTexture(targets)
  showCardsAnimation(scene);
}


//Start the animation loop;
flipCardAnimation(scene);

}

