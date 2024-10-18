let name, age, level;
let correctAnswer;

document.getElementById('startButton').addEventListener('click', () => {
  name = document.getElementById('name').value;
  age = document.getElementById('age').value;
  
  if (name && age) {
    document.getElementById('welcomeMessage').innerHTML = `Selamat Datang <span class='text-decoration-underline text-primary'>${name}</span> di Game Pertambahan!`
    document.getElementById('startScreen').classList.add('hidden');
    document.getElementById('levelSelection').classList.remove('hidden');
  }
});

function startGame(selectedLevel) {
  level = selectedLevel;
  document.getElementById('levelSelection').classList.add('hidden');
  document.getElementById('game').classList.remove('hidden');
  generateQuestion();
}

function generateQuestion() {
  let num1, num2;
  
  if (level === 1) {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
  } else {
    num1 = Math.floor(Math.random() * 10) + 11;
    num2 = Math.floor(Math.random() * 10) + 11;
  }
  
  correctAnswer = num1 + num2;
  document.getElementById('question').innerText = `Apa hasil dari ${num1} + ${num2}?`;
}

document.getElementById('submitAnswer').addEventListener('click', () => {
  const userAnswer = parseInt(document.getElementById('answer').value);
  const feedback = document.getElementById('feedback');

  if (userAnswer === correctAnswer) {
    feedback.innerText = "Jawaban Benar!";
    feedback.classList.remove('shake');
    showMultipleBalloons(20);
} else {
    feedback.innerText = `Jawaban Salah! Yang benar adalah ${correctAnswer}.`;
    feedback.classList.add('shake');
}

  document.getElementById('answer').value = '';
  generateQuestion();
});

function showBalloon() {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');

  balloon.style.left = Math.random() * 100 + "vw";
  balloon.style.bottom = '0px';

  balloon.style.backgroundColor = getRandomColor();

  document.body.appendChild(balloon);

  setTimeout(() => {
      balloon.remove();
  }, 3000);
}

function showMultipleBalloons(count) {
  for (let i = 0; i < count; i++) {
    const delay = Math.random() * 1000;
    setTimeout(() => {
        showBalloon();
    }, delay);
  }
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.getElementById('changeLevelButton').addEventListener('click', () => {
  document.getElementById('game').classList.add('hidden');
  document.getElementById('levelSelection').classList.remove('hidden');
});

// TOOLTIPS
document.addEventListener('DOMContentLoaded', function () {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});