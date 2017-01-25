"use strict";

var Translate = (function(original){
	var spanish = {
		"merry": "felíz",
		"christmas": "navidad",
		"and": "y",
		"happy": "felíz",
		"new": "año",
		"year": "nuevo"
	};

	

		original.translateToSpanish = function(english){
			console.log("translation", spanish);
			return spanish[english];
	};

	return original;




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
