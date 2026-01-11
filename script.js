const adviceId = document.querySelector('.advice-id');
const adviceText = document.querySelector('.advice-text');
const diceBtn = document.querySelector('.dice-btn');

async function getAdvice() {
  try {
    const response = await fetch('https://api.adviceslip.com/advice', {
      cache: 'no-cache'
    });
    const data = await response.json();

    adviceId.textContent = `ADVICE #${data.slip.id}`;
    adviceText.textContent = `“${data.slip.advice}”`;
  } catch (error) {
    adviceText.textContent = 'Unable to fetch advice. Please try again.';
  }
}

diceBtn.addEventListener('click', getAdvice);

// Load advice on page load
getAdvice();

const adviceCard = document.querySelector('.advice-card');

async function getAdvice() {
  try {
    // Enter loading state
    adviceCard.classList.add('loading');
    adviceText.textContent = 'Loading...';

    const response = await fetch('https://api.adviceslip.com/advice', {
      cache: 'no-cache'
    });
    const data = await response.json();

    adviceId.textContent = `ADVICE #${data.slip.id}`;
    adviceText.textContent = `“${data.slip.advice}”`;
  } catch (error) {
    adviceText.textContent = 'Unable to fetch advice. Please try again.';
  } finally {
    // Exit loading state
    adviceCard.classList.remove('loading');
  }
}
