const navBtn = document.querySelector(".fa-bars");
const navContent = document.querySelector(".navContent");

navBtn.addEventListener("click", ()=> {
    navContent.classList.toggle("hide");
})
