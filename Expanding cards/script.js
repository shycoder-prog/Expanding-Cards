
let cards = document.querySelectorAll(".card");
function activeClassRemover(){
  cards.forEach(element => {
    element.classList.remove("active")
  });
}


cards.forEach(card => {
  card.addEventListener("click", () => {
    activeClassRemover();
    card.classList.add("active");
  })
})






