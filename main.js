const number = Number(prompt("یک عدد بین 1 تا 10 حدس بزن "));
function guessing() {
  const x = 8;

  if (number <= 0 || number >= 10) {
    alert("عدد باید بین 0تا 10 باشد ");
    // message.style.color = "red";
    return;
  } else {
    if ((number = x)) {
      alert("درست حدس زدید ");
      // message.style.color = "gold";
      return;
    } else {
      alert("اشتباه حدس زدید دوباره امتحان کنید ");
      return;
    }
  }
}
