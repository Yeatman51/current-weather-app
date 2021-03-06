// Date and time function updating every second to keep time up-to-date
function updateTime () {
    let dateTime =  moment().format('llll'); 
    $("#date-time").text(dateTime);
    console.log(dateTime);
}

setInterval(updateTime, 1000);
updateTime ();

// Set up API and user search and put
$(document).ready(function() {
    $('#submit-weather').click(function(){
    let city = $("#search-input").val();
    if(city != ' '){

        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + 
            "&appid=216b1f5803ab33c2e396a05fba3de16d",
            type: "GET",
            dataType: "json",
            success: function(data){
                console.log(data);
                
                let icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
                let widget = show(data);
                $(".weather-container").html(widget);
                $("#search-input").val('');
                console.log(icon);
            }
        
        });

    }else {
        $("#error").html('Please enter a valid city');
    }

    });

});


// Display search results
function show(data){
    return "<h2> "+ data.name +" </h2>" +
        "<p> "+ data.weather[0].main +" </p>" +
        "<p> "+ data.main.temp + " °F" +" </p>" +
        "<img "+ "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png" +" >" +
        "<p> "+ data.main.humidity + " % Humidity" +" </p>" +
        // "<img "+ icon +" >" +
        "<p> "+ data.wind.speed + " MPH" +" </p>";
            
            
}

// All of this code works but I couldn't figure out how to change the user input to a different city

// // Current weather API
// $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&units=imperial&appid=216b1f5803ab33c2e396a05fba3de16d") 
// function runSearch (data){ 
    
// console.log(data)


// let icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
// let temp = data.main.temp + "°F";
// let weatherInfo = data.weather[0].main;
// let humidity = data.main.humidity + " % Humidity";
// let windSpeed = data.wind.speed + " MPH";

// let latitude = data.coord.lat;
// let longitude = data.coord.lon;
// let requestUvIndex = "http://api.openweathermap.org/data/2.5/uvi?lat=" + latitude + "&lon=" + longitude + "&appid=216b1f5803ab33c2e396a05fba3de16d";



// $('.icon').attr('src', icon);
// $('.temp').append(temp);
// $('.weather').append(weatherInfo);
// $('.humidity').append(humidity);
// $('.wind-speed').append(windSpeed);

// fetch(requestUvIndex)
//     .then(function(response) {
//     return response.json();
// })
//     .then(function(response) {
//     uv.textContent = " " + response.value;

// let currentUVIndex = parseFloat(response.value);

//     if (currentUVIndex < 2) {
//         uv.setAttribute("style", "background-color: green;");
//     } else if (currentUVIndex < 7) {
//         uv.setAttribute("style", "background-color: yellow");
//     } else {
//         uv.setAttribute("style", "background-color: red");
//     }
// })

// }