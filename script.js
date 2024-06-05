const correctAnswers = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'A'
};

let attempts = {
    1: 0,
    2: 0,
    3: 0,
    4: 0
};

function checkAnswer(question, answer) {
    const feedback = document.getElementById(`feedback${question}`);
    const audio = new Audio();
    attempts[question]++;
    if (correctAnswers[question] === answer) {
        feedback.innerHTML = `EXCELLENT! <img src="happy.jpeg" alt="Smiley face" class="correct">`;
        feedback.classList.add('correct');
        feedback.classList.remove('incorrect');
        audio.src = 'excellent.mp3';
        audio.play();
        disableButtons(question);
    } else {
        feedback.innerHTML = `TRY AGAIN! <img src="sad.jpeg" alt="Sad face" class="incorrect">`;
        feedback.classList.add('incorrect');
        feedback.classList.remove('correct');
        audio.src = 'try again.mp3';
        audio.play();
        if (attempts[question] >= 3) {
            disableButtons(question);
        }
    }
}

function disableButtons(question) {
    document.querySelectorAll(`#question${question} .response`).forEach(button => {
        button.disabled = true;
    });
}

function resetQuiz() {
    document.querySelectorAll('.feedback').forEach(feedback => {
        feedback.innerHTML = '';
        feedback.classList.remove('correct', 'incorrect');
    });
    Object.keys(attempts).forEach(question => {
        attempts[question] = 0;
    });
    document.querySelectorAll('.response').forEach(button => {
        button.disabled = false;
    });
}
