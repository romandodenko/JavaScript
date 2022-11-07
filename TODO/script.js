const button = document.querySelector(".app__button");

button.addEventListener("click", function () {
  const input = document.querySelector(".app__input");
  if (input.value !== "") {
    const taskMessage = input.value;
    input.value = "";

    const task = `<li class="app__item">${taskMessage}</li>`;
    const list = document.querySelector(".app__list");
    list.innerHTML += task;

    const counter = document.querySelector(".counter");
    counter.innerHTML = list.querySelectorAll(".app__item").length;
  }

})