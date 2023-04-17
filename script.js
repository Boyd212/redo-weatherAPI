var url = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=" + apiKey;
var apiKey = "e2ebf5f91be9ed84ff7b3315f93cff5d";
var main = document.getElementById('main');
var input = document.getElementById('input');
var city = document.getElementById('city');
//console.log(city);

var url = (city)=> `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

async function getWeather(city){
    var resp = await fetch(url(city), {
        origin: "cros" });
    var respData = await resp.json();
    addWeather(respData);
}

function addWeather(data){
    var temp = data.result;
    var result = document.createElement('div')
    result.classList.add('weather');
    result.innerHTML = `<h2>${temp}°F </h2>
        <small>${data.result}</small>`;

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

