// Date and time function updating every second to keep time up-to-date
function updateTime () {
    let dateTime =  moment().format('llll'); 
    $("#date-time").text(dateTime);
    console.log(dateTime);
}

setInterval(updateTime, 1000);
updateTime ();

