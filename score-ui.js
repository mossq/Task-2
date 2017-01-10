class ScoreUI {
	constructor(counterDiv, numOfDigits, init, nameOfAnim, durOfAnim) {
		this.nameOfAnim = nameOfAnim;		
		this.counterDiv = counterDiv;		
		this.scoreCounter = new ScoreCounter(counterDiv.querySelector(".counter"), numOfDigits, init, nameOfAnim, durOfAnim);		
	}
	
	generateEvents() {
		var that = this;
		
		this.counterDiv.getElementsByClassName("up")[0].onclick = function(){
			that.scoreCounter.up();			
			return false;
		};
		
		this.counterDiv.getElementsByClassName("down")[0].onclick = function(){
			that.scoreCounter.down();			
			return false;
		};
		
		this.counterDiv.getElementsByClassName("get")[0].onclick = function(){
			that.scoreCounter.value();			
			return false;
		};
		
		this.counterDiv.getElementsByClassName("set")[0].onclick = function(){			
			var input = that.counterDiv.getElementsByClassName("value")[0].value;
			that.scoreCounter.value(input);				
			return false;
		};
		
		this.counterDiv.getElementsByClassName("reset")[0].onclick = function(){	
			that.scoreCounter.reset();				
			return false;
		};
		
		this.counterDiv.getElementsByClassName("delete")[0].onclick = function(){	
			that.counterDiv.parentNode.removeChild(that.counterDiv);
			scoreUIArr.splice(nextScoreDivNum, 1);			
			return false;
		};
	}
}
