import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const startBtn = document.querySelector('[data-start]');
const datePickr = document.querySelector('input#datetime-picker');
let interval;
let time;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const presentDate = new Date();
    if (selectedDate <= presentDate) {
        Notiflix.Notify.failure('Please, choose a date in the future');
    }
    
    else {
      startBtn.removeAttribute('disabled');
        startBtn.dataset.start = selectedDate;
        time = selectedDate - presentDate;
    }
  },
};

startBtn.setAttribute('disabled', '');

flatpickr(datePickr, options);

const daysTxt = document.querySelector('[data-days]');
const hoursTxt = document.querySelector('[data-hours]');
const minutesTxt = document.querySelector('[data-minutes]');
const secondsTxt = document.querySelector('[data-seconds]');

startBtn.addEventListener('click', ev => {
    
    interval = setInterval(() => {
        let timeTxt = convertMs(time);
        daysTxt.innerText = addLeadingZero(timeTxt.days);
        hoursTxt.innerText = addLeadingZero(timeTxt.hours);
        minutesTxt.innerText = addLeadingZero(timeTxt.minutes);
        secondsTxt.innerText = addLeadingZero(timeTxt.seconds);
        if (time >= 1000) {
            time -= 1000;
        }
        else {
            interval = 0;
        }
    }, 1000);
});

function addLeadingZero(value) {
    if (value.toString().length < 2) {
        return value.toString().padStart(2, '0')
    }
    else {
        return value;
    }
};

function convertMs(ms) {
// Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

// Remaining days
  const days = Math.floor(ms / day);
// Remaining hours
  const hours = Math.floor((ms % day) / hour);
// Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
// Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000));// {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000));// {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000));// {days: 0, hours: 6 minutes: 42, seconds: 20}