const input = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");
const cards = document.querySelectorAll(".card");
const studentName = document.querySelectorAll(".student-name strong");


function filterCard(){
    const text = input.value.toLowerCase().trim();

    cards.forEach((card, index) => {
        const name = studentName[index].textContent.toLowerCase().trim();
        card.style.display = name.includes(text) ? "" : "none";
    });
}

input.addEventListener("input", filterCard);
searchBtn.addEventListener("click", filterCard);
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        filterCard();
    }
});