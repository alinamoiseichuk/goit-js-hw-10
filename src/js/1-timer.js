import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const input = document.querySelector("#datetime-picker");
const btnStart = document.querySelector("[data-start]");

const daysTime = document.querySelector("[data-days]");
const hoursTime = document.querySelector("[data-hours]");
const minutesTime = document.querySelector("[data-minutes]");
const secondsTime = document.querySelector("[data-seconds]");

let userSelectedDate;
let timeInterval;

btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      userSelectedDate = selectedDates[0];
      timeInterval = userSelectedDate - new Date();

      if (timeInterval < 1) {
           iziToast.error({
            color: 'red',
            position: 'topRight',
            message: `Please choose a date in the future`,
      });
      } else {
          btnStart.disabled = false;
          input.disabled = true;
      }
  },
};

flatpickr('#datetime-picker', options);

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

btnStart.addEventListener("click", event => {
    const intervalId = setInterval(() => {
        event.preventDefault();
        timeInterval = userSelectedDate - new Date();
        input.disabled = true;

        if (timeInterval < 0) {
            btnStart.disabled = false;
            input.disabled = true;
            clearInterval(intervalId);
            return;
        };

        const timer = convertMs(timeInterval);
        daysTime.textContent = timer.days.toString().padStart(2, "0");
        hoursTime.textContent = timer.hours.toString().padStart(2, "0");
        minutesTime.textContent = timer.minutes.toString().padStart(2, "0");
        secondsTime.textContent = timer.seconds.toString().padStart(2, "0");

    }, 1000);
})