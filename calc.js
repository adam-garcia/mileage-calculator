var calc = 0;

function showForm (formID) {
	$(formID).toggleClass("hide");
	$(".activities").toggleClass("hide");
	console.log(formID);
}

function ftMilesCalc () {
	calc = eval($(" #numFtMiles ").val());
	var dist = eval($(" #distFtMiles ").val());
	var laps = eval($(" #lapsFtMiles ").val());
	$(" #result ").removeClass("hide");
	displayMiles( calc * dist * laps );
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

function warmupCalc () {
	var num = eval($( "#numWarmup" ).val());
	var dur = eval($( "#durWarmup" ).val());
	var pace = 1 / eval($( "#paceWarmup" ).val());
	calc = Math.floor(num * dur * pace);
	displayMiles( calc );
	return false;
}

function commuteCalc () {
	var num = eval($( "#numCommute" ).val());
	var dist = eval($( "#distCommute" ).val());
	var dir = eval($( "#dirCommute" ).val());
	calc = Math.floor(num * dist * dir);
	displayMiles( calc );
	return false;
}

function funrunCalc () {
	var num = eval($( "#numFunrun" ).val());
	var dist = eval($( "#distFunrun" ).val());
	var unit = $( "#unitFunrun" ).val();
	var weight = 1;
	if (unit == "km") {
		weight = 1.60934;
	}
	calc = Math.floor(num * dist / weight);
	displayMiles( calc );
	return false;

}
function displayMiles (miles) {
	$(" #result ").removeClass("hide");
	$(" #miles ").text( miles );
}