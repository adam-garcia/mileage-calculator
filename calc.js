var calc = 0;

function showForm (formID) {
	$(formID).toggleClass("hide");
	$(".activities").toggleClass("hide");
	console.log(formID);
}

function ftMilesCalc () {
	calc = Number($(" #numFtMiles ").val());
	$(" #result ").removeClass("hide");
	displayMiles( calc );
	return false;
}

function ftPacerCalc () {
	var num = Number($( "#numFtPacer" ).val());
	var lap = Number($( "#lapFtPacer" ).val());
	var len = Number($( "#lenFtPacer" ).val());
	calc = Math.floor(num * lap * len / 1600);
	displayMiles( calc );
	return false;
}

function displayMiles (miles) {
	$(" #result ").removeClass("hide");
	$(" #miles ").text( miles );
}