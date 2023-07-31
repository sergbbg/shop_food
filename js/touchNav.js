///
const tabs = document.querySelectorAll('.nav__catalog__item'),
tabsParent = document.querySelector('.nav__catalog'),
tabsContent = document.querySelectorAll('.menu-osnova');


function hideTabContent() {
tabsContent.forEach(item => {
  item.classList.add('hide');
  item.classList.remove('show', 'fade');
});

tabs.forEach(item => {
  item.classList.remove('tabheader__item_active');
});

}

function showTabContent(i = 0) {
tabsContent[i].classList.add('show', 'fade');
tabsContent[i].classList.remove('hide');
tabs[i].classList.add('tabheader__item_active');
}
hideTabContent();
showTabContent();

tabsParent.addEventListener('click', (event) => {
const target = event.target;
console.log("Ffff");
if (target && target.classList.contains('nav__catalog__item')) {
  tabs.forEach((item, i) => {
    if (target == item) {
      hideTabContent();
      showTabContent(i);
    }
  });
}

});

let navMove = document.querySelector('.nav__catalog');
navMove.addEventListener('touchstart', (TouchEvent) => {
console.log("tyt")

let shiftX = 100;
console.log(shiftX);
document.addEventListener('touchmove', onMouseMove);
document.addEventListener('touchend', onMouseUp);

function onMouseMove(TouchEvent) {
  let newLeft = 200;
  console.log(newLeft)
  // курсор вышел из слайдера => оставить бегунок в его границах.
}

function onMouseUp() {
  document.removeEventListener('touchend', onMouseUp);
  document.removeEventListener('touchmove', onMouseMove);
}
}
);

///touchslider навигации 
const navSlider = document.querySelector('.nav-slider'),
navCatalog = document.querySelector('.nav__catalog'),
navItem = document.querySelectorAll('.nav__catalog__item'),
main = document.querySelector('.product'),
navWrapper = document.querySelector('.nav-wrapper');

// отслеживаем касание для перемещения списка навагицаии 
navCatalog.addEventListener('touchstart', function (event) {

// event.preventDefault(); // предотвратить запуск выделения (действие браузера)

let shiftX = event.touches[0].clientX - navCatalog.getBoundingClientRect().left;

document.addEventListener('touchmove', onMouseMove);
document.addEventListener('touchend', onMouseUp);

function onMouseMove(event) {

  let newLeft = event.touches[0].clientX - shiftX - navSlider.getBoundingClientRect().left;
  let rightEdge = main.offsetWidth - navSlider.offsetWidth;

  if (newLeft > rightEdge) {
    newLeft = rightEdge;
  }
  navCatalog.style.cssText = `transform: translateX(${newLeft + "px"})`;
}

function onMouseUp() {
  document.removeEventListener('touchend', onMouseUp);
  document.removeEventListener('touchmove', onMouseMove);
}
});


//отслеживаем окончание касание, для того чтоб первый и последний элемент вернуть 
//на прежнее местоположение с помощью изменения transform: translateX()
navCatalog.addEventListener('touchend', () => {
let Firstitem = navItem[0]; // получаем первый элемент списка
let lastItem = navItem[navItem.length - 1]; // получаем последний элемент

let coords = Firstitem.getBoundingClientRect(); //координаты первого эл-та
let coordsLast = lastItem.getBoundingClientRect(); //координаты второго эл-та

let x = Math.abs(coords.x) + window.innerWidth;

let y = navWrapper.clientWidth - window.innerWidth + 60;


if (coords.left > 20) {
  navCatalog.style.cssText = `transform: translateX(${"0px"})`;
} else if (x > navWrapper.clientWidth) {
  navCatalog.style.cssText = `transform: translateX(${-y + 'px'})`;
}

});

navCatalog.ondragstart = function () {
return false;
};