const innerGalleryInit = document.querySelector(".gal-init");

const innerGallery = document.querySelector(".wrapper-gallery"); // Оболочка самой галереи

const wrapperGalleryContent = document.querySelector(".wrapper-gallery__content"); // Оболочка галереи где лежат все картинки

const wrapperGalleryButtons = document.querySelectorAll(".wrapper-gallery__button"); // Общий класс кнопок

const wrapperGalleryNext = document.querySelector(".wrapper-gallery-next"); // Кнопка листающая фотографии вперед

const wrapperGalleryPrev = document.querySelector(".wrapper-gallery-prev"); // Кнопка листающая фотографии назад

const wrapperGallery = document.querySelector(".gal-init");

if(innerGalleryInit) {
  window.addEventListener("click", function (e) {

    const elementInteractive = e.target;
  
    if (elementInteractive.closest(".gallery-init")) { // Клик на кнопку которая инициализирует галерею

      const galleryInitWrapper = elementInteractive.closest(".gallery-wrapper-init");
  
      const galleryInitImgSrc = galleryInitWrapper.querySelector("img").getAttribute("src");

      const wrapperGalleryLength = wrapperGallery.querySelectorAll("img").length;

      const wrapperGalleryImg = wrapperGallery.querySelectorAll("img");
  
      if (wrapperGalleryLength != 0) { // Проверяем есть ли картинки, если они есть, то галерея инициализируется
  
        innerGallery.classList.add("active"); // Даем активный класс для оболочки галереи
  
        wrapperGalleryPrev.classList.add("disabled");
  
        if (wrapperGalleryLength > 1) { // Если картинок больше чем 1, то кнопкам дается активный класс
          wrapperGalleryButtons.forEach(function (e) {
            e.classList.add("active");
          })
        }
  
        wrapperGalleryImg.forEach(function (e) {
          let galleryImg = document.createElement("img"); // Создаем элемент img
          galleryImg.setAttribute("src", `${e.getAttribute("src")}`); // Добавляем атрибут src с картинкой
          galleryImg.setAttribute("width", "300"); // Добавляем атрибут ширины
          galleryImg.setAttribute("height", "300"); // Добавляем атрибут высоты
          galleryImg.setAttribute("loading", "lazy"); // Добавляем атрибут loading с медленной загрузкой
          galleryImg.setAttribute("alt", "Фотография из галереи"); // Добавляем атрибут alt с описанием
          wrapperGalleryContent.append(galleryImg); // Добавляем картинку в оболочку галереи где лежат картинки
        })

        wrapperGalleryContent.querySelectorAll("img").forEach(function(e) {
          let src = e.getAttribute("src");
          if(src === galleryInitImgSrc) {
            e.classList.add("gallery-active-photo");
            let galleryItemActive = document.querySelectorAll(".gallery-active-photo");
            if(galleryItemActive[0].previousElementSibling) {
              wrapperGalleryPrev.classList.remove("disabled");
            } else {
              wrapperGalleryPrev.classList.add("disabled");
            }
            if(galleryItemActive[0].nextElementSibling) {
              wrapperGalleryNext.classList.remove("disabled");
            } else {
              wrapperGalleryNext.classList.add("disabled");
            }
          }
        })
  
      }
  
    }
  
    if (elementInteractive.closest(".wrapper-gallery__exit")) { // Закрывает галерею по крестику
  
      innerGallery.classList.remove("active"); // Удаляет активный класс у галереи
  
      wrapperGalleryContent.querySelectorAll("img").forEach(function (e) { // Удаляем все картинки, тем самым очищаем галерею
        e.classList.remove("gallery-active-photo");
        e.remove();
      })
  
      wrapperGalleryButtons.forEach(function (e) { // Проходимся по кнопкам
        e.classList.remove("active"); // Удаляем класс у кнопок
        e.classList.remove("disabled"); // Удаляем класс у кнопок
      })
    }
  
    if (elementInteractive.closest(".wrapper-gallery__close")) { // Закрывает галерею при нажатии вне крестика
  
      innerGallery.classList.remove("active"); // Удаляет активный класс у галереи
  
      wrapperGalleryContent.querySelectorAll("img").forEach(function (e) { // Удаляем все картинки, тем самым очищаем галерею
        e.classList.remove("gallery-active-photo");
        e.remove();
      })
  
      wrapperGalleryButtons.forEach(function (e) { // Проходимся по кнопкам
        e.classList.remove("active"); // Удаляем класс у кнопок
        e.classList.remove("disabled"); // Удаляем класс у кнопок
      })
    }
  })
  
  wrapperGalleryNext.addEventListener("click", function () { // Листаем картинки вперед
    if (document.querySelector(".gallery-active-photo").nextElementSibling) { // Проверяем есть ли перед активным классом ещё элементы
      document.querySelector(".gallery-active-photo").nextElementSibling.classList.add("gallery-active-photo"); // Если есть, то даем этому элементу активный класс
      let galleryActivePhotoLength = document.querySelectorAll(".gallery-active-photo").length;
      let galleryActivePhotos = document.querySelectorAll(".gallery-active-photo");
      if (galleryActivePhotoLength > 1) {
        if (galleryActivePhotos[1].previousElementSibling) {
          galleryActivePhotos[1].previousElementSibling.classList.remove("gallery-active-photo");
          wrapperGalleryPrev.classList.remove("disabled");
        }
      }
      if (galleryActivePhotos[1].nextElementSibling) {
        wrapperGalleryNext.classList.remove("disabled");
      }
    } else { // Если перед активным классом нет элементов то кнопке которая листает слайды вперед дается отключающий класс, а кнопке которая листает назад, отключающий класс удаляется
      wrapperGalleryNext.classList.add("disabled");
      wrapperGalleryPrev.classList.remove("disabled");
    }
  })

  wrapperGalleryPrev.addEventListener("click", function () { // Листаем картинки назад
    if (document.querySelector(".gallery-active-photo").previousElementSibling) { // Проверяем есть ли перед активным классом ещё элементы
      document.querySelector(".gallery-active-photo").previousElementSibling.classList.add("gallery-active-photo"); // Если есть, то даем этому элементу активный класс
      let galleryActivePhotoLength = document.querySelectorAll(".gallery-active-photo").length;
      let galleryActivePhotos = document.querySelectorAll(".gallery-active-photo");
      if (galleryActivePhotoLength > 1) {
        if (galleryActivePhotos[0].nextElementSibling) {
          galleryActivePhotos[0].nextElementSibling.classList.remove("gallery-active-photo");
          wrapperGalleryNext.classList.remove("disabled");
        }
      }
      if (galleryActivePhotos[0].previousElementSibling) {
        wrapperGalleryPrev.classList.remove("disabled");
      }
    } else { // Если перед активным классом нет элементов то кнопке которая листает слайды назад дается отключающий класс, а кнопке которая листает вперед, отключающий класс удаляется
      wrapperGalleryPrev.classList.add("disabled");
      wrapperGalleryNext.classList.remove("disabled");
    }
  })
}