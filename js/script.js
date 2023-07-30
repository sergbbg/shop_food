window.addEventListener('DOMContentLoaded', () => {

  //basket
  const cartWrapper = document.querySelector('.cart-wrapper');
  const basketEmpty = document.querySelector('.basket-empty');
  const basketWidnow = document.querySelector('.basket-widnow');

  let num = 1;
  window.addEventListener('click', function (event) {

    if (event.target.hasAttribute('data-cart')) {

      let theTarget = event.target;
      // скрыть надпись "пока здесь пусто"
      basketEmpty.classList.add('hide');
const card = event.target.closest('.menu-item');

      const price = card.querySelector('.price');
      const priceNumber = price.innerHTML;
      let s = priceNumber.replace(/[^0-9]/g,"");
      console.log(s);
      order_price(s);



      
      const productInfo = {
        id: card.dataset.id,
        imgSrc: card.querySelector('.product-img').getAttribute('src'),
        title: card.querySelector('.item-title').innerText,
        weight: card.querySelector('.item-weight').innerText,
        price: card.querySelector('.price').innerText,
      }

      const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
      if (itemInCart) {
        const counterValue = itemInCart.querySelector('.items__current');
        let a = Number(counterValue.innerHTML);
        a++
        counterValue.innerHTML = a;
      } else {
        num = 1;
        const cartItemHTML =
          `
              <div class="cart-item" data-id="${productInfo.id}">
                <div class="cart-item__img">
                  <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
                </div>
                
                <div>
                  <div class="cart-text"> 
                    <h4>${productInfo.title}</h4>
                    <pclass="cart-text-weight">${productInfo.weight}</pclass=>
                    <p class="cart-text-bold">${productInfo.price}</p>
                  </div>  
                </div>
                
                <div class="items-basket items--small counter-wrapper">
										<div class="items__control basket-minus" data-action="minus" >-</div>
										<div class="items__current basket-count" id="counter-value" data-counter >1</div>
										<div class="items__control basket-plus" data-action="plus">+</div>
			          </div>

              </div>
            `

        cartWrapper.insertAdjacentHTML('afterbegin', cartItemHTML);
      }

    }
  })

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





  // const lo = document.querySelectorAll('.cart-text-bold');
  // var nameLengths = lo.map(function (name) {
  //   return name.length;
  // });

});





function order_price(Num){
  const order = document.querySelector('.order_price');
  let n = Number(order.innerHTML) + Number(Num);
  order.innerHTML =`${n}`;
}

