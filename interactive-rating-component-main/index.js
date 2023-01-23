const btns = document.querySelectorAll(".btn");
const submitBtn = document.querySelector(".submit-btn");
const mainContainer = document.querySelector(".container");
const thanksContainer = document.querySelector(".thanks-container");
const selectedNum = document.querySelector(".selected");

let valueNum;
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    valueNum = btn.dataset.id;
  });
});

submitBtn.addEventListener("click", () => {
  if (!valueNum) {
    return;
  }
  if (valueNum) {
    mainContainer.classList.add("hide");
    selectedNum.innerHTML = `You selected ${valueNum} out of 5`;
    thanksContainer.classList.remove("hide");
  }
});
