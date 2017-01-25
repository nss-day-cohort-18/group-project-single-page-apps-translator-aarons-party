"use strict";


// console.log("This oage is loading the way");

// var Translate = (function(){
// 	var dutch = {

// 		"merry":"gelukkige",
// 		"christmas":"kerst",
// 		"and":"en",
// 		"happy":"Gelukkig",
// 		"new":"Nieu",
// 		"year":"wjaar"
// 	};

// 	return {
// 		translateToDutch: function(english){
// 			console.log("translation", dutch);
// 			// return dutch[english];
// 		}
// 	};

// })();


console.log("Here I am");

var Translate = (function(){
	var dutch = {
		"merry": "felíz",
		"christmas": "navidad",
		"and": "y",
		"happy": "felíz",
		"new": "año",
		"year": "nuevo"
	};

	return {
		translateToDutch: function(english){
			console.log("translation",  dutch);
			return dutch[english];
		}
	};
	




})();