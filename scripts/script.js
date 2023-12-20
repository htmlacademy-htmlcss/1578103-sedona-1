const serchLinc = document.querySelector('.hotel-serch-link');
const modal = document.querySelector('.modal');
const CloseButton = document.querySelector('.modal-close-button');


serchLinc.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.remove('modal-close');
});

CloseButton.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.add('modal-close')
});
