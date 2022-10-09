// 3357e5c454500e73e487d33554c0ec55
// 30.47685645724346, 76.6072610130443
// {
//     "coord": {
//       "lon": 10.99,
//       "lat": 44.34
//     },
//     "weather": [
//       {
//         "id": 501,
//         "main": "Rain",
//         "description": "moderate rain",
//         "icon": "10d"
//       }
//     ],
//     "base": "stations",
//     "main": {
//       "temp": 298.48,
//       "feels_like": 298.74,
//       "temp_min": 297.56,
//       "temp_max": 300.05,
//       "pressure": 1015,
//       "humidity": 64,
//       "sea_level": 1015,
//       "grnd_level": 933
//     },
//     "visibility": 10000,
//     "wind": {
//       "speed": 0.62,
//       "deg": 349,
//       "gust": 1.18
//     },
//     "rain": {
//       "1h": 3.16
//     },
//     "clouds": {
//       "all": 100
//     },
//     "dt": 1661870592,
//     "sys": {
//       "type": 2,
//       "id": 2075663,
//       "country": "IT",
//       "sunrise": 1661834187,
//       "sunset": 1661882248
//     },
//     "timezone": 7200,
//     "id": 3163858,
//     "name": "Zocca",
//     "cod": 200
//°
//   }                          

const API = `3357e5c454500e73e487d33554c0ec55`;
const city = `Rajpura`;

let fetchTemperatureRightNow= async()=>{
    const main = document.getElementsByClassName("main");
    const temperature = document.querySelector(".temp");
    const t_min = document.querySelector(".t_min");
    const t_max = document.querySelector(".t_max");
    const feelslike = document.querySelector(".feelslike");
    const humi_dity = document.querySelector(".humidity");
    
    let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`);
    let respone = await result.json();
    console.log(respone);

    let {main :{feels_like, temp, temp_max, temp_min, humidity}} = respone
    temperature.innerText=`${temp}°C`;
    t_max.innerHTML=`H ${temp_max}°C`;
    t_min.innerHTML=`L ${temp_min}°C`;
    feelslike.innerHTML+=`${feels_like}°C`
    humi_dity.innerHTML+=humidity
}

// let fetchHourly = async()=>{
//     let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`);
//     letrespone = await result.json();

// }

document.addEventListener("DOMContentLoaded", ()=>{
    fetchTemperatureRightNow();
    // fetchHourly();
});