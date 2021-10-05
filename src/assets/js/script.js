const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal__content");

document.querySelector(".modal").addEventListener("click", () => {
  modal.style.display = "none";
});

const target = document.querySelectorAll(".work__img");
target.forEach((element) => {
  element.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = element.src;
  });
});
