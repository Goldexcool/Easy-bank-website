
const tuggleBtn = document.querySelector(".menu");
const btn = tuggleBtn.querySelector("i");
const dropmenu = document.querySelector(".dropmenu");

tuggleBtn.onclick = function () {
  dropmenu.classList.toggle("open");
  const isOpen = dropmenu.classList.contains("open");
  btn.classList.toggle("fa-bars", !isOpen);
  btn.classList.toggle("fa-x", isOpen);
};
