//gestion du menu en mode mobile

const burger = document.querySelector(".burger");
const menuItem = document.querySelectorAll(".menuItem");
const menu = document.querySelector(".menu");

burger.onclick = function () {
  menu.classList.toggle("openMenu");
  burger.classList.toggle("open");
};

menuItem.forEach((item) => {
  item.onclick = function () {
    menu.classList.remove("openMenu");
    burger.classList.toggle("open");
  };
});

// gestion de la validation du formulaire

const firstNameInput = document.querySelector("#firstName");
const firstNameError = document.querySelector(".firstNameError");
firstNameInput.addEventListener("input", () => {
  if (firstNameInput.value === "") {
    firstNameError.classList.add("active");
  } else {
    firstNameError.classList.remove("active");
  }
});

const lastNameInput = document.querySelector("#lastName");
const lastNameError = document.querySelector(".lastNameError");
lastNameInput.addEventListener("input", () => {
  if (lastNameInput.value === "") {
    lastNameError.classList.add("active");
  } else {
    lastNameError.classList.remove("active");
  }
});

const emailInput = document.querySelector("#email");
const emailError = document.querySelector(".emailError");
emailInput.addEventListener("input", () => {
  if (emailInput.value === "") {
    emailError.classList.add("active");
  } else {
    emailError.classList.remove("active");
  }
});

const messageInput = document.querySelector("#message");
const messageError = document.querySelector(".messageError");
messageInput.addEventListener("input", () => {
  if (messageInput.value === "") {
    messageError.classList.add("active");
  } else {
    messageError.classList.remove("active");
  }
});

const submitBtn = document.querySelector(".submitBtn");
const contactForm = document.querySelector("form");

async function submit(e) {
  e.preventDefault();
  if (firstNameInput.value === "") {
    firstNameError.classList.add("active");
  } else {
    firstNameError.classList.remove("active");
  }

  if (lastNameInput.value === "") {
    lastNameError.classList.add("active");
  } else {
    lastNameError.classList.remove("active");
  }
  const emailRegex = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;

  if (emailInput.value === "") {
    emailError.classList.add("active");
  } else if (emailRegex.test(emailInput.value) == false) {
    emailError.classList.add("active");
    emailError.textContent = "Ceci n'est pas une adresse mail valide.";
  } else {
    emailError.classList.remove("active");
  }

  if (messageInput.value === "") {
    messageError.classList.add("active");
  } else {
    messageError.classList.remove("active");
  }

  // envoi du formulaire via emailjs
  if (
    firstNameInput.value != "" &&
    lastNameInput.value != "" &&
    emailInput.value != "" &&
    emailRegex.test(emailInput.value) &&
    messageInput.value != ""
  ) {
    emailjs
      .sendForm("dirisdart", "template_783cvmj", contactForm, {
        machin: firstNameInput.value,
        truc: lastNameInput.value,
        bidule: emailInput.value,
        chose: messageInput.value,
      })
      .then(
        function () {
          document.getElementById("status-message").innerText =
            "Votre message a été envoyé avec succès.";
          contactForm.reset();
          setTimeout(() => {
            document.getElementById("status-message").innerText = "";
          }, 5000);
        },
        function (error) {
          document.getElementById("status-message").innerText =
            "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer plus tard.";
          console.log("FAILED...", error);
        }
      );
  }
}
contactForm.addEventListener("click", submit);


// gestion des cookies
document.addEventListener('DOMContentLoaded', function () {
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptCookiesButton = document.getElementById('accept-cookies');

  // Fonction pour vérifier si le cookie de consentement est déjà défini
  function checkCookieConsent() {
      const consent = getCookie('cookie_consent');
      if (!consent) {
          cookieBanner.style.display = 'flex';
      }
  }

  // Fonction pour obtenir la valeur d'un cookie par son nom
  function getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
  }

  // Fonction pour définir un cookie
  function setCookie(name, value, days) {
      const d = new Date();
      d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
      const expires = `expires=${d.toUTCString()}`;
      document.cookie = `${name}=${value}; ${expires}; path=/`;
  }

  // Gestionnaire d'événement pour le bouton "Accepter"
  acceptCookiesButton.addEventListener('click', function () {
      setCookie('cookie_consent_iris_art', 'true', 365);
      cookieBanner.style.display = 'none';
  });

  // Vérification initiale du consentement aux cookies
  checkCookieConsent();
});
