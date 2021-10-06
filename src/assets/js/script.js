const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal__content");

document.querySelector(".modal").addEventListener("click", () => {
  modal.classList.remove("showModal");
});

document
  .querySelector(".work__content")
  .addEventListener("click", function (event) {
    let targetImg = event.target;

    if (targetImg.tagName != "IMG") return;

    modal.classList.add("showModal");
    modalImg.src = targetImg.src;
  });

const formName = document.querySelector(".form__input");
const formSubject = document.querySelector(".form__subject");
const formEmail = document.querySelector(".form__email");
const formMessage = document.querySelector(".form__message");

document.querySelector(".form__submit").addEventListener("click", () => {
  if (
    formName.value !== "" &&
    formSubject.value !== "" &&
    formEmail.value !== "" &&
    formMessage.value !== ""
  ) {
    formName.value = "";
    formSubject.value = "";
    formEmail.value = "";
    formMessage.value = "";
    alert("success");
  }
});
