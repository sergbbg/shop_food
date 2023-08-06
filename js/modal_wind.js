
const modal = document.querySelector('.modal'),
      basketOpen = document.querySelector('.btn-order'),
      pickup = document.querySelector('.pickup'),
      basketAdress =document.querySelector('.basket_adress');
      dostavka = document.querySelector('.dost')

      
basketOpen.addEventListener('click', openModal);


modal.addEventListener('click', (e) => {
   if (e.target === modal || e.target.getAttribute('data-close') == "") {
       closeModal();
   }
});

document.addEventListener('keydown', (e) => {
   if (e.code === "Escape" && modal.classList.contains('show')) { 
       closeModal();
   }
});



function closeModal() {
   modal.classList.add('hide');
   modal.classList.remove('show');
   document.body.style.overflow = '';
}



function openModal() {
   modal.classList.add('show');
   modal.classList.remove('hide');
   document.body.style.overflow = 'hidden';
}


pickup.addEventListener('click', ()=>{
   basketAdress.classList.add('hide');
})

dostavka.addEventListener('click', ()=>{
   basketAdress.classList.remove('hide');
})