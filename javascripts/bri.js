"use strict";



console.log("Here I am");

var Translate = (function(){
	var dutch = {
		"merry": "gelukkige",
		"christmas": "kerst",
		"and": "en",
		"happy": "Gelukkig",
		"new": "Nieu",
		"year": "wjaar"
	};

	return {
		translateToDutch: function(english){
			console.log(dutch.merry);
			var englishArray = english.split(" ");
			console.log("translation", dutch);
			console.log(englishArray);
			var translatedMessage = [];
			for (var i=0; i<englishArray.length; i++) {
				console.log(dutch[englishArray[i]]);
				translatedMessage.push(dutch[englishArray[i]]);
			} 
			console.log(translatedMessage);
			var finalTranslation = translatedMessage.join(" ");
			console.log(finalTranslation)
			return finalTranslation;
			return dutch[english];
		}
	};
	

})();