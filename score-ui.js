class ScoreUI {
	constructor(counterDiv, numOfDigits, init, nameOfAnim, durOfAnim) {
		this.nameOfAnim = nameOfAnim;		
		this.counterDiv = counterDiv;		
		this.scoreCounter = new ScoreCounter(counterDiv.querySelector(".counter"), numOfDigits, init, nameOfAnim, durOfAnim);		
	}
	
	generateEvents(main) {
		var that = this;
		
		this.counterDiv.getElementsByClassName("up")[0].addEventListener("click", function(evt){
			evt.preventDefault();
			that.scoreCounter.up();				
		});
		
		this.counterDiv.getElementsByClassName("down")[0].addEventListener("click", function(evt){
			evt.preventDefault();
			that.scoreCounter.down();				
		});
		
		this.counterDiv.getElementsByClassName("get")[0].addEventListener("click", function(evt){
			evt.preventDefault();
			that.scoreCounter.value();				
		});
		
		this.counterDiv.getElementsByClassName("set")[0].addEventListener("click", function(evt){	
			evt.preventDefault();		
			var input = that.counterDiv.getElementsByClassName("value")[0].value;
			that.scoreCounter.value(input);				
		});
		
		this.counterDiv.getElementsByClassName("reset")[0].addEventListener("click", function(evt){
			evt.preventDefault();
			that.scoreCounter.reset();				
		});
		
		this.counterDiv.getElementsByClassName("delete")[0].addEventListener("click", function(evt){
			evt.preventDefault();
			that.counterDiv.parentNode.removeChild(that.counterDiv);
			main.scoreUIArr.splice(main.nextScoreDivNum, 1);			
		});
	}
}
