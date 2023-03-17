const initialEl = document.getElementById("initial");
const afterEl = document.getElementById("after");
const calculateBtn = document.getElementById("btn-calculate");
const resetBtn = document.getElementById("btn-reset");
const dateEl = document.getElementById("date");
const backBtn = document.getElementById("go_back");
const years = document.getElementById("year");
const months = document.getElementById("month");
const days = document.getElementById("day");
const hours = document.getElementById("hr");
const mins = document.getElementById("min");
const secs = document.getElementById("sec");

let date;
const handleCalculate = () => {
  date = new Date(dateEl.value);
  if (date) {
    initialEl.classList.add("hide");
    afterEl.classList.remove("hide");
    afterEl.classList.add("after");
  } else {
    initialEl.classList.remove("hide");
    afterEl.classList.add("hide");
    afterEl.classList.remove("after");
  }
  setInterval(() => {
    timeSpan();
  }, 1000);
};
const handleReset = () => {
  dateEl.value = null;
};
const handleBack = () => {
  initialEl.classList.remove("hide");
  afterEl.classList.add("hide");
  afterEl.classList.remove("after");
};

const timeSpan = () => {
  const currDate = new Date();
  const timeDiff = currDate - date;
  years.innerText = `${Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365))}`;
  months.innerText = `${
    Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30)) % 12
  }`;
  days.innerText = `${Math.floor(timeDiff / (1000 * 60 * 60 * 24)) % 30}`;
  hours.innerText = `${Math.floor(timeDiff / (1000 * 60 * 60)) % 24}`;
  mins.innerText = `${Math.floor(timeDiff / (1000 * 60)) % 60}`;
  secs.innerText = `${Math.floor(timeDiff / 1000) % 60}`;
};

calculateBtn.addEventListener("click", handleCalculate);
resetBtn.addEventListener("click", handleReset);
backBtn.addEventListener("click", handleBack);
