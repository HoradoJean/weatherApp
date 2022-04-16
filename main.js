const weatherDescription = document.getElementById('weather-description')
const city = document.getElementById('city')
const temp = document.getElementById('temp')
const wind = document.getElementById('wind')
const icon = document.getElementById('icon')
const coords = document.getElementById('coords')

document.addEventListener('submit', (e)=>{
    e.preventDefault()
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${document.getElementById('input').value}&units=metric&appid=76d47efe61210e16320b90f439261642`)
    .then(res => res.json())
    .then(data => {
        if(data.name == undefined) return alert("that city/country wasn't found")

        //celsius and fahrenheit
        temp.innerText = Math.round(data.main.temp) + ' °C | ' +  Math.round(data.main.temp*1.8+32) + ' °F'

        city.innerText = data.name + ' - ' + data.sys.country

        icon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
        
        //clear sky, scattered, clouds light rain etc
        weatherDescription.innerText = data.weather[0].description
        
        //extra infos
        coords.innerText = `${data.coord.lon} ${data.coord.lat}`
        wind.innerText = `wind: ${data.wind.speed}m/s`
    })
})