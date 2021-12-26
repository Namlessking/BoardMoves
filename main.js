const navBtn = document.querySelector(".fa-bars");
const logo = document.querySelector(".logo");
const navContent = document.querySelector(".navContent");
const navUl = document.querySelector(".navUl");
const aboutbtn = document.querySelector(".about");
const seachPlayer = document.querySelector(".seachPlayer");
const loginPopUp = document.querySelector(".loginPopUp");
const loginDiv = document.querySelector(".loginDiv");
const loginBtn = document.querySelector(".login");
const loginBtnHiden = document.querySelector(".login2");
const userName = document.querySelector(".userName");
const Password = document.querySelector(".Password");
const logingBtn2 = document.querySelector(".logingBtn");
const signUpBtn = document.querySelector(".signUp");
const signUpBtnHiden = document.querySelector(".signUp3");
const signUpBtn2 = document.querySelector(".signUp2");
const bot = document.querySelector(".bot");
const pvp = document.querySelector(".pvp");

navBtn.addEventListener("click", () => {
  navContent.classList.toggle("hide");
});

addEventListener("click", (e) => {
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
    e.target != loginBtn &&
    e.target != loginBtnHiden
  ) {
    loginPopUp.classList.add("hide");
  }

  if (
    e.target === loginBtn ||
    e.target === loginBtnHiden ||
    e.target === bot ||
    e.target === pvp
  ) {
    console.log("click");
    loginPopUp.classList.remove("hide");
  }

  if (
    e.target === signUpBtn ||
    e.target === signUpBtn2 ||
    e.target === signUpBtnHiden
  ) {
    location.href = "signUp.html";
  }

  if (e.target === logo) {
    location.href = "index.html";
  }

  console.log(e.target);
});

// loginBtn.addEventListener("click", () => {
//   loginPopUp.classList.remove("hide");
// });

// console.log(loginBtnHiden);

// loginBtnHiden.addEventListener("click", () => {
//   loginPopUp.classList.remove("hide");
// });
