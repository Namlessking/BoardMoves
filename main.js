const navBtn = document.querySelector(".fa-bars");
const navContent = document.querySelector(".navContent");
const navUl = document.querySelector(".navUl");
const aboutbtn = document.querySelector(".about");
const seachPlayer = document.querySelector(".seachPlayer");
const loginBtn = document.querySelector(".login");
const signUpBtn = document.querySelector(".signUp");
var x = document.getElementsByTagName("BODY")[0];

navBtn.addEventListener("click", () => {
  navContent.classList.toggle("hide");
});

addEventListener("click", (e) => {
  if (
    e.target != navContent &&
    e.target != aboutbtn &&
    e.target != seachPlayer &&
    e.target != loginBtn &&
    e.target != signUpBtn &&
    e.target != navBtn &&
    e.target != navUl
  ) {
    navContent.classList.add("hide");
  }
});
