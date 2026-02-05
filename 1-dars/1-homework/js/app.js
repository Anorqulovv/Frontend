let elModalWrapper = document.querySelector(".modal-wrapper");
let elModalInner = document.querySelector(".modal-inner");
let directors = document.querySelectorAll(".director__items");

function handleMenuShow() {
  elModalWrapper.classList.add("show-wrapper");
  elModalInner.classList.add("show-inner");
}

function handleClose() {
  elModalWrapper.classList.remove("show-wrapper");
  elModalInner.classList.remove("show-inner");
}

directors.forEach((item) => {
  const originalHTML = item.innerHTML;

  item.addEventListener("click", (e) => {
    if (!e.target.classList.contains("directors__item-btn")) return;

    item.innerHTML = `
      <div class="background-card">
        <div class="director_card" style="display:block;">
          <div class="directors__item">
            <div class="card_item">
              <h3 class="directors__item-name">Aden Allan</h3>
              <p class="directors__item-work">
                “Empowered teams create truly amazing products. Set the north star and let them follow it.”
              </p>
              <div class="icons-card">
                <img src="./images/fasebook.svg" alt="icon">
                <img src="./images/twitor.svg" alt="icon">
              </div>
            </div>
            <button class="directors__item-btn close-btn">x</button>
          </div>
        </div>
      </div>
    `;

    const closeBtn = item.querySelector(".close-btn");
    closeBtn.addEventListener("click", (evt) => {
      evt.stopPropagation();
      item.innerHTML = originalHTML;
    });
  });
});

elModalWrapper.addEventListener(
  "click",
  (evt) => evt.target.id === "wrapper" && handleClose()
);
