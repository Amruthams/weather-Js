

const apiKey="5b4bee0ba241d092159faf007e166080";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl+ city+`&appid=${apiKey}`);
    // when enter invalid city
    if(response.status == 404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"

    }
    else{

        var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML=data.name; //this by class name
    // document.getElementById('city').innerHTML=data.name;  also use this by id
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity +" %";
    document.querySelector(".wind").innerHTML=data.wind.speed +" km/h";

    if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "https://i.postimg.cc/xCPZv3Dn/6122561.png";

    }else if(data.weather[0].main === "Clear") {
        weatherIcon.src = "https://i.postimg.cc/02t6NzQ4/3942094.png";
    }
    else if(data.weather[0].main === "Rain") {
        weatherIcon.src = "https://i.postimg.cc/GpXg7JhQ/3767036.png";
    }
    else if(data.weather[0].main === "Drizzle") {
        weatherIcon.src = "https://i.postimg.cc/BQ16JMrj/1113720.png";
    }
    else if(data.weather[0].main === "Mist") {
        weatherIcon.src = "https://i.postimg.cc/02qYRM31/1197102.png";
    }

    document.querySelector(".weather").style.display="block"
    document.querySelector(".error").style.display="none"

    }
    


    
}
// searchInput.addEventListener("click",()=>{
//     checkWaether(searchInput.value);
// })

searchInput.addEventListener("keypress",function(event){
    if (event.keyCode === 13) {
        checkWeather(searchInput.value);
    }
})
