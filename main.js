const number = Number(prompt("یک عدد بین 1 تا 10 حدس بزن ")).value;
function guessing() {
  const x = 8;

  if (number <= 0 || number >= 10) {
    message.textContent = "عدد باید بین 0تا 10 باشد ";
    message.style.color = "red";
    return;
  } else {
    if ((number = x)) {
      message.textContent = "درست حدس زدید ";
      message.style.color = "gold";
      return;
    } else {
      message.textContent = "اشتباه حدس زدید دوباره امتحان کنید ";
      return;
    }
  }
}
