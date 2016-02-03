var congrats = ["BOOM!",
                "Way to go!",
                "Your kids are crushing it!",
                "Awesome!",
                "Keep it up!"];

var directns = ["Click the button below to post those miles to your dashboard."];

function displayMiles (type) {
    var miles;
    if (type == "time") {
        var num = eval($( "#numStudentsTime" ).val());
        var grp = eval($( "#numGroupsTime" ).val());
        var durm = eval($( "#durationMin" ).val());
        var durh = eval(($( "#durationHour" ).val()))*60;
        if (Number.isNaN(durh)) {durh = 0};
        var pace = eval($( "#paceTime" ).val());
        miles = Math.floor( num * grp * (durm+durh) / pace)
    } else if (type == "dist") {
        var num = eval($( "#numStudentsDist" ).val());
        var grp = eval($( "#numGroupsDist" ).val());
        var dist = eval($( "#distanceDist" ).val());
        var weight = eval($( "#unitsDist" ).val());
        miles = Math.floor( num * grp * dist / weight );
    } else if (type == "pedom") {
        var num = eval($( "#numStudentsPedom" ).val());
        var grp = eval($( "#numGroupsPedom" ).val());
        var dist = eval($( "#distancePedom" ).val());
        miles = Math.floor( num * grp * dist / 2470 )
    }
    $(" #result ").removeClass("hide");
    $(" #miles ").text( miles );
    var message = congrats[Math.floor(Math.random()*congrats.length)] + 
                  "<br>" + directns[Math.floor(Math.random()*directns.length)]
    $(" #message ").html( message );
    $('html, body').animate({scrollTop: $("#result").offset().top}, 1500);
    return false;
}

function showModal () {
    var modal = document.getElementById('about-modal');
    modal.style.display = "block";
}

function hideModal() {
    var modal = document.getElementById('about-modal');
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById('about-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}