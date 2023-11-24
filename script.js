const day0 = document.getElementById('day');
const month0 = document.getElementById('month');
const year0 = document.getElementById('year');

const day1 = document.getElementById('dd');
const month1 = document.getElementById('mm');
const year1 = document.getElementById('yy');

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit)

function validate() {
  const inputs = document.querySelectorAll("input");
  let errorMsg = true;

  inputs.forEach((i) => {
    const parent = i.parentElement;
    if (!i.value) {
      i.style.borderColor = "red";
      parent.querySelector("small").innerText = "this field is required.";
      errorMsg = false;
    } else if ((i === month0 && i.value > 12) || i.value <= 0) {
      month0.style.borderColor = "red";
      month0.parentElement.querySelector("small").innerText =
        "must be a value month.";
      errorMsg = false;
    } else if ((i === day0 && i.value > 31) || i.value <= 0) {
      day0.style.borderColor = "red";
      day0.parentElement.querySelector("small").innerText =
        "must be a value day.";
      errorMsg = false;
    } else {
      i.style.borderColor = "black";
      parent.querySelector("small").innerText = "";
    }
  });

  return errorMsg;
}

function handleSubmit(e) {
  e.preventDefault();

  if (validate()) {
    const day = parseInt(day0.value);
    const month = parseInt(month0.value);
    const year = parseInt(year0.value);

    const birthDay = new Date(year, month-1, day);

    const today = new Date;

    const currentDate = today - birthDay;

    const age = new Date(currentDate);

    const years = age.getFullYear() - 1970;
    const months = age.getMonth();
    const days = age.getDay();

    day1.innerText = days;
    month1.innerText = months;
    year1.innerText = years;
  }

}
