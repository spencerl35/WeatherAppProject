
let dailyWeatherData = {
    'temp': null,
    'dewPoint': null,
    'relHum': null,
    'windSpeed': null,
    'windDirection': null
}

let hourlyPeriods = []

let uvVal = 0;

async function geoLocation(location) {
    const response = await fetch(`https://geocode.xyz/?locate=${location}&region=US&geoit=json`);

    const data = await response.json();

    if (!data.error) {
        const coordinates = {lat: data.latt, long: data.longt};

        await weatherData(coordinates);
        await ultravioletData(location);
    }

    return data.error;
}

async function weatherData(coordinates) {

    const firstResponse = await fetch(`https://api.weather.gov/points/${coordinates.lat},${coordinates.long}`);
    const firstData = await firstResponse.json();

    const forecastURL = firstData.properties.forecast;
    const extraForecastURL = `https://api.weather.gov/gridpoints/${firstData.properties.gridId}/${firstData.properties.gridX},${firstData.properties.gridY}`
    const forecastHourlyURL = firstData.properties.forecastHourly;

    const forecastResponse = await fetch(forecastURL);
    const forecastData = await forecastResponse.json();

    let maxTemp = forecastData.properties.periods[0].temperature

    if(forecastData.properties.periods[1].temperature > maxTemp) {
        maxTemp = forecastData.properties.periods[1].temperature
    }

    dailyWeatherData.temp = maxTemp;
    dailyWeatherData.windSpeed = forecastData.properties.periods[0].windSpeed;
    dailyWeatherData.windDirection = forecastData.properties.periods[0].windDirection;

    const extraForecastResponse = await fetch(extraForecastURL);
    const extraForecastData = await extraForecastResponse.json();

    let dailyDewPoint = extraForecastData.properties.dewpoint.values[0].value;
    for(let i=1; i<12; i++) {
        if(dailyDewPoint < extraForecastData.properties.dewpoint.values[i].value){
            dailyDewPoint = extraForecastData.properties.dewpoint.values[i].value
        }
    }

    let dailyRelHumidity = extraForecastData.properties.relativeHumidity.values[0].value;
    for(let i=1; i<12; i++) {
        if(dailyRelHumidity < extraForecastData.properties.relativeHumidity.values[i].value){
            dailyRelHumidity = extraForecastData.properties.relativeHumidity.values[i].value
        }
    }

    dailyWeatherData.dewPoint = Math.round(((dailyDewPoint)*(9/5))+32);
    dailyWeatherData.relHum = dailyRelHumidity;

    const forecastHourlyResonse = await fetch(forecastHourlyURL);
    const forecastHourlyData = await forecastHourlyResonse.json();

    for(let i=0; i<12; i++) {
        let periodData = {
        precipProb : forecastHourlyData.properties.periods[i].probabilityOfPrecipitation.value,
        temp : forecastHourlyData.properties.periods[i].temperature,
        time : militaryToRegularTime(forecastHourlyData.properties.periods[i].startTime.substring(11, 16)),
        icon : hourIcon(forecastHourlyData.properties.periods[i])
        }

        hourlyPeriods.push(periodData);
    }
}

async function ultravioletData(location) {

    let [city, state] = location.split(',');
    city = city.toLowerCase();
    city = city.replace(' ', '%20');
    state = state.trim();
    state = state.toLowerCase();
    
    
    const uvResponse = await fetch(`https://data.epa.gov/efservice/getEnvirofactsUVDAILY/CITY/${city}/STATE/${state}/JSON`)
    const uvData = await uvResponse.json();

    uvVal = uvData[0].UV_INDEX;

}

function militaryToRegularTime(time) {
    // eslint-disable-next-line
    const [hours, minutes] = time.split(':');

    let hoursInt = parseInt(hours, 10);

    if(hoursInt === 0) {
        return '12 AM'
    } else if(hoursInt < 12) {
        return `${hoursInt} AM`
    } else if(hoursInt === 12){
        return `${hoursInt} PM`
    } else {
        hoursInt -= 12;
        return `${hoursInt} PM`
    }
}

function hourIcon(data) {
    if(data.probabilityOfPrecipitation.value >= 25) {
        return 'ThunderstormIcon'
    } else if (data.shortForecast.includes('Cloud') && !data.isDaytime) {
        return 'NightsStayIcon'
    } else if (data.shortForecast.includes('Cloud')) {
        return 'CloudIcon'
    } else if (!data.isDaytime) {
        return 'NightlightIcon'
    } else {
        return 'WbSunnyIcon'
    }
}

export {dailyWeatherData, hourlyPeriods, uvVal, geoLocation};