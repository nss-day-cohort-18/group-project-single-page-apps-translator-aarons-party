"use strict";

var Translate = (function(potato){
	var german = {
		we: "wir",
		wish: "wunsch",
		you: "sie",
		a: "ein",
		merry: "frohlich",
		christmas: "weihnachten"
	};
	 
		potato.translateToGerman = function(english) {
			console.log(german.merry);
			var englishArray = english.split(" ");
			console.log(englishArray);
			var translatedMessage = [];
			for (var i=0; i<englishArray.length; i++) {
				console.log(german[englishArray[i]]);
				translatedMessage.push(german[englishArray[i]]);
			} 
			console.log(translatedMessage);
			var finalTranslation = translatedMessage.join(" ");
			console.log(finalTranslation)
			return finalTranslation;
	};
  
	return potato;

})(Translate);

