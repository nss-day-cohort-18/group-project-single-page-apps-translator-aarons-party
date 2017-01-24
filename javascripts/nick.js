"use strict";

var Translate = (function(){
	var spanish = {
		"merry": "felíz",
		"christmas": "navidad",
		"and": "y",
		"happy": "felíz",
		"new": "año",
		"year": "nuevo"
	};

	return {
		translateToSpanish: function(english){
			console.log("translation",  spanish);
			return spanish[english]
		}
	};



})();