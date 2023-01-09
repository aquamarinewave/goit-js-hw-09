import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const inputCalendar = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
let timerId = null;

buttonStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        const date = new Date();
        if (selectedDates[0].getTime() < date.getTime()) {
            window.alert("Please choose a date in the future");
        } else {
            buttonStart.disabled = false;
        }
    console.log(selectedDates[0]);
  },
};

flatpickr('#datetime-picker', options);

buttonStart.addEventListener('click', () => {
    buttonStart.disabled = true;
    
    timerId = setInterval(() => {
        const selectedDateMs = new Date(inputCalendar.value) - new Date();
        console.log(selectedDateMs);
        if (selectedDateMs > 0) {
            const leftToDate = convertMs(selectedDateMs);

            days.textContent = addLeadingZero(leftToDate.days);
            hours.textContent = addLeadingZero(leftToDate.hours);
            minutes.textContent = addLeadingZero(leftToDate.minutes);
            seconds.textContent = addLeadingZero(leftToDate.seconds);

            days.textContent.innerHTML;
            hours.textContent.innerHTML;
            minutes.textContent.innerHTML;
            seconds.textContent.innerHTML;
        } else {
            clearInterval(timerId);
        }
    }, 1000);
    
});

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

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
console.log(convertMs(1673204647000/1000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}

function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
};