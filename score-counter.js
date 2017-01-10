class ScoreCounter {
	constructor(element, numOfDigits, init, nameOfAnim, durOfAnim) {		
		this.element = element;
		this.numOfDigits = (numOfDigits <= 0)? 1 : numOfDigits;
		
		this.val = (init > (Math.pow(10, this.numOfDigits) - 1) || init < 0)? 0 : init;
		this.nameOfAnim = nameOfAnim;
		this.durOfAnim = durOfAnim;
		this.changeValue();			
	}
	
	changeValue(playAnim) {
		var str = "" + this.val,
			pad = "0".repeat(this.numOfDigits),
			ans = (pad + str).substring(str.length);
		
		if (playAnim) {
			this.element.classList.remove(this.nameOfAnim);
			
			// forcing a reflow so that the script waits for the animation end
			void this.element.offsetWidth;		
			
			this.element.classList.add(this.nameOfAnim);
			this.element.style.animationDuration = this.durOfAnim;
		}
		
		this.element.innerHTML = ans;		
	}
	
	up() {
		if (this.val == (Math.pow(10, this.numOfDigits) - 1) ) {
			return;
		}
		
		this.val++;
		this.changeValue(true);		
	}
	
	down() {
		if (this.val == 0) {
			return;
		}
		
		this.val--;		
		this.changeValue(true);
	}
	
	value(valToSet) {
		if (valToSet === undefined) {
			this.getValue();
		}
		else {
			this.setValue(valToSet);
		}
	}
	
	getValue() {
		alert(this.val);
	}
	
	setValue(valToSet){
		if ((valToSet > Math.pow(10, this.numOfDigits) - 1) || (valToSet < 0)) {
			return;
		}
		
		this.val = valToSet;
		this.changeValue(true);
	}
	
	reset() {
		this.val = 0;
		this.changeValue(true);
	}
}
