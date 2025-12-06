const x = 2;
let attempts = 0;
let i;

while (i != x) {
  i = Number(prompt("یک عدد بین 0 تا 10 حدس بزن "));

  if (i <= 0 || i >= 10) {
    alert("عدد باید بین 0 تا 10 باشد ");
  } else {
    attempts++;
    if (i == x) {
      alert(`بعد از${attempts} تلاش درست حدس زدید `);

      break;
    } else if (i > x) {
      alert("حدس شما بزرگ تر از عدد مورد نظر  دوباره امتحان کنید ");
    } else {
      alert("حدس شما کوچک تر از عدد مورد نظر دوباره امتحان کنید ");
    }
  }
}
