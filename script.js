function updateTime(){
let today = new Date();
            // get hours
let hours = today.getHours();

let hours12 = hours % 12;
if(hours12 === 0){
    hours12=12;
}
hours12 = hours12<10?'0'+hours12:hours12;
document.querySelector('.hour').textContent = hours12;

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