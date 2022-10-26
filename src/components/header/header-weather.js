const header = document.querySelector('.header');

const weatherTemp = header.querySelector('.header__weather-temp');


const API_KEY = 'fd04c038b4083dd0d159274298038549';
const city = 'Dilijan';
const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;



fetch(API)
  .then(responce => responce.json())
  .then(data => {
    console.log(data.main.temp);
      let temp = `${Math.round(data.main.temp - 273)}°C`;
      weatherTemp.textContent = temp;
  })
  .catch(err => {
    console.log(err);
    console.log('Ошибка доступа к погоде')
    weatherTemp.textContent = '+10°C';
  })

