var cityBtnDiv = $("#cityButtons");
var data = $("#data");
var icon = $("#icon");
var icon1 = $("#icon1");
var icon2 = $("#icon2");
var icon3 = $("#icon3");
var icon4 = $("#icon4");
var icon5 = $("#icon5");

// localStorage.getItem();

var lastCity = localStorage.getItem("lastCity");
if(lastCity) {
  getWeather(lastCity)
}

function getWeather(cityName) {
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=55df6ba985df89d7a4dfeb476e2f03bb";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    var city = response.city.name;
    localStorage.setItem("lastCity", city);
    //console.log("I got here");
    console.log(response);
    localStorage.setItem(cityName, response);
    
    var yourCity = $("#yourCity");
    var iconCode = response.list[0].weather[0].icon;
    var iconUrl = "https://openweathermap.org/img/wn/" + iconCode + ".png";
    icon.attr("src", iconUrl);
    yourCity.text(response.city.name + " " + "(" + response.list[0].dt_txt.split(" ", 1) + ")" );
    var temp = $("#temp");
    var dataTemp = Math.floor((response.list[0].main.temp - 273.15) * 1.80 + 32);
    temp.text("Temperature: " + dataTemp + " °F");
    var humidity = $("#humidity");
    humidity.text("Humidity: " + response.list[0].main.humidity + "%");
    var windSpeed = $("#ws");
    windSpeed.text("Wind Speed: " + response.list[0].wind.speed + " MPH");

    var uvIndex = $("#uvIndex");

    var fiveDay = $("#five4cast");
    var h4One = $("#h4One");
    var iconCode1 = response.list[7].weather[0].icon;
    var iconUrl1 = "https://openweathermap.org/img/wn/" + iconCode1 + ".png";
    icon1.attr("src", iconUrl1);
    var pTemp1 = $("#pTemp1");
    var pHum1 = $("#pHum1");
    h4One.text(response.list[7].dt_txt.split(" ", 1));
    pTemp1.text("Temp: " + Math.floor((response.list[7].main.temp - 273.15) * 1.80 + 32) + "°F");
    pHum1.text("Humidity: " + response.list[7].main.humidity + "%");

    var h4Two = $("#h4Two");
    var iconCode2 = response.list[15].weather[0].icon;
    var iconUrl2 = "https://openweathermap.org/img/wn/" + iconCode2 + ".png";
    icon2.attr("src", iconUrl2);
    var pTemp2 = $("#pTemp2");
    var pHum2 = $("#pHum2");
    h4Two.text(response.list[15].dt_txt.split(" ", 1));
    pTemp2.text("Temp: " + Math.floor((response.list[15].main.temp - 273.15) * 1.80 + 32) + "°F");
    pHum2.text("Humidity: " + response.list[15].main.humidity + "%");

    var h4Three = $("#h4Three");
    var iconCode3 = response.list[23].weather[0].icon;
    var iconUrl3 = "https://openweathermap.org/img/wn/" + iconCode3 + ".png";
    icon3.attr("src", iconUrl3);
    var pTemp3 = $("#pTemp3");
    var pHum3 = $("#pHum3");
    h4Three.text(response.list[23].dt_txt.split(" ", 1));
    pTemp3.text("Temp: " + Math.floor((response.list[23].main.temp - 273.15) * 1.80 + 32) + "°F");
    pHum3.text("Humidity: " + response.list[23].main.humidity + "%");

    var h4Four = $("#h4Four");
    var iconCode4 = response.list[31].weather[0].icon;
    var iconUrl4 = "https://openweathermap.org/img/wn/" + iconCode4 + ".png";
    icon4.attr("src", iconUrl4);
    var pTemp4 = $("#pTemp4");
    var pHum4 = $("#pHum4");
    h4Four.text(response.list[31].dt_txt.split(" ", 1));
    pTemp4.text("Temp: " + Math.floor((response.list[31].main.temp - 273.15) * 1.80 + 32) + "°F");
    pHum4.text("Humidity: " + response.list[31].main.humidity + "%");

    var h4Five = $("#h4Five");
    var iconCode5 = response.list[39].weather[0].icon;
    var iconUrl5 = "https://openweathermap.org/img/wn/" + iconCode5 + ".png";
    icon5.attr("src", iconUrl5);
    var pTemp5 = $("#pTemp5");
    var pHum5 = $("#pHum5");
    h4Five.text(response.list[39].dt_txt.split(" ", 1));
    pTemp5.text("Temp: " + Math.floor((response.list[39].main.temp - 273.15) * 1.80 + 32) + "°F");
    pHum5.text("Humidity: " + response.list[39].main.humidity + "%");


    

  }).catch(function(ex) {alert("City not found")});
}

$("#searchBtn").on("click", function (e) {
  e.preventDefault();

  var cityName = $("#city-input").val();


  if (cityName == "") {
    alert("Please type in a city in which you would like to view its weather");
  };
  getWeather(cityName);
  var createBtn = $("<button id='button'>");
  var btnContent = createBtn.text(cityName);
  cityBtnDiv.append(btnContent);
  createBtn.on("click", function () {
    localStorage.getItem(cityName);
    getWeather(cityName);
  });

  

});




