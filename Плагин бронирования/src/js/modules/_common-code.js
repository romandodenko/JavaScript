// Что есть в данном файле:
//  1) Проверка элеметов в родителе
//  2) Кастомная фракция пагинации в слайдере
//  3) Плавный переход к началу страницы при нажатии на кнопку
//  4) При ховере появляется скрытый элемент
//  5) Закрытие при нажатии вне элемента
//  6) Запуск видео
//  7) Копирует текст с инпута
//  8) Запрос на сервер при отправке формы   
//  9) Запрос на сервер при получение данных
//  10) Остановка работы функции
//  11) Запрещает писать в инпут опреденные элементы
//  12) Как проверить отправляется форма или нет
//  13) Таймер
//  14) Крутая фичы для интернет магазинов
//  15) Плавный переход к элементу через якорь
//  16) Анимация при появление элемента в экране или при определенном количестве пикселей до элемента
//  17) Ограничение символов для написания в инпут
//  18) Куки через функцию
//  19) Куки через localstorage

// Проверка элеметов в родителе. Данный код проверяет сколько в родителе элементов, и дается соответствующий класс

const itemsBlocks = document.querySelectorAll(".items__block"); // родитель

if (itemsBlocks.length) {
  itemsBlocks.forEach(itemsBlock => {
    const itemsBlocksItem = itemsBlock.querySelectorAll(".items__block-item").length; // элементы в родителе
    itemsBlock.classList.add(`items__block-item_${itemsBlocksItem}`); // соответствующий класс
  })
}

// Примерная структура кода в штмл

/* <div class="items">
<div class="items__block">
  <div class="items__block-item">
    dasdsdsdsdsasdsdaasdadsds
  </div>
  <div class="items__block-item">
    dasdsdsdsdsasdsdaasdadsds
  </div>
  <div class="items__block-item">
    dasdsdsdsdsasdsdaasdadsds
  </div>
  <div class="items__block-item">
    dasdsdsdsdsasdsdaasdadsds
  </div>
  <div class="items__block-item">
    dasdsdsdsdsasdsdaasdadsds
  </div>
</div>
<div class="items__block">
  <div class="items__block-item">
    dasdsdsdsdsasdsdaasdadsds
  </div>
  <div class="items__block-item">
    dasdsdsdsdsasdsdaasdadsds
  </div>
  <div class="items__block-item">
    dasdsdsdsdsasdsdaasdadsds
  </div>
  <div class="items__block-item">
    dasdsdsdsdsasdsdaasdadsds
  </div>
</div>
<div class="items__block">
  <div class="items__block-item">
    dasdsdsdsdsasdsdaasdadsds
  </div>
  <div class="items__block-item">
    dasdsdsdsdsasdsdaasdadsds
  </div>
  <div class="items__block-item">
    dasdsdsdsdsasdsdaasdadsds
  </div>
</div>
</div> */

// Данный код проверяет сколько в родителе элементов, и даем соответствующий класс

// ===================================================================================================================================================

// Кастомная фракция пагинации в слайдере. Данный код делает кастомную фракцию пагинации в свайпере

// Классы меняются на свои , так же кнопки вперед назад меняют числа в кастомной фракции

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  spaceBetween: 0,
  // loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  on: {
    init: function (swiper) {
      const allSliders = document.querySelector(".num_last");
      // const allSlides = document.querySelectorAll(".swiper-slide:not(.swiper-slide-duplicate)"); // при активном loop для корректного изображения числа в num_last используется такой метод 
      // allSliders.innerHTML = allSlides.length < 10 ? `0${allSlides.length}` : allSlides.length;
      allSliders.innerHTML = swiper.slides.length < 10 ? `0${swiper.slides.length}` : swiper.slides.length;
    },
    slideChange: function (swiper) {
      const currentSlider = document.querySelector(".num_current");
      currentSlider.innerHTML = swiper.activeIndex + 1 < 10 ? `0${swiper.activeIndex + 1}` : swiper.activeIndex + 1; // если нужно чтобы был включен loop , использовать вместо activeIndex realIndex
      console.log(swiper)
    },
  },
});

/* <div class="swiper">
<div class="swiper-wrapper">
  <div class="swiper-slide">Slide - 1</div>
  <div class="swiper-slide">Slide - 2</div>
  <div class="swiper-slide">Slide - 3</div>
</div>
<div class="swipper-controls">  
  <div class="swiper-pagination"></div>
  <div class="swiper__numbers">
    <span class="num_current">01</span>
    /
    <span class="num_last">0</span>
  </div>
</div>
</div> */

// Данный код делает кастомную фракцию пагинации в свайпере

// ===================================================================================================================================================

// Плавный переход к началу страницы при нажатии на кнопку. Скрипт позволяет при нажатии на кнопку перейти плавно к началу страницы

// const buttonUp = document.querySelector(".button-up ");

function top() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
buttonUp.addEventListener("click", function () {
  top()
})

/* <button class="button-up"></button> */

// ===================================================================================================================================================

// При ховере появляется скрытый элемент

const b = document.querySelectorAll(".wrapper") // элемент на которой наводишься и должен появляться скрытый список
const e = document.querySelectorAll(".e"); // скрытый список

b.forEach(function (b) {
  b.addEventListener("mouseover", function () {
    b.querySelector('.e').classList.add("eeeeee") // если много элементов b то пишем так, код означает что данный класс будет даваться е, который находится во враппере на который навели а не у всех врапперов
  })
})
b.forEach(function (b) {
  b.addEventListener("mouseleave", function () {
    b.querySelector('.e').classList.remove("eeeeee")
  })
})
// ===================================================================================================================================================

// Закрытие при нажатии вне элемента

const btnMenu = document.querySelector(".btn");
const menu = document.querySelector(".menu");

function toggleMenu() {
  menu.classList.toggle("menu-active");
}

btnMenu.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener("click", function (e) {
  const target = e.target;
  const itsMenu = target == menu || menu.contains(target);
  const itsBtnMenu = target == btnMenu;
  const menuIsActive = menu.classList.contains("menu-active");

  if (!itsMenu && !itsBtnMenu && menuIsActive) {
    toggleMenu();
  }
});

// ===================================================================================================================================================

// Запуск видео

const btn = document.querySelector(".btn");
const video = document.querySelector(".video video");

btn.addEventListener("click", function () {
  video.play();
  video.setAttribute("controls", "controls");
  btn.classList.add("hidden")
})

// ===================================================================================================================================================

// Копирует текст с инпута copyText при нажатии на кнопку copyButton

const copyButton = document.querySelector(".copy-btn");

copyButton.addEventListener("click", function () {
  copyFunction()
})

function copyFunction() {
  var copyText = document.querySelector(".copy-value");
  copyText.select();
  document.execCommand("copy");
}

// ===================================================================================================================================================

// Запрос на сервер при отправке формы   

const form = document.querySelector(".calculator-form"); // форма

const requestUrl = "https://jsonplaceholder.typicode.com/users"; // Для проверки работает всё или нет, выступает в качестве сервера

function sendRequest(method, url, body = null) {
  const headers = {
    'Content-Type': 'application/json',
  };

  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers,
  }).then(response => {
    return response.json()
  })

}

const body = { // то что передается
  carCost: form.querySelector(".cost-input").value,
  anInitialFee: form.querySelector(".installment-symm-input").value,
  leasingTerm: form.querySelector(".term-input").value,
  amountOfTheLeaseAgreement: form.querySelector(".calculator-form__payment").innerText,
  monthlyPaymentFrom: form.querySelector(".calculator-form__amount").innerText,
}

document.querySelector(".calculator-form__button").addEventListener("click", function (e) { // кнопка формы при которой передается информация
  e.preventDefault()

  sendRequest("POST", requestUrl, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))
})

// Запрос на сервер при получение данных

function createNode(element) { // функция по созданию элемента
  return document.createElement(element);
}

function append(parent, el) { // функция для добавления элементов на страницу
  return parent.appendChild(el);
}

const ul = document.getElementById('authors'); // куда будут вставляться наши элементы
const url = 'https://randomuser.me/api/?results=10'; // здесь находится адрес откуда подтягиваются данные

fetch(url) // вызываем метод fetch
  .then((resp) => resp.json()) // Чтобы конвертировать возвращаемый объект в формат JSON, используем метод json(). Параметр resp принимает значение объекта, возвращаемого fetch(url). используем метод json(), чтобы конвертировать resp в данные JSON:
  .then(function (data) { // включаем метод промиса метод fetch() возвращает промис. Если возвращается промис resolve, будет выполнена функция метода then(). Эта функция содержит код для обработки данных, получаемых от API.
    let authors = data.results; // создаем переменную с именем authors, принимающую значение data.results. results из конца url
    return authors.map(function (author) { // Для каждого автора в переменной authors нам нужно создать элемент списка, выводящий портрет и имя автора. Для этого отлично подходит метод map()
      let li = createNode('li'); // создаем элементы
      let img = createNode('img'); // создаем элементы
      let span = createNode('span'); // создаем элементы
      img.src = author.picture.medium; // возвращается объект. поэтому так обращаемся author.picture.medium 
      span.innerHTML = `${author.name.first} ${author.name.last}`; // возвращается объект. поэтому так обращаемся author.name.first , author.name.last
      append(li, img); // вставляем элементы
      append(li, span); // вставляем элементы
      append(ul, li); // вставляем элементы
    })
  })
  .catch(function (error) { // включаем метод catch() API, вызываемый с помощью метода fetch(), может не работать или на нем могут возникнуть ошибки. Если это произойдет, будет возвращен промис reject. Метод catch используется для обработки reject. Код метода catch() выполняется в случае возникновения ошибки при вызове выбранного API.
    console.log(error);
  });

// <ul id="authors"></ul> штмл

// ===================================================================================================================================================

// Остановка работы функции

document.addEventListener("click", function (e) {

  const targetElement = e.target;

  if (targetElement.closest(".popup__close")) {
    popup.classList.remove("popup-active")
    popup.classList.remove("popup-check")
    popupScroll = null; // Остановка работы функции
  }


})

function popupScroll() { // Функция
  if (popupCheck) {
    let coordY = Math.floor(scrollY);
    if (coordY >= 100) {
      popup.classList.add("popup-active")
    } else {
      popup.classList.remove("popup-active")
    }
  }
}

// ===================================================================================================================================================

// Запрещает писать в инпут опреденные элементы

const inputName = document.querySelector(".input-name");
let banNumber = /[0-9]/g; // Запрещает писать цифры
let banEnglishLetter = /[A-Za-zA]/g; // Запрещает писать английские буквы
let banLetter = /[A-Za-zA-Яа-яЁё]/g; // Запрещает писать все буквы
inputName.oninput = function () {
  // this.value = this.value.replace(banNumber,"")
  this.value = this.value.replace(banEnglishLetter, "")
}

// ===================================================================================================================================================

// Если нужно чтобы попап появлялся после того как пользователь перестанет скролить страницу. Попап появится через 4 секунды

let popupTimer, timeOut = 4000;

function displayPopup() {
  document.querySelector(".popup").classList.add("popup-active")
}

popupTimer = setTimeout(displayPopup, timeOut);

window.addEventListener("scroll", function (e) {
  clearTimeout(popupTimer);
  popupTimer = setTimeout(displayPopup, timeOut);
})

// ===================================================================================================================================================

// Как проверить отправляется форма или нет

function checkedFormSubmit() {

  // код, либо можно отправить форму на сервер

}

/* <form onsubmit="checkedFormSubmit();return false" class="form" action="#!" name="Форма расчёта" autocomplete="on" aria-label="Форма">

</form> */

// ===================================================================================================================================================

// Таймер

const blockTimer = document.querySelector(".block-timer"); // родитель
const numDay = document.querySelector(".num-day"); // число дней
const numHours = document.querySelector(".num-hours"); // число дней
const numMinutes = document.querySelector(".num-minutes"); // число дней
const numSeconds = document.querySelector(".num-seconds"); // число дней

if (blockTimer) {

  function timerSeconds() {
    if (numSeconds.innerHTML != 0) {
      numSeconds.innerHTML = numSeconds.innerHTML - 1

    } else if (numSeconds.innerHTML == 0) {
      if (numMinutes.innerHTML != 0) {
        numMinutes.innerHTML = numMinutes.innerHTML - 1
        numSeconds.innerHTML = 60
      }

    }
    if (numMinutes.innerHTML == 0) {
      if (numHours.innerHTML != 0) {
        numHours.innerHTML = numHours.innerHTML - 1
        numMinutes.innerHTML = 60
        numSeconds.innerHTML = 60
      }
    }
    if (numHours.innerHTML == 0) {
      if (numDay.innerHTML != 0) {
        numDay.innerHTML = numDay.innerHTML - 1
        numHours.innerHTML = 24
        numMinutes.innerHTML = 60
        numSeconds.innerHTML = 60
      }
    }
  }

  setInterval(timerSeconds, 1000)

}

// <section class="block-timer" style="background-image: url(./img/timer.png);">
//       <div class="block-timer__container container">
//    <div class="block-timer__content">
//     <div class="block-timer-top">
//     <p class="block-timer-top__text">
//       LIMITED OFFER
//     </p>
//     </div>
//     <div class="block-timer-middle">
//       <p class="block-timer-middle__text">
//         <span>GET UP TO</span> 100$ FREE BET
//       </p>
//       <ul class="block-timer__list">
//         <li class="block-timer__item">
//           <p class="block-timer__num num-day">
//      1
//           </p>
//           <p class="block-timer__day">
//             Day
//           </p>
//         </li>
//         <li class="block-timer__item block-timer__item_width">
//           <p class="block-timer__num">
//             :
//           </p>
//         </li>
//         <li class="block-timer__item">
//           <p class="block-timer__num num-hours">
//        1
//           </p>
//           <p class="block-timer__day">
//             Hours
//           </p>
//         </li>
//         <li class="block-timer__item block-timer__item_width">
//           <p class="block-timer__num">
//             :
//           </p>
//         </li>
//         <li class="block-timer__item">
//           <p class="block-timer__num num-minutes">
//             1
//           </p>
//           <p class="block-timer__day">
//             Minutes
//           </p>
//         </li>
//         <li class="block-timer__item block-timer__item_width">
//           <p class="block-timer__num">
//             :
//           </p>
//         </li>
//         <li class="block-timer__item">
//           <p class="block-timer__num num-seconds">
//            60
//           </p>
//           <p class="block-timer__day">
//             Seconds
//           </p>
//         </li>
//       </ul>
//     </div>
//     <a class="block-timer__link" href="#!">
//       CLAIM FREE BET NOW
//     </a>
//    </div>
//       </div>
//     </section>

// ===================================================================================================================================================

// Крутая фичы для интернет магазинов. Супер круто сделанная фича. Выбираешь в каталоге (через чекбокс) товар, и он появляется над списком.

const catalogtags = document.querySelector(".catalog__tags");

document.addEventListener("click", function (e) {

  const elementInteractive = e.target;

  if (elementInteractive.closest(".catalog__checkbox")) {

    if (elementInteractive.closest(".catalog__checkbox").checked == true) {

      let tagValue = elementInteractive.closest(".catalog__label").querySelector(".catalog__span").innerHTML;

      let tagValueId = elementInteractive.closest(".catalog__label").querySelector(".catalog__checkbox").getAttribute("id");

      let template = `
        <div class="${tagValueId}">
          <div class="catalog__tag">
            <p class="catalog__tag-name">${tagValue}</p>
            <button class="catalog__tag-exit">x</button>
          </div>
        </div>
      `;

      catalogtags.insertAdjacentHTML("beforeend", template);
    } else {

      let tagValueId = elementInteractive.closest(".catalog__label").querySelector(".catalog__checkbox").getAttribute("id");

      document.querySelector(`.${tagValueId}`).remove();

    }

  }

  if (elementInteractive.closest(".catalog__tag-exit")) {

    let ele = elementInteractive.closest(".catalog__tag").querySelector(".catalog__tag-name").innerHTML;

    let catalogLabel = document.querySelectorAll(".catalog__label");

    catalogLabel.forEach(function (e) {

      if (e.querySelector(".catalog__span").innerHTML == ele) {
        e.querySelector(".catalog__checkbox").checked = false;
      }
    })

    elementInteractive.closest(".catalog__tag").parentNode.remove();

  }
})

/* <section class="catalog">
<div class="catalog__container container">
  <div class="catalog__left">
    <div class="catalog__label">
      <input class="catalog__checkbox" type="checkbox" id="element-one">
      <span class="catalog__figure"></span>
      <span class="catalog__span">Пункт номер 1</span>
    </div>
    <div class="catalog__label">
      <input class="catalog__checkbox" type="checkbox" id="element-two">
      <span class="catalog__figure"></span>
      <span class="catalog__span">Пункт номер 2</span>
    </div>
    <div class="catalog__label">
      <input class="catalog__checkbox" type="checkbox" id="element-third">
      <span class="catalog__figure"></span>
      <span class="catalog__span">Пункт номер 3</span>
    </div>
    <div class="catalog__label">
      <input class="catalog__checkbox" type="checkbox" id="element-four">
      <span class="catalog__figure"></span>
      <span class="catalog__span">Пункт номер 4</span>
    </div>
    <div class="catalog__label">
      <input class="catalog__checkbox" type="checkbox" id="element-five">
      <span class="catalog__figure"></span>
      <span class="catalog__span">Пункт номер 5</span>
    </div>
    <div class="catalog__label">
      <input class="catalog__checkbox" type="checkbox" id="element-six">
      <span class="catalog__figure"></span>
      <span class="catalog__span">Пункт номер 6</span>
    </div>
  </div>
  <div class="catalog__right">
    <div class="catalog__tags"></div>
  </div>
</div>
</section> */

// .catalog {
//   font-family: Arial, Helvetica, sans-serif;
//   padding: 100px 0;

//   &__container {
//     display: flex;
//     gap: 20px;
//   }

//   &__left {
//     flex: 0 0 300px;
//   }

//   &__label {
//     position: relative;
//     display: flex;
//     gap: 10px;
//     align-items: center;

//     &:not(:last-child) {
//       margin-bottom: 50px;
//     }
//   }

//   &__checkbox {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     z-index: 5;
//     cursor: pointer;

//     &:checked {
//       &+.catalog__figure {
//         &::after {
//           opacity: 1;
//         }
//       }
//     }
//   }

//   &__figure {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex: 0 0 20px;
//     height: 20px;
//     border: 1px solid #000;

//     &::after {
//       content: "";
//       width: 10px;
//       height: 10px;
//       border-radius: 50%;
//       background-color: #000;
//       opacity: 0;
//       transition: opacity .3s ease;
//     }
//   }

//   &__span {
//     font-size: 16px;
//     line-height: 1.2;
//     color: #000;
//     font-weight: 400;
//   }

//   &__right {
//     flex: 0 1 100%;
//   }

//   &__tags {}

//   &__tag {
//     display: flex;
//     align-items: center;
//     gap: 5px;
//     background-color: bisque;
//     border-radius: 10px;
//     padding: 10px;
//   }

//   &__tag-name {
//     font-size: 14px;
//     line-height: 1.2;
//     color: #000;
//     font-weight: 400;
//   }

//   &__tag-exit {
//     font-weight: 700;
//     font-size: 10px;
//     line-height: 1;
//     color: #fff;
//     flex: 0 0 15px;
//     height: 15px;
//     background-color: #000;
//   }
// }

// https://romandodenko.github.io/site/sites/pet/sitdownpls/catalog.html - вот пример, если че можно просто вставить код и посмотреть че как

// ===================================================================================================================================================

// Плавный переход к элементу через якорь

// выбираем все ссылки на странице
const links = document.querySelectorAll('a[href^="#"]');
console.log(links)
// добавляем обработчик события на каждую ссылку
links.forEach(link => {
  link.addEventListener('click', function (event) {
    // отменяем стандартное поведение ссылки
    event.preventDefault();

    // получаем id элемента, на который ссылается якорь
    const id = this.getAttribute('href').substring(1);
    console.log(id + "qewq")
    // находим элемент на странице по id
    const element = document.getElementById(id);

    // вычисляем координаты элемента на странице
    const top = element.getBoundingClientRect().top + window.pageYOffset;

    // запускаем анимацию скролла к элементу
    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  });
});

// ===================================================================================================================================================

// Анимация при появление элемента в экране или при определенном количестве пикселей до элемента. Анимация если элемент попадается в поле зрения пользователя то даётся класс актив, можно менять ширину просмотра с помощью threshold, т.е получать класс раньше или позже

let observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("active")
      console.log(entry)
    } else {
      entry.target.classList.remove("active")
    }
  })
}, {
  threshold: 0,
})

document.querySelectorAll(".section").forEach(function (e) {
  observer.observe(e)
})

// .section {
//   width: 100%;
//   height: 1000px;
// }
// .section-1 {
//   background-color: red;
// }
// .section-2 {
//   background-color: bisque;
// }
// .title {
//   transform: translateY(-100px);
//   opacity: 0;
//   margin-bottom: 100px;
//   transition: opacity .3s linear, transform .3s linear;
// }
// .text {
//   transform: translateX(-100px);
//   opacity: 0;
//   transition: opacity .3s linear, transform .3s linear;
// }
// .section.active .title {
//   transform: translateY(0);
//   opacity: 1;
// }
// .section.active .text {
//   transform: translateX(0);
//   opacity: 1;
// }

/* <section class="section section-1">
<h1 class="title">
  Lorem, ipsum dolor.
</h1>
<p class="text">
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, impedit sunt quibusdam suscipit dignissimos quisquam recusandae autem rem molestias, expedita fugit consequatur totam corrupti, odio eos dolorum tempora veritatis fuga.
</p>
</section>
<section class="section section-2">
<h2 class="title">
  Lorem, ipsum dolor.
</h2>
<p class="text">
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, impedit sunt quibusdam suscipit dignissimos quisquam recusandae autem rem molestias, expedita fugit consequatur totam corrupti, odio eos dolorum tempora veritatis fuga.
</p>
</section> */

// ===================================================================================================================================================

// Анимация при появление элемента в экране или при определенном количестве пикселей до элемента. При  прокручивание скролом до 1200 пикселей высоты классу контейнер дается доп класс

const con = document.querySelector(".container");
document.addEventListener("scroll", function () {
  let pop = Math.floor(scrollY);
  console.log(pop)
  // console.log(`${scrollY}px`)
  if (pop >= 1200) {
    con.style.backgroundColor = "red"
  } else {
    con.style.backgroundColor = ""
  }
})

// const header = document.querySelector(".header");
// const headerContent = document.querySelector(".header__content")

// document.addEventListener("scroll", function () {
//   let checkingHeight = Math.floor(scrollY);

//   if (checkingHeight >= header.clientHeight) {
//     header.classList.add("header-scroll")
//     header.style.minHeight = `${headerContent.clientHeight}px`;
//   } else {
//     header.classList.remove("header-scroll")
//     header.style.minHeight = "";
//   }
// })

// ===================================================================================================================================================

// Анимация при появление элемента в экране или при определенном количестве пикселей до элемента. Можно делать анимацию , суть в том что если до родителя остается 600 пикселей то срабатывает код

document.addEventListener("scroll", function (e) {

  let scrollY = window.scrollY;

  let mapOffset = document.querySelector(".box").offsetTop;


  if (mapOffset <= scrollY + 600) {

    document.querySelector(".box").classList.add("active")

  } else {

    document.querySelector(".box").classList.remove("active")

  }
})

// ===================================================================================================================================================

// Анимация при появление элемента в экране или при определенном количестве пикселей до элемента. Можно сделать анимацию при скролле, помимо опасити можно использовать трансформ, и так далее

window.addEventListener("scroll", function () {
  let scrollY = window.scrollY; // возвращает число пикселей, на которое документ пролистали в данный момент по вертикали.

  let mapOffset = document.querySelector("#map").offsetTop; // родитель по которому будет срабатывать весь код когда до него останется 700 пикселей

  if (scrollY >= mapOffset - 700) {

    document.querySelectorAll(".modules-container-card").forEach(function (e) { // элементы в родителе, можно просто повешать на родителя

      const contentElement = document.querySelector("#map"); // родитель

      const windowHeight = window.innerHeight; // возвращает высоту элемента, включая внутренние отступы, в пикселях.

      const finalPosition = scrollY / (contentElement.offsetTop - windowHeight) * 0.3;

      const bigImageTranslate = 10 / 4.1 * finalPosition; // расчет с какой интенсивностью будет меняться число которое вставляется в опасити

      e.style.opacity = `${bigImageTranslate}`;

    })

  } else {

    document.querySelectorAll(".modules-container-card").forEach(function (e) {

      e.style.opacity = 0

    })

  }

})

// ===================================================================================================================================================

// Ограничение символов для написания в инпут

document.querySelectorAll(".wrapper-input__input").forEach(function (a) {
  a.oninput = function () {
    this.value = this.value.substr(0, 10);
  }
})

/* <input class="wrapper-input__input" type="number"> */

// ===================================================================================================================================================

// Куки через функцию

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
      name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
      "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function checkCookies() {
  let cookieNote = document.querySelector(".popup-active"); // элемент
  let cookieBtnAccept = cookieNote.querySelector(".popup__button"); // кнопка

  // Если куки cookies_policy нет или она просрочена, то показываем уведомление
  if (!getCookie("cookies_policy")) {
    cookieNote.classList.add("show");
  }

  // При клике на кнопку устанавливаем куку cookies_policy на один год
  cookieBtnAccept.addEventListener("click", function () {
    setCookie("cookies_policy", "true", 365);
    cookieNote.classList.remove("show");
  });
}

checkCookies();

// ===================================================================================================================================================

// Куки через localstorage

const popupId = document.querySelector(".popup").getAttribute("id"); // получается id попапа

const popupStorage = localStorage.getItem("popup"); // создаем ключ в localstorage в который будем помещать popup

if (popupStorage !== null) {

  const popupStorageParse = JSON.parse(popupStorage);

  if (popupStorageParse.indexOf(popupId) !== -1) {

    document.querySelector(".popup").classList.add("popup-disabled");

    setTimeout(localStorage.removeItem(popupId), 50000000) // 50000000 через сколько времени удаляется попап

  }
}

document.addEventListener("click", function (e) {

  const itemTarget = e.target;

  if (itemTarget.closest(".popup__btn")) {

    document.querySelector(".popup").classList.add("popup-disabled");

    localStorage.setItem("popup", JSON.stringify(popupId));

  }
})

// .popup {
//   position: fixed;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   z-index: 100;
//   transition: opacity .3s linear, visibility .3s linear;
// }

// .popup.popup-disabled {
//   display: none;
// }

// .popup__close {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, .5);
//   z-index: 1;
// }

// .popup__body {
//   position: relative;
//   z-index: 2;
//   background-color: #fff;
//   width: 600px;
//   padding: 30px 0;
// }

// .popup__text {
//   text-align: center;
//   font-size: 30px;
//   line-height: 1.3;
//   color: #000;
//   font-weight: 400;
//   margin-bottom: 30px;
// }

// .popup__btn {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 10px 20px;
//   background-color: #000;
//   font-weight: 400;
//   font-size: 20px;
//   line-height: 20px;
//   color: #fff;
//   width: fit-content;
//   min-width: 200px;
//   min-height: 60px;
//   margin: 0 auto;
//   cursor: pointer;
// }

/* <div class="popup" id="popup">
<div class="popup__close"></div>
<div class="popup__body">
  <p class="popup__text">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vel rem ullam ipsum dicta expedita quisquam pariatur, doloremque sed quasi. Accusantium soluta nesciunt alias excepturi aut nobis harum quas eius!
  </p>
  <button class="popup__btn">Click</button>
</div>
</div> */