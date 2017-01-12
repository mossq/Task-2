(function() {
	var addButton = document.getElementById("add");
	
	addButton.addEventListener("click", function(){
		var indexer = main.nextScoreDivNum + 1;
		
		var div = document.createElement("div"),
			h1 = document.createElement("h1"),
			txtH1 = document.createTextNode("Score " + indexer + ": "),
			span = document.createElement("span"),
			
			form = document.createElement("form"),
			
			btnUp = document.createElement("button"),
			txtUp = document.createTextNode("Up"),
			
			btnDown = document.createElement("button"),
			txtDown = document.createTextNode("Down")
			
			btnGet = document.createElement("button"),
			txtGet = document.createTextNode("Get"),
			
			input = document.createElement("input"),
			btnSet = document.createElement("button"),
			txtSet = document.createTextNode("Set"),
			
			btnReset = document.createElement("button"),
			txtReset = document.createTextNode("Reset"),

			btnDelete = document.createElement("button"),	
			txtDelete = document.createTextNode("DELETE");
		
		input.setAttribute('type', "number");
		input.setAttribute('class', "value");						
		div.setAttribute('id', "score-" + indexer);
		div.setAttribute('class', "score");
		span.setAttribute('class', "counter");
		btnUp.setAttribute('class', "up");
		btnDown.setAttribute('class', "down");
		btnGet.setAttribute('class', "get");
		btnSet.setAttribute('class', "set");
		btnReset.setAttribute('class', "reset");
		btnDelete.setAttribute('class', "delete");
			
		div.appendChild(h1);
		h1.appendChild(txtH1);
		h1.appendChild(span);
		div.appendChild(form);
		form.appendChild(btnUp);
		btnUp.appendChild(txtUp);
		form.appendChild(btnDown);
		btnDown.appendChild(txtDown);
		form.appendChild(btnGet);
		btnGet.appendChild(txtGet);
		form.appendChild(input);
		form.appendChild(btnSet);
		btnSet.appendChild(txtSet);
		form.appendChild(btnReset);
		btnReset.appendChild(txtReset);
		div.appendChild(btnDelete);
		btnDelete.appendChild(txtDelete);
		
		var userValues = getValues();
		if (userValues === undefined) {
			return;
		}	
		input.setAttribute('placeholder', "0 - " + (Math.pow(10, userValues.numOfD) - 1));
		input.setAttribute('min', "0");
		input.setAttribute('max', (Math.pow(10, userValues.numOfD) - 1));
		
		document.body.appendChild(div);
		
		var scoreUI = new ScoreUI(div, userValues.numOfD, userValues.initVal, userValues.animationName, userValues.animationDuration + "s");
		scoreUI.generateEvents(main);
		
		main.scoreUIArr.push(scoreUI);
		main.nextScoreDivNum++;
	});
	
	function getValues() {	
		do {
			var numOfD = prompt("Enter a number of digits");
			if (numOfD === null) {
				return;
			}
			else {
				numOfD = parseInt(numOfD, 10);
			}
		} while( (isNaN(numOfD)) || (numOfD<0) );
			
		do {
			var initVal = prompt("Enter an initial value for the counter");
			if (initVal === null) {
				return;
			}
			else {
				initVal = parseInt(initVal, 10);
			}
		} while( (isNaN(initVal)) || (initVal > (Math.pow(10, numOfD) - 1)) || (initVal<0) );
		
		do {
			var nameOfAnimation = prompt("Choose an animation for the counter (slideDown, zoomIn or rotate)");
			if (nameOfAnimation === null) { 
				return;
			}
		} while( (nameOfAnimation != "zoomIn") && (nameOfAnimation != "slideDown") && (nameOfAnimation != "rotate") );
		
		do {
			var durationOfAnimation = prompt("Enter the duration of the animation in seconds");
			if (durationOfAnimation === null) { 
				return;
			}
			else {
				durationOfAnimation = parseInt(durationOfAnimation, 10);
			}
		} while( (isNaN(durationOfAnimation)) || durationOfAnimation<0 );
		
		return {numOfD: numOfD, initVal: initVal, animationName: nameOfAnimation, animationDuration: durationOfAnimation};
	}		
})();
