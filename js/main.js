var citySearch = document.getElementById('citySearch')
var findBtn = document.getElementById('findBtn')
var today = document.getElementById('today')
var secondDay = document.getElementById('secondDay')
var thirdDay = document.getElementById('thirdDay')




async function getWeather(city) {
    var data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=775de2440dd545c4b63131819232812&q=${city}&days=3`)
    var response = await data.json()
    console.log(response);
    display(response)
}
getWeather('cairo')

function display(forecast) {
    var firstDay = `
        <div class="head text-gray">
                            <p class="text-center">${forecast.forecast.forecastday[0].date}</p>
                        </div>
                        <div class="body py-4 px-2">
                            <p class="fs-5 fw-semibold text-gray">${forecast.location.name}</p>
                            <div class="d-flex py-4 justify-content-between">
                            <h2 class="fs-1">${forecast.current.temp_c}C</h2>
                            <img src="https:${forecast.forecast.forecastday[0].day.condition.icon}"></img>
                            </div>
                            <span class="d-block">${forecast.forecast.forecastday[0].day.condition.text}</span>
                            <div class="d-flex py-4 justify-content-between">
                            <span class="d-block"><i class="fa-solid fa-umbrella text-gray px-1"></i>${forecast.forecast.forecastday[0].day.daily_chance_of_rain}%</span>
                            <span class="d-block"><i class="fa-solid fa-wind text-gray px-1"></i>${forecast.forecast.forecastday[0].day.avgvis_km}km/hr</span>
                            <span class="d-block"><i class="fa-regular fa-compass text-gray px-1"></i>East</span>
                            </div>
                        </div>

        `
    today.innerHTML = firstDay

    var secDay = `
                        <div class="head">
                        <p class="text-center text-gray">${forecast.forecast.forecastday[1].date}</p>
                    </div>
                    <div class="body py-4">
                        <div class="py-4 my-3 text-center">
                        <img src="https:${forecast.forecast.forecastday[1].day.condition.icon}"></img>
                        <h3>${forecast.forecast.forecastday[1].day.maxtemp_c}C</h3>
                        <p>${forecast.forecast.forecastday[1].day.mintemp_c}C</p>
                        <p class="my-3 py-2 text-info">${forecast.forecast.forecastday[1].day.condition.text}</p>
                        </div>
                    </div>
    
    `
    secondDay.innerHTML = secDay

    var threeDay = `
    
                            <div class="head">
                            <p class="text-center text-gray">${forecast.forecast.forecastday[2].date}</p>
                        </div>
                        <div class="body py-4">
                            <div class="py-4 text-center my-3">
                            <img src="https:${forecast.forecast.forecastday[2].day.condition.icon}"></img>
                            <h3>${forecast.forecast.forecastday[2].day.maxtemp_c}C</h3>
                            <p>${forecast.forecast.forecastday[2].day.mintemp_c}C</p>
                            <p class="my-3 py-2 text-info">${forecast.forecast.forecastday[2].day.condition.text}</p>
                            </div>
                        </div>
    `
    thirdDay.innerHTML = threeDay
}

citySearch.addEventListener('input', function(e) {
    getWeather(e.target.value)
})