function displayMiles (type) {
    var miles;
    var num = eval($( "#numStudents" ).val());
    var grp = eval($( "#numGroups" ).val());
    if (type == "time") {
        var dur = eval($( "#duration" ).val());
        var pace = eval($( "#pace" ).val());
        miles = Math.floor( num * grp * dur / pace)
    } else if (type == "dist") {
        var dist = eval($( "#distance" ).val());
        var weight = eval($( "#units" ).val());
        miles = Math.floor( num * grp * dist / weight );
    } else if (type == "pedom") {
        var dist = eval($( "#distance" ).val());
        miles = Math.floor( num * grp * dist / 2500 )
    }

    $(" #result ").removeClass("hide");
    $(" #miles ").text( miles );
    $('html, body').animate({
        scrollTop: $("#result").offset().top
    }, 2000);

    return false;
}