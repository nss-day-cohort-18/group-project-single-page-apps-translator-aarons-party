"use strict";

var Translate = (function(potato){
	var german = {
		"we":"wir",
		"wish":"wunsch",
		"you":"sie",
		"a":"ein",
		"merry":"frohlich",
		"christmas":"weihnachten"
	};
	 
		potato.translateToGerman = function(translation) {
			return german[translation];
	};
  
	return potato;

})();

