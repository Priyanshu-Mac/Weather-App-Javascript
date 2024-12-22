const apiKey = "7c205cc6dfdef935c79c19e22016773a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const temp = document.querySelector(".temp");
const cityName = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather_icon");
const errorMsg = document.querySelector(".error_msg");
const weather = document.querySelector(".weather");
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        errorMsg.style.display = "block";
        weather.style.display = "none";
    }
    else{
        console.log(response);
        var data = await response.json();
        console.log(data);
    
        temp.innerText = Math.round(data.main.temp) + "°c";
        cityName.innerText = data.name;
        humidity.innerText = data.main.humidity + "%";
        wind.innerText = data.wind.speed + " km/hr";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "Images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "Images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "Images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "Images/drizzle.png";
        }
        else if(data.weather[0].main == "Haze"){
            weatherIcon.src = "Images/haze2.png";
        }

        errorMsg.style.display = "none";
        weather.style.display = "block";
    }

}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value); 
})
