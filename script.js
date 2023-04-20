var url = "http://api.openweathermap.org/data/2.5/forcastq=${city}&cnt=5&appid=${apiKey}"
var apiKey = "e2ebf5f91be9ed84ff7b3315f93cff5d";
var main = document.getElementById('main');
var input = document.getElementById('input');
var city = document.getElementById('city');
//console.log(city);

var url = (latitude, longitude)=> `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
var geocodingUrl = (cityname) => `http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=1&appid=${apiKey}`
var apiURL ="http://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&cnt=5&appid=e2ebf5f91be9ed84ff7b3315f93cff5d"
async function getWeather(city){


    // this is getting the geo location
    var resp = await fetch(geocodingUrl(city));
    var respData = await resp.json();
    
    //console.log(resp);
    //console.log(respData);
   // console.log(respData[0].lon);
    //console.log(respData[0].lat);

    //This is getting the forcast
    var forecastResp = await fetch(url(respData[0].lat, respData[0].lon));
    var forcastData = await forecastResp.json();
    displayForcast(forcastData);
    console.log("Thiis si the forcastData: ", forcastData);
    console.log("This is the list:", forcastData.list);
  
   // addWeather(respData);
}
//json.stringify(resp);
//const weather = forcastData.list[0].weather;
//json.stringify(respData);



function displayForcast(forcastData) {
        var forcast = forcastData.list[0].main;
        var forcastDiv = document.getElementById("forcast"); 
        var forcastDisp = forcast.temp;
        var display = document.createElement("h2");
        display.innerHTML = `Today is  ${forcastDisp}°F <br> Tomorrow will be ${forcastData.list[8].main.temp}°F `
        //<br> In two days it will be ${forcastData.list[16].main.temp}°F <br> In three days it will be ${forcastData.list[24].main.temp}°F <br> In four days it will be ${forcastData.list[32].main.temp}°F <br> And, in five days it will be ${forcastData.list[40].main.temp}°F`;
        forcastDiv.appendChild(display);

  };

city.addEventListener('submit',(x) =>{
    x.preventDefault();
    var location = input.value;
    if(location){
        getWeather(location)
    } else {"Please enter a real city, or check your spelling!"}
});

