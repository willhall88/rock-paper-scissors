function Player(name) {
  this.name = name;
};

Player.prototype.picks = function(pick) {
  this.pick = pick;
};

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

var PAIRS = {
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
    if(this.same_pick()){
      return null;
    }

    if(PAIRS[this.player1.pick][this.player2.pick]){
      return this.player1;
    }
    else {
      return this.player2;
    }   
};

Game.prototype.same_pick = function(){
  return this.player1.pick === this.player2.pick;
};
  