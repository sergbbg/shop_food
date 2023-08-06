// Добавляем прослушку на всем окне
window.addEventListener('click', function (event) {

   // Объявляем переменную для счетчика
   let counter;
 
   // Проверяем клик строго по кнопкам Плюс либо Минус
   if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
    
     // Находим обертку счетчика
     const counterWrapper = event.target.closest('.counter-wrapper');
     // Находим див с числом счетчика
     counter = counterWrapper.querySelector('[data-counter]');

   }
 
 // Проверяем является ли элемент по которому был совершен клик кнопкой Плюс
   if (event.target.dataset.action === 'plus') {
     counter.innerText = ++counter.innerText;

     const card = event.target.closest('.cart-item');
      const price = card.querySelector('.cart-text-bold');
      const priceNumber = price.innerHTML;
      let s = priceNumber.replace(/[^0-9]/g,"");
      
      order_price(s);
   }
 
 // Проверяем является ли элемент по которому был совершен клик кнопкой Минус
 if (event.target.dataset.action === 'minus') {
 
   // Проверяем чтобы счетчик был больше 1
   if (parseInt(counter.innerText) > 1) {
     // Изменяем текст в счетчике уменьшая его на 1
     counter.innerText = --counter.innerText;
    } 
    else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
     event.target.closest('.cart-item').remove();
   }

   const card = event.target.closest('.cart-item');
   const price = card.querySelector('.cart-text-bold');
   const priceNumber = price.innerHTML;
   let s = priceNumber.replace(/[^0-9]/g,"");
   
   order_price_minus(s);

 
 }
 
 });


 function order_price(Num){
  const order = document.querySelector('.order_price');
  let n = Number(order.innerHTML) + Number(Num);
  order.innerHTML =`${n}`;
}


function order_price_minus(Num){
  const order = document.querySelector('.order_price');
  let n = Number(order.innerHTML) - Number(Num);
  order.innerHTML =`${n}`;
}
