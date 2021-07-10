@@include('files/clientLogic.js', {});
@@include('files/forms.js', {});
@@include('files/scroll.js', {});
//@@include('files/dynamicAdaptive.js', {});

//========================================================================================================================================================

const searchButton = document.querySelector('.header__search-icon');
const searchIcon = document.querySelector('.icon-search');
const searchInput = document.querySelector('.header__input');

window.onload = function () {

   body_lock();

   setTimeout(function () {
      const preloader = document.querySelector('.preloader');
      preloader.style.display = 'none';
      body_lock_remove();
   }, 3000);

   document.addEventListener('click', function (e) {
      const currentClick = e.target;

      if (currentClick === searchButton || currentClick === searchInput || currentClick === searchIcon) {
         searchInput.classList.add('_active');
      } else {
         searchInput.classList.remove('_active');
      }
   });

}

new WOW().init();
