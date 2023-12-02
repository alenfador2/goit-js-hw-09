import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startButton = document.querySelector('button[data-start]');
const dateTime = document.querySelector('.timer');
let selectedDate;
let interval;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    selectedDate = selectedDates[0];
    if (selectedDates.length > 0 && selectedDate > new Date()) {
      startButton.disabled = false;
    } else {
      startButton.disabled = true;
      Notiflix.Report.failure('Please choose a date in the future');
    }
  },
};

const timePicker = new flatpickr('#datetime-picker', options);
startButton.disabled = true;

startButton.addEventListener('click', () => {
  if (selectedDate) {
    startButton.disabled = true;
    interval = setInterval(updateTime, 1000);
  }
});

function updateTime() {
  const timeNow = new Date();
  const restTime = selectedDate - timeNow;

  if (restTime <= 0) {
    clearInterval(interval);
    return;
  }
  const timeObj = convertMs(restTime);
  updateTimer(timeObj);
}

function updateTimer(timeObj) {
  document.querySelector('span[data-days]').textContent = addLeadingZero(
    timeObj.days
  );
  document.querySelector('span[data-hours]').textContent = addLeadingZero(
    timeObj.hours
  );
  document.querySelector('span[data-minutes]').textContent = addLeadingZero(
    timeObj.minutes
  );
  document.querySelector('span[data-seconds]').textContent = addLeadingZero(
    timeObj.seconds
  );
}
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

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
