var calc = 0;

function showForm (formID) {
	$(formID).toggleClass("hide");
	$(".activities").toggleClass("hide");
	console.log(formID);
}

function ftMilesCalc () {
	calc = eval($(" #numFtMiles ").val());
	var dist = eval($(" #distFtMiles ").val());
	$(" #result ").removeClass("hide");
	displayMiles( calc * dist );
	return false;
}

function ftPacerCalc () {
	var num = eval($( "#numFtPacer" ).val());
	var lap = eval($( "#lapFtPacer" ).val());
	var len = eval($( "#lenFtPacer" ).val());
	calc = Math.floor(num * lap * len / 1600);
	displayMiles( calc );
	return false;
}

function displayMiles (miles) {
	$(" #result ").removeClass("hide");
	$(" #miles ").text( miles );
}