const weakDays = ['Sunday', 'Monday', 'Thirsday', 'Wensday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let timeEl = document.querySelector('.time');
let dateEl = document.querySelector('.date');
let needleHour = document.querySelector('.hour');
let needleMinute = document.querySelector('.minute');
let needleSecond = document.querySelector('.second');
let toggleTheme = document.querySelector('#toggle-theme');

setDate();
setInterval(() => setTime(), 1000);

function setDate(){

    let date = new Date();
    let weekDay = weakDays[date.getDay()];
    let month = months[date.getMonth()];
    let day = date.getDate();

    dateEl.innerHTML = `${weekDay}, ${month} <span class = "circle">${day}</span>`
}

function setTime(){
    
    let date = new Date();
    let hours = date.getHours();
    let hoursForClock = hours % 13;
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    timeEl.innerHTML = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;

    needleHour.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
    needleMinute.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
    needleSecond.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;
}


function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

toggleTheme.addEventListener('click', () => {
    
    if(toggleTheme.innerText === 'Dark Mode'){
        document.querySelector('html').classList.add('dark');
        toggleTheme.innerText = 'Light Mode';
    } else{
        document.querySelector('html').classList.remove('dark');
        toggleTheme.innerText = 'Dark Mode';
    }
})