let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Generate computer choice
const computeChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

// Draw game
const drawGame = (userChoice, computerChoice) => {
    msg.innerText = `Draw! You chose ${userChoice} and Computer chose ${computerChoice}`;
    msg.style.background = "#667eea";
};

// Show winner
const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;

        msg.innerText = `🎉 You Win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.background = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;

        msg.innerText = `😢 You Lose! Computer's ${computerChoice} beats your ${userChoice}`;
        msg.style.background = "red";
    }
};

// Play game
const playGame = (userChoice) => {
    console.log("User Choice =", userChoice);

    const computerChoice = computeChoice();
    console.log("Computer Choice =", computerChoice);

    if (userChoice === computerChoice) {
        drawGame(userChoice, computerChoice);
        return;
    }

    let userWin = true;

    if (userChoice === "rock") {
        userWin = computerChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
        userWin = computerChoice === "scissors" ? false : true;
    } else {
        // userChoice === "scissors"
        userWin = computerChoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, computerChoice);
};

// Add click events
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked:", userChoice);

        playGame(userChoice);
    });
});