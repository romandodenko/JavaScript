 // Открытие и закрытие бургера

 const menu = document.querySelector(".header__menu");

 document.addEventListener("click", function (e) {

   const elementInteractive = e.target;

   if (elementInteractive.closest(".burger")) { // Открытие и закрытие бургера
     menu.classList.add("active")
     document.body.style.overflow = "hidden";
   }
   if (elementInteractive.closest(".header__exit-menu")) { // Открытие и закрытие бургера 
     menu.classList.remove("active")
     document.body.style.overflow = "";
   }
   if (elementInteractive.closest(".nav__link")) { // Открытие и закрытие бургера
     menu.classList.remove("active")
     document.body.style.overflow = "";
   }
 })
  
 // Плагин загрузки изображений и видео

 // Примечание:
 // Если используется фоновая картинка у элемента внутри rd-upload, то добавляем элементу класс rd-background и аттрибут data-rd-image="картинка", должно получиться вот так:
 // <div class="rd-background" data-rd-image="./img/image-1.jpg"></div>
 // Если используется фоновая картинка у элемента rd-upload, то элементу rd-upload добавляем класс rd-background и аттрибут data-rd-image="картинка", должно получиться вот так:
 // <section class="hero rd-upload rd-background" data-rd-image="./img/image-1.jpg"></section>
 //  ----
 //  Если нужно вставить картинку с помощью picture, то используем следующую разметку:
 // <picture>
 //<source media="(min-width: 991px)" srcset="" type="image/webp" data-rd-image="./img/picture-1.jpg">
 //<source media="(min-width: 601px)" srcset="" type="image/webp" data-rd-image="./img/picture-2.jpg">
 //<source media="(max-width: 600px)" srcset="" type="image/webp" data-rd-image="./img/picture-3.jpg">
 //<img src="." width="337" height="337" alt="Плагин подгрузки изображений и видео">
 //</picture> 

 const rdUpload = document.querySelectorAll(".rd-upload");

 const body = document.body;

 if (rdUpload) {
   const options = {
     root: null,
     rootMargin: '0px',
     threshold: 0,
   }

   const callback = function (entries, observer) {

     entries.forEach(entry => {
       const elementEntry = entry.target;
       if (entry.isIntersecting) {

         if (!elementEntry.classList.contains("rd-load")) {
           elementEntry.classList.add("rd-load");

           let rdUploadBackgroundImage = elementEntry.querySelectorAll(".rd-background");

           let rdUploadImage = elementEntry.querySelectorAll("img");

           let rdUploadVideo = elementEntry.querySelectorAll("video");

           let rdUploadPicture = elementEntry.querySelectorAll("picture");

           if (elementEntry.classList.contains("rd-background")) {

             let elementEntryBackgroundImageDataImage = elementEntry.dataset.rdImage;
        
             elementEntry.style.backgroundImage = `url(${elementEntryBackgroundImageDataImage})`;

           }

           if (rdUploadBackgroundImage) {
             rdUploadBackgroundImage.forEach(function (rdUploadBackgroundImage) {

               let rdUploadBackgroundImageDataImage = rdUploadBackgroundImage.dataset.rdImage;
 
               rdUploadBackgroundImage.style.backgroundImage = `url(${rdUploadBackgroundImageDataImage})`;

             })
           }

           if (rdUploadImage) {
             rdUploadImage.forEach(function (rdUploadImage) {

               if (!rdUploadImage.closest("picture")) {
                 let rdUploadImageDataImage = rdUploadImage.dataset.rdImage;
     
                 rdUploadImage.setAttribute("src", `${rdUploadImageDataImage}`);
               }

             })
           }

           if (rdUploadPicture) {
             rdUploadPicture.forEach(function (rdUploadPicture) {

               let rdUploadPictureSource = rdUploadPicture.querySelectorAll("source");

               rdUploadPictureSource.forEach(function (rdUploadPictureSource) {

                 let rdUploadPictureSourceImage = rdUploadPictureSource.dataset.rdImage;
    
                 rdUploadPictureSource.setAttribute("srcset", `${rdUploadPictureSourceImage}`);

               })

             })
           }

           if (rdUploadVideo) {
             rdUploadVideo.forEach(function (rdUploadVideo) {

               let rdUploadVideoDataVideo = rdUploadVideo.dataset.rdVideo;
               let rdUploadVideoDataImage = rdUploadVideo.dataset.rdImage; 

               rdUploadVideo.setAttribute("src", `${rdUploadVideoDataVideo}`);

               rdUploadVideo.setAttribute("poster", `${rdUploadVideoDataImage}`);

             })
           }
         }

       }

     })

   }

   const observer = new IntersectionObserver(callback, options);

   rdUpload.forEach(i => {
     observer.observe(i);
   })
 }