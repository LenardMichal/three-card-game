import Phaser from "phaser";
import cardsUrl from "./assets/sprites.xml";
import cardsImg from './assets/sprites.png';

import UIScene from './scenes/uiScene';
import GameScene from './scenes/gameScene';
import RestartScene from './scenes/restartScene';

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: [
    {preload, create},
    GameScene,
    UIScene,
    RestartScene
  ]
};

const game = new Phaser.Game(config);

  //This scene methods are for game initilization
  function preload() {
    this.load.atlasXML('cards', cardsImg, cardsUrl);
  }
  function create(){
    this.scene.start('gameScene');
    
    
  }





