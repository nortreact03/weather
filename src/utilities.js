async function fetchWeatherData({lat, long}) {
    const requestUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`
    const response = await fetch(requestUrl)
    const dataObj = await response.json()
    return dataObj
}

export {
    fetchWeatherData
}

