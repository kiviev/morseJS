"use strict";

class Morse{

	constructor(font, selectors){
		this.selectors = selectors;
		this.fuente= font;
		this.toTrans ;
		this.times = {
			"0": 250, 
			"1": 500, 
			"p" : 750
		};
		this.times2vibrate = [];
		this.text2Trans= function(fuente){
			this.toTrans = $(fuente).val().trim();
		};
		this.addListeners = function(arr){
			if(Array.isArray(arr)){
				var that = this;
				for (var i = arr.length - 1; i >= 0; i--) {
					$(arr[i]).click(function(e){
						e.preventDefault();
						that.text2Trans(that.fuente);	
					that.setTimes2Vibrate();
					that.vibrate();
					});
				}
			}
		};
		this.al = function(){
			if(this.toTrans) alert(this.toTrans);
		};
		this.isVibrate = function(){
			return ("vibrate" in navigator && this.isMobile.any()) || false;
		};
		this.setTimes2Vibrate = function(key){
			if ( this.isVibrate()){
				var letters = this.toTrans.toLowerCase().replace(/\s/g,"").split("");
				var morse = this.characters;
				var pulses = [];
				var timesArr = [];
				var letLength = letters.length;
				for (var i = 0; i < letLength; i++) {
					var letter = morse[letters[i]];

					for (var j = 0; j < letter.length; j++) {
						var time = this.times[letter[j]];
						timesArr.push(time);
						timesArr.push(this.times["p"])
					}
				}
			}
			this.times2vibrate = timesArr;
		};
		this.vibrate = function(){
			if(this.times2vibrate && this.times2vibrate.length > 0 ){
				navigator.vibrate(this.times2vibrate);
			}
		};
		this.isMobile= {
		    	Android: function() {
		        	return navigator.userAgent.match(/Android/i) || false ;
			    },
			    BlackBerry: function() {
			        return navigator.userAgent.match(/BlackBerry/i) || false ;
			    },
			    iOS: function() {
			        return navigator.userAgent.match(/iPhone|iPad|iPod/i) || false ;
			    },
			    Opera: function() {
			        return navigator.userAgent.match(/Opera Mini/i) || false ;
			    },
			    Windows: function() {
			        return navigator.userAgent.match(/IEMobile/i) || false ;
			    },
			    any: function() {
			        return (this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows()) || false ;
			    }
		};

		// 1-long 2-short
		this.characters = {
			"a": [ 0,1 ], 
			"b": [ 1,0,0,0 ], 
			"c": [ 1,0,1,0 ], 
			"d": [ 1,0,0 ], 
			"e": [ 0 ], 
			"f": [ 0,0,1,0 ], 
			"g": [ 1,1,0 ], 
			"h": [ 0,0,0,0 ], 
			"i": [ 0,0 ], 
			"j": [ 0,1,1,1 ], 
			"k": [ 1,0,1 ], 
			"l": [ 0,1,0,0 ], 
			"m": [ 1,1 ], 
			"n": [ 1,0 ], 
			"ñ": [ 1,1,0,1,1 ], 
			"o": [ 1,1,1 ], 
			"p": [ 0,1,1,0 ], 
			"q": [ 1,1,0,1 ], 
			"r": [ 0,1,0 ], 
			"s": [ 0,0,0 ], 
			"t": [ 1 ], 
			"u": [ 0,0,1 ], 
			"v": [ 0,0,0,1 ], 
			"w": [ 0,1,1 ], 
			"x": [ 1,0,0,1 ], 
			"y": [ 1,0,1,1 ], 
			"z": [ 1,1,0,0 ], 
			"1": [ 0,1,1,1,1 ], 
			"2": [ 0,0,1,1,1 ], 
			"3": [ 0,0,0,1,1 ], 
			"4": [ 0,0,0,0,1 ], 
			"5": [ 0,0,0,0,0 ], 
			"6": [ 1,0,0,0,0 ], 
			"7": [ 1,1,0,0,0 ], 
			"8": [ 1,1,1,0,0 ], 
			"9": [ 1,1,1,1,0 ], 
			"0": [ 1,1,1,1,1 ], 
			"´": [ 0,1,1,1,1,0 ], 
			"/": [ 1,0,0,1,0 ], 
			",": [ 1,1,0,0,1,1 ], 
			'"': [ 0,1,0,0,1,0 ], 
			":": [ 1,1,1,0,0,0 ], 
			"-": [ 1,0,0,0,0,1 ], 
			"=": [ 1,0,0,0,1 ], 
			"?": [ 0,0,1,1,0,0 ], 
			"(": [ 1,0,1,1,0,1 ], 
			")": [ 1,0,1,1,0,1 ], 
			"[": [ 1,0,1,1,0,1 ], 
			"]": [ 1,0,1,1,0,1 ], 
			";": [ 1,0,1,0,1,0 ], 
			".": [ 0,1,0,1,0,1 ], 
			"enterrado": [ 0,0,0,1,0 ], 
			"error": [ 0,0,0,0,0,0 ], 
			"end": [ 0,1,0,1,0 ] 
		};
		this.init = function(){
			this.addListeners(this.selectors);			
		};
	}// end of constructor

} // end of class

