const sports = document.getElementById("sports");
const myth = document.getElementsByName("myth");
const selected = Array.from(document.getElementsByClassName("btn"));
const selectedCat = 0;


for (select of selected){
    select.addEventListener("click", e => {
        const selectedChoice = e.target;
        const selectedCat = selectedChoice.dataset["number"];
        localStorage.setItem('cat', selectedCat);
        return window.location.assign("game.html");
    });
}
