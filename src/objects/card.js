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
        //Added Tweens timeline to object properties
        this.shuffleTimeline = scene.tweens.createTimeline();
        this.setInteractive();
        this.input.enabled = false;

       

        this.on('pointerdown', function(pointer){
           if(this.cardColor == "red"){
               this.scene.game.events.emit('scorePoint');           
            }else{
               
            }
            
            scene.events.emit('checkCards');
            setTimeout(() => {
                scene.events.emit('nextTry')
            }, 2000)
        })

        scene.events.on('cardsBlocked', () => {
            // console.log(this.cardHidden);
            this.flip();
            this.input.enabled = false;
            setTimeout(() => {
                this.flip()
            }, 1850);
        })

        

        
    }
    //Function that changes position of card
    // cardPosition = 0,1,2
    shuffle(cardPosition, duration){
        let GAME_OBJECT = this;
        let cardMove = 0;
        switch (cardPosition){
            case 0:
            cardMove = 200;
            break;
            case 1:
            cardMove = 400;
            break;
            case 2:
            cardMove = 600;
            break;
            default: 
            console.error('Wrong card position')
        }
        
       

        // this.scene.tweens.create({
        //     targets: this,
        //     x: cardMove,
        //     loop: 0,
        //     duration: duration,

        // })
        this.shuffleTimeline.add({
            targets: this,
            x: cardMove,
            loop: 0,
            duration: duration,
            onComplete: unlockCardsAfterShuffle,
        })
        
        function unlockCardsAfterShuffle(){
            if(GAME_OBJECT.shuffleTimeline.progress == 1){

                GAME_OBJECT.shuffleTimeline = GAME_OBJECT.scene.tweens.createTimeline();
                GAME_OBJECT.input.enabled = true;
                
            }
        }

    }


    
    
    
    flip(){
        let duration = 250;
        const GAME_OBJECT = this;
        
        let flipTimeline = this.scene.tweens.createTimeline();

        flipTimeline.add({
            targets: GAME_OBJECT,
            scaleX: 0,
            duration,
        });

        flipTimeline.add({
            targets: GAME_OBJECT,
            scaleX: 0.25,
            duration,
            onStart: () => swapCardsTexture(GAME_OBJECT),
        })

        flipTimeline.play();

        function swapCardsTexture(gameObject){
            
            if(gameObject.cardHidden){
                gameObject.setFrame(gameObject.cardFrontTexture);
            } else{
                gameObject.setFrame(gameObject.cardBackTexture)
            }
            gameObject.cardHidden = !gameObject.cardHidden
        }
        return flipTimeline
    };   
}

export default Card;