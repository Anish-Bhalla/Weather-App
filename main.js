// 3357e5c454500e73e487d33554c0ec55
// 30.47685645724346, 76.6072610130443
//°                   
//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const API = `3357e5c454500e73e487d33554c0ec55`;
const city = `Rajpura`;

let fetchTemperatureRightNow= async()=>{
    const main = document.querySelector(".main");
    const temperature = document.querySelector(".temp");
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
    main.innerHTML +=`<img src=${iconURL} alt="Main Temperature Icon Image">`
    feelslike.innerHTML+=`${feels_like}°C`
    humi_dity.innerHTML+=humidity
}

let fetchHourly = async()=>{
    let result = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=30.47685645724346&lon=76.6072610130443&appid=${API}&units=metric`);
    let response = await result.json();
    const hourly = document.querySelector(".hourly");
    let {list} = response;
    for(let index in list){
        let {dt_txt:time, main:{temp},weather:[{icon}]} = list[index]
        let date =time.split(" ")[0]
        date = new Date(date)
        date = date.toString().split(" ").splice(1,2)
        date = date[1] + " "+ date[0]
        time = new Date(time).toLocaleTimeString({hour12:true}).toString()
        console.log(time);
        let post = time.split(" ")[1]
        time = time.split(":")[0]
        time += " "+ post
        let iconURL =`http://openweathermap.org/img/wn/${icon}@2x.png`
        hourly.innerHTML +=`<h3>${date}<br>${time}</h3><br><img src=${iconURL} alt="Main Temperature Icon Image"><br>${temp}°C`
        if(index>5){break};
    };

}

document.addEventListener("DOMContentLoaded", ()=>{
    fetchTemperatureRightNow();
    fetchHourly();
});