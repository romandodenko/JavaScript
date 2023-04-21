const photoVideoInit = document.querySelector(".photo-video");

if (photoVideoInit) { // проверка если ли элемент и тогда срабатывает код. нужно чтобы не было ошибок на страницах где отсутствует данный элемент

  async function getData() { // принимаем бд
    const response = await fetch('../../json/json.json');
    const data = await response.json();
    return data;
  }

  async function photoVideoInitFun() {
    const postsData = await getData();

    let currentPage = 1; // активная страница
    let rows = 6; // сколько строк отображается

    function displayList(arrData, rowPerPage, page) {
      const postsEl = document.querySelector('.photo-video__list'); // при переключение пагинации, удаляем все элементы, потом добавляем новые
      postsEl.querySelectorAll("li").forEach(function (e) {
        e.remove()
      })
      page--; // чтобы ходить по страницам


      const start = rowPerPage * page; // стартовая страница
      const end = start + rowPerPage; // последняя страница
      const paginatedData = arrData.slice(start, end); // обрезает элементы на странице которая активна

      paginatedData.forEach((el) => {
        if (el.video) { // если в бд есть видео, то вставляем элемент
          let template = `
          <li class="photo-video__wrapper-el">
            <div class="photo-video__el">
              <video src=${el.video} preload="none" controls muted playsinline width="100"
                height="100"></video>
            </div>
            <strong class="photo-video__subtitle">
                ${el.name}
            </strong>
          </li>
          `;
          postsEl.insertAdjacentHTML("beforeend", template);
        }
        if (el.image) { // если в бд есть картинка, то вставляем элемент
          let template = `
          <li class="photo-video__wrapper-el">
          <div class="photo-video__el">
                <picture>
                  <source media="(min-width: 320px)"
                    srcset=${el.imageWebp} type="image/webp">
                  <img src=${el.image} loading="lazy"
                    width="300" height="300" alt="Картинка">
                </picture>
                <span class="photo-video__see"><span>Посмотреть</span></span>
            </div>
            <strong class="photo-video__subtitle">
              ${el.name}
            </strong>
          </li>
          `;
          postsEl.insertAdjacentHTML("beforeend", template);
        }
      })
    }

    function displayPagination(arrData, rowPerPage) {
      const paginationEl = document.querySelector('.photo-video-pagination'); // оболочка пагинации
      const pagesCount = Math.ceil(arrData.length / rowPerPage); // округляем до ближайшего большего целого числа
      const ulEl = document.createElement("div"); // создаем оболочку где будут лежать пагинации
      ulEl.classList.add('photo-video-pagination__list'); // даем класс

      for (let i = 0; i < pagesCount; i++) { // вставляем пагинацию через цикл
        const liEl = displayPaginationBtn(i + 1);
        ulEl.appendChild(liEl)
      }
      paginationEl.appendChild(ulEl)
    }

    function displayPaginationBtn(page) {
      const liEl = document.createElement("a"); // создаем саму пагинацию
      liEl.classList.add('photo-video-pagination__item'); // даём класс
      liEl.setAttribute("href", "#photoVideo"); // для того чтобы при переключение поднималось к верху страницы
      liEl.innerText = page; // номер страницы пагинации

      if (currentPage == page) liEl.classList.add('active-pagination');

      liEl.addEventListener('click', () => {
        currentPage = page
        displayList(postsData, rows, currentPage)

        let currentItemLi = document.querySelector('a.active-pagination');
        currentItemLi.classList.remove('active-pagination');

        liEl.classList.add('active-pagination');

      })

      return liEl;
    }

    displayList(postsData, rows, currentPage);
    displayPagination(postsData, rows);

  }

  photoVideoInitFun();
}