const navList = document.getElementById('navbar__list');
const sections = Array.from(document.querySelectorAll('section'));

function CreateListItem() {
    for (sec of sections) {
        listItem = document.createElement('li');
        listItem.innerHTML = `<li><a herf='#${sec.id}' data-nav='${sec.id}' class='menu__link'>${sec.dataset.nav}</a></li>`
        navList.appendChild(listItem);
    }
}
CreateListItem();
//styling for the active states with getBoundingClientRect
window.onscroll = function() {
    document.querySelectorAll('section').forEach(function (active) {
      if (
        active.getBoundingClientRect().top >= -400 && 
        active.getBoundingClientRect().top <= 150
      ) {
        active.classList.add('your-active-class');
      } else {
        active.classList.remove('your-active-class');
      }
    });
};
// when clickng an item from the navigation menu, the link should scroll to
navList.addEventListener('click', (toSec) => {
    toSec.preventDefault();
    if (toSec.target.dataset.nav) {
        document
        .getElementById(`${toSec.target.dataset.nav}`)
        .scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
            location.hash = `${toSec.target.dataset.nav}`;
        }, 170);
    }
});