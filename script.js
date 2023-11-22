const newYear = document.getElementById('yy');
const newMonth = document.getElementById('mm');
const newDay = document.getElementById('dd');

const presentDay = document.getElementById('day');
const presentMonth = document.getElementById('month');
const presentYear = document.getElementById('year');

const btnSubmit = document.querySelector(".btn-submit");

const form = document.querySelector('form');
form.addEventListener('click', (e) => {
  e.preventDefault();

  const day = parseInt(presentDay.value);
  const month = parseInt(presentMonth.value);
  const year = parseInt(presentYear.value);

  const birthYear = new Date(year, month - 1, day);

  const currentDay = new Date;

  const currentAgeInMill = currentDay - birthYear;

  const ageDate = new Date(currentAgeInMill)

  const months = ageDate.getMonth();
  const years = ageDate.getFullYear();
  const days = ageDate.getDay();
  
  newDay.innerText = days;
  newMonth.innerText = years;
  newYear.innerText = years;
  console.log(day)
})













