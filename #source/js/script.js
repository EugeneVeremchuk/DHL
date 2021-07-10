@@include('files/clientLogic.js', {});
@@include('files/forms.js', {});
@@include('files/scroll.js', {});
//@@include('files/dynamicAdaptive.js', {});

//========================================================================================================================================================

const searchButton = document.querySelector('.header__search-icon');
const searchIcon = document.querySelector('.icon-search');
const searchInput = document.querySelector('.header__input');

window.onload = function () {
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
