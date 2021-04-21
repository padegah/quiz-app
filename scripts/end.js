const username = document.getElementById("username")
const saveScoreBtn = document.getElementById("saveScoreBtn");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const finalScore = document.getElementById("finalScore");

finalScore.innerText = mostRecentScore;
const cat = localStorage.getItem("cat");

let sports = 21;
let myth = 20;

const sportsHighScores = JSON.parse(localStorage.getItem(sports)) || [];
const mythHighScores = JSON.parse(localStorage.getItem(myth)) || [];

const MAX_HIGH_SCORES = 5;

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
});


function saveHighScore(e){
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };

    if(cat === "21") {
        sportsHighScores.push(score);
        sportsHighScores.sort((a, b) => b.score - a.score);
        sportsHighScores.splice(MAX_HIGH_SCORES);
        localStorage.setItem(cat, JSON.stringify(sportsHighScores));
    } else if(cat === "20") {
        mythHighScores.push(score);
        mythHighScores.sort((a, b) => b.score - a.score);
        mythHighScores.splice(MAX_HIGH_SCORES);
        localStorage.setItem(cat, JSON.stringify(mythHighScores));
    }

    window.location.assign("index.html");
}