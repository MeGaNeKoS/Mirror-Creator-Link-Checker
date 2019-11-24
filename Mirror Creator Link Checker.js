// ==UserScript==
// @name         Mirror Creator Link Checker
// @namespace https://greasyfork.org/users/400139
// @version      1.0
// @description  Why aabck 1 by 1 if you can do automatically?
// @author       MeGaNeKo(めがねこ)
// @match        *://www.mirrored.to/*
// @grant        none
//@require       https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// ==/UserScript==

var trigger = 0;
var myVar = setInterval(myTimer, 1000);
function myTimer() {
	$('a').each(function(){
		var aaa = this.onclick;
		try {
			var link = aaa.toString();
			var aab = link.includes('showStatus');
			if (aab == true){
				trigger++;
				aaa();
			}
		}
		catch(err) {
		}
	});
	if(trigger > 0){clearInterval(myVar);}
}

