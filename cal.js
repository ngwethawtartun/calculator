const inputEl = document.querySelector(".input");
const resultEl = document.querySelector(".result");
const buttonKey = document.querySelectorAll("button");

buttonKey.forEach((key) => {
  key.addEventListener("click", calculate);
});
function calculate() {
  let btnText = this.innerText;

  if (btnText === "AC") {
    inputEl.innerText = "";
    resultEl.innerText = "0";
    return;
  }
  if (btnText === "=") {
    resultEl.textContent = eval(inputEl.innerText);
    return;
  }
  if (btnText === "%") {
   resultEl.textContent = (inputEl.innerText / 100);
   return;
 } 
  else {
    inputEl.textContent += btnText;
  }
}
