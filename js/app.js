const container = document.querySelector('.container');
const search = document.querySelector('.search button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click', () => {
  const APIKey = '98740f4ebc0d63bc0f8ba70090e5a091';
  const city = document.querySelector('.search input').value;
  if (city === 404) {
    return;
  }
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(response => {
      if (!response.ok) {
        alert('Sorry, the address you were looking for was not found');
      }
      return response.json();
    })
    .then(json => {
      const img = weatherBox.querySelector('img');
      const temperature = weatherBox.querySelector('.temperature');
      const description = weatherBox.querySelector('.description');
      const humidity = weatherDetails.querySelector('.humidity span');
      const wind = weatherDetails.querySelector('.wind span');

      switch (json.weather[0].main) {
        case 'Clear':
          img.src = 'images/clear.png';
          break;
        case 'Clouds':
          img.src = 'images/clouds.png';
          break;
        case 'Drizzle':
          img.src = 'images/drizzle.png';
          break;
        case 'Mist':
          img.src = 'images/mist.png';
          break;
        case 'Rain':
          img.src = 'images/rain.png';
          break;
        case 'Snow':
          img.src = 'images/snow.png';
          break;
        default:
          img.src = 'images/clear.png';
          break;
      }

      temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      // wind.innerHTML = `${parseInt(json.wind.span)}Km/h`;
    })
});
