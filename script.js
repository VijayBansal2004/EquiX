// let handburger = document.getElementById("handburger");
// let navList = document.getElementsByClassName("nav-list");
// let icon = document.getElementById("icon");
// // let zindex = document.getElementById("displaynone");

// handburger.classList.toggle("display-none");

// handburger.addEventListener("click", () => {
//   navList.classList.toggle("display-flex");
//   icon.classList.toggle("fa-bars");
//   icon.classList.toggle("fa-xmark");
//   icon.classList.toggle("red");
//   displaynone.classList.toggle("none");
// });
let handburger = document.querySelector(".handburger");
let nav_right = document.querySelector(".nav-right");
let fa_bars = document.querySelector(".fa-bars");
let navigation_btn_clicked1 = document.querySelector(".nav-link1");
let navigation_btn_clicked2 = document.querySelector(".nav-link2");
let navigation_btn_clicked3 = document.querySelector(".nav-link3");
let navigation_btn_clicked4 = document.querySelector(".nav-link4");
let navigation_btn_clicked5 = document.querySelector(".nav-link5");
let navigation_btn_clicked6 = document.querySelector(".nav-link6");
// fa_bars.classList.toggle("fa-xmark");

fa_bars.addEventListener("click", () => {
  nav_right.classList.toggle("active");
  fa_bars.classList.toggle("fa-xmark");
});

navigation_btn_clicked1.addEventListener("click", () => {
  nav_right.classList.toggle("active");
  fa_bars.classList.toggle("fa-xmark");
});
navigation_btn_clicked2.addEventListener("click", () => {
  nav_right.classList.toggle("active");
  fa_bars.classList.toggle("fa-xmark");
});
navigation_btn_clicked3.addEventListener("click", () => {
  nav_right.classList.toggle("active");
  fa_bars.classList.toggle("fa-xmark");
});
navigation_btn_clicked4.addEventListener("click", () => {
  nav_right.classList.toggle("active");
  fa_bars.classList.toggle("fa-xmark");
});
navigation_btn_clicked5.addEventListener("click", () => {
  nav_right.classList.toggle("active");
  fa_bars.classList.toggle("fa-xmark");
});
navigation_btn_clicked6.addEventListener("click", () => {
  nav_right.classList.toggle("active");
  fa_bars.classList.toggle("fa-xmark");
});
