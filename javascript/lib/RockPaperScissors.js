function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.PAIRS = {
  
  paper       : { 
    rock      : 'covers', 
    spock     : 'disproves'     
  },
  rock        : { 
    scissors  : 'crushes', 
    lizard    : 'crushes'  
  },
  scissors    : { 
    paper     : 'cut',  
    lizard    : 'decapitate'    
  },
  lizard      : { 
    spock     : 'poisons',  
    paper     : 'eats'     
  },  
  spock       : { 
    scissors  : 'smashes', 
    rock      : 'vaporizes'    
  }

};


Game.prototype.winner = function() {
    if(this._samePick()){
      return null;
    }

    if(this.PAIRS[this.player1.pick][this.player2.pick]){
      // winner = this.player1;
      // loser = this.player2;
      return this.player1;
    }
    else {
      // winner = this.player2;
      // loser = this.player1;
      return this.player2;
    }   
};

Game.prototype.loser = function() {
  return (this.winner() === this.player1 ? this.player2 : this.player1)
}

Game.prototype._samePick = function() {
  return this.player1.pick === this.player2.pick;
};


Game.prototype.result = function() {
  console.log(this.winner());
  var message;

  if(this.winner()) {
    message = [this.winner().name, this.winner().pick, 
    this.PAIRS[this.winner().pick][this.loser().pick],
    this.loser().name, this.loser().pick].join(' ');
  } else {
    message = 'Draw';
  }

  return message;
};
  





