var url = "https://api.openweathermap.org/data/2.5/forcast/daily?q=${city}&cnt=5&appid=${apiKey}&units=imperial"
var apiKey = "e2ebf5f91be9ed84ff7b3315f93cff5d";
var main = document.getElementById('main');
var input = document.getElementById('input');
var city = document.getElementById('city');
//console.log(city);

var url = (city)=> `https://api.openweathermap.org/data/2.5/forcast/daily?q=${city}&cnt=5&appid=${apiKey}`;

async function getWeather(city){
    var resp = await fetch(url(city), {origin: "cors"});
    var respData = await resp.json();
    console.log(resp);
    console.log(respData);
    addWeather(respData);
}

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

