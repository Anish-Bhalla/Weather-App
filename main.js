// 3357e5c454500e73e487d33554c0ec55
// 30.47685645724346, 76.6072610130443
//°                   

const API = `3357e5c454500e73e487d33554c0ec55`;
const city = `Rajpura`;

let fetchTemperatureRightNow= async()=>{
    const main = document.querySelector(".main");
    const temperature = document.querySelector(".temp");
    const t_min = document.querySelector(".t_min");
    const t_max = document.querySelector(".t_max");
    const feelslike = document.querySelector(".feelslike");
    const humi_dity = document.querySelector(".humidity");
    
    let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`);
    let response = await result.json();
    console.log(response);

    let {main :{feels_like, temp, temp_max, temp_min, humidity}, weather:[{description, icon}]} = response
    let iconURL =`http://openweathermap.org/img/wn/${icon}@2x.png`
    temperature.innerText+=`${temp}°C
    ${description}`;
    t_max.innerHTML+=`H ${temp_max}°C&nbsp&nbsp&nbsp&nbsp&nbspL ${temp_min}°C`;
    main.innerHTML +=`<img class="description" src=${iconURL} alt="Main Temperature Icon Image">`
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