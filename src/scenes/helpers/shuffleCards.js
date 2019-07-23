function randomPositionArray(random){
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
  function shuffleCards(scene = this ,shuffles = 50, duration = 500, cards){
    
    for(let i = 0;i < shuffles ;i++){
      let randomNum = Math.random();
      let randomArr = randomPositionArray(randomNum);
      cards[0].shuffle(randomArr[0], duration);
      cards[1].shuffle(randomArr[1], duration);
      cards[2].shuffle(randomArr[2], duration);
    }
    cards[0].shuffleTimeline.play();
    cards[1].shuffleTimeline.play();
    cards[2].shuffleTimeline.play();
  }


  export default shuffleCards;