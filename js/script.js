window.addEventListener('DOMContentLoaded', () => {

  //basket
  const cartWrapper = document.querySelector('.cart-wrapper');
  const basketEmpty = document.querySelector('.basket-empty');
  const basketWidnow = document.querySelector('.basket-widnow');

  let num = 1;
  window.addEventListener('click', function (event) {

    // проверка что клик в нужном места 
    if (event.target.hasAttribute('data-cart')) {



      let theTarget = event.target;

      // скрыть надпись "пока здесь пусто"
      basketEmpty.classList.add('hide');


      // сумируем цену добавленных элементов в корзину
      const card = event.target.closest('.menu-item');
      const price = card.querySelector('.price');
      const priceNumber = price.innerHTML;
      let s = priceNumber.replace(/[^0-9]/g,"");
      
      order_price(s);

      // делаем видимую нижную часть корзины
      document.querySelector('.basket_order').classList.remove('hide');
      
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

});


function order_price(Num){
  const order = document.querySelector('.order_price');
  let n = Number(order.innerHTML) + Number(Num);
  order.innerHTML =`${n}`;
}

