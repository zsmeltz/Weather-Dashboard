var cityBtnDiv = $("#cityButtons");
var data = $("#data");

$("#searchBtn").on("click", function(e){
    e.preventDefault();

    var cityName = $("#city-input").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q="+ cityName +"&appid=55df6ba985df89d7a4dfeb476e2f03bb";

    if(cityName == ""){
      alert("Please type in a city in which you would like to view its weather");
    };

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){
        var city = response.city.name;
        //console.log("I got here");
        console.log(response);
        
        var createBtn = $("<button>");
        console.log(createBtn)
        var btnContent = createBtn.text(city);
        cityBtnDiv.append(btnContent);
        getCityData();

    function getCityData(){
        var yourCity = $("#yourCity");
        var createIcon = $("<img src=''>");
        var iconCode = response.list[0].weather[0].icon;
        var iconUrl = "http://openweathermap.org/img/wn/" + iconCode + ".png";
        yourCity.text(response.city.name + " " + "(" + response.list[0].dt_txt.split(" ", 1) + ")" + " " + createIcon.attr('src', iconUrl));
        var temp = $("#temp");
        var dataTemp = Math.floor((response.list[0].main.temp- 273.15) * 1.80 + 32);
        temp.text("Temperature: " + dataTemp + " °F");
        var humidity = $("#humidity");
        humidity.text("Humidity: " + response.list[0].main.humidity + "%");
        var windSpeed = $("#ws");
        windSpeed.text("Wind Speed: " + response.list[0].wind.speed + " MPH");

        var uvIndex = $("#uvIndex");

        var fiveDay = $("#five4cast");
        fiveDay.css("visibility", "visible");
        var h4One = $("#h4One");
        var pTemp1 = $("#pTemp1");
        var pHum1 = $("#pHum1");
        h4One.text(response.list[7].dt_txt.split(" ", 1));
        pTemp1.text("Temp: " + Math.floor((response.list[7].main.temp- 273.15) * 1.80 + 32) + "°F");
        pHum1.text("Humidity: " + response.list[7].main.humidity + "%");

        var h4Two = $("#h4Two");
        var pTemp2 = $("#pTemp2");
        var pHum2 = $("#pHum2");
        h4Two.text(response.list[15].dt_txt.split(" ", 1));
        pTemp2.text("Temp: " + Math.floor((response.list[15].main.temp- 273.15) * 1.80 + 32) + "°F");
        pHum2.text("Humidity: " + response.list[15].main.humidity + "%");

        var h4Three = $("#h4Three");
        var pTemp3 = $("#pTemp3");
        var pHum3 = $("#pHum3");
        h4Three.text(response.list[23].dt_txt.split(" ", 1));
        pTemp3.text("Temp: " + Math.floor((response.list[23].main.temp- 273.15) * 1.80 + 32) + "°F");
        pHum3.text("Humidity: " + response.list[23].main.humidity + "%");

        var h4Four = $("#h4Four");
        var pTemp4 = $("#pTemp4");
        var pHum4 = $("#pHum4");
        h4Four.text(response.list[31].dt_txt.split(" ", 1));
        pTemp4.text("Temp: " + Math.floor((response.list[31].main.temp- 273.15) * 1.80 + 32) + "°F");
        pHum4.text("Humidity: " + response.list[31].main.humidity + "%");

        var h4Five = $("#h4Five");
        var pTemp5 = $("#pTemp5");
        var pHum5 = $("#pHum5");
        h4Five.text(response.list[39].dt_txt.split(" ", 1));
        pTemp5.text("Temp: " + Math.floor((response.list[39].main.temp- 273.15) * 1.80 + 32) + "°F");
        pHum5.text("Humidity: " + response.list[39].main.humidity + "%");
    }

  });

  // createBtn.on("click", function(e){
  //   e.preventDefault();
  
  //   if(createBtn.val() == response.city.name){
  //     getCityData();
  //   }
  // })
  

});


