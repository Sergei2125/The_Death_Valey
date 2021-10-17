const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal__content");

modal.addEventListener("click", () => {
  modal.classList.remove("showModal");
  modalImg.setAttribute("src", "");
});

document
  .querySelector(".work__content")
  .addEventListener("click", function (event) {
    let targetImg = event.target;
    if (targetImg.tagName !== "IMG") {
      return;
    } else {
      modal.classList.add("showModal");
      modalImg.setAttribute("src", targetImg.src);
    }
  });

const form = document.querySelector(".form");

document.querySelector(".form").addEventListener("submit", (e) => {
  form.reset();
  e.preventDefault();
});
