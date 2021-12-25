const navBtn = document.querySelector(".fa-bars");
const navContent = document.querySelector(".navContent");
const navUl = document.querySelector(".navUl");
const aboutbtn = document.querySelector(".about");
const seachPlayer = document.querySelector(".seachPlayer");
const loginPopUp = document.querySelector(".loginPopUp");
const loginDiv = document.querySelector(".loginDiv");
const loginBtn = document.querySelector(".login");
const userName = document.querySelector(".userName");
const Password = document.querySelector(".Password");
const logingBtn2 = document.querySelector(".logingBtn");
const signUpBtn = document.querySelector(".signUp");
const signUpBtn2 = document.querySelector(".signUp2");

navBtn.addEventListener("click", () => {
  navContent.classList.toggle("hide");
});

addEventListener("click", (e) => {
  console.log(e.target);
  if (
    e.target != navContent &&
    e.target != aboutbtn &&
    e.target != seachPlayer &&
    e.target != signUpBtn &&
    e.target != navBtn &&
    e.target != navUl
  ) {
    navContent.classList.add("hide");
  }
  if (
    e.target != userName &&
    e.target != Password &&
    e.target != logingBtn2 &&
    e.target != loginDiv &&
    e.target != signUpBtn2 &&
    e.target != loginBtn
  ) {
    loginPopUp.classList.add("hide");
  }
});

loginBtn.addEventListener("click", () => {
  loginPopUp.classList.remove("hide");
});

// loginPopUp.addEventListener("click", () => {
//   loginPopUp.classList.add("hide");
// });
