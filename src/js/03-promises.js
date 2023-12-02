import Notiflix from 'notiflix';

const delay = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');
const button = document.querySelector('button[type="submit"]');
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const delayVal = parseInt(delay.value);
  const stepVal = parseInt(step.value);
  const amountVal = parseInt(amount.value);
  for (let i = 0; i < amountVal; i++) {
    const sumDelay = delayVal + stepVal * i;
    createPromise(i, sumDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({
          position,
          delay
        });
        // Fulfill
      } else {
        reject({
          position,
          delay
        });
        // Reject
      }
    }, delay);
  });
}
