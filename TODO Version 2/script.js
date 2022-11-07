const data = {
  tasks: [
    'Пройти курс по VUE',
    'Сделать интернет магазин на VUE',
  ]
};

function render() {
  const app = document.querySelector(".app");

  const template = `
  <h1 class="app__title">Список задач</h1>
  <div class="app__num">Количество задач: <span class="counter">${data.tasks.length}</span></div>
  <ul class="app__list">
  ${data.tasks.map(task => `<li class="app__item">${task}</li>`).join('')}
  </ul>
  <div class="app__form">
    <input class="app__input" type="text" name="" id="">
    <button type="button" class="app__button">Добавить</button>
  </div>
  `;

  app.innerHTML = template;

  const button = document.querySelector(".app__button");

  button.addEventListener("click", function () {
    const input = document.querySelector(".app__input");

    if (input.value !== "") {
      const taskMessage = input.value;
      input.value = "";

      data.tasks.push(taskMessage)

      render();
    }
  });
}

render()