'use strict';

// show languages on click
function showLanguages (){
  document.getElementById('dropdown').classList.toggle("show");
}

// hide languages when clicking anywhere else
window.onclick = function(event) {
if (!event.target.matches('.language-button')) {

  let dropdowns = document.getElementsByClassName("languages");
  let i;
  for (i = 0; i < dropdowns.length; i++) {
    let openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}
