import Phaser from 'phaser';

class Card extends Phaser.GameObjects.Sprite{
    //Todo
    //card will get position 0,1,2 
    constructor(scene, position, color){

        //Creation based on position
        let WIDTH = scene.game.canvas.width;
        let HEIGHT = scene.game.canvas.height;
        let x;
        let y = HEIGHT / 2;
        switch (position){
            case 0:
                x = WIDTH / 4;
                break;
            case 1:
                x = 2 * WIDTH / 4;    
                break;
            case 2:
                x = 3 * WIDTH / 4;   
                break;
            default:
                console.error('error of position WIDTH') 
        }
        //seting frame based on color
        let frame;
        switch (color){
            case 'red': 
                frame = 'AH.png'
                break;
            case 'black':
                frame = 'AS.png'
                break;
            default:
                console.error('Wrong color of card');
                
        }
        super(scene, x, y, 'cards' , frame)
        super.scale = 0.25;
        scene.add.existing(this);
        this.cardColor = color;
        this.cardHidden = false;
        this.cardBackTexture = 'blue_back.png';
        this.cardFrontTexture = frame;
        
       
        this.setInteractive()

        this.on('pointerdown', function(pointer){
           if(this.cardColor == "red"){
               console.log('U won');
            }else{
                console.log('U lose');    
            }

            scene.events.emit('checkCards');
        })
    }
    
    // cardPosition = 0,1,2
    shuffle(cardPosition){
        let cardMove;
        switch (cardPosition){
            case 0:
            cardMove = 200;
            break;
            case 1:
            cardMove = 400;
            break;
            case 2:
            cardmove = 600;
            break;
            default: 
            console.error('Wrong card position')
        }


        this.scene.tweens.add({
            targets: this,
            x: cardMove,
            loop: 0,
        })
    }


    
    
    
    flip(){
        let duration = 500;
        this.scene.tweens.add({
            targets: this,
            scaleX: 0,
            onComplete: () => flipCompleteHandler(this),
            duration,
        })
        let backFlip = this.scene.tweens.create({
            targets: this,
            scaleX: 0.25,
            duration,
        })

        function flipCompleteHandler(gameObject){
            
            if(gameObject.cardHidden){
                gameObject.setFrame(gameObject.cardFrontTexture);
            } else{
                gameObject.setFrame(gameObject.cardBackTexture)
            }
            gameObject.cardHidden = !gameObject.cardHidden
            gameObject.scene.tweens.existing(backFlip);
        }

    };   
}

export default Card;