const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const counter = document.getElementById("counter");
let value = 0;

increaseBtn.addEventListener("click", () => {
  value++;
  counter.textContent = value;
})
decreaseBtn.addEventListener("click", () => {
  value--;
  counter.textContent = value;
})
resetBtn.addEventListener("click", () => {
  value = 0;
  counter.textContent = value;
})