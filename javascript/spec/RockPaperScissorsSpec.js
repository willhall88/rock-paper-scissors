describe("Rock-Paper-Scissors", function() {

  var player1, player2, game; 

  beforeEach(function() {

    player1 = new Player('My');
    player2 = new Player('Your');
    game = new Game(player1, player2);

  });

  describe('winning and losing', function() {

    describe('rock', function() {

      it('should beat scissors', function() {

        player1.picks('rock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);
      });

      it('should beat lizard', function() {
        player1.picks('rock');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to paper', function() {

        player1.picks('rock');
        player2.picks('paper');
        expect(game.winner()).toBe(player2);

      });

      it('should lose to spock', function() {

        player1.picks('rock');
        player2.picks('spock');
        expect(game.winner()).toBe(player2);

      });

    });

    describe('paper', function() {

      it('should beat rock', function() {

        player1.picks('paper');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);

      });

      it('should beat spock', function() {

        player1.picks('paper');
        player2.picks('spock');
        expect(game.winner()).toBe(player1);

      });

      it('should lose to scissors', function() {

        player1.picks('paper');
        player2.picks('scissors');
        expect(game.winner()).toBe(player2);

      });

      it('should lose to lizard', function() {

        player1.picks('paper');
        player2.picks('lizard');
        expect(game.winner()).toBe(player2);

      });

    });

    describe('scissors', function() {

      it('should beat paper', function() {

        player1.picks('scissors');
        player2.picks('paper');
        expect(game.winner()).toBe(player1);

      });

      it('should beat lizard', function() {

        player1.picks('scissors');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);

      });

      it('should lose to rock', function() {

        player1.picks('scissors');
        player2.picks('rock');
        expect(game.winner()).toBe(player2);

      });

      it('should lose to spock', function() {

        player1.picks('scissors');
        player2.picks('spock');
        expect(game.winner()).toBe(player2);

      });

    });

    describe('lizard', function() {

      it('should beat spock', function() {

        player1.picks('lizard');
        player2.picks('spock');
        expect(game.winner()).toBe(player1);

      });

      it('should beat paper', function() {

        player1.picks('lizard');
        player2.picks('paper');
        expect(game.winner()).toBe(player1);

      });

      it('should lose to rock', function() {

        player1.picks('lizard');
        player2.picks('rock');
        expect(game.winner()).toBe(player2);

      });

      it('should lose to scissors', function() {

        player1.picks('lizard');
        player2.picks('scissors');
        expect(game.winner()).toBe(player2);

      });

    });

    describe('spock', function() {

      it('should beat scissors', function() {

        player1.picks('spock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);

      });

      it('should beat rock', function() {

        player1.picks('spock');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);

      });

      it('should lose to paper', function() {

        player1.picks('spock');
        player2.picks('paper');
        expect(game.winner()).toBe(player2);

      });

      it('should lose to lizard', function() {

        player1.picks('spock');
        player2.picks('lizard');
        expect(game.winner()).toBe(player2);

      });

    });

  });

  describe('draws', function() {

    describe('any identical picks', function() {

      it('should result in no winner', function() {

        var drawGameResults = ['rock', 'paper', 'scissors', 'lizard', 'spock'].map(function(x) {
          player1.picks(x);
          player2.picks(x);
          return game.winner();
        });

        expect(drawGameResults).toEqual([null, null, null, null, null]);

      });

    });

  });

  describe('result', function() {
    it('should return the winners name, pick, verb, losers name, pick', function() {   
        player1.picks('spock');
        player2.picks('rock');
        game.winner();
        expect(game.result()).toBe("My spock vaporizes Your rock");
    });

    it('should return the winners name, pick, verb, losers name, pick', function() {
      player2.picks('rock');
      player1.picks('scissors');
      game.winner();
      expect(game.result()).toBe("Your rock crushes My scissors");
    });


  });

  describe('randomization', function(){
    it('should randomly select the computers choice', function(){
      spyOn(game, 'randomChoice').andReturn('scissors');
      player1.picks('scissors');
      player2.picks(game.randomChoice());
      expect(game.result()).toBe("Draw")

    });
  });

});


// describe("A spy, when faking a return value", function() {
//   var foo, bar, fetchedBar;

//   beforeEach(function() {
//     foo = {
//       setBar: function(value) {
//         bar = value;
//       },
//       getBar: function() {
//         return bar;
//       }
//     };

//     spyOn(foo, 'getBar').andReturn(387);

//     foo.setBar(123);
//     fetchedBar = foo.getBar();
//   });

//   it("tracks that the spy was called", function() {
//     expect(foo.getBar).toHaveBeenCalled();
//   });

//   it("should not affect other functions", function() {
//     expect(bar).toEqual(123);
//   });

//   it("when called returns the requested value", function() {
//     expect(fetchedBar).toEqual(745);
//   });
// });