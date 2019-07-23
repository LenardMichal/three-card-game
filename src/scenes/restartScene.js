import { Scene } from 'phaser';


class RestartScene extends Scene{
    constructor(){
        super('RestartScene')
    }

    create(){

        this.add.text(200, 200, 'You lose!', {
            fontSize: '60px'
        })
        
        setTimeout(() => {
            this.scene.start('gameScene');
        }, 1000)
    }
}

export default RestartScene;