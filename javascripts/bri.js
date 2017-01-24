"use strict";

var Translate = (function(){
	var dutch = {

		"merry":"gelukkige",
		"christmas":"kerst",
		"and":"en",
		"happy":"Gelukkig",
		"new":"Nieu",
		"year":"wjaar"
	}

	return {
	translateToDutch: function(english){
		return dutch(english);
	}
};

})(); 