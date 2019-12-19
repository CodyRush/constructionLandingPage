const deadline = new Date('Jan 1, 2020');
const day = document.querySelector('#day')
const hour = document.querySelector('#hour')
const minute = document.querySelector('#minute')
const second = document.querySelector('#second')

setInterval(() => { calculateRemainder() }, 1000);

function calculateRemainder() {
    const today = new Date();
    let difference = deadline.getTime() - today.getTime();

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    day.innerHTML = days;
    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;

    if (difference <= 0) {
        day.innerHTML = 0;
        hour.innerHTML = 0
        minute.innerHTML = 0
        second.innerHTML = 0
    }
}