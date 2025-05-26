function updateTime(){
let today = new Date();
            // get hours
let hours = today.getHours();
hours = hours<10?'0'+hours:hours;
document.querySelector('.hour').textContent = hours;

            // get minutes
let minutes = today.getMinutes();
minutes = minutes<10?'0'+minutes:minutes;
document.querySelector('.minute').textContent = minutes;

            // get seconds
let seconds = today.getSeconds();
seconds = seconds<10?'0'+seconds:seconds;
document.querySelector('.second').textContent = seconds;
}
updateTime();
setInterval(updateTime,1000);