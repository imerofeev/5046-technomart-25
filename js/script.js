

var contactPopup = document.querySelector('.modal-contact');
var contactFormContact = document.querySelector('.about-company-contacts-contact-form');
var contactForm = document.querySelector('.contact-form');

contactFormContact.addEventListener('click', function(evt) {
  evt.preventDefault();
  document.querySelector('.modal-contact').style.display='block';
  contactPopup.classList.add('modal-open');
});

var items = document.querySelectorAll('.item-buy');
for(var i = 0; i < items.length; ++i)
{
  items[i].addEventListener('click', function(evt) {
  evt.preventDefault();
  document.querySelector('.modal-basket-adding').style.display='block';
});
}

document.querySelector('.modal-close').onclick = function() {closeModal()};
function closeModal() {
  document.querySelector('.modal').style.display='none';
}
