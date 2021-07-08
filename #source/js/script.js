@@include('files/clientLogic.js', {});
@@include('files/forms.js', {});
//@@include('files/dynamicAdaptive.js', {});

//========================================================================================================================================================

const searchIcon = document.querySelector('.header__search-icon');
const searchInput = document.querySelector('.header__input');

searchIcon.addEventListener("click", function(e) {
   searchInput.classList.toggle('_active');
});
