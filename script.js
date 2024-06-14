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

function submit(e) {
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
    console.log("email invalide");
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

  const form = document.querySelector("form");
  if (
    firstNameInput.value != "" &&
    lastNameInput.value != "" &&
    emailInput.value != "" &&
    emailRegex.test(emailInput.value) &&
    messageInput.value != ""
  ) {
    alert("Votre message a bien été envoyé");
    form.reset();
  }
}
submitBtn.addEventListener("click", submit);
