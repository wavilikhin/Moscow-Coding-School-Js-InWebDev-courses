window.addEventListener('load', function() {
   const APIkey = '654bf270ba7edb6d1d2a0975fe094b69'
   const method = 'GET'

   function GetWeather(city, headingSelector, tempSelector, tempDiagrammSelector, pressureSelector, pressureDiagrammSelector, windSelector, windDiagrammSelector) {

     const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + APIkey
     let request = new XMLHttpRequest()

     request.open(method, url)

     request.addEventListener('readystatechange', function() {
        if (request.status === 200 && request.readyState === 4) {
         let responseText = request.responseText
         let responseObject = JSON.parse(responseText)

         let CurrentCity = responseObject.name
         let Temp = responseObject.main.temp
         let Pressure = responseObject.main.pressure
         let Wind = responseObject.wind.speed


         document.querySelector(headingSelector).innerHTML = CurrentCity
         document.querySelector(tempSelector).innerHTML = 'Temperature:  '+ (Math.round(Temp)) + '°C'
         document.querySelector(tempDiagrammSelector).style.width = (Temp + 40)*2 + 'px'
         document.querySelector(pressureSelector).innerHTML = 'Pressure:  ' + Math.round(Pressure*0.75) + ' mmHg'
         document.querySelector(pressureDiagrammSelector).style.width = (Pressure/9) + 'px'
         document.querySelector(windSelector).innerHTML = 'Wind Speed:  ' + Math.round(Wind) + ' m/sec'
         document.querySelector(windDiagrammSelector).style.width = Wind*20 + 'px'

         if(Temp < 0) {
            document.querySelector(tempDiagrammSelector).style.backgroundColor = "rgb(153, 204, 255)";
         } else if(Temp < 20) {
            document.querySelector(tempDiagrammSelector).style.backgroundColor = "rgb(255, 204, 102)";
         } else {
            document.querySelector(tempDiagrammSelector).style.backgroundColor = "rgb(255, 77, 77)";
         }
         }
     })
      request.send()
     }


     GetWeather('Moscow', '#MoscowHeader', '#MoscowTemp', '#MoscowTemperatureDiagramm', '#MoscowPressure', '#MoscowPressureDiagramm', '#MoscowWind', '#MoscowWindDiagramm')
     GetWeather('London', '#LondonHeader', '#LondonTemp', '#LondonTemperatureDiagramm', '#LondonPressure', '#LondonPressureDiagramm', '#LondonWind', '#LondonWindDiagramm')
     GetWeather('Berlin', '#BerlinHeader', '#BerlinTemp', '#BerlinTemperatureDiagramm', '#BerlinPressure', '#BerlinPressureDiagramm', '#BerlinWind', '#BerlinWindDiagramm')
     GetWeather('Pekin', '#PekinHeader', '#PekinTemp', '#PekinTemperatureDiagramm', '#PekinPressure', '#PekinPressureDiagramm', '#PekinWind', '#PekinWindDiagramm')

     const form = document.querySelector('form')
     const addButton = document.querySelector('#searchCity')
     const desiredCity = document.querySelector('#desiredCity')

     form.onsubmit = function (e) {
         e.preventDefault();
         desiredCity.value = ''
     }
     

     i = 1 
     addButton.addEventListener('click', function() {
         const desiredCityBlock = document.querySelector('#inputCity'+ i)
         desiredCityBlock.style.display = 'block'
         GetWeather(desiredCity.value, '#inputCity' + i + 'Header', '#inputCity' + i + 'Temp', '#inputCity' + i + 'TemperatureDiagramm', '#inputCity' + i + 'Pressure', '#inputCity' + i + 'PressureDiagramm', '#inputCity' + i + 'Wind', '#inputCity' + i + 'WindDiagramm')
         if(i == 1) {
         desiredCityBlock.style.backgroundImage = "url(searchCity1bgi.png)"            
         } else if(i == 2) {
            desiredCityBlock.style.backgroundImage = "url(searchCity2bgi.png)"
        } else if(i == 3) {
            desiredCityBlock.style.backgroundImage = "url(searchCity3bgi.png)"
        } else {
            desiredCityBlock.style.backgroundImage = "url(searchCity4bgi.png)"
        }
        i++
     })

}) 

// BUTTON //
const plusSect = document.querySelector('.plus')
const plusBtn = document.querySelector('.add-btn')
const searchBlock = document.querySelector('.form')

plusBtn.addEventListener('click', toggleSearch);

function toggleSearch(){
    plusBtn.classList.add('shown')
    searchBlock.style.display = 'block'
    searchBlock.style.position = 'absolute'


}
