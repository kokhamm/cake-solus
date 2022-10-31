document.addEventListener("DOMContentLoaded", () => {
   let header = document.querySelector(".header-block");
   let menu = document.querySelector(".menu");
   window.onscroll = function () {
      scrollFunction()
   };
   function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
         header.classList.add('header-thin');
         menu.classList.add('thin');
      } else {
         header.classList.remove('header-thin');
         menu.classList.remove('thin');
      }
   }
});

document.addEventListener("DOMContentLoaded", () => {
   let button = document.querySelector(".header__button");
   let menu = document.querySelector(".menu");
   let body = document.body;
   button.addEventListener("click", function () {
      this.classList.toggle('pressed');
      menu.classList.toggle('show');
      body.classList.toggle('lock');
   })
}); 