/* User Script: calc.js
 * author: adam garcia
 * purpose: facilitate meaningful mileage estimation for 
 *          BMR champions through an interactive calculator
 * dependencies: jQuery 2.2+                             
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function displayMiles (activity) {
    /* displayMiles
     * input: activity <string>
              the source of activity logging
              accepts time-, distance-, and pedometer-based logging
     * returns: null
     * purpose: calculate mileage and display on page
     - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    var miles;
    if (activity == "time") {
        var num = eval($( "#numStudentsTime" ).val());
        var grp = eval($( "#numGroupsTime" ).val());
        var durm = eval($( "#durationMin" ).val());
        var durh = eval(($( "#durationHour" ).val()))*60;
        if (isNaN(durh)) {durh = 0};
        var pace = eval($( "#paceTime" ).val());
        miles = Math.floor( num * grp * (durm+durh) / pace)
    } else if (activity == "dist") {
        var num = eval($( "#numStudentsDist" ).val());
        var grp = eval($( "#numGroupsDist" ).val());
        var dist = eval($( "#distanceDist" ).val());
        var weight = eval($( "#unitsDist" ).val());
        miles = Math.floor( num * grp * dist / weight );
    } else if (activity == "pedom") {
        var num = eval($( "#numStudentsPedom" ).val());
        var grp = eval($( "#numGroupsPedom" ).val());
        var dist = eval($( "#distancePedom" ).val());
        miles = Math.floor( num * grp * dist / 2470 )
    }
    $( "#result" ).removeClass("hide");
    $( "#miles" ).text( miles );
    if (miles > 0) {
        $( "#message" ).html( getCongratsMsg() );
    } else {
        var error_msg = "Uh-oh! Our calculator rounds down, and you didn't quite have a whole mile. Try again soon!"
        $( "#message" ).html( error_msg );
    }
    $('html, body').animate({scrollTop: $("#result").offset().top}, 1500);
    return false;
}

function getCongratsMsg() {
    /* getCongratsMsg
     * input: none
     * returns: msg <string>
     * purpose: helper function;
                generates randomized congratulatory message and logging instructions
     - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    var congrats = ["BOOM!",
                    "Way to go!",
                    "Your kids are crushing it!",
                    "Awesome!",
                    "Keep it up!"];

    var msg = congrats[Math.floor(Math.random() * congrats.length)];
    msg += "<br>";
    msg += "Click the button below to post those miles to your dashboard.";
    return msg;
}


/* Modal Functionality
 * Note: Minimally adapted from modal examples provided by W3
 * Citation: http://www.w3schools.com/w3css/w3css_modal.asp
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

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
