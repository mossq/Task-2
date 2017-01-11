class Main {
	constructor() {
		var score1 = new ScoreUI(document.getElementById("score-1"), 1, 0, 'slideDown', "1s");						
		var score2 = new ScoreUI(document.getElementById("score-2"), 2, 10, 'zoomIn', "0.1s");
		var score3 = new ScoreUI(document.getElementById("score-3"), 4, 100, 'rotate', "0.5s");
		
		this.scoreUIArr = [score1, score2, score3];
		this.nextScoreDivNum = this.scoreUIArr.length;

		score1.generateEvents(this);
		score2.generateEvents(this);
		score3.generateEvents(this);	
	}
}

var main = new Main();