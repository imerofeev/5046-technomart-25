// Adding item in cart

var itemsBuy = document.querySelectorAll('.item-buy');
var buyPopup = document.querySelector(".modal-basket-adding");
var closePopup = buyPopup.querySelector(".modal-close");
var continueBuy = buyPopup.querySelector(".modal-basket-adding-continue-shopping");


for (var i = 0; i < itemsBuy.length; i++) {
  itemsBuy[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    buyPopup.classList.add("modal-show");
  });
}

closePopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  buyPopup.classList.remove("modal-show");
});

continueBuy.addEventListener("click", function (evt) {
  evt.preventDefault();
  buyPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (buyPopup.classList.contains("modal-basket-adding")) {
      buyPopup.classList.remove("modal-show");
    }
  }
});

// Open contact modal

var contactLink = document.querySelector(".about-company-contacts-contact-form");
var contactPopup = document.querySelector(".modal-contact");
var closePopup = document.querySelector(".modal-close");
var contactForm = document.querySelector(".modal-contact-form");
var userName = document.querySelector("[name=modal-contact-form-user]");
var userMassage = document.querySelector("[name=modal-contact-form-message]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("modal-contact-form-user");
} catch (err) {
  isStorageSupport = false;
}

if (contactLink) {
  contactLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    contactPopup.classList.add("modal-open");
    if (storage) {
      userName.value = storage;
      userMassage.focus();
    } else {
      userMassage.focus();
    }
  });
}

contactForm.addEventListener("submit", function (evt) {
  if (!userMassage.value || !userMailField.value) {
    evt.preventDefault();
    contactPopup.classList.remove("modal-error");
    contactPopup.offsetWidth = contactPopup.offsetWidth;
    contactPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("username", userMassage.value);
    }
  }
});

closePopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.remove("modal-open");
  contactPopup.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (contactPopup.classList.contains("modal-open")) {
      contactPopup.classList.remove("modal-open");
      contactPopup.classList.remove("modal-error");
    }
  }
});

// Open map modal

var mapLink = document.querySelector(".about-company-contacts-map-popup");
var mapPopup = document.querySelector(".modal-map");
var closePopup = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

closePopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-map")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});