const questions = [
    {
        description: "A condition involving persistent sadness, hopelessness, and loss of interest in activities.",
        answer: "Depression",
        choices: ["ADHD", "Anxiety", "Depression", "PTSD"]
    },
    {
        description: "A disorder involving excessive worry, fear, and physical symptoms like a fast heartbeat.",
        answer: "Anxiety",
        choices: ["Anxiety", "Depression", "OCD", "Bipolar Disorder"]
    },
    {
        description: "A disorder where someone experiences intrusive thoughts and repetitive behaviours.",
        answer: "OCD",
        choices: ["OCD", "ADHD", "PTSD", "Anxiety"]
    },
    {
        description: "A condition involving flashbacks, nightmares, and stress after a traumatic event.",
        answer: "PTSD",
        choices: ["PTSD", "Depression", "Bipolar Disorder", "OCD"]
    },
    {
        description: "A condition causing shifts between high energy moods and deep depression.",
        answer: "Bipolar Disorder",
        choices: ["Bipolar Disorder", "Anxiety", "ADHD", "PTSD"]
    }
];

let current = 0;

function loadQuestion() {
    const q = questions[current];

    document.getElementById("description").textContent = q.description;

    const choicesBox = document.getElementById("choices");
    choicesBox.innerHTML = "";

    q.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.classList.add("choice-btn");
        btn.textContent = choice;

        btn.onclick = () => checkAnswer(choice);

        choicesBox.appendChild(btn);
    });

    document.getElementById("result").textContent = "";
}

function checkAnswer(choice) {
    const result = document.getElementById("result");

    if (choice === questions[current].answer) {
        result.textContent = "Correct! 🎉";
        result.style.color = "green";
    } else {
        result.textContent = "Incorrect 😢";
        result.style.color = "red";
    }

    // Move to the next question after 1.5 seconds
    setTimeout(() => {
        current++;

        if (current >= questions.length) {
            endGame();
        } else {
            loadQuestion();
        }
    }, 1500);
}

function endGame() {
    document.getElementById("description").textContent = "You've completed the game!";
    document.getElementById("choices").innerHTML = "";
    document.getElementById("result").textContent = "";
}

window.onload = loadQuestion;
