//API KEY : e44e5d10dc31f3b70f954122dae5f675

var search = document.getElementById('.cityInput');
var uvLevel;
var tempLevel;
var humidLevel;
var windLevel;

var fiveDayForecast;


var apiCall = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=e44e5d10dc31f3b70f954122dae5f675";
var apiKey = "e44e5d10dc31f3b70f954122dae5f675";
var cityCall= "http://api.openweathermap.org/data/2.5/weather?q=SanDiego&appid=e44e5d10dc31f3b70f954122dae5f675";

$.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?q=Anaheim&appid=e44e5d10dc31f3b70f954122dae5f675",
})