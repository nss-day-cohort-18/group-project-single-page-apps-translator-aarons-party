"use strict";

var Translate = (function(potato){
	var spanish = {
		"merry": "felíz",
		"christmas": "navidad",
		"and": "y",
		"happy": "felíz",
		"new": "año",
		"year": "nuevo"
	};

	

		potato.translateToSpanish = function(english){
			console.log(spanish.merry);
			var englishArray = english.split(" ");
			console.log(englishArray);
			var translatedMessage = [];
			for (var i=0; i<englishArray.length; i++) {
				console.log(spanish[englishArray[i]]);
				translatedMessage.push(spanish[englishArray[i]]);
			} 
			console.log(translatedMessage);
			var finalTranslation = translatedMessage.join(" ");
			console.log(finalTranslation)
			return finalTranslation;
	};

	return potato;




})(Translate);


//   input = "merry christmas"
//	 on button click
//   Need to take English translation, invoke German
//   Translate.translateToGerman(input);
//   sent to aaron.js, goes to german[english] // English is holding input
//   Now var ///     englishArray = english.split("");     /// You split english because it's the input
//   This returns [merry,christmas];
//	 for ( var i = 0; i < englishArray.length; i++) {
// 	 var translatedMessage = [] before for loop
//   translatedMessage.push(german[i]);
//   translatedMessage.join(, "");
//   final = something crazy // goes outside of the array 
// 	 .innerHTML
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
