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