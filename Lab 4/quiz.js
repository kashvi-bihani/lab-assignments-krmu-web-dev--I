// Quiz Questions Array
const quizQuestions = [
    {
        question: "What is the largest continent in the world?",
        options: ["A) Asia", "B) Africa", "C) Australia", "D) Europe"],
        answer: "A",
        hint: "Have almost half of the world population."
    },
    {
        question: "What is the hardest Natural substance on Earth?",
        options: ["A) Iron", "B) Steal", "C) Diamond", "D) Stone"],
        answer: "C",
        hint: " Same material is used for making jewellery."
    },
    {
        question: "What is 12 + 7?",
        options: ["A) 22", "B) 23", "C) 20", "D) 19"],
        answer: "D",
        hint: "It is an odd no.."
    },
    {
        question: "Who wrote the national anthem of India?",
        options: ["A) Rabindranath Tagore", "B) Mahatma Gandhi", "C) Bankim Chandra", "D) APJ Abdul Kalam"],
        answer: "A",
        hint: "He also won the Nobel Prize in Literature."
    },
    {
        question: "Which is the fastest land animal?",
        options: ["A) Cheetah", "B) Tiger", "C) Lion", "D) Giraffe"],
        answer: "A",
        hint: "Animal with long tail and legs."
    }
];
function Timer(questionText, timeout = 6000) {
    return new Promise(resolve => {
        let answered = false;

        const response = prompt(questionText);
        answered = true;
        resolve(response);

        setTimeout(() => {
            if (!answered) {
                alert(" Time's up! Moving to next question.");
                resolve(null);
            }
        }, timeout);
    });
}
async function runQuiz() {
    let score = 0;

    alert(" Welcome to the Quiz!\nYou have 6 seconds per question.\nGood luck!");
    for (let i = 0; i < quizQuestions.length; i++) {

        let q = quizQuestions[i];

        let questionText =
            ${q.question}\n +
            q.options.join("\n") +
            "\n\nEnter your answer (A, B, C, or D):";

        let userAnswer = await Timer(questionText);

        if (!userAnswer) {
            alert( You skipped this question.\nCorrect answer: ${q.answer.toUpperCase()});
            continue;
        }
        let cleanedAnswer = userAnswer.toLowerCase().trim();
        if (cleanedAnswer === q.answer) {
            score++;
            alert("Correct! ");
        } else {
            alert(Wrong \nHint: ${q.hint}\nCorrect answer: ${q.answer.toUpperCase()});
        }
    }
    let feedback = "";
    if (score === quizQuestions.length) feedback = " Outstanding!";
    else if (score >= quizQuestions.length / 2) feedback = " Good job!";
    else feedback = "Keep practicing!";

    alert(Quiz Completed!\nYour final score: ${score} / ${quizQuestions.length}\n${feedback});

    let highScore = localStorage.getItem("highScore");
    if (!highScore || score > highScore) {
        localStorage.setItem("highScore", score);
        alert( New High Score: ${score});
    } else {
        alert(Your best score: ${highScore});
    }
    let restart = prompt("Do you want to play again? (yes/no)").toLowerCase().trim();
    if (restart === "yes") runQuiz();
}
runQuiz();