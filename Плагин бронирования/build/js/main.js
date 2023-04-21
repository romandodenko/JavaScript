"use strict"

window.onload = function () {

  const base = "../../json/base.json";

function blockBody() {
  document.body.style.overflow = 'hidden';
}

document.addEventListener("click", function (e) {

  const elementInteractive = e.target;

  const content = document.querySelector(".hotels__list");

  if (elementInteractive.closest(".plugin__button")) { // При нажатии на кнопку, происходит поиск отелей по данным из инпутов

    content.querySelectorAll(".hotels__item").forEach(function (e) {
      e.remove();
    })

    fetch(base) // вызываем метод fetch
      .then((resp) => resp.json())
      .then(function (data) {

        let base = data;

        let thisPlugin = elementInteractive.closest(".plugin");

        let arrivalDate = thisPlugin.querySelector('.arrival-date').value;

        let dateOfDeparture = thisPlugin.querySelector('.date-of-departure').value;

        let numberOfGuests = thisPlugin.querySelector('.number-of-guests').value;

        const hotels = document.querySelector(".hotels");

        hotels.style.display = 'block';

        base.forEach(function (base) {

          if (base.arrivalDate === arrivalDate && base.dateOfDeparture === dateOfDeparture && base.numberOfGuests === numberOfGuests) {

            let template = `
              <li class="hotels__item item-search">
                <div class="hotels__image">
                  <img src="${base.image}" loading="lazy" width="30" height="30" alt="Image">
                </div>
                <h3 class="hotels__name">
                  ${base.name}
                </h3>
                <p class="hotels__price">
                  ${base.price}
                </p>
                <button class="hotels__button">
                  Забронировать
                </button>
              </li> 
            `

            content.insertAdjacentHTML("beforeend", template);

          } 
          
          if (!content.querySelector(".item-search")) {

            if(!content.querySelector(".error-item")) {
              let template = `
              <li class="hotels__item error-item">
                <span class="hotels__icon">X</span>  
                <p class="hotels__error">
                  Ничего не найдено
                </p>
              </li> 
            `
            content.insertAdjacentHTML("beforeend", template);
            }

          } else {

            if(content.querySelector(".error-item")) {
              content.querySelector(".error-item").remove()
            }
          }

        })
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  if (elementInteractive.closest(".hotels__button")) {

    let form = document.querySelector(".form");

    let formInputNameHotel = form.querySelector(".name-hotel");

    let hotelsItem = elementInteractive.closest(".hotels__item");

    let hotelsNameHotel = hotelsItem.querySelector(".hotels__name");

    let hotelsNameHotelValue = hotelsNameHotel.innerHTML;

    formInputNameHotel.value = hotelsNameHotelValue;

    document.querySelector(".wrapper-form").classList.add("active");

    setTimeout(500, blockBody);
  }

  if (elementInteractive.closest(".wrapper-form__close")) {

    document.querySelector(".wrapper-form").classList.remove("active");

    document.querySelector(".wrapper-form__item-form").classList.remove("disabled")

    document.querySelector(".okay").classList.remove("active");

    document.body.style.overflow = '';

  }

  if (elementInteractive.closest(".wrapper-form__exit")) {

    document.querySelector(".wrapper-form").classList.remove("active");

    document.querySelector(".wrapper-form__item-form").classList.remove("disabled")

    document.querySelector(".okay").classList.remove("active");

    document.body.style.overflow = '';

  }

})

  // Календарь

if(document.body.clientWidth >= 1024) {
  new AirDatepicker('#item1', {});
  
  new AirDatepicker('#item2', {});
}
if(document.body.clientWidth <= 1024) {
  new AirDatepicker('#item1', {
    isMobile: true,
    autoClose: true,
  });
  
  new AirDatepicker('#item2', {
    isMobile: true,
    autoClose: true,
  });
}


// new AirDatepicker('#item1', {

// inline:true, // Для того, чтобы календарь был постоянно видимый, нужно его проинициализировать не на текстовом поле(инпут), или передать параметр inline:true

// view: 'months', // Для возможности выбора только месяца без конкретного числа, можно использовать комбинацию из опций view и minView - с помощью первой мы устанавливаем текущее представление календаря, а с помощью второй задаем минимально возможное представление.
// minView: 'months',
// dateFormat: 'MMMM yyyy',

// isMobile: true, // У Air Datepicker есть режим, который позволяет открывать календарь как модальное окно - в этом режиме он появляется по центру экрана в немного увеличенных размерах для облегчения выбора даты.
// autoClose: true, // Закрывает модальное окно при выборе даты, использовать вместе с isMobile

// position: 'bottom center', // Позиционирование

// range: true, // Позволяет выбирать две даты
// multipleDatesSeparator: ' - ', // Знак который разделяет диапазон дат

// timepicker: true, // Позволяет выбрать не только дату но и время

// onRenderCell({ // Можно вставить эмоджи 
//   date,
//   cellType
// }) {
//   let dates = [1, 5, 7, 10, 15, 20, 25], // Даты где ставятся эмоджи
//     emoji = ['💕', '😃', '🍙', '🍣', '🍻', '🎉', '🥁'], // Эмоджи 
//     isDay = cellType === 'day',
//     _date = date.getDate(),
//     shouldChangeContent = isDay && dates.includes(_date),
//     randomEmoji = emoji[Math.floor(Math.random() * emoji.length)];

//   return {
//     html: shouldChangeContent ? randomEmoji : undefined,
//     classes: shouldChangeContent ? '-emoji-cell-' : undefined,
//     attrs: {
//       title: shouldChangeContent ? randomEmoji : ''
//     }
//   }
// },

// buttons: ['today', 'clear'] // Можно добавлять кнопки, это уже предустановленные кнопки. Можно добавлять и свои

// locale: { // В данном календаре можео менять локализацию
//   days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
//   daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
//   daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
//   months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
//   monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//   today: 'Today',
//   clear: 'Clear',
//   dateFormat: 'MM/dd/yyyy',
//   timeFormat: 'hh:mm aa',
//   firstDay: 0
// },

// });

/* <input type="text" class="calendar" name="calendar" id="calendar"> */

  // ------------------------------------------------- Новое подключение
const form = document.querySelector(".form");

let formInputTel = form.querySelector("input[type='tel']");

let formMask = new Inputmask("+7 (999) 999-99-99");

formMask.mask(formInputTel);

const validator = new JustValidate('.form', {});

validator
  .addField('#nameUser', [{ // можно использовать классы вместо ид
      rule: 'required',
      errorMessage: 'Введите ваше имя',
    },
  ])
  .addField('#phoneUser', [{
      rule: 'required',
      errorMessage: 'Введите ваш телефон',
    },
    {
      rule: 'function',
      validator: function () {
        const phone = formInputTel.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Введите корректный телефон',
    },
  ])
  .onSuccess((event) => { // Если форма проходит валидацию то происходит код ниже
    let formData = new FormData(event.target);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {

          document.querySelector(".wrapper-form__item-form").classList.add("disabled");
          
          document.querySelector(".okay").classList.add("active");
          
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    event.target.reset();
  })

}