//Seconds to Minutes, Hours, & Days
	function sm() {    
    	var base = document.getElementsByName('seconds')[0].value;
    	var result = base * 0.01666667 ;    
    	document.getElementsByName('output:s')[0].value= result;
	}

	function sh() {    
    	var base = document.getElementsByName('seconds')[0].value;
    	var result = base * 0.0002777778 ;    
    	document.getElementsByName('output:s')[0].value= result;
	}

	function sd() {    
    	var base = document.getElementsByName('seconds')[0].value;
    	var result = base * 0.00001157407 ;
    	document.getElementsByName('output:s')[0].value= result;
	}


//Minutes to Seconds, Hours, & Days
	function ms() {    
    	var base = document.getElementsByName('minutes')[0].value;
    	var result = base * 60 ;    
    	document.getElementsByName('output:m')[0].value= result;
	}

	function mh() {    
    	var base = document.getElementsByName('minutes')[0].value;
    	var result = base * 0.01666667 ;    
    	document.getElementsByName('output:m')[0].value= result;
	}

	function md() {    
    	var base = document.getElementsByName('minutes')[0].value;
    	var result = base * 0.0006944444 ;
    	document.getElementsByName('output:m')[0].value= result;
	}

//Hours to Seconds, Minutes, & Days
	function hs() {    
    	var base = document.getElementsByName('hours')[0].value;
    	var result = base * 3600 ;    
    	document.getElementsByName('output:h')[0].value= result;
	}

	function hm() {    
    	var base = document.getElementsByName('hours')[0].value;
    	var result = base * 60 ;    
    	document.getElementsByName('output:h')[0].value= result;
	}

	function hd() {    
    	var base = document.getElementsByName('hours')[0].value;
    	var result = base * 0.04166667 ;
    	document.getElementsByName('output:h')[0].value= result;
	}


//Days to Seconds, Minutes, & Hours
	function ds() {    
    	var base = document.getElementsByName('days')[0].value;
    	var result = base * 86400 ;    
    	document.getElementsByName('output:d')[0].value= result;
	}

	function dm() {    
    	var base = document.getElementsByName('days')[0].value;
    	var result = base * 1440 ;    
    	document.getElementsByName('output:d')[0].value= result;
	}

	function dh() {    
    	var base = document.getElementsByName('days')[0].value;
    	var result = base * 24 ;
    	document.getElementsByName('output:d')[0].value= result;
	}
