// Cache the DOM
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score')
const computerScore_span = document.getElementById('computer-score')
const scoreBoard_div = document.querySelector('.score-board')
const result_p = document.querySelector(".result > p")

const rock_div = document.getElementById('rock')
const paper_div = document.getElementById('paper')
const scissors_div = document.getElementById('scissors')


rock_div.addEventListener('click', () => {
    game("r")
})

paper_div.addEventListener('click', () => {
    game("p")
})

scissors_div.addEventListener('click', () => {
    game("s")
})

function convertWord(letter) {
    if (letter === "r") return "Rock";
    if (letter == "p") return "Paper";
    return "Scissors"

}

function win(player, comp){
    userScore++;
    userScore_span.innerHTML = userScore;
    console.log(player, comp)
    result_p.innerHTML = `${convertWord(player)} beats ${convertWord(comp)}. You win!`
}

function lose(player, comp){
    computerScore++
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertWord(comp)} beats ${convertWord(player)}. You lose!`
}

function draw(player, comp){
    result_p.innerHTML = `It's a draw! You both picked ${convertWord(player)}`
}

function game(playerChoice){
    const choices = ['r', 'p', 's'];
    const compChoice = choices[Math.floor(Math.random() * 3)]
    console.log(`Player chose ${playerChoice}, Computer chose ${compChoice}`)
    switch(playerChoice + compChoice){
        case "rs":
        case "pr":
        case "sp":
            win(playerChoice, compChoice)
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(playerChoice, compChoice)
            break;
        case "pp":
        case "ss":
        case "rr":
            draw(playerChoice, compChoice)
            break;
    }
 }
