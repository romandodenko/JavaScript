"use strict"

window.onload = function () {

  const filterShowInit = document.querySelector(".filter");

if (filterShowInit) {
  function showCode(showBtn, itemsNum, collapseBtn, listItem, lists) {
    const show = document.querySelector(`.${showBtn}`);
    const collapse = document.querySelector(`.${collapseBtn}`);
    const itemsList = document.querySelectorAll(`.${listItem}`);
    const list = document.querySelector(`.${lists}`);
    const productsLength = itemsList.length;
    let items = itemsNum;
    show.addEventListener("click", function () {
      if (productsLength > (items - 3)) { 
        items += 3;
        const array = Array.from(list.children);
        const visibleItems = array.slice(0, items)
        visibleItems.forEach(function (visibleItems) {
          visibleItems.classList.add("is-visible")
        })
      } else {
        show.classList.remove("is-visible")
        collapse.classList.add("is-visible")
      }
    })

    collapse.addEventListener("click", function () {
      itemsList.forEach(function (it) {
        it.classList.remove("is-visible")
      })
      items = itemsNum;
      show.classList.remove("is-hidden")
      collapse.classList.remove("is-visible")
      if (productsLength > items) {
        show.classList.add("is-visible")
      }
    })
  }

  const base = "../../json/base.json";

  document.addEventListener("click", function (e) {

    const elementInteractive = e.target;

    if (elementInteractive.closest(".filter-block__search")) {

      const filter = document.querySelector(".filter");

      const filterList = document.querySelector(".filter-list");

      filterList.style.display = "grid";

      fetch(base) // вызываем метод fetch
        .then((resp) => resp.json())
        .then(function (data) {

          let base = data;

          let thisPlugin = elementInteractive.closest(".filter-block");

          let arrivalDate = thisPlugin.querySelector('.arrival-date').value;

          let dateOfDeparture = thisPlugin.querySelector('.date-of-departure').value;

          let numberOfGuests = thisPlugin.querySelector('.number-of-guests').value;

          filterList.querySelectorAll("li").forEach(function (e) {
            e.remove();
          })

          base.forEach(function (base) {

            if (base.arrivalDate === arrivalDate && base.dateOfDeparture === dateOfDeparture && base.numberOfGuests === numberOfGuests) {

              filter.querySelector(".filter__top").classList.add("filter-margin");

              let template = `
              <li class="filter-list__item item-search">
              <h3 class="filter-list__title title-v5">
                ${base.name}
              </h3>
              <div class="filter-list__image">
                <img src="${base.image}" loading="lazy" width="30" height="30" alt="Картинка">
              </div>
              <p class="filter-list__price title-v5">
              ${base.price}
              </p>
              <h4 class="filter-list__subtitle title-v14">
              ${base.title}
              </h4>
              <p class="filter-list__text text-v3">
              ${base.text}
              </p>
              <button class="filter-list__button button-v1" aria-label="Забронировать">
                <span>
                  <svg width="11" height="7">
                    <use xlink:href="./img/svg/sprites.svg#arrow"></use>
                  </svg>
                </span>
                <span>забронировать</span>
              </button>
            </li>
              `

              filterList.insertAdjacentHTML("beforeend", template);

            }

            if (!filterList.querySelector(".item-search")) {
              filter.querySelector(".filter__top").classList.add("filter-margin");
              filter.querySelector(".filter-list").classList.remove("filter-margin");
              if (!filter.querySelector(".filter-error-page")) {

                let template = `
                <div class="filter-error-page">
                <h2 class="filter-error-page__title title-v13">
                  Ничего не найдено
                </h2>
                <p class="filter-error-page__text text-v3">
                  Попробуйте изменить параметры поиска и попробовать снова
                </p>
                <span class="filter-error-page__icon">
                  <svg width="154" height="154">
                  <use xlink:href="./img/svg/sprites.svg#filter-error"></use>
                  </svg>
                </span>
              </div>
              `
                filter.insertAdjacentHTML("beforeend", template);
              }

            } else {

              if (filter.querySelector(".filter-error-page")) {

                filter.querySelector(".filter-error-page").remove();

              }
            }

            const itemSearchLength = document.querySelectorAll(".item-search").length;

            if (itemSearchLength > 6) {
              filter.querySelector(".filter-list").classList.add("filter-margin");
              document.querySelector(".wrapper-show-buttons__button_show").classList.add("is-visible");
              showCode("wrapper-show-buttons__button_show", 6, "wrapper-show-buttons__button_collapse", "filter-list__item", "filter-list");
            } else {
              filter.querySelector(".filter-list").classList.remove("filter-margin");
              document.querySelector(".wrapper-show-buttons__button_show").classList.remove("is-visible");
            }

          })
        })
        .catch(function (error) {
          console.log(error);
        });
    }

  })

}

  // Календарь

const filterInit = document.querySelector(".filter");

if (filterInit) {
  if (document.body.clientWidth >= 1024) {
    new AirDatepicker('#arrivalDate', {});

    new AirDatepicker('#dateOfDeparture', {});
  }
  if (document.body.clientWidth <= 1024) {
    new AirDatepicker('#arrivalDate', {
      isMobile: true,
      autoClose: true,
    });

    new AirDatepicker('#dateOfDeparture', {
      isMobile: true,
      autoClose: true,
    });
  }
}

}