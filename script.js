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
    console.log("Thiis si the forcastData: ", forcastData)
    console.log("This is the list:", forcastData.list)
    console.log(forcastData.list[0].main.temp)
   // addWeather(respData);
}
//json.stringify(resp);
//json.stringify(respData);

function addWeather(data){
    var temp = data.respData;
    var result = document.createElement('div')
    result.classList.add('weather');
    result.innerHTML = `<h2>${data.temp}°F </h2>
        <small>${data.temp}</small>`;

    main.innerHTML= "";
    main.appendChild(result);
};

city.addEventListener('submit',(x) =>{
    x.preventDefault();
    var location = input.value;
    if(location){
        getWeather(location)
    } else {"Please enter a real city, or check your spelling!"}
});

