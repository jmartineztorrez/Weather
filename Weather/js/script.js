var appId = 'fb7397c5e4c2ced9ca725baa9ff32ef3'; //api key
var units = 'metric';
var searchMethod ;


function getSearchMethod(searchTerm) {
    if (searchTerm.length === 5 && Number.parseInt(searchTerm) + '' === searchTerm)
        searchMethod = 'id';
    else
        searchMethod = 'q';
}
function searchWeather(searchTerm) {
    getSearchMethod(searchTerm);
    fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}&lang=es`).then(result => {
        return result.json();
    
    }).then(result => {
        init(result);
        
    })

}


function init(resultFromServer) {
    switch (resultFromServer.weather[0].main) {
        case 'Clear':
            document.body.style.backgroundImage='url("https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?cs=srgb&dl=blue-sky-blur-clear-sky-color-281260.jpg&fm=jpg")';
            break;
        case 'Clouds': //nublado
            document.body.style.backgroundImage='url("https://images.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg?cs=srgb&dl=grey-white-clouds-158163.jpg&fm=jpg")';
            break;
        case 'Rain': //lluvia
            document.body.style.backgroundImage='url("https://images.pexels.com/photos/531321/pexels-photo-531321.jpeg?cs=srgb&dl=asphalt-dark-dawn-endless-531321.jpg&fm=jpg")';
            break;
        case 'Drizzle': //llovizna
            document.body.style.backgroundImage='url("https://images.pexels.com/photos/247600/pexels-photo-247600.jpeg?cs=srgb&dl=scenic-view-of-lake-in-forest-247600.jpg&fm=jpg")';
            break;
        case 'Mist': //bruma
            document.body.style.backgroundImage='url("https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?cs=srgb&dl=photo-of-foggy-forest-1367192.jpg&fm=jpg")';
            break;
        case 'Thunderstorm': //tormenta
            document.body.style.backgroundImage='url("https://images.pexels.com/photos/2745226/pexels-photo-2745226.jpeg?cs=srgb&dl=photo-of-rocky-shore-2745226.jpg&fm=jpg")';
            break;
        case 'Snow': //nieve
            document.body.style.backgroundImage='url("https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg?cs=srgb&dl=landscape-photography-of-snow-pathway-between-trees-during-688660.jpg&fm=jpg")';
            break;
        default:
            break;
    }//cierre del swith
    
    //para obtner los elementos de la temperatura, viento, humedad..etc, la palabra Let declara variable locales
    let weatherDescriptionHeader= document.getElementById('weatherDescriptionHeader');
    let temperatureElement =document.getElementById('temperature');
    let humidityElement=document.getElementById('humidity');
    let windSpeedElement=document.getElementById('windSpeed');
    let cityHeader=document.getElementById('cityHeader');
    let weatherIcon=document.getElementById('documentIconImg');
    let rainElement=document.getElementById('rain');
    let snowElement=document.getElementById('snow');
    let temperaturaMax=document.getElementById('temp_max');
    let temperaturaMin=document.getElementById('temp_min');

    //para obteber el icono de la pagina Web
    weatherIcon.src ='http://openweathermap.org/img/wn/' + resultFromServer.weather[0].icon + '.png';

    let resultDescription=resultFromServer.weather[0].description;
    weatherDescriptionHeader.innerText=resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1);
    temperatureElement.innerHTML=Math.floor(resultFromServer.main.temp) +'&#176';
    windSpeedElement.innerHTML='Vientos en ' +' ' +Math.floor(resultFromServer.wind.speed) + ' ' +'m/s';
    cityHeader.innerHTML=resultFromServer.name;
    humidityElement.innerHTML='Nivel de Humedad: ' +'  ' + resultFromServer.main.humidity +' '+' %';
    console.log(resultFromServer) 
    console.log(resultFromServer.rain)

    if (resultFromServer.sys.rain == undefined) {

        rainElement.innerHTML='Nivel de Lluvia: ' +'  '+'Sin Datos  '; 
        
    } else {
        rainElement.innerHTML='Nivel de Lluvia' +'  '+resultFromServer.rain["1h"] +'  + '+' mm'; 
      };
    
    if (resultFromServer.sys.snow == undefined) {
        snowElement.innerHTML='Nivel de Nieve: ' +'  '+'  Sin Datos '; 
        
    } else {
      snowElement.innerHTML='Nivel de Nieve' +'  '+resultFromServer.snow["1h"] +'  '+' mm'; 
        
    }
    temperaturaMax.innerHTML='Temperatura Maxima' + '  '+Math.floor(resultFromServer.main.temp_max) +' ' + ' ';
    temperaturaMin.innerHTML='Temperatura Minima' + '  '+Math.floor(resultFromServer.main.temp_min) + ' '+ ' ';


    setPositionFormWeatherInfo();
    
}//cierre de la funcion
function setPositionFormWeatherInfo() {
    let weatherConteiner=document.getElementById('weatherConteiner');
     weatherContainer.style.visibility='visible';
}
searchWeather("madrid");
document.getElementById('searchBtn').addEventListener("click", () => {
    
    document.getElementById("contenedor5").style.visibility='hidden';
    var searchTerm = document.getElementById('searchInput').value;

    if (searchTerm)
        searchWeather(searchTerm);
})