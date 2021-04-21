const highScoresList = document.getElementById("highScoresList");

const cat = document.getElementById("category");

function getCategory(){
    const highScores = JSON.parse(localStorage.getItem(cat.value)) || [];
    highScoresList.innerHTML = highScores.map(score => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`;
    }).join("");
}

cat.addEventListener("change", getCategory);