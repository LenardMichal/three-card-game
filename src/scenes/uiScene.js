import { Scene } from 'phaser';

class UiScene extends Scene{
    constructor(){
        super('UIScene');
        this.score = 0;
    }
    
    create(){
        

        
        let title = this.add.text(50 , 50, 'Three card game - Alpha', {
            fontSize: '36px'
        });
        title.setDisplayOrigin(0);

        this.game.events.on('scorePoint', () => {
            this.score++
          });
    }

    update(){

        let rectangle = new Phaser.Geom.Rectangle(0, 500, 800, 100);

        let graphics = this.add.graphics({fillStyle: {color: 0x0000ff}});

        graphics.fillRectShape(rectangle);

        this.add.text(400, 500, `Your score: ${this.score}`, {
            fontSize: '36px'
        })
    }
}

export default UiScene;
