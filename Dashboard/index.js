//using scrimba api for now, will change to unsplash once signed up. 
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=travel")
.then(res => res.json())
.then(data => {
    console.log(data.urls.full)
    document.body.style.backgroundImage=`url("${data.urls.full}")`
    document.getElementById("author-name").textContent = `By: ${data.user.name}`
})
.catch(error => {
    document.body.style.backgroundImage=`url("https://images.unsplash.com/photo-1505832018823-50331d70d237?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODA5ODE3NTA&ixlib=rb-4.0.3&q=85
    ")`
})

fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
.then(res => res.json())
.then(data => {
    document.getElementById("crypto-top").innerHTML = `<img src=${data.image.small} alt="image of bitcoin logo" /> 
    <span>${data.name}</span>`
    document.getElementById("crypto-price").textContent = `Current price: ${data.market_data.current_price.nok} NOK`
     
    setInterval(() =>{
        document.getElementById("time-id").textContent = new Date().toLocaleTimeString('en-US', { hour12: true, 
            hour: "numeric", minute: "numeric"});
    },1000)
    
})
.catch(err => console.error(err))

navigator.geolocation.getCurrentPosition(getWeather, errorHandling)

//Seems the getweather is very slow at times
function getWeather(position){
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
    .then(res => res.json())
    .then(data => {
        const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        document.getElementById("weather").innerHTML += `
        <img src=${iconUrl} />
        <p>${Math.round(data.main.temp)}º</p>
        <p class="city">${data.name}</p>`
        
        console.log(data)
        
    })
}
function errorHandling(err){
    console.error(err)
}