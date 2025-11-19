const questions = [
    {
        q: "What is one healthy way to reduce stress?",
        options: [
            "Bottling up your feelings",
            "Talking to someone you trust",
            "Ignoring problems",
            "Staying up really late"
        ],
        answer: 1
    },
    {
        q: "What is mindfulness?",
        options: [
            "Thinking about everything all at once",
            "Focusing on the present moment",
            "Trying to forget your problems",
            "Doing homework extremely fast"
        ],
        answer: 1
    },
    {
        q: "Which activity can improve mental wellbeing?",
        options: [
            "Regular exercise",
            "Eating only junk food",
            "Being on your phone 12 hours a day",
            "Never going outside"
        ],
        answer: 0
    },
    {
        q: "Who can you talk to if you're feeling overwhelmed?",
        options: [
            "A trusted adult",
            "Nobody",
            "Your pillow",
            "Random strangers online"
        ],
        answer: 0
    }
];

let current = 0;
let energy = 0; // 0–100

const questionText = document.getElementById("question");
const optionsBox = document.getElementById("options");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const energyBar = document.getElementById("energy-bar");

function loadQuestion() {
    const q = questions[current];
    questionText.textContent = q.q;
    optionsBox.innerHTML = "";
    feedback.textContent = "";
    nextBtn.classList.add("hidden");

    q.options.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.onclick = () => selectOption(i);
        optionsBox.appendChild(btn);
    });
}

function selectOption(selected) {
    const correct = questions[current].answer;

    if (selected === correct) {
        feedback.textContent = "✔ Correct!";
        feedback.style.color = "green";
        energy = Math.min(100, energy + 25);
    } else {
        feedback.textContent = "✖ Not quite. Try the next one!";
        feedback.style.color = "red";
        energy = Math.max(0, energy - 10);
    }

    energyBar.style.width = energy + "%";

    // Disable buttons after selecting
    Array.from(optionsBox.children).forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = 0.7;
    });

    nextBtn.classList.remove("hidden");
}

nextBtn.onclick = () => {
    current++;

    if (current >= questions.length) {
        questionText.textContent = "Game complete! Great job 🎉";
        optionsBox.innerHTML = "";
        nextBtn.classList.add("hidden");
        return;
    }

    loadQuestion();
};

loadQuestion();
