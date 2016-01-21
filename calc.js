var calc = 0;

function showForm (formID) {
    $(formID).toggleClass("hide");
    $(".activities").toggleClass("hide");
    History.pushState(null, null, formID);
}

function ftMilesCalc () {
    calc = eval($(" #numFtMiles ").val());
    var dist = eval($(" #distFtMiles ").val());
    var laps = eval($(" #lapsFtMiles ").val());
    $(" #result ").removeClass("hide");
    return displayMiles( calc * dist * laps );
}

function ftPacerCalc () {
    var num = eval($( "#numFtPacer" ).val());
    var lap = eval($( "#lapFtPacer" ).val());
    var len = eval($( "#lenFtPacer" ).val());
    calc = Math.floor(num * lap * len / 1600);
    return displayMiles( calc );
}

function warmupCalc () {
    var num = eval($( "#numWarmup" ).val());
    var dur = eval($( "#durWarmup" ).val());
    var pace = 1 / eval($( "#paceWarmup" ).val());
    calc = Math.floor(num * dur * pace);
    return displayMiles( calc );
}

function commuteCalc () {
    var num = eval($( "#numCommute" ).val());
    var dist = eval($( "#distCommute" ).val());
    var dir = eval($( "#dirCommute" ).val());
    calc = Math.floor(num * dist * dir);
    return displayMiles( calc );
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
    return displayMiles( calc );
}

function walkjogCalc () {
    var num = eval($( "#numWalkjog" ).val());
    var dur = eval($( "#durWalkjog" ).val());
    var pace = 1 / eval($( "#paceWalkjog" ).val());
    calc = Math.floor(num * dur * pace);
    return displayMiles( calc );
}

function pedomCalc () {
    var num = eval($( "#numPedom" ).val());
    var dist = eval($( "#distPedom" ).val());
    var tall = eval($( "#tallPedom" ).val());
    if (tall >= 1)  {
        tall = tall / 100;
    }
    tallMiles = tall * num * dist / 2500;
    shortSteps = (1 - tall) * num * dist / 2000;
    calc = Math.floor(tallMiles) + Math.floor(shortSteps);
    // tabling tall/short proportion for now
    calc = Math.floor(num * dist / 2500);
    return displayMiles(calc);

}

function displayMiles (miles) {
    $(" #result ").removeClass("hide");
    $(" #miles ").text( miles );
    $('html, body').animate({
        scrollTop: $("#result").offset().top
    }, 2000);
    return false;
}