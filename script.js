let openModal = document.getElementById('openModal');
let modal = document.querySelector('.modal');
let closeModal = document.querySelector('.close-modal');

// add event listener to openModal
openModal.addEventListener('click', function() {
  modal.style.display = 'block';
});

// add event listener to closeModal
closeModal.addEventListener('click', function() {
  modal.style.display = 'none';
});

// add event listener to modal
modal.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});